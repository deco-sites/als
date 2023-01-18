import {
  ProductDetailsPage,
  UnitPriceSpecification,
} from "$live/std/commerce/types.ts";
import { LoaderReturnType } from "$live/std/types.ts";
import { css, tw } from "twind/css";
import { Head } from "$fresh/runtime.ts";
import Image from "$live/std/ui/components/Image.tsx";
import SKUSelector from "$components/SKUSelector.tsx";
import { Separator } from "$components/Separator.tsx";
import { Star } from '$components/icons/Star.tsx'
import AddToCart from "../islands/AddToCart.tsx";

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
      <span class="text-lg px-2">-</span>
      <span class="text-sm">1</span>
      <span class="text-lg px-2">+</span>
    </div>
  )
}

export default function ProductDetails({ page }: Props) {
  if (!page) {
    return null;
  }

  const {
    product: {
      image,
      name,
      productID,
      offers: aggregateOffer,
      description,
      isVariantOf,
    },
    breadcrumbList: { numberOfItems, itemListElement },
  } = page;
  const offer = aggregateOffer?.offers[0];
  const listPrice = offer?.priceSpecification.find((spec) =>
    spec.priceType === "https://schema.org/ListPrice"
  );
  const installment = offer?.priceSpecification.reduce(bestInstallment, null);
  const seller = offer?.seller;
  const price = offer?.price;

  const descriptionClassName = tw(css({
    "& h3,h4": {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#505050'
    },
    "& p": {
      letterSpacing: '0.025em',
      margin: '1rem 0',
      color: '#505050'
    },
    "& ul": {
      marginLeft: "30px",
      listStyleType: "disc"
    },
    "& li": {
      letterSpacing: '0.025em',
      color: '#505050',
      lineHeight: '1.5rem'
    }
  }));

  const boxShadowClassName = tw(css({
    "@media (min-width: 640px)": {
      boxShadow: "0 0px 6px rgb(0 0 0 / 16%)",
    },
  }));

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
              <div class="flex-auto w-4/6 bg-gray-100">
                
              </div>
              <div class="flex-auto w-2/6">
                <h1 class="text-[#242424] text-2xl font-bold mb-4">{name}</h1>

                {/* Rating Section */}
                <div class="flex mb-4">
                  <Star active />
                  <Star active />
                  <Star active />
                  <Star active />
                  <Star />
                  <p class="text-gray-400 ml-2 tracking-wide underline font-semibold">(2 reviews)</p>
                  <p class="ml-2 tracking-wide underline text-gray-600 font-semibold">Write a review</p>
                </div>
                {/* Rating Section End */}

                {/* Price Section */}
                <h2 class="mb-4">
                  <span class="font-semibold text-red-500 leading-3 text-center text-3xl">$137.99 - $160.30</span>
                  <span class="font-semibold leading-3 text-center text-3xl ml-3 text-gray-600 line-through">$229.00</span>
                </h2>
                {/* Price Section End */}
                
                {/* Colors Section */}
                <div class="mb-5">
                  <p class="font-bold text-[#2e2e2e] my-2">Color</p>
                  <div class="flex flex-wrap gap-2">
                    <div class={`w-[78px] h-[78px] bg-gray-300 rounded-lg ${boxShadowClassName}`} />
                    <div class={`w-[78px] h-[78px] bg-gray-300 rounded-lg ${boxShadowClassName}`} />
                    <div class={`w-[78px] h-[78px] bg-gray-300 rounded-lg ${boxShadowClassName}`} />
                    <div class={`w-[78px] h-[78px] bg-gray-300 rounded-lg ${boxShadowClassName}`} />
                    <div class={`w-[78px] h-[78px] bg-gray-300 rounded-lg ${boxShadowClassName}`} />
                    <div class={`w-[78px] h-[78px] bg-gray-300 rounded-lg ${boxShadowClassName}`} />
                    <div class={`w-[78px] h-[78px] bg-gray-300 rounded-lg ${boxShadowClassName}`} />
                    <div class={`w-[78px] h-[78px] bg-gray-300 rounded-lg ${boxShadowClassName}`} />
                    <div class={`w-[78px] h-[78px] bg-gray-300 rounded-lg ${boxShadowClassName}`} />
                  </div>
                </div>
                {/* Colors Section End */}

                {/* Sizes Section */}
                <div class="mb-5">
                  <p class="font-bold text-[#2e2e2e] my-2">Size</p>
                  <div class="flex flex-wrap gap-2">
                    <div class="rounded-full w-[45px] h-[45px] border-2 border-gray-900 flex justify-center items-center"><span class="font-bold">XS</span></div>
                    <div class="rounded-full w-[45px] h-[45px] border-2 border-gray-900 flex justify-center items-center"><span class="font-bold">S</span></div>
                    <div class="rounded-full w-[45px] h-[45px] border-2 border-gray-900 flex justify-center items-center"><span class="font-bold">M</span></div>
                    <div class="rounded-full w-[45px] h-[45px] border-2 border-gray-900 flex justify-center items-center"><span class="font-bold">L</span></div>
                    <div class="rounded-full w-[45px] h-[45px] border-2 border-gray-900 flex justify-center items-center"><span class="font-bold">XS</span></div>
                    <div class="rounded-full w-[45px] h-[45px] border-2 border-gray-900 flex justify-center items-center"><span class="font-bold">XS</span></div>
                  </div>
                </div>
                {/* Sizes Section End */}


                {/* Quantity Section */}
                <div class="mb-5">
                  <p class="font-bold text-[#2e2e2e] my-2">Quantity</p>
                  <Counter />
                </div>
                {/* Quantity Section End */}

                <p class="mb-3 text-gray-400 text-sm">ID: 22710</p>

                <button class="text-white text-xl tracking-wide font-bold bg-[#ed0000] rounded-lg p-3 w-full md:w-3/4">Add To Cart</button>
              </div>
            </div>
          </div>
          {description && (
            <>
              <Separator title="Product Description" />
              <div class={`my-6 ${descriptionClassName}`} dangerouslySetInnerHTML={{ __html: description }} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
