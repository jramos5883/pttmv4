import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-200 h-16 w-full">
      <h1 className="text-2xl">Navbar!</h1>
      <Link href="/">Home Page</Link>
      <Link href="/aboutus">About Us</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/location">Location</Link>
    </div>
  );
}
