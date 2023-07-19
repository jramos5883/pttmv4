import Image from "next/image";

export default function Menu() {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-90 min-h-screen">
      <div className="container bg-black xl:max-w-3xl 2xl:max-w-5xl border-black border-8 rounded-sm">
        <Image
          src="/images/pokemenu.png"
          alt="Menu"
          layout="responsive"
          width={772}
          height={1000}
        />
      </div>
    </div>
  );
}
