import {
  ImageObject,
  Product,
  ProductDetailsPage,
  ProductLeaf,
} from "$live/std/commerce/types.ts";
import { useEffect, useMemo, useState } from "preact/hooks";
import { css, tw } from "twind/css";
import { Separator } from "$components/Separator.tsx";
import { Star } from "$components/icons/Star.tsx";
import ColorImages from "../islands/ColorImages.tsx";

import { PriceModel } from "../models/price-model.ts";
import ProductImage from "../islands/ImageProduct.tsx";

export interface Props {
  product?: ProductDetailsPage["product"] | null;
}

type ImageObjectWithValue = ImageObject & {
  value?: string;
};

function Counter() {
  const [count, setCount] = useState(1);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div class="h-[20px] w-[120px] rounded-full p-3 border-2 border-gray-900 flex justify-center items-center justify-between">
      <button
        aria-label="Decrement"
        onClick={handleDecrement}
        class={`text-lg px-2 cursor-pointer ${count === 1 ? "opacity-20" : ""}`}
      >
        -
      </button>
      <span class="text-sm">{count}</span>
      <button
        aria-label="Increment"
        onClick={handleIncrement}
        class={`text-lg px-2 cursor-pointer`}
      >
        +
      </button>
    </div>
  );
}

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

const getAllAvailableSizes = (product: Product) => {
  const sizesMap = createMapBySize(product);
  return [...sizesMap.values()].map((productLeaf) => {
    return productLeaf.additionalProperty?.filter(({ name }) =>
      name === "Size"
    )[0].value;
  })
    .filter((size): size is string => !!size);
};

const getAllAvailableColors = (product: Product) => {
  const colorsMap = createMapByColor(product);
  return [...colorsMap.values()].map((productLeaf) => {
    const imageSelected = productLeaf?.image?.at(0);
    if (imageSelected) {
      const imageData: ImageObjectWithValue = {
        ...imageSelected,
        value: (productLeaf.additionalProperty ?? [])
          .find((propertyData) => propertyData.name === "Color")?.value,
      };

      return imageData;
    }

    return null;
  })
    .filter((item): item is ImageObjectWithValue => !!item);
};

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

  const allAvailableSizes = useMemo(() => getAllAvailableSizes(product), [
    product,
  ]);
  const allAvailableColors = useMemo(() => getAllAvailableColors(product), [
    product,
  ]);

  const [colorSelected, setColorSelected] = useState(() =>
    allAvailableColors.at(0)?.value
  );
  const [sizeSelected, setSizeSelected] = useState(() =>
    allAvailableSizes.at(0)
  );

  const productLeafSelected = useMemo(() => {
    const productsLeaf = product.isVariantOf?.hasVariant ?? [];
    const currentItem = productsLeaf.find((productLeaf) => {
      const hasColorSelected = (productLeaf.additionalProperty ?? []).some(
        (propertyData) => {
          return propertyData.name === "Color" &&
            propertyData.value === colorSelected;
        },
      );
      const hasSizeSelected = (productLeaf.additionalProperty ?? []).some(
        (propertyData) => {
          return propertyData.name === "Size" &&
            propertyData.value === sizeSelected;
        },
      );

      return hasColorSelected && hasSizeSelected;
    });

    return currentItem ?? productsLeaf.at(0);
  }, [colorSelected, sizeSelected, product]);

  useEffect(() => {
    // Change URL
    const url = `${location.pathname}?skuId=${productLeafSelected?.sku}`;
    history.replaceState(null, "", url);
  }, [productLeafSelected]);

  return (
    <section class="w-full flex justify-center">
      <div class="max-w-[80rem] flex flex-col pt-12 px-10">
        <div class="flex justify-center">
          <div class="flex flex-col md:flex-row w-10/12">
            <div class="flex-auto flex flex-col w-full md:w-4/6 mb-5 md:mb-0">
              <ProductImage productLeafSelected={productLeafSelected} />
            </div>
            <div class="flex-auto w-full md:w-2/6">
              <h1 class="text-[#242424] text-3xl font-bold mb-4">
                {productLeafSelected?.name}
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
                    productLeafSelected?.offers?.lowPrice,
                    productLeafSelected?.offers?.highPrice,
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
                <ColorImages
                  title="Color"
                  images={allAvailableColors}
                  colorSelected={colorSelected}
                  onClick={setColorSelected}
                />
              </div>
              {/* Colors Section End */}

              {/* Sizes Section */}
              <div class="mb-5">
                <p class="font-bold text-[#2e2e2e] my-2">Size</p>
                <div class="flex flex-wrap gap-2">
                  {allAvailableSizes.map((size) => (
                    <button
                      aria-label={`Size ${size}`}
                      class={`
                        rounded-full w-[45px] h-[45px] border-2 border-gray-900 flex justify-center items-center cursor-pointer
                        ${sizeSelected === size ? "bg-gray-900 text-white" : ""}
                      `}
                      onClick={() => setSizeSelected(size)}
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
              <p class="mb-3 text-gray-400 text-sm">
                ID: {productLeafSelected?.sku}
              </p>
              {/* ID Section End */}

              {/* Button Add Cart */}
              <button class="text-white text-xl tracking-wide font-bold bg-[#ed0000] rounded-lg p-3 w-full md:w-3/4">
                Add To Cart
              </button>
              {/* Button Add Cart End */}
            </div>
          </div>
        </div>
        {productLeafSelected?.description && (
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
