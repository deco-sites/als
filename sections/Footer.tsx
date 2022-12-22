import FooterAccordion, { sections } from "../components/FooterAccordion.tsx";

function SignUpSection() {
  return (
    <section class="flex flex-col gap-4 md:gap-0 py-4 md:py-0 items-center md:items-start border-b border-[rgba(255,255,255,0.2)] md:border-0">
      <h3 class="text-2xl md:text-base text-white md:text-primary md:font-semibold">Sign Up</h3>
      <p class="hidden md:block text-sm">Get exclusive deals & offers.</p>
      <form action="" class="flex flex-row w-full max-w-[90%] md:max-w-none relative md:my-4">
        <input
          type="email"
          placeholder="Your email address"
          class="bg-[#5c5c5c] flex-grow rounded-full h-9 pl-4 pr-9 text-white/80 placeholder-white" />
        <button type="submit" class="rounded-full h-[30px] w-[30px] bg-primary absolute right-[3px] top-[3px]" />
      </form>
    </section>
  )
}

function ContactSection() {
  return (
    <section class="flex flex-col gap-4 py-4 items-center md:items-start border-b border-[rgba(255,255,255,0.2)] md:border-0">
      <div class="flex flex-row justify-center items-center md:justify-start gap-8 md:gap-3">
        <a
          href=""
          title="Store Locations"
          class="flex w-10 h-10 justify-center items-center"
        >
          <img
            alt="Store Locations"
            crossOrigin="anonymous"
            data-src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/f285fa14-4aa1-43ed-8047-9f2b92d001f6___b7fe3b9c1e0023323621a294c3bcfeef.svg"
            src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/f285fa14-4aa1-43ed-8047-9f2b92d001f6___b7fe3b9c1e0023323621a294c3bcfeef.svg"
            loading="lazy"
            width={30}
            height={30}
            class="h-8"
          />
        </a>
        <a
          href="tel:4352105356"
          title="Call Us"
          class="flex w-10 h-10 justify-center items-center"
        >
          <img
            alt="Call Us"
            crossOrigin="anonymous"
            data-src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/11a29410-46bf-4a63-90ee-73f52285fc31___1b935ef5a03bd6c6ee0e7fe7a1b539b5.svg"
            src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/11a29410-46bf-4a63-90ee-73f52285fc31___1b935ef5a03bd6c6ee0e7fe7a1b539b5.svg"
            loading="lazy"
            width={30}
            height={30}
          />
        </a>
        <a
          href="mailto:cs@als.com"
          title="Email Us"
          class="flex w-10 h-10 justify-center items-center"
        >
          <img
            alt="Email Us"
            crossOrigin="anonymous"
            data-src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/a0f302c4-94c3-462c-aab7-cbbf60bf7157___1f71b308d4bfe4d7975e6c45bfd923cf.svg"
            src="https://alssports.vtexassets.com/assets/vtex.file-manager-graphql/images/a0f302c4-94c3-462c-aab7-cbbf60bf7157___1f71b308d4bfe4d7975e6c45bfd923cf.svg"
            loading="lazy"
            width={30}
            height={30}
          />
        </a>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer class="w-full bg-[#353535] text-white flex justify-center">
      {/* Big Screens */}
      <div class="hidden md:flex flex-col md:flex-row w-[1024px] py-10">
        <div class="hidden md:flex flex-1 justify-between">
          {sections.slice(0, 3).map(({ label, content }) => (
            <div class="flex flex-col mx-6">
              <h3 class="text-primary font-semibold text-lg">{label}</h3>
              {content}
            </div>
          ))}
          <div class="flex flex-col mx-6 w-[230px]">
            <SignUpSection />
            <ContactSection />
          </div>
        </div>
      </div>

      {/* Small Screens */}
      <div class="md:hidden w-full flex flex-col text-center">

        {/* Sign Up */}
        <SignUpSection />

        {/* Contact */}
        <ContactSection />

        {/* Quick Links */}
        <section class="flex flex-col gap-4 py-4 items-center border-b border-[rgba(255,255,255,0.2)]">
          <nav>
            <h3 class="text-primary font-semibold text-lg">Quick Links</h3>
            <ul class="list-none flex flex-col gap-1 my-2">
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Returns / Exchanges</a>
              </li>
              <li>
                <a href="">Shipping</a>
              </li>
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Carrers</a>
              </li>
              <li>
                <a href="">Accessibility</a>
              </li>
            </ul>
          </nav>
        </section>

        {/* Social */}
        <section class="flex flex-col gap-4 py-4 items-center border-b border-[rgba(255,255,255,0.2)]">
          <div class="flex flex-row gap-2 justify-center items-center">
            <a
              href="https://www.facebook.com/AlsSportingGoods"
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
              <img
                alt="Facebook"
                crossOrigin="anonymous"
                src="https://alssports.vtexassets.com/arquivos/ico-Facebook.png"
                loading="lazy"
                width={24}
                height={24}
              />
            </a>
            <a
              href=""
              target="_blank"
              title="Twitter"
              rel="noopener noreferrer"
            >
              <img
                alt="Twitter"
                crossOrigin="anonymous"
                src="https://alssports.vtexassets.com/arquivos/ico-Twitter.png"
                loading="lazy"
                width={24}
                height={24}
              />
            </a>
            <a
              href=""
              target="_blank"
              title="Instagram"
              rel="noopener noreferrer"
            >
              <img
                alt="Instagram"
                crossOrigin="anonymous"
                src="https://alssports.vtexassets.com/arquivos/ico-Instgram.png"
                loading="lazy"
                width={24}
                height={24}
              />
            </a>
          </div>
        </section>

        {/* Copywrite */}
        <section class="flex flex-col gap-4 py-4 items-center border-b border-[rgba(255,255,255,0.2)]">
          <p>©2022 Al's Sporting Goods. All Rights Reserved.</p>
        </section>
      </div>
    </footer>
  );
}
