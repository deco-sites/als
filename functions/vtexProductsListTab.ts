import { toProduct } from "$live/std/commerce/vtex/transform.ts";

import type { Product } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";

import { vtex } from "../clients/instances.ts";

export interface TabProps {
  title: string;
  /** @description query to use on search */
  query: string;
  /** @description total number of items to display */
  count: number;
}

export interface Props {
  tabs: TabProps[]
}

export interface ProductsListTab {
  title: string,
  products: Product[]
}

/**
 * @title Product list loader
 * @description Usefull for shelves and static galleries.
 */
const productsListTabLoader: LoaderFunction<Props, ProductsListTab[]> = async (
  _req,
  ctx,
  props,
) => {
  const productsListPromises = props.tabs.map<Promise<ProductsListTab>>(async (tabSetting) => {
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
    const products = vtexProducts.map((p) => toProduct(p, p.items[0]));  

    return {
      title: tabSetting.title,
      products,
    }
  })

  const productsData = await Promise.all(productsListPromises)

  return {
    data: productsData,
  };
};

export default productsListTabLoader;
