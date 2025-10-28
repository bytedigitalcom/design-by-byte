document.addEventListener("DOMContentLoaded", () => {
  function createByteDesignedElement() {
    const currentSiteUrl = window.location.hostname;
    const lang = document.documentElement.lang;

    const translations = {
      tr: {
        by: "tarafından",
        withShopify: "ile tasarlanmıştır.",
      },
      en: {
        by: "Designed by",
        withShopify: "with",
      },
      cs: {
        by: "Design od",
        withShopify: "využívá",
      },
      de: {
        by: "Entworfen von",
        withShopify: "mit",
      },
      nl: {
        by: "Ontworpen door",
        withShopify: "met",
      },
      fr: {
        by: "Conçu par",
        withShopify: "avec",
      },
      es: {
        by: "Diseñado por",
        withShopify: "con",
      },
      ar: {
        by: "صمم بواسطة",
        withShopify: "مع",
      },
      it: {
        by: "Progettato da",
        withShopify: "con",
      },
      ru: {
        by: "Разработанный",
        withShopify: "с помощью",
      },
    };

    const { by, withShopify } = translations[lang];

    const byteDesignedDiv = document.createElement("div");
    byteDesignedDiv.id = "byteDesigned";

    const paragraph = document.createElement("p");

    if (lang === "tr") {
      const byteLink = document.createElement("a");
      byteLink.href = `https://bytedigital.com/tr?utm_source=referral&utm_medium=https://${currentSiteUrl}&utm_campaign=reference`;
      byteLink.style.color = "#3e478c";
      byteLink.style.textDecoration = "none";
      byteLink.target = "_blank";
      byteLink.rel = "nofollow";
      byteLink.textContent = "Byte";

      const strong = document.createElement("strong");
      strong.appendChild(byteLink);

      const coloredDot = document.createElement("span");
      coloredDot.style.color = "#3EE8BB";
      coloredDot.style.textDecoration = "none";
      coloredDot.textContent = ".";

      strong.appendChild(coloredDot);

      paragraph.appendChild(strong);
      paragraph.appendChild(document.createTextNode(` ${by} `));

      const shopifyLink = document.createElement("a");
      shopifyLink.href = `https://bytedigital.com/tr/pages/shopify-yazilim?utm_source=referral&utm_medium=https://${currentSiteUrl}&utm_campaign=reference`;
      shopifyLink.style.textDecoration = "none";
      shopifyLink.style.color = "#9bce39";
      shopifyLink.target = "_blank";
      shopifyLink.rel = "nofollow";
      shopifyLink.textContent = "Shopify";

      paragraph.appendChild(shopifyLink);
      paragraph.appendChild(document.createTextNode(` ${withShopify}`));

      console.log(
        `%cByte%c.%c ${by} %cShopify %c${withShopify}`,
        'color: #3e478c; font-weight: bold;',
        'color: #3ee8bb;',
        'color: inherit;',
        'color: #9bce39; font-weight: bold;',
        'color: inherit;'
      );
    } else if (lang === "ar") {
      const shopifyLink = document.createElement("a");
      shopifyLink.href = `https://bytedigital.com/pages/shopify-development?utm_source=referral&utm_medium=https://${currentSiteUrl}&utm_campaign=reference`;
      shopifyLink.style.textDecoration = "none";
      shopifyLink.style.color = "#9bce39";
      shopifyLink.target = "_blank";
      shopifyLink.rel = "nofollow";
      shopifyLink.textContent = "Shopify";

      paragraph.appendChild(shopifyLink);
      paragraph.appendChild(document.createTextNode(` ${withShopify}`));

      paragraph.appendChild(strong);
      paragraph.appendChild(document.createTextNode(` ${by} `));

      const byteLink = document.createElement("a");
      byteLink.href = `https://bytedigital.com?utm_source=referral&utm_medium=https://${currentSiteUrl}&utm_campaign=reference`;
      byteLink.style.color = "#3e478c";
      byteLink.style.textDecoration = "none";
      byteLink.target = "_blank";
      byteLink.rel = "nofollow";
      byteLink.textContent = "Byte";

      const strong = document.createElement("strong");
      strong.appendChild(byteLink);

      const coloredDot = document.createElement("span");
      coloredDot.style.color = "#3EE8BB";
      coloredDot.style.textDecoration = "none";
      coloredDot.textContent = ".";

      console.log(
        `%cShopify %c${withShopify} %cByte%c. %c${by}`,
        'color: #9bce39; font-weight: bold;',
        'color: inherit;',
        'color: #3e478c; font-weight: bold;',
        'color: #3ee8bb;',
        'color: inherit;'
      );

    } else {
      paragraph.appendChild(document.createTextNode(`${by} `));

      const byteLink = document.createElement("a");
      byteLink.href = `https://bytedigital.com?utm_source=referral&utm_medium=https://${currentSiteUrl}&utm_campaign=reference`;
      byteLink.style.color = "#3e478c";
      byteLink.style.textDecoration = "none";
      byteLink.target = "_blank";
      byteLink.rel = "nofollow";
      byteLink.textContent = "Byte";

      const strong = document.createElement("strong");
      strong.appendChild(byteLink);

      const coloredDot = document.createElement("span");
      coloredDot.style.color = "#3EE8BB";
      coloredDot.style.textDecoration = "none";
      coloredDot.textContent = ".";

      strong.appendChild(coloredDot);

      paragraph.appendChild(strong);
      paragraph.appendChild(document.createTextNode(` ${withShopify} `));

      const shopifyLink = document.createElement("a");
      shopifyLink.href = `https://bytedigital.com/pages/shopify-development?utm_source=referral&utm_medium=https://${currentSiteUrl}&utm_campaign=reference`;
      shopifyLink.style.textDecoration = "none";
      shopifyLink.style.color = "#9bce39";
      shopifyLink.target = "_blank";
      shopifyLink.rel = "nofollow";
      shopifyLink.textContent = "Shopify";

      paragraph.appendChild(shopifyLink);

      console.log(
        `%c${by} %cByte%c. %c${withShopify} %cShopify`,
        'color: inherit;',
        'color: #3e478c; font-weight: bold;',
        'color: #3ee8bb;',
        'color: inherit;',
        'color: #9bce39; font-weight: bold;'
      );

    }

    byteDesignedDiv.appendChild(paragraph);


    document.querySelector(".design-by-byte").appendChild(byteDesignedDiv);
  }

  createByteDesignedElement();
});
