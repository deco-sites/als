import FooterSections from "$components/Footer/FooterSections.tsx";
import FooterSignUpSection from "$components/Footer/FooterSignUpSection.tsx";
import FooterContactSection from "$components/Footer/FooterContactSection.tsx";
import links from "../data/links.ts";

export default function Footer() {
  return (
    <footer class="w-full bg-[#353535] text-white flex justify-center">
      {/* Big Screens */}
      <div class="hidden md:flex flex-col md:flex-row w-[1024px] py-10">
        <div class="hidden md:flex flex-1 justify-between">
          {FooterSections.slice(0, 3).map(({ label, content }) => (
            <div class="flex flex-col mx-6">
              <h3 class="text-primary font-semibold text-lg">
                {label}
              </h3>
              {content}
            </div>
          ))}
          <div class="flex flex-col mx-6 w-[230px]">
            <FooterSignUpSection />
            <FooterContactSection />
          </div>
        </div>
      </div>

      {/* Small Screens */}
      <div class="md:hidden w-full flex flex-col text-center">
        {/* Sign Up */}
        <FooterSignUpSection />

        {/* Contact */}
        <FooterContactSection />

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
              href={links?.social?.facebook}
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
              href={links?.social?.twitter}
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
              href={links?.social?.instagram}
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

        {/* Copy */}
        <section class="flex flex-col gap-4 py-4 items-center border-b border-[rgba(255,255,255,0.2)]">
          <p>©2022 Al's Sporting Goods. All Rights Reserved.</p>
        </section>
      </div>
    </footer>
  );
}
