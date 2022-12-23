export interface Props {
  title: string;
  href: string;
}

export default function PromoBar(
  { title = "Banner Thin", href = "https://deco.cx" }: Props,
) {
  return (
    <div
      class="flex items-center justify-center w-full font-sans text-sm bg-primary text-white h-[29px]"
      aria-label="Promotion bar"
    >
      <div class="flex justify-center w-full max-w-[96rem]">
        <a href={href} class="tracking-wider">{title}</a>
      </div>
    </div>
  );
}
