import {
  ImageObject,
  Product,
  ProductDetailsPage,
  ProductLeaf,
} from "$live/std/commerce/types.ts";
import { useState } from "preact/hooks";
import { css, tw } from "twind/css";
import { Separator } from "$components/Separator.tsx";
import { Star } from "$components/icons/Star.tsx";
import SizeImages from "../islands/SizeImages.tsx";

import { PriceModel } from "../models/price-model.ts";
import ProductImage from "../islands/ImageProduct.tsx";

export interface Props {
  product?: ProductDetailsPage["product"] | null;
}

type ImageObjectWithItemId = ImageObject & {
  id: string;
};

type Undefined<Type> = Type | undefined;

export function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div class="h-[20px] w-[120px] rounded-full p-3 border-2 border-gray-900 flex justify-center items-center justify-between">
      <span onClick={handleDecrement} class="text-lg px-2 cursor-pointer">
        -
      </span>
      <span class="text-sm">1</span>
      <span onClick={handleIncrement} class="text-lg px-2">+</span>
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

const createMap = (
  each: (
    map: Map<string, ProductLeaf>,
    productLeaf: ProductLeaf,
  ) => Map<string, Product>,
) =>
(product: ProductDetailsPage["product"]) => {
  return (product.isVariantOf?.hasVariant ?? []).reduce(
    each,
    new Map<string, ProductLeaf>(),
  );
};

const createMapByColor = createMap((map, productLeaf) => {
  const colorProp = (productLeaf.additionalProperty ?? []).find((
    { name },
  ) => name === "Color");

  if (colorProp && colorProp.value) map.set(colorProp.value, productLeaf);

  return map;
});

const createMapBySize = createMap((map, productLeaf) => {
  const sizeProp = (productLeaf.additionalProperty ?? []).find(({ name }) =>
    name === "Size"
  );

  if (sizeProp?.value) map.set(sizeProp.value, productLeaf);

  return map;
});

export default function ProductDetailsInfo({ product }: Props) {
  if (!product) return null;

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

  const map = createMapByColor(product);
  const sizesMap = createMapBySize(product);

  const sizes = [...sizesMap.values()]
    .map((productLeaf) =>
      productLeaf.additionalProperty?.filter(({ name }) => name === "Size")[0]
        .value
    );
  const items = [...map.values()];

  const colorImages = [...map.values()]
    .map((productItem) => {
      if (productItem?.image?.at(0)) {
        return {
          ...productItem?.image?.at(0),
          id: productItem?.productID,
        };
      }

      return null;
    })
    .filter((item): item is ImageObjectWithItemId => !!item);

  const [itemIdSelected, setItemIdSelected] = useState<Undefined<string>>();

  const currentItem =
    items.find((productItem) => productItem.productID === itemIdSelected) ??
      items[0];

  return (
    <section class="w-full flex justify-center">
      <div class="max-w-[80rem] flex flex-col pt-12 px-10">
        <div class="flex justify-center">
          <div class="flex flex-col md:flex-row w-10/12">
            <div class="flex-auto flex flex-col w-full md:w-4/6 mb-5 md:mb-0">
              <ProductImage items={items} itemSelectedId={itemIdSelected} />
            </div>
            <div class="flex-auto w-full md:w-2/6">
              <h1 class="text-[#242424] text-3xl font-bold mb-4">
                {currentItem.name}
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
                    currentItem.offers?.lowPrice,
                    currentItem.offers?.highPrice,
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
                  <SizeImages
                    images={colorImages}
                    itemIdSelected={itemIdSelected}
                    onClick={(imageData) => setItemIdSelected(imageData.id)}
                  />
                </div>
              </div>
              {/* Colors Section End */}

              {/* Sizes Section */}
              <div class="mb-5">
                <p class="font-bold text-[#2e2e2e] my-2">Size</p>
                <div class="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      aria-label={`Size ${size}`}
                      class={`rounded-full w-[45px] h-[45px] border-2 border-gray-900 flex justify-center items-center cursor-pointer`}
                      // bg-gray-900 text-white
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
              <p class="mb-3 text-gray-400 text-sm">ID: {currentItem.sku}</p>
              {/* ID Section End */}

              {/* Button Add Cart */}
              <button class="text-white text-xl tracking-wide font-bold bg-[#ed0000] rounded-lg p-3 w-full md:w-3/4">
                Add To Cart
              </button>
              {/* Button Add Cart End */}
            </div>
          </div>
        </div>
        {currentItem?.description && (
          <>
            <Separator title="Product Description" />
            <div
              class={`my-6 ${descriptionClassName}`}
              dangerouslySetInnerHTML={{ __html: product.description ?? "" }}
            />
          </>
        )}
      </div>
    </section>
  );
}
