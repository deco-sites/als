import {
  ImageObject,
  ProductDetailsPage,
  ProductLeaf,
  UnitPriceSpecification,
} from "$live/std/commerce/types.ts";
import { LoaderReturnType } from "$live/std/types.ts";
import { css, tw } from "twind/css";
import { Head } from "$fresh/runtime.ts";
import Image from "$live/std/ui/components/Image.tsx";
import SKUSelector from "$components/SKUSelector.tsx";
import { Separator } from "$components/Separator.tsx";
import { Star } from "$components/icons/Star.tsx";
import AddToCart from "../islands/AddToCart.tsx";
import SizeImages from "../islands/SizeImages.tsx";

import { PriceModel } from "../models/price-model.ts";

import ProductInformation from "../islands/ProductInformation.tsx";
import ProductImage from "../islands/ImageProduct.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function ScriptLDJson<T extends Record<string, unknown>>(props: T) {
  const innerHtml = JSON.stringify({
    "@context": "https://schema.org",
    ...props,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: innerHtml,
      }}
    />
  );
}

export const bestInstallment = (
  acc: UnitPriceSpecification | null,
  curr: UnitPriceSpecification,
) => {
  if (curr.priceComponentType !== "https://schema.org/Installment") {
    return acc;
  }

  if (!acc) {
    return curr;
  }

  if (acc.price > curr.price) {
    return curr;
  }

  if (acc.price < curr.price) {
    return acc;
  }

  if (
    acc.billingDuration && curr.billingDuration &&
    acc.billingDuration < curr.billingDuration
  ) {
    return curr;
  }

  return acc;
};

export const installmentToString = (
  installment: UnitPriceSpecification,
  sellingPrice: number,
) => {
  const { billingDuration, billingIncrement, price } = installment;

  if (!billingDuration || !billingIncrement) {
    return "";
  }

  const withTaxes = sellingPrice < price;

  return `${billingDuration} de R$ ${billingIncrement} ${
    withTaxes ? "com juros" : "s/ juros"
  }`;
};

export function Counter() {
  return (
    <div class="h-[20px] w-[120px] rounded-full p-3 border-2 border-gray-900 flex justify-center items-center justify-between">
      <span class="text-lg px-2 cursor-pointer">-</span>
      <span class="text-sm">1</span>
      <span class="text-lg px-2">+</span>
    </div>
  );
}

const defaultSizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XX",
  "3X",
];

const createMapByColor = (product: ProductDetailsPage["product"]) => {
  return (product.isVariantOf?.hasVariant ?? []).reduce(
    (map, productLeaf, index) => {
      const colorProp = (productLeaf.additionalProperty ?? []).find((
        { name },
      ) => name === "Color");

      if (colorProp && colorProp.value) map.set(colorProp.value, productLeaf);

      return map;
    },
    new Map<string, ProductLeaf>(),
  );
};

export default function ProductDetails({ page }: Props) {
  if (!page) {
    return null;
  }

  const {
    product,
    breadcrumbList: { numberOfItems, itemListElement },
  } = page;

  const descriptionClassName = tw(css({
    "& h3,h4": {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "#505050",
    },
    "& p": {
      letterSpacing: "0.025em",
      margin: "1rem 0",
      color: "#505050",
    },
    "& ul": {
      marginLeft: "30px",
      listStyleType: "disc",
    },
    "& li": {
      letterSpacing: "0.025em",
      color: "#505050",
      lineHeight: "1.5rem",
    },
  }));

  const boxShadowClassName = tw(css({
    "@media (min-width: 640px)": {
      boxShadow: "0 0px 6px rgb(0 0 0 / 16%)",
    },
  }));

  const map = createMapByColor(product);

  const sizeImages = [...map.values()]
    .map((productItem) => {
      if (productItem?.image?.at(0)) {
        return productItem?.image?.at(0);
      }

      return null;
    })
    .filter((item): item is ImageObject => !!item);

  return (
    <>
      <Head>
        <ScriptLDJson {...page.product} />
        <ScriptLDJson {...page.breadcrumbList} />
        <title>{product.name ?? "Product name"}</title>
      </Head>
      <section class="w-full flex justify-center">
        <div class="max-w-[96rem] flex flex-col pt-12 px-10">
          <div class="flex justify-center">
            <div class="flex flex-col md:flex-row w-10/12">
              <div class="flex-auto flex flex-col w-full md:w-4/6 mb-5 md:mb-0">
                <ProductImage items={map} />
              </div>
              <div class="flex-auto w-full md:w-2/6">
                <h1 class="text-[#242424] text-3xl font-bold mb-4">
                  {product.name}
                </h1>

                {/* Rating Section */}
                <div class="flex mb-4">
                  <Star active />
                  <Star active />
                  <Star active />
                  <Star active />
                  <Star />
                  <a
                    href="#"
                    class="text-gray-400 ml-2 tracking-wide underline font-semibold"
                  >
                    (2 reviews)
                  </a>
                  <a
                    href="#"
                    class="ml-2 tracking-wide underline text-gray-600 font-semibold"
                  >
                    Write a review
                  </a>
                </div>
                {/* Rating Section End */}

                {/* Price Section */}
                <h2 class="mb-4">
                  <span class="font-semibold text-red-500 leading-3 text-center text-2xl">
                    {PriceModel.create(
                      product.offers?.lowPrice,
                      product.offers?.highPrice,
                    )}
                  </span>
                  {
                    /* <span class="font-semibold leading-3 text-center text-2xl ml-3 text-gray-600 line-through">
                    ${PriceModel.create(product.offers?.lowPrice)}
                  </span> */
                  }
                </h2>
                {/* Price Section End */}

                {/* Colors Section */}
                <div class="mb-5">
                  <p class="font-bold text-[#2e2e2e] my-2">Color</p>
                  <div class="flex flex-wrap gap-2">
                    <SizeImages images={sizeImages} />
                  </div>
                </div>
                {/* Colors Section End */}

                {/* Sizes Section */}
                <div class="mb-5">
                  <p class="font-bold text-[#2e2e2e] my-2">Size</p>
                  <div class="flex flex-wrap gap-2">
                    {defaultSizes.map((size) => (
                      <button
                        aria-label={`Size ${size}`}
                        class="rounded-full w-[45px] h-[45px] border-2 border-gray-900 flex justify-center items-center cursor-pointer"
                      >
                        <span class="font-bold">{size}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {/* Sizes Section End */}

                {/* Quantity Section */}
                <div class="mb-5">
                  <p class="font-bold text-[#2e2e2e] my-2">Quantity</p>
                  <Counter />
                </div>
                {/* Quantity Section End */}

                {/* ID Section */}
                <p class="mb-3 text-gray-400 text-sm">ID: {product.sku}</p>
                {/* ID Section End */}

                {/* Button Add Cart */}
                <button class="text-white text-xl tracking-wide font-bold bg-[#ed0000] rounded-lg p-3 w-full md:w-3/4">
                  Add To Cart
                </button>
                {/* Button Add Cart End */}
              </div>
            </div>
          </div>
          {product?.description && (
            <>
              <Separator title="Product Description" />
              <div
                class={`my-6 ${descriptionClassName}`}
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}
