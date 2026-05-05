"use client";

import {Bars, Pencil, SquarePlus, TrashBin} from "@gravity-ui/icons";
import {Button, Description, Dropdown, Header, Kbd, Label, Separator} from "@heroui/react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { GiDominoTiles } from "react-icons/gi";

export function NavDisableBtn() {
   
  return (
    <Dropdown >
      <Button size="sm" isIconOnly aria-label="Menu" variant="secondary" className="flex md:hidden">
        <Bars className="outline-none" />
      </Button>
      <Dropdown.Popover className="min-w-[220px]">
        <Dropdown.Menu
          disabledKeys={["delete-file"]}
          onAction={(key) => console.log(`Selected: ${key}`)}
        >
           <Dropdown.Section>
                             
                    <Dropdown.Item id="Home" textValue="Home" className="flex justify-center border">
                        
                       <Link href={'/'} className="flex items-center gap-4">
                        <div className="flex h-8 items-center justify-center pt-px">
                                <FaHome className="size-4 shrink-0 text-muted" />
                            </div>

                            <div className="flex flex-col">
                                <Label>Home</Label>
                                
                            </div>
                       </Link>
                    
                    </Dropdown.Item>
            
           
                    <Dropdown.Item id="All-Tiles" textValue="All-Tiles" className="flex justify-center">
                        
                        <Link href={'/all-tiles'} className="flex items-center gap-4">
                            <div className="flex h-8 items-center justify-center pt-px">
                            <GiDominoTiles className="size-4 shrink-0 text-muted" />
                        </div>

                        <div className="flex flex-col">
                            <Label>All-Tiles</Label>
                            
                        </div>
                        </Link>
                    
                    </Dropdown.Item>
                
        
               
                    <Dropdown.Item id="Profile" textValue="Profile" className="flex justify-center">
                        <Link href={'/profile'} className="flex items-center gap-4">
                            <div className="flex h-8 items-center justify-center pt-px">
                            <FaPersonRifle className="size-4 shrink-0 text-muted" />
                        </div>

                        <div className="flex flex-col">
                            <Label>Profile</Label>
                            
                        </div>
                        </Link>
                    
                    </Dropdown.Item>
                

          </Dropdown.Section>
           
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}