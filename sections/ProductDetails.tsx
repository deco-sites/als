import {
  ProductDetailsPage,
  UnitPriceSpecification,
} from "$live/std/commerce/types.ts";
import { LoaderReturnType } from "$live/std/types.ts";
import { css, tw } from "twind/css";
import { Head } from "$fresh/runtime.ts";
import ProductDetailsInfo from "../islands/ProductDetailsInfo.tsx";
import Breadcrumb from "$components/Breadcrumb.tsx";

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

export default function ProductDetails({ page }: Props) {
  if (!page) return null;

  const {
    product,
    breadcrumbList: { itemListElement },
  } = page;

  return (
    <>
      <Head>
        <ScriptLDJson {...page.product} />
        <ScriptLDJson {...page.breadcrumbList} />
        <title>{product.name ?? "Product name"}</title>
      </Head>
      <Breadcrumb items={itemListElement} />
      <ProductDetailsInfo product={product} />
    </>
  );
}
