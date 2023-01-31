import { toProduct } from "$live/std/commerce/vtex/transform.ts";

import type { Product as DecoProduct } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";

import { vtex } from "../clients/instances.ts";
import { PriceModel } from "../models/price-model.ts";

export interface TabProps {
  title: string;
  /** @description query to use on search */
  query: string;
  /** @description total number of items to display */
  count: number;
}

export interface Props {
  tabs: TabProps[];
}

export interface Image {
  label?: string | null;
  url: string;
}

export interface ProductItemProjection {
  title: string;
  description: string;
  rating: number;
  image: Image;
  images: Image[];
  price?: string | null;
  percentageDiscount?: number | null;
  priceWithDiscount?: string | null;
  link: string;
}

export interface ProductsListTab {
  title: string;
  products: ProductItemProjection[];
}

export const ProductMapper = {
  create: (product: DecoProduct): ProductItemProjection => {
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

/**
 * @title Product list loader
 * @description Usefull for shelves and static galleries.
 */
const productsListTabLoader: LoaderFunction<Props, ProductsListTab[]> = async (
  _req,
  ctx,
  props,
) => {
  const productsListPromises = props.tabs.map<Promise<ProductsListTab>>(
    async (tabSetting) => {
      const count = tabSetting.count ?? 12;
      const query = tabSetting.query || "";

      const searchArgs = {
        query,
        page: 0,
        count,
        account: ctx.state.global.vtexconfig.account,
      };

      // search prodcuts on VTEX. Feel free to change any of these parameters
      const productsResult = await vtex.search.products(searchArgs);
      const { products: vtexProducts } = productsResult;

      // Transform VTEX product format into schema.org's compatible format
      // If a property is missing from the final `products` array you can add
      // it in here
      const products = vtexProducts.map((p) => ProductMapper.create(toProduct(p, p.items[0])));

      return {
        title: tabSetting.title,
        products,
      };
    },
  );

  const productsData = await Promise.all(productsListPromises);

  return {
    data: productsData,
  };
};

export default productsListTabLoader;
