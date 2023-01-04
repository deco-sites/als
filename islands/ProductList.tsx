import { h } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
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

export default function ProductList({ tabs }: Props) {
  const titles = useMemo(() => tabs?.map(({ title }) => title), []);
  const [products, setProducts] = useState<MockProduct[]>([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const currentQuery = useMediaQuery(queries);
  const cols = colsByQueries[currentQuery] ?? 1;
  const carrosselWidth = products.length / cols * 100;
  const corrosselTranslate = (100 / products.length) * scrollPosition * cols;

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

    fetch(`/api/products?category=${category}`, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((products: MockProduct[]) => setProducts(products));

    return () => {
      abortController.abort();
    };
  }, [tabs, currentPosition]);

  return (
    <>
      <div class="flex flex-row items-center bg-gray-200 rounded-full shadow-lg">
        {titles?.map((title, index) => (
          <div
            key={title}
            class={`py-1.5 px-4 rounded-full hover:cursor-pointer ${
              index === currentPosition ? "bg-gray-500 shadow-md" : ""
            }`}
            onClick={() => setCurrentPosition(index)}
          >
            <h1
              class={`py-1 px-1 text-gray-600 font-semibold ${
                index === currentPosition ? "text-white" : ""
              }`}
            >
              {title}
            </h1>
          </div>
        ))}
      </div>
      <div class="relative w-full overflow-hidden">
        <ul
          class={`flex transition mt-4 w-[${carrosselWidth}%]`}
          style={`transform: translateX(-${corrosselTranslate}%)`}
        >
          {products?.map((product) => (
            <li
              class="mx-4 my-2 rounded-lg hover:cursor-pointer"
              style={`box-shadow:0 0px 6px rgb(0 0 0 / 16%)`}
            >
              <section class="flex flex-col items-center px-6 md:px-8 py-3">
                <div class="relative">
                  <span class="absolute right-0 border-1 border-red-500 px-2 py-1 rounded-full text-xs text-red-500 bg-white">
                    Save {product.percentageDiscount}%
                  </span>
                  <img src={product.image} />
                </div>
                <div class="flex py-2">
                  {product.images.map((image) => (
                    <img class="w-[48px] h-[48px]" src={image} />
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
        <button
          class="bg-white w-10 h-10 rounded-full absolute left-0.5"
          style="box-shadow:0 0px 6px rgb(0 0 0 / 16%); top: calc(50% - 5px)"
          onClick={previousHandle}
        >
          P
        </button>
        <button
          class="bg-white w-10 h-10 rounded-full absolute right-0.5"
          style="box-shadow:0 0px 6px rgb(0 0 0 / 16%); top: calc(50% - 5px)"
          onClick={nextHandle}
        >
          N
        </button>
      </div>
    </>
  );
}
