import HyderbadMap from "@/assets/images/hyderbad-map.png";
import KochiMap from "@/assets/images/kochi-map.png";

interface PlaceCardProps {
  image: string;
  location: string;
}
const PlaceCard = ({ image, location }: PlaceCardProps) => {
  return (
    <div>
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
        {/* Green sidebar */}
        <div className="bg-primary absolute top-0 bottom-0 left-0 flex w-16 items-center justify-center rounded-l-3xl">
          <div className="-rotate-90 transform text-3xl font-bold whitespace-nowrap text-white">
            {location}
          </div>
        </div>

        {/* Main content */}
        <div className="ml-16 flex gap-8 bg-white p-8">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="my-10 w-full max-w-screen-xl">
        <div className="flex flex-wrap justify-around gap-5 px-2">
          <PlaceCard image={HyderbadMap} location={"HYDERBAD"} />
          <PlaceCard image={KochiMap} location={"KOCHI"} />
        </div>
      </div>
    </section>
  );
}
