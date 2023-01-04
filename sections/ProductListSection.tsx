import ProductList from "../islands/ProductList.tsx";

export interface TabProps {
  title: string;
  category: string;
}

export interface Props {
  title: string;
  tabs: TabProps[];
}

export default function ProductListSection({ title, tabs }: Props) {
  return (
    <section class="flex flex-col items-center w-full px-4 md:px-0 mx-auto lg:my-12">
      <div class="pb-8 lg:pb-12 mt-8 flex items-center w-full max-w-[96rem]">
        <h2 class="text-5xl font-semibold text-center w-full text-gray">
          {title}
        </h2>
      </div>
      <ProductList tabs={tabs} />
    </section>
  );
}
