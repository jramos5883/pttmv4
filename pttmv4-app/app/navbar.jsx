import Link from "next/link";

import { Oleo_Script } from "@next/font/google";
import { Luckiest_Guy } from "@next/font/google";

const oleoScript = Oleo_Script({
  weight: "700",
  subsets: ["latin"],
});

const luckietGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div className="px-4 bg-gray-200 h-16 w-full flex flex-row justify-between items-center">
      <Link className="text-3xl" href="/">
        <p className={oleoScript.className}>Home</p>
      </Link>
      <Link className="text-3xl" href="/aboutus">
        <p className={oleoScript.className}>About Us</p>
      </Link>
      <h1 className={luckietGuy.className}>
        <span className="text-5xl text-bold">- POKE TO THE MOON -</span>
      </h1>
      <Link className="text-3xl" href="/menu">
        <p className={oleoScript.className}>Menu</p>
      </Link>
      <Link className="text-3xl" href="/location">
        <p className={oleoScript.className}>Location</p>
      </Link>
    </div>
  );
}
