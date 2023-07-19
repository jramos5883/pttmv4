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
      <div className="container flex flex-col text-center xl:max-w-3xl 2xl:max-w-5xl">
        <p className="py-2">
          <span className={`text-3xl text-bold ${luckietGuy.className}`}>
            Business Information
          </span>
        </p>
        <div className="">
          <div className="font-mono text-lg py-2">
            <p className="font-mono text-lg py-2">Address: </p>
            <p className="font-mono text-lg py-2">
              1500 E Village Way, Ste 2221 Orange, Ca 92865
            </p>

            <p className="font-mono text-lg py-2">Phone Number: </p>
            <p className="font-mono text-lg py-2">(657)224-9081</p>
          </div>
          <div className="">
            <p className="font-mono text-lg py-2">Business Hours: </p>
            <p className="font-mono text-lg">Monday: 11:00AM - 7:00PM</p>
            <p className="font-mono text-lg">Tuesday: 11:00AM - 7:00PM</p>
            <p className="font-mono text-lg">Wensday: 11:00AM - 7:00PM</p>
            <p className="font-mono text-lg">Thursday: 11:00AM - 7:00PM</p>
            <p className="font-mono text-lg">Friday: 11:00AM - 7:00PM</p>
            <p className="font-mono text-lg">Saturday: 11:00AM - 6:30PM</p>
            <p className="font-mono text-lg pb-2">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
