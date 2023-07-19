import Image from "next/image";

import { Luckiest_Guy } from "next/font/google";

const luckietGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-90 m-h-screen">
      <div className="container bg-black xl:max-w-3xl 2xl:max-w-5xl border-black border-8 rounded-sm">
        <Image
          src="/images/pokeAboutUs.jpg"
          alt="Resturant Image"
          layout="responsive"
          width={4500}
          height={3000}
        />
      </div>
      <div className="container flex flex-col text-center xl:max-w-3xl 2xl:max-w-5xl">
        <p className="py-2">
          <span className={`text-3xl text-bold ${luckietGuy.className}`}>
            About Us
          </span>
        </p>

        <p className="text-indent font-mono text-lg pt-2">
          Welcome to Poke To The Moon, The ultimate destination for poke lovers
          in the city of Orange! Our unique poke shop is dedicated to brining
          you the most flavorful and satisfying poke bowls using the freshiest
          ingredients available. At Poke to the Moon, we take pride in our
          home-made signature sauces that are simply out of this world. Our Moon
          Sauce, a Cajun Garlic Butter, Ape Sauce, a Spicy Soy Garlic, and Doge
          Sauce, a Soy Sesame, are all uniquely crafted to elevate your poke
          bowl experience. Each sauce is carefully prepared with a perfect
          balance of flavors that will leave you wanting more.
        </p>
        <p className="text-indent font-mono text-lg py-2">
          Our custom poke bowls allow you to create your own masterpiece with a
          wide range of fresh and healthy ingredients to choose from. We also
          offer boujee toppings such as bone marrow, salmon skin, and truffle to
          take your poke bowl to the next level. Located inside the Village
          mall, we offer a comfortable and welcoming atmosphere where you can
          enjoy your poke bowl with family and friends. Our friendly staff is
          dedicated to providing exceptional service and making sure that you
          leave our shop satisfied and happy.
        </p>
        <p className="text-indent font-mono text-lg py-2">
          Thank you for choosing Poke to the Moon as your go-to poke spot. We
          look forward to serving you soon!
        </p>
      </div>
    </div>
  );
}
