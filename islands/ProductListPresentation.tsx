import { h } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import { css, tw } from "twind/css";
import { ProductsListTab } from "../functions/vtexProductsListTab.ts";
import type { Product } from "../interfaces/product.ts";
import type { Product as DecoProduct } from "$live/std/commerce/types.ts";
import { PriceModel } from "../models/price-model.ts";

export interface Props {
  tabs: ProductsListTab[];
}

export const ProductMapper = {
  create: (product: DecoProduct): Product => {
    const images = (product.image ?? []).map((image) => ({
      label: image.alternateName ?? "",
      url: image.url ?? "",
    })).slice(0, 3);
    const price = PriceModel.create(
      product.offers?.lowPrice,
      product.offers?.highPrice,
    );
    // const priceWithDiscount = PriceModel.create(
    //   product.offers.,
    //   product.priceRange.sellingPrice.highPrice,
    // );

    return {
      title: product.brand ?? "",
      description: product.name ?? "",
      price: price,
      // priceWithDiscount: price !== priceWithDiscount ? priceWithDiscount : "",
      priceWithDiscount: "",
      rating: 5,
      percentageDiscount: 50,
      image: images[0],
      images: images,
      link: product.url ?? "",
    };
  },
};

type Queries = Record<string, string>;

function useMediaQuery(queries: Queries): string {
  const getMatches = (queryParams: Queries): string => {
    const keys = Object.keys(queryParams);

    // Prevents SSR issues
    if (typeof window !== "undefined" && window.matchMedia) {
      return keys.reverse().find((key) =>
        window.matchMedia(queryParams[key]).matches
      ) ?? "";
    }

    return "";
  };

  const [matches, setMatches] = useState<string>(() => getMatches(queries));

  const handleChange = () => setMatches(getMatches(queries));
  const handleAddListener = (matchMedias: MediaQueryList[]) => {
    matchMedias.forEach((matchMedia) => {
      if (matchMedia.addListener) {
        matchMedia.addListener(handleChange);
      } else {
        matchMedia.addEventListener("change", handleChange);
      }
    });
  };
  const handleRemoveListener = (matchMedias: MediaQueryList[]) => {
    matchMedias.forEach((matchMedia) => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    });
  };

  useEffect(() => {
    const matchMedias: MediaQueryList[] = Object.keys(queries).map((key) =>
      window.matchMedia(queries[key])
    );

    handleChange();
    handleAddListener(matchMedias);
    return () => {
      handleRemoveListener(matchMedias);
    };
  }, [queries]);

  return matches;
}

const queries = {
  "sm": "(min-width: 640px)",
  "md": "(min-width: 768px)",
  "lg": "(min-width: 1024px)",
  "xl": "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

const colsByQueries: Record<string, number> = {
  "sm": 2,
  "md": 3,
  "lg": 4,
  "xl": 4,
  "2xl": 4,
};

export default function ProductListPresentation({ tabs }: Props) {
  const [products, setProducts] = useState<Product[]>(() =>
    (tabs?.at(0)?.products ?? []).map((vtexProduct) =>
      ProductMapper.create(vtexProduct)
    )
  );
  const [tabCurrentPosition, setTabCurrentPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const currentQuery = useMediaQuery(queries);
  const cols = colsByQueries[currentQuery] ?? 1;
  const carrosselWidth = currentQuery ? products.length / cols * 100 : 100;
  const corrosselTranslate = currentQuery
    ? (100 / products.length) * scrollPosition * cols
    : 0;

  const previousHandle = () =>
    setScrollPosition((scrollPosition) =>
      scrollPosition - 1 <= 0 ? 0 : scrollPosition - 1
    );
  const nextHandle = () =>
    setScrollPosition((scrollPosition) =>
      scrollPosition + 1 >= products.length / cols
        ? scrollPosition
        : scrollPosition + 1
    );
  const changeTab = (index: number) => {
    setTabCurrentPosition(index);

    const products = (tabs[index].products ?? []).map((vtexProduct) =>
      ProductMapper.create(vtexProduct)
    );
    setProducts(products);
  };

  const boxShadowClassName = tw(css({
    "@media (min-width: 640px)": {
      boxShadow: "0 0px 6px rgb(0 0 0 / 16%)",
    },
  }));

  return (
    <div class="container flex flex-col items-center">
      <div class="flex flex-row items-center bg-[#efefef] rounded-full shadow-lg">
        {tabs?.map((tabProps, index) => (
          <div
            key={tabProps.title}
            class={`py-1 px-5 rounded-full hover:cursor-pointer ${
              index === tabCurrentPosition ? "bg-[#505050] shadow-md" : ""
            }`}
            onClick={() => changeTab(index)}
          >
            <h1
              class={`py-1 px-1 font-semibold tracking-wider ${
                index === tabCurrentPosition ? "text-white" : "text-[#505050]"
              }`}
            >
              {tabProps.title}
            </h1>
          </div>
        ))}
      </div>
      <div class="relative w-full flex justify-center">
        <div class="relative overflow-hidden" style="width: calc(100% - 80px)">
          <ul
            class={`flex box-content my-6 w-[${carrosselWidth}%]`}
            style={`transform: translateX(-${corrosselTranslate}%)`}
          >
            {products?.map((product) => (
              <li
                class={`mx-4 my-2 rounded-lg box-content w-1/4 hover:cursor-pointer ease-in-out duration-200 hover:scale-105 ${boxShadowClassName}`}
              >
                <a class="flex" href={product.link}>
                  <section class="flex flex-col items-center px-6 md:px-8 py-3">
                    <div class="relative">
                      <span class="absolute right-0 border-1 border-red-500 px-2 py-1 rounded-full text-xs text-red-500 bg-white">
                        Save {product.percentageDiscount}%
                      </span>
                      <img
                        class="h-full"
                        alt={product.image.label ?? `Product ${product.title}`}
                        loading="lazy"
                        src={product.image.url}
                      />
                    </div>
                    <div class="flex py-2">
                      {product.images.map((image, index) => (
                        <img
                          alt={image.label ?? `Product image ${index}`}
                          class="w-[48px] h-[48px] mx-1"
                          loading="lazy"
                          src={image.url}
                        />
                      ))}
                    </div>
                    <h1 class="font-semibold text-center">{product.title}</h1>
                    <p class="font-light text-sm text-center text-gray-500 pb-2">
                      {product.description}
                    </p>
                    <div class="pt-2">
                      <p
                        class={`font-semibold leading-3 text-center ${
                          product.priceWithDiscount ? "line-through" : ""
                        }`}
                      >
                        {product.price}
                      </p>
                      <p class="font-semibold text-red-500 text-center">
                        {product.priceWithDiscount}
                      </p>
                    </div>
                  </section>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          class={`bg-white w-10 h-10 rounded-full absolute left-0.5 flex justify-center items-center ${boxShadowClassName}`}
          style="top: calc(50% - 20px)"
          aria-label="Previous page"
          onClick={previousHandle}
        >
          <svg
            class="rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
          </svg>
        </button>
        <button
          class={`bg-white w-10 h-10 rounded-full absolute right-0.5 flex justify-center items-center ${boxShadowClassName}`}
          style="top: calc(50% - 20px)"
          aria-label="Next page"
          onClick={nextHandle}
        >
          <svg
            class="-rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
