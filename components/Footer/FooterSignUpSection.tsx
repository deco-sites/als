export default function FooterSignUpSection() {
  return (
    <section class="flex flex-col gap-4 md:gap-0 py-4 md:py-0 items-center md:items-start border-b border-[rgba(255,255,255,0.2)] md:border-0">
      <h3 class="text-2xl md:text-base text-white md:text-primary md:font-semibold">
        Sign Up
      </h3>
      <p class="hidden md:block text-sm">Get exclusive deals & offers.</p>
      <form
        action=""
        class="flex flex-row w-full max-w-[90%] md:max-w-none relative md:my-4"
      >
        <input
          type="email"
          placeholder="Your email address"
          class="bg-[#5c5c5c] flex-grow rounded-full h-9 pl-4 pr-9 text-white/80 placeholder-white"
        />
        <button
          type="submit"
          class="rounded-full h-[30px] w-[30px] bg-primary absolute right-[3px] top-[3px]"
          aria-label="Sign Up"
        />
      </form>
    </section>
  );
}
