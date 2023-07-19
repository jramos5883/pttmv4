import Carousel from "./(components)/carousel.comp";

import { Luckiest_Guy } from "next/font/google";

const luckietGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-90 m-h-screen">
      <Carousel />
      <div className="container flex flex-col text-center xl:max-w-3xl 2xl:max-w-5xl">
        <p className="font-mono text-lg py-2">
          Delicious Poke only at Poke To The Moon!
        </p>
        <p className={luckietGuy.className}>
          <span className="text-3xl text-bold py-2">What is Poke?</span>
        </p>

        <p className="font-mono text-lg py-2">
          A poke bowl is a Hawaiian dish that typically consists of marinated
          diced raw fish served over a bed of rice with various toppings such as
          vegatables, fruits, and sauces. It is a healthy and flavorful meal
          that has become popular globally for its unique taste and versatility.
          Here at Poke to the Moon, we emphasize poke&apos;s versatility with
          our boujee add ons that are unique to our poke place. By combining
          traditional flavors with innovative twists, we strive to deliver a
          memorable culinary experience that showcases the best of what poke
          cuisine has to offer.
        </p>
      </div>
    </div>
  );
}
