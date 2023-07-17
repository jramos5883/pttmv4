import Carousel from "./components/carousel.comp";
import Menu from "./routes/menu";

const images = [
  "/images/PoketotheMoon_028.jpg",
  "/images/Pokefish2.jpg",
  "/images/Pokenachos.jpg",
  "/images/Pokefish.jpg",
  "/images/Pokesign.jpg",
];

export default function LandingPage() {
  return (
    <div className="container">
      <h1>Landing Page!</h1>
      <Carousel images={images} />
      <Menu />
    </div>
  );
}
