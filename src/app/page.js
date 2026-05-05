import Banner from "@/components/homePage/Banner";
import FeaturedTiles from "@/components/homePage/FeaturedTiles";
import Marque from "@/components/homePage/Marque";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marque></Marque>
      <FeaturedTiles></FeaturedTiles>
    </div>
  );
}
