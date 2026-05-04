'use client'
import { authClient} from "@/lib/auth-client";
import { Avatar, Button, Spinner } from "@heroui/react";
import Link from "next/link";
import { FaStarOfDavid } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () =>{
    const { data: session , isPending } = authClient.useSession()
    const user = session?.user
    console.log(user, isPending, 'nav session user')

    const handleSignOut = async() =>{
      await authClient.signOut();
      toast.success('Logout successful !')
    } 

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
                <li>
                  <Link href={"/profile"}>Profile</Link>
                </li>
              </ul>


          { isPending?
              // loading when user is pending
              <div className="flex flex-col items-center gap-2">
                    <Spinner color="success" />
                    
              </div> :          
            
                user ? 
                    // show avatar or image and logout btn when user data found
                    <div className="flex items-center space-x-2">

                      <Avatar size="sm">
                          <Avatar.Image
                              alt="Blue"
                              src={user?.image}
                              referrerPolicy="no-referrer"
                            />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                      </Avatar>
                        
                      <Button size="sm" variant="tertiary" className="bg-pink-400 text-white hover:bg-pink-500" onClick={handleSignOut} >Signout</Button>

                    </div> :

                     // show login & logout btn when user logout 
                    <div className="space-x-2">


                          <Link href={'/login'}> <Button size="sm" variant="tertiary" className="bg-green-600 hover:bg-green-500 text-white ">Login</Button></Link>

                          <Link href={'/register'}> <Button size="sm" variant="tertiary" className="bg-green-600 hover:bg-green-500 text-white ">Register</Button></Link>
                      

                    </div>

        
        
          }
  </header>
</nav>
        </div>
    );
};

export default Navbar;