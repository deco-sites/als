import { h } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import { css, tw } from "twind/css";
import type { MockProduct } from "../interfaces/mock-product.ts";

export interface TabProps {
  title: string;
  category: string;
}

export interface Props {
  tabs: TabProps[];
}

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

function ProductPlaceholder() {
  return (
    <li class="mx-4 my-2 rounded-lg w-1/4 bg-gray-300 hover:cursor-pointer h-[400px] animate-pulse">
    </li>
  );
}

export default function ProductList({ tabs }: Props) {
  const titles = useMemo(() => tabs?.map(({ title }) => title), []);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<MockProduct[]>([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const currentQuery = useMediaQuery(queries);
  const cols = colsByQueries[currentQuery] ?? 1;
  const carrosselWidth = loading ? 100 : products.length / cols * 100;
  const corrosselTranslate = loading
    ? 0
    : (100 / products.length) * scrollPosition * cols;

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

  useEffect(() => {
    const abortController = new AbortController();
    const { category } = tabs[currentPosition] ?? {};

    setLoading(true);
    fetch(`/api/products?category=${category}`, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((products: MockProduct[]) => {
        setProducts(products);
        setLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, [tabs, currentPosition]);

  const boxShadowClassName = tw(css({
    "@media (min-width: 640px)": {
      boxShadow: "0 0px 6px rgb(0 0 0 / 16%)",
    },
  }));

  return (
    <div class="container flex flex-col items-center">
      <div class="flex flex-row items-center bg-[#efefef] rounded-full shadow-lg">
        {titles?.map((title, index) => (
          <div
            key={title}
            class={`py-1 px-5 rounded-full hover:cursor-pointer ${
              index === currentPosition ? "bg-[#505050] shadow-md" : ""
            }`}
            onClick={() => setCurrentPosition(index)}
          >
            <h1
              class={`py-1 px-1 font-semibold tracking-wider ${
                index === currentPosition ? "text-white" : "text-[#505050]"
              }`}
            >
              {title}
            </h1>
          </div>
        ))}
      </div>
      <div class="relative w-full flex justify-center">
        <div class="relative overflow-hidden" style="width: calc(100% - 80px)">
          <ul
            class={`flex box-content my-6 w-[${carrosselWidth}%] ${
              !loading ? "ease-in-out duration-500" : ""
            }`}
            style={`transform: translateX(-${corrosselTranslate}%)`}
          >
            {loading &&
              new Array(cols).fill("").map(() => <ProductPlaceholder />)}

            {!loading && products?.map((product) => (
              <li
                class={`mx-4 my-2 rounded-lg box-content w-1/4 hover:cursor-pointer ease-in-out duration-200 hover:scale-105 ${boxShadowClassName}`}
              >
                <section class="flex flex-col items-center px-6 md:px-8 py-3">
                  <div class="relative">
                    <span class="absolute right-0 border-1 border-red-500 px-2 py-1 rounded-full text-xs text-red-500 bg-white">
                      Save {product.percentageDiscount}%
                    </span>
                    <img
                      alt={`Product ${product.title}`}
                      loading="lazy"
                      src={product.image}
                    />
                  </div>
                  <div class="flex py-2">
                    {product.images.map((image, index) => (
                      <img
                        alt={`Product image ${index}`}
                        class="w-[48px] h-[48px]"
                        loading="lazy"
                        src={image}
                      />
                    ))}
                  </div>
                  <h1 class="font-semibold text-center">{product.title}</h1>
                  <p class="font-light text-sm text-center text-gray-500 pb-2">
                    {product.description}
                  </p>
                  <div class="pt-2">
                    <p class="font-semibold line-through leading-3">
                      ${product.priceWithDiscount}
                    </p>
                    <p class="font-semibold text-red-500">${product.price}</p>
                  </div>
                </section>
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
