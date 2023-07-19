import { Luckiest_Guy } from "next/font/google";

const luckietGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

export default function Location() {
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?q=place_id:EjIxNTAwIEUgVmlsbGFnZSBXYXkgc3RlIDIyMjEsIE9yYW5nZSwgQ0EgOTI4NjUsIFVTQSIkGiIKFgoUChIJwfQvbTHX3IARbsfuRFwGR9gSCHN0ZSAyMjIx&key=${process.env.GoogleMapsAPIKey}`;

  return (
    <div className="flex flex-col items-center bg-white bg-opacity-90 min-h-screen">
      <div className="border-black border-8 rounded-sm">
        <iframe
          width="800"
          height="600"
          loading="lazy"
          allowFullScreen
          src={googleMapsUrl}
        ></iframe>
      </div>
      <div className="container flex flex-col text-center xl:max-w-2xl 2xl:max-w-7xl">
        <p className={luckietGuy.className}>
          <span className="text-3xl text-bold">Buisness Information</span>
        </p>
        <div className="">
          <div className="">
            <p>Address:</p>
            <p>1500 E Village Way, Ste 2221 Orange, Ca 92865</p>

            <p>Phone Number: </p>
            <p>(657)224-9081</p>
          </div>
          <div className="">
            <p>Monday: 11:00AM - 7:00PM</p>
            <p>Tuesday: 11:00AM - 7:00PM</p>
            <p>Wensday: 11:00AM - 7:00PM</p>
            <p>Thursday: 11:00AM - 7:00PM</p>
            <p>Friday: 11:00AM - 7:00PM</p>
            <p>Saturday: 11:00AM - 6:30PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
