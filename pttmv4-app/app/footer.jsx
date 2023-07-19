import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa6";

import { Luckiest_Guy } from "@next/font/google";

const luckietGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="px-4 bg-gray-200 h-16 w-full flex flex-row justify-between items-center">
      <h1 className={luckietGuy.className}>
        <span className="text-3xl text-bold">POKE TO THE MOON Inc.</span>
      </h1>
      <div className="flex flex-row">
        <a
          className="text-3xl px-4"
          href="https://www.tiktok.com/@poketothemoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="" />
        </a>
        <a
          className="text-3xl px-4"
          href="https://www.instagram.com/poketothemoon/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="" />
        </a>
        <a
          className="text-3xl px-4"
          href="https://www.facebook.com/profile.php?id=100083836400198"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="" />
        </a>
      </div>
    </div>
  );
}
