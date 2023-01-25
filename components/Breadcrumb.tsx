import { ListItem } from "https://deno.land/x/live@0.3.39/std/commerce/types.ts";

export interface Props {
  items: ListItem<string>[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <div class="container m-auto flex py-3">
      {items.map((item, index) => (
        <a class="text-gray-500" href={item.item}>
          {index !== 0 && <span class="mx-2">{">"}</span>}
          {item.name}
        </a>
      ))}
    </div>
  );
}
