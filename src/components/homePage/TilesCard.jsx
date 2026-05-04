import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const TilesCard = ({tiles}) => {
    return (
        <div>
             <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
            <Image
                src={tiles.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={tiles.title}
                className="object-cover rounded-xl w-full"
                />

                <Chip size="sm" className="absolute right-2 top-2">{tiles.category}</Chip>
            </div>

            <div>
                <h2 className="font-medium">{tiles.title}</h2>
            </div>

           <div className="flex gap-5">
             <div className="flex items-center gap-2">
                
                <p>{tiles.inStock}</p>
            </div>

            <Separator orientation="vertical"/>


               <div className="flex items-center gap-2">
               
                <p>{tiles.rating}</p>
            </div>
           </div>

     <Link href={`/all-tiles/${tiles.id}`}>      <Button variant="outline" className={'w-full'}>Details</Button></Link>
            
        </Card>
        </div>
    );
};

export default TilesCard;