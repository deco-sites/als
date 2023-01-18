export function Separator({ title }: { title: string }) {
  return (
    <div class="flex items-center">
      <hr class="w-full mr-6" />
      <h1 class="py-5 whitespace-nowrap font-semibold text-lg text-[#505050]">
        {title}
      </h1>
      <hr class="w-full ml-6" />
    </div>
  );
}
