import { Button } from "@heroui/react";
import Link from "next/link";
import { FaStarOfDavid } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className=" bg-background/70 border-b border-separator backdrop-blur-lg">
            <nav className="sticky top-0 z-40 w-full container mx-auto">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
    
      <p className="font-bold flex items-center gap-1">5 <FaStarOfDavid /> Tiles</p>
    </div>
    <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-tiles"}>All Tiles</Link>
          </li>
          {/* <li>
            <Link href={"/profile"}>Profile</Link>
          </li> */}
        </ul>
    <div>
        <Button>login</Button>
    </div>
  </header>
</nav>
        </div>
    );
};

export default Navbar;