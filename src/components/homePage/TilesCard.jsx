import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { GiDominoTiles } from 'react-icons/gi';
import { IoIosStar } from 'react-icons/io';

const TilesCard = ({tiles}) => {
    return (
        <div>
             <Card className="border rounded-xl card bg-white/50 h-fit">
                    <div className="relative w-full aspect-square">
                    <Image
                        src={tiles.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={tiles.title}
                        className="object-cover rounded-xl w-full"
                        />

                        <Chip size="sm" className="absolute right-2 top-2 bg-amber-500 text-white">{tiles.category}</Chip>
                    </div>

                    <div className='py-5'>
                        <h2 className="font-medium text-lg">{tiles.title}</h2>
                    </div>

                    <div className="flex gap-5 pb-3">
                    <div className="flex items-center gap-2">
                        <GiDominoTiles />
                        <p>{tiles.color}</p>
                    </div>

                    <Separator orientation="vertical"/>


                    <div className="flex justify-center items-center gap-2">
                    <IoIosStar className='text-orange-500'/>
                        <p>{tiles.rating}</p>
                    </div>
                    </div>

            <Link href={`/all-tiles/${tiles.id}`}>      <Button variant="outline" className={' w-full bg-green-600 hover:bg-green-500 text-white font-bold'}>View Details</Button></Link>
                    
        </Card>
        </div>
    );
};

export default TilesCard;