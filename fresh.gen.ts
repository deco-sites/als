// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/api/cart/index.ts";
import * as $4 from "./routes/api/cart/items.ts";
import * as $5 from "./routes/api/products/index.ts";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/inspect-vscode.ts";
import * as $$0 from "./islands/AddToCart.tsx";
import * as $$1 from "./islands/ColorImages.tsx";
import * as $$2 from "./islands/Dropdown.tsx";
import * as $$3 from "./islands/ImageProduct.tsx";
import * as $$4 from "./islands/LiveControls.tsx";
import * as $$5 from "./islands/Minicart.tsx";
import * as $$6 from "./islands/ProductDetailsInfo.tsx";
import * as $$7 from "./islands/ProductInformation.tsx";
import * as $$8 from "./islands/ProductList.tsx";
import * as $$9 from "./islands/ProductListPresentation.tsx";
import * as $$10 from "./islands/SearchBar.tsx";
import * as $$11 from "./islands/SearchControls.tsx";
import * as $$12 from "./islands/Sidebar.tsx";
import * as $$13 from "./islands/Slider.tsx";
import * as $$$0 from "./sections/Banner.tsx";
import * as $$$1 from "./sections/BannerGrid.tsx";
import * as $$$2 from "./sections/BannerImg.tsx";
import * as $$$3 from "./sections/BrandBar.tsx";
import * as $$$4 from "./sections/Button.story.tsx";
import * as $$$5 from "./sections/CardGrid.tsx";
import * as $$$6 from "./sections/Carousel.tsx";
import * as $$$7 from "./sections/Footer.tsx";
import * as $$$8 from "./sections/Head.tsx";
import * as $$$9 from "./sections/Header.tsx";
import * as $$$10 from "./sections/HomeFilter.tsx";
import * as $$$11 from "./sections/IconCart.tsx";
import * as $$$12 from "./sections/ListLinks.tsx";
import * as $$$13 from "./sections/MarcasConvidadas.tsx";
import * as $$$14 from "./sections/Newsletter.tsx";
import * as $$$15 from "./sections/ProductDetails.tsx";
import * as $$$16 from "./sections/ProductGallery.tsx";
import * as $$$17 from "./sections/ProductListSection.tsx";
import * as $$$18 from "./sections/ProductShelf.tsx";
import * as $$$19 from "./sections/Reviews.tsx";
import * as $$$20 from "./sections/Search.tsx";
import * as $$$21 from "./sections/SearchControls.tsx";
import * as $$$22 from "./sections/Separator.tsx";
import * as $$$23 from "./sections/StoreFeatures.tsx";
import * as $$$24 from "./sections/SupportLinks.tsx";
import * as $$$25 from "./sections/vtexconfig.global.tsx";
import * as $$$$0 from "./functions/shopifyProductDetailsPage.ts";
import * as $$$$1 from "./functions/shopifyProductList.ts";
import * as $$$$2 from "./functions/shopifyProductListingPage.ts";
import * as $$$$3 from "./functions/vtexProductDetailsPage.ts";
import * as $$$$4 from "./functions/vtexProductList.ts";
import * as $$$$5 from "./functions/vtexProductListingPage.ts";
import * as $$$$6 from "./functions/vtexProductsListTab.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/api/cart/index.ts": $3,
    "./routes/api/cart/items.ts": $4,
    "./routes/api/products/index.ts": $5,
    "./routes/index.tsx": $6,
    "./routes/inspect-vscode.ts": $7,
  },
  islands: {
    "./islands/AddToCart.tsx": $$0,
    "./islands/ColorImages.tsx": $$1,
    "./islands/Dropdown.tsx": $$2,
    "./islands/ImageProduct.tsx": $$3,
    "./islands/LiveControls.tsx": $$4,
    "./islands/Minicart.tsx": $$5,
    "./islands/ProductDetailsInfo.tsx": $$6,
    "./islands/ProductInformation.tsx": $$7,
    "./islands/ProductList.tsx": $$8,
    "./islands/ProductListPresentation.tsx": $$9,
    "./islands/SearchBar.tsx": $$10,
    "./islands/SearchControls.tsx": $$11,
    "./islands/Sidebar.tsx": $$12,
    "./islands/Slider.tsx": $$13,
  },
  sections: {
    "./sections/Banner.tsx": $$$0,
    "./sections/BannerGrid.tsx": $$$1,
    "./sections/BannerImg.tsx": $$$2,
    "./sections/BrandBar.tsx": $$$3,
    "./sections/Button.story.tsx": $$$4,
    "./sections/CardGrid.tsx": $$$5,
    "./sections/Carousel.tsx": $$$6,
    "./sections/Footer.tsx": $$$7,
    "./sections/Head.tsx": $$$8,
    "./sections/Header.tsx": $$$9,
    "./sections/HomeFilter.tsx": $$$10,
    "./sections/IconCart.tsx": $$$11,
    "./sections/ListLinks.tsx": $$$12,
    "./sections/MarcasConvidadas.tsx": $$$13,
    "./sections/Newsletter.tsx": $$$14,
    "./sections/ProductDetails.tsx": $$$15,
    "./sections/ProductGallery.tsx": $$$16,
    "./sections/ProductListSection.tsx": $$$17,
    "./sections/ProductShelf.tsx": $$$18,
    "./sections/Reviews.tsx": $$$19,
    "./sections/Search.tsx": $$$20,
    "./sections/SearchControls.tsx": $$$21,
    "./sections/Separator.tsx": $$$22,
    "./sections/StoreFeatures.tsx": $$$23,
    "./sections/SupportLinks.tsx": $$$24,
    "./sections/vtexconfig.global.tsx": $$$25,
  },
  functions: {
    "./functions/shopifyProductDetailsPage.ts": $$$$0,
    "./functions/shopifyProductList.ts": $$$$1,
    "./functions/shopifyProductListingPage.ts": $$$$2,
    "./functions/vtexProductDetailsPage.ts": $$$$3,
    "./functions/vtexProductList.ts": $$$$4,
    "./functions/vtexProductListingPage.ts": $$$$5,
    "./functions/vtexProductsListTab.ts": $$$$6,
  },
  schemas: {
    "./sections/Banner.tsx": {
      "inputSchema": {
        "title": " Banner",
        "type": "object",
        "properties": {
          "imgSrc": {
            "title": "Img Src",
            "type": "object",
            "properties": {
              "mobile": {
                "type": "string",
                "title": "Mobile",
              },
              "desktop": {
                "type": "string",
                "title": "Desktop",
              },
            },
            "required": [
              "mobile",
              "desktop",
            ],
          },
          "alt": {
            "type": [
              "string",
              "null",
            ],
            "title": "Alt",
          },
          "text": {
            "type": [
              "string",
              "null",
            ],
            "title": "Text",
          },
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "subtitle": {
            "type": [
              "string",
              "null",
            ],
            "title": "Subtitle",
          },
          "link": {
            "type": [
              "string",
              "null",
            ],
            "title": "Link",
          },
          "CTA": {
            "type": [
              "string",
              "null",
            ],
            "title": " C T A",
          },
        },
        "required": [
          "imgSrc",
        ],
      },
      "outputSchema": null,
    },
    "./sections/BannerGrid.tsx": {
      "inputSchema": {
        "title": " Banner Grid",
        "type": "object",
        "properties": {
          "images": {
            "type": "array",
            "items": {
              "title": "Banner",
              "type": "object",
              "properties": {
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                  "description": "Image alt text",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                  "description": "When you click you go to",
                },
              },
              "required": [
                "src",
                "alt",
                "href",
              ],
            },
            "title": "Images",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
        },
        "required": [
          "images",
          "title",
        ],
      },
      "outputSchema": null,
    },
    "./sections/BannerImg.tsx": {
      "inputSchema": {
        "title": " Banner Img",
        "type": "object",
        "properties": {
          "imgSrc": {
            "title": "Img Src",
            "type": "object",
            "properties": {
              "mobile": {
                "type": "string",
                "title": "Mobile",
              },
              "desktop": {
                "type": "string",
                "title": "Desktop",
              },
            },
            "required": [
              "mobile",
              "desktop",
            ],
          },
          "alt": {
            "type": [
              "string",
              "null",
            ],
            "title": "Alt",
          },
          "textColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Text Color",
          },
          "text": {
            "type": [
              "string",
              "null",
            ],
            "title": "Text",
          },
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "subtitle": {
            "type": [
              "string",
              "null",
            ],
            "title": "Subtitle",
          },
          "link": {
            "type": [
              "string",
              "null",
            ],
            "title": "Link",
          },
          "CTA": {
            "type": [
              "string",
              "null",
            ],
            "title": " C T A",
          },
        },
        "required": [
          "imgSrc",
        ],
      },
      "outputSchema": null,
    },
    "./sections/BrandBar.tsx": {
      "inputSchema": {
        "title": " Brand Bar",
        "type": "object",
        "properties": {
          "brands": {
            "type": "array",
            "items": {
              "title": "Brand",
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "title": "Name",
                },
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                },
                "link": {
                  "type": "string",
                  "title": "Link",
                },
              },
              "required": [
                "name",
                "src",
                "link",
              ],
            },
            "title": "Brands",
          },
        },
        "required": [
          "brands",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Button.story.tsx": {
      "inputSchema": {
        "title": " Button.story",
        "type": "object",
        "properties": {
          "variant": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "primary",
              },
              {
                "type": "string",
                "const": "secondary",
              },
              {
                "type": "string",
                "const": "tertiary",
              },
              {
                "type": "string",
                "const": "danger",
              },
            ],
            "title": "Variant",
          },
          "size": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "small",
              },
              {
                "type": "string",
                "const": "large",
              },
            ],
            "title": "Size",
          },
          "fit": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "container",
              },
              {
                "type": "string",
                "const": "content",
              },
            ],
            "title": "Fit",
          },
          "loading": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Loading",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/CardGrid.tsx": {
      "inputSchema": {
        "title": " Card Grid",
        "type": "object",
        "properties": {
          "cards": {
            "type": "array",
            "items": {
              "title": "Card",
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "subtitle": {
                  "type": "string",
                  "title": "Subtitle",
                },
                "link": {
                  "type": "string",
                  "title": "Link",
                },
                "button": {
                  "type": "string",
                  "title": "Button",
                },
                "image": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Image",
                },
              },
              "required": [
                "title",
                "subtitle",
                "link",
                "button",
                "image",
              ],
            },
            "title": "Cards",
          },
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
        },
        "required": [
          "cards",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Carousel.tsx": {
      "inputSchema": {
        "title": " Carousel",
        "type": "object",
        "properties": {
          "images": {
            "title": "Images",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "mobile": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Mobile",
                },
                "desktop": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Desktop",
                },
                "brand": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Brand",
                },
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "subtitle": {
                  "type": "string",
                  "title": "Subtitle",
                },
                "button": {
                  "type": "string",
                  "title": "Button",
                },
                "link": {
                  "type": "string",
                  "title": "Link",
                },
              },
              "required": [
                "mobile",
                "desktop",
                "brand",
                "title",
                "subtitle",
                "button",
                "link",
              ],
            },
          },
          "delay": {
            "type": [
              "number",
              "null",
            ],
            "title": "delay",
            "description": "Time to switch slides in seconds",
            "default": "3",
          },
        },
        "required": [
          "images",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Footer.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Theme Color",
          },
        },
        "required": [
          "url",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "promoTitle": {
            "type": [
              "string",
              "null",
            ],
            "title": "Promo Title",
          },
          "promoLink": {
            "type": [
              "string",
              "null",
            ],
            "title": "Promo Link",
          },
          "positionAbsolute": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Position Absolute",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/HomeFilter.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/IconCart.tsx": {
      "inputSchema": {
        "title": " Icon Cart",
        "type": "object",
        "properties": {
          "size": {
            "type": [
              "number",
              "null",
            ],
            "title": "Size",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/ListLinks.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/MarcasConvidadas.tsx": {
      "inputSchema": {
        "title": " Marcas Convidadas",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "mainBanner": {
            "title": "Main Banner",
            "type": "object",
            "properties": {
              "href": {
                "type": "string",
                "title": "Href",
              },
              "smallSrc": {
                "format": "image-uri",
                "type": "string",
                "title": "Small Src",
                "description": "Image src for small screen devices (mobile)",
              },
              "largeSrc": {
                "format": "image-uri",
                "type": "string",
                "title": "Large Src",
                "description": "Image src for large screen devices (desktop)",
              },
              "alt": {
                "type": "string",
                "title": "Alt",
                "description": "Image alt text",
              },
            },
            "required": [
              "href",
              "smallSrc",
              "largeSrc",
              "alt",
            ],
          },
          "banners": {
            "type": "array",
            "items": {
              "title": "Banner",
              "type": "object",
              "properties": {
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                  "description": "Image alt text",
                },
              },
              "required": [
                "href",
                "src",
                "alt",
              ],
            },
            "title": "Banners",
          },
        },
        "required": [
          "title",
          "mainBanner",
          "banners",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Newsletter.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/ProductDetails.tsx": {
      "inputSchema": {
        "title": " Product Details",
        "type": "object",
        "properties": {
          "page": {
            "$id": "85d77d809b0be6ec54dbe06b714da53af53b54db",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ProductGallery.tsx": {
      "inputSchema": {
        "title": " Product Gallery",
        "type": "object",
        "properties": {
          "page": {
            "$id": "62615533560fc71180a86d2f3398b2396d2cbbc5",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ProductListSection.tsx": {
      "inputSchema": {
        "title": " Product List Section",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "productsListTab": {
            "$id": "fe0ca3ef8486bbf388a4d971be5a5c717093fda2",
            "format": "live-function",
            "type": "string",
            "title": "Products List Tab",
          },
        },
        "required": [
          "title",
          "productsListTab",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ProductShelf.tsx": {
      "inputSchema": {
        "title": " Product Shelf",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "products": {
            "$id": "546cbd7d0ccd06d3cfddd3184a52c465c9b5139a",
            "format": "live-function",
            "type": "string",
            "title": "Products",
          },
        },
        "required": [
          "title",
          "products",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Reviews.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Search.tsx": {
      "inputSchema": {
        "title": " Search",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/SearchControls.tsx": {
      "inputSchema": {
        "title": " Search Controls",
        "type": "object",
        "properties": {
          "page": {
            "$id": "62615533560fc71180a86d2f3398b2396d2cbbc5",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Separator.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/StoreFeatures.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/SupportLinks.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/vtexconfig.global.tsx": {
      "inputSchema": {
        "title": "Vtexconfig.global",
        "type": "object",
        "properties": {
          "account": {
            "type": "string",
            "title": "Account",
            "description":
              "VTEX Account name. For more info, read here: https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC.",
          },
          "salesChannel": {
            "type": "string",
            "title": "Sales Channel",
            "description":
              "VTEX sales channel. This will be the default sales channel your site. For more info, read here: https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV",
          },
          "locale": {
            "type": "string",
            "title": "Locale",
            "description": "Locale used for VTEX Intelligent Search client.",
          },
        },
        "required": [
          "account",
          "salesChannel",
          "locale",
        ],
      },
      "outputSchema": null,
    },
    "./functions/shopifyProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Shopify Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "85d77d809b0be6ec54dbe06b714da53af53b54db",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductList.ts": {
      "inputSchema": {
        "title": "Shopify Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "search term to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "546cbd7d0ccd06d3cfddd3184a52c465c9b5139a",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductListingPage.ts": {
      "inputSchema": {
        "title": "Shopify Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "62615533560fc71180a86d2f3398b2396d2cbbc5",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vtex Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "85d77d809b0be6ec54dbe06b714da53af53b54db",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductList.ts": {
      "inputSchema": {
        "title": "Vtex Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "query to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "546cbd7d0ccd06d3cfddd3184a52c465c9b5139a",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductListingPage.ts": {
      "inputSchema": {
        "title": "Vtex Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "62615533560fc71180a86d2f3398b2396d2cbbc5",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductsListTab.ts": {
      "inputSchema": {
        "title": "Vtex Products List Tab",
        "type": "object",
        "properties": {
          "tabs": {
            "type": "array",
            "items": {
              "title": "TabProps",
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "query": {
                  "type": "string",
                  "title": "Query",
                  "description": "query to use on search",
                },
                "count": {
                  "type": "number",
                  "title": "Count",
                  "description": "total number of items to display",
                },
              },
              "required": [
                "title",
                "query",
                "count",
              ],
            },
            "title": "Tabs",
          },
        },
        "required": [
          "tabs",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "fe0ca3ef8486bbf388a4d971be5a5c717093fda2",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live ??? this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
