'use client'
import { authClient} from "@/lib/auth-client";
import { Avatar, Button, Spinner } from "@heroui/react";
import Link from "next/link";
import { FaStarOfDavid } from "react-icons/fa";
import { toast } from "react-toastify";
import { NavDisableBtn, navDisableBtn } from './NavDisableBtn';
import NavLink from "./NavLink";
import { redirect } from "next/navigation";


const Navbar = () =>{
    const { data: session , isPending } = authClient.useSession()
    const user = session?.user
    // console.log(user, isPending, 'nav session user')

    const handleSignOut = async() =>{
      await authClient.signOut();
      toast.success('Logout successful !')
      redirect('/')
    } 

    

    return (
        <div className=" bg-white border-b border-separator backdrop-blur-lg sticky top-0 z-20">
            <nav className="sticky top-0 z-40 w-full container mx-auto">
                <header className="flex h-16 items-center justify-between px-6">
                        <div className="flex items-center gap-3">
                         <NavDisableBtn ></NavDisableBtn>
                          <p className="font-bold text-xl flex items-center gap-1">5 <FaStarOfDavid /> Tiles</p>
                        </div>

                        <ul className="hidden md:flex items-center gap-5 text-sm">
                               <li>
                                <NavLink href={"/"}>Home</NavLink>
                              </li>
                              <li>
                                <NavLink href={"/all-tiles"}>All Tiles</NavLink>
                              </li>
                              <li>
                                <NavLink href={"/profile"}>Profile</NavLink>
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