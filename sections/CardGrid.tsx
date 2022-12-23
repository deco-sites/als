import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Card {
  title: string;
  subtitle: string;
  link: string;
  button: string;
  image: LiveImage;
}

export interface Props {
  cards: Card[];
  title?: string;
}

function Card({
  title,
  subtitle,
  link,
  button,
  image,
}: Card) {
  return (
    <div
      class="w-full h-[400px] md:h-[500px] flex flex-col-reverse rounded-xl bg-cover bg-center"
      style={`background-image:url('${image}'); box-shadow:0 3px 6px rgb(0 0 0 / 83%)`}
    >
      <div class="bg-[rgba(0,0,0,0.7)] text-white p-6 rounded-bl-xl rounded-br-xl">
        <h3 class="text-5xl font-semibold my-2">{title}</h3>
        <p class="my-2">{subtitle}</p>
        <a
          href={link}
          class="w-[200px] h-12 flex justify-center items-center bg-primary hover:bg-dark-blue text-white font-medium uppercase rounded-lg"
        >
          {button}
        </a>
      </div>
    </div>
  );
}

export default function CardGrid({
  cards = [],
  title,
}: Props) {
  return (
    <div class="w-full">
      <ul class="flex flex-col md:flex-row gap-10 md:gap-12 md:px-12 w-full max-w-[96rem] p-6">
        {cards.map(({ title, subtitle, link, button, image }) => (
          <li class="w-full flex justify-center items-stretch">
            <Card
              title={title}
              subtitle={subtitle}
              link={link}
              button={button}
              image={image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
