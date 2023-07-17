import Image from "next/image";

export default function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <Image
        src="/images/pokemenu.png"
        alt="menu"
        width={500}
        height={500}
        layout="responsive"
      />
    </div>
  );
}
