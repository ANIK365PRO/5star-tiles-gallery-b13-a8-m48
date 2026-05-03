import { Button } from "@heroui/react";
import Link from "next/link";
// import bannerImg from '/banner.jpeg'


const Banner = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/27460891/pexels-photo-27460891.jpeg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Discover Your Perfect Tile Aesthetic
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
           Premium quality tiles designed for modern living
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
               Browse Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;