import {
ImageObject,
  ProductDetailsPage,
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

import { PriceModel } from '../models/price-model.ts'

import ProductInformation from "../islands/ProductInformation.tsx";

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
  "3X"
]

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

  const sizeImages = (product.isVariantOf?.hasVariant ?? [])
    .map((productItem) => {
      if (productItem.image && productItem.image[0]) return productItem.image[0]
      
      return null
    })
    .filter((item): item is ImageObject => !!item)
    .reduce((previousItems, currentItem) => {
      if (previousItems.length === 0 || previousItems.some(item => item.url !== currentItem.url)) {
        previousItems.push(currentItem)
      }

      return previousItems
    }, [] as ImageObject[])

  return (
    <>
      <Head>
        <ScriptLDJson {...page.product} />
        <ScriptLDJson {...page.breadcrumbList} />
      </Head>
      <section class="w-full flex justify-center">
        <div class="max-w-[96rem] flex flex-col pt-12 px-10">
          <div class="flex justify-center">
            <div class="flex w-10/12">
              <div class="flex-auto flex flex-col w-4/6">
                <div class="flex-1 flex justify-center">
                  <div class="w-[450px] h-full flex justify-center cursor-zoom-in">
                    {product.image && product.image[0] && (
                      <Image
                        class="w-full max-w-full h-auto"
                        src={product.image[0].url ?? ""}
                        alt={product.image[0].alternateName ? product.image[0].alternateName : `Main product: ${product.name}`}
                        width={326}
                        height={489}
                        sizes="(max-width: 640px) 40vw, 20vw"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                </div>
                <div class="flex gap-2 my-5 justify-center">
                  {product.image && product.image.map((imageData, index) => (
                    <div class={`w-[85px] h-[85px] rounded-lg p-2 cursor-pointer ${boxShadowClassName}`}>  
                      <Image
                        class="w-full max-w-full h-auto opacity-40"
                        src={imageData.url ?? ""}
                        alt={imageData.alternateName ? imageData.alternateName : `Product image ${index}: ${product.name}`}
                        width={75}
                        height={75}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div class="flex-auto w-2/6">
                <h1 class="text-[#242424] text-3xl font-bold mb-4">{product.name}</h1>

                {/* Rating Section */}
                <div class="flex mb-4">
                  <Star active />
                  <Star active />
                  <Star active />
                  <Star active />
                  <Star />
                  <a href="#" class="text-gray-400 ml-2 tracking-wide underline font-semibold">
                    (2 reviews)
                  </a>
                  <a href="#" class="ml-2 tracking-wide underline text-gray-600 font-semibold">
                    Write a review
                  </a>
                </div>
                {/* Rating Section End */}

                {/* Price Section */}
                <h2 class="mb-4">
                  <span class="font-semibold text-red-500 leading-3 text-center text-2xl">
                    {PriceModel.create(product.offers?.lowPrice, product.offers?.highPrice)}
                  </span>
                  {/* <span class="font-semibold leading-3 text-center text-2xl ml-3 text-gray-600 line-through">
                    ${PriceModel.create(product.offers?.lowPrice)}
                  </span> */}
                </h2>
                {/* Price Section End */}

                {/* Colors Section */}
                <div class="mb-5">
                  <p class="font-bold text-[#2e2e2e] my-2">Color</p>
                  <div class="flex flex-wrap gap-2">
                    {sizeImages && sizeImages.map((imageData, index) => (
                      <div class={`w-[78px] h-[78px] p-2 rounded-lg cursor-pointer ${boxShadowClassName}`}>
                        <Image
                          class="w-full max-w-full h-auto"
                          src={imageData.url ?? ""}
                          alt={imageData.alternateName ? imageData.alternateName : `Product image ${index}: ${product.name}`}
                          width={75}
                          height={75}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Colors Section End */}

                {/* Sizes Section */}
                <div class="mb-5">
                  <p class="font-bold text-[#2e2e2e] my-2">Size</p>
                  <div class="flex flex-wrap gap-2">
                    {defaultSizes.map(size => (
                      <div class="rounded-full w-[45px] h-[45px] border-2 border-gray-900 flex justify-center items-center cursor-pointer">
                        <span class="font-bold">{size}</span>
                      </div>
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