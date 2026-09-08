import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SNIPPET_FILENAME = "snippets/design-by-byte.liquid";

const MAIN_THEME_QUERY = `#graphql
  query MainTheme {
    themes(first: 1, roles: [MAIN]) {
      nodes {
        id
        name
        role
      }
    }
  }
`;

const THEME_FILES_UPSERT_MUTATION = `#graphql
  mutation ThemeFilesUpsert($themeId: ID!, $files: [OnlineStoreThemeFilesUpsertFileInput!]!) {
    themeFilesUpsert(themeId: $themeId, files: $files) {
      upsertedThemeFiles {
        filename
      }
      userErrors {
        field
        message
      }
    }
  }
`;

async function graphql(admin, query, variables) {
  const response = await admin.graphql(query, { variables });
  const json = await response.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map((error) => error.message).join("; "));
  }

  return json.data;
}

async function getSnippetBody() {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const snippetPath = resolve(currentDir, "../snippets/design-by-byte.liquid");

  return readFile(snippetPath, "utf8");
}

export async function getMainTheme(admin) {
  const data = await graphql(admin, MAIN_THEME_QUERY);
  const theme = data.themes.nodes[0];

  if (!theme) {
    throw new Error("Published Shopify theme could not be found.");
  }

  return theme;
}

export async function createDesignByByteSnippet(admin, options = {}) {
  const theme = options.themeId ? { id: options.themeId } : await getMainTheme(admin);
  const snippetBody = options.snippetBody ?? await getSnippetBody();
  const data = await graphql(admin, THEME_FILES_UPSERT_MUTATION, {
    themeId: theme.id,
    files: [
      {
        filename: SNIPPET_FILENAME,
        body: {
          type: "TEXT",
          value: snippetBody,
        },
      },
    ],
  });

  const userErrors = data.themeFilesUpsert.userErrors;

  if (userErrors.length) {
    throw new Error(
      userErrors
        .map((error) => `${error.field?.join(".") || SNIPPET_FILENAME}: ${error.message}`)
        .join("; "),
    );
  }

  return {
    themeId: theme.id,
    filename: data.themeFilesUpsert.upsertedThemeFiles[0]?.filename ?? SNIPPET_FILENAME,
  };
}

export { SNIPPET_FILENAME };
