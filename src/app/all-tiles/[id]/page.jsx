import { Button, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiDominoTiles } from 'react-icons/gi';
import { IoIosStar } from 'react-icons/io';

const TileDetails = async({params}) => {
    const {id} = await params
    const res = await fetch('https://5star-tiles-gallery-b13-a8-m48.vercel.app/data.json')
    const dataRes = await res.json()
   

    const tile = dataRes.find(p => p.id == id) 
    const {category, color, currency, description, dimensions, discountPrice, finish, image, image2, inStock, material, price, rating, slug, title, longDescription} = tile
    console.log(tile)
    return (
        <div className='my-16 md:my-20 space-y-10 p-4'>

        {/* first image section  */}
             <div className='card flex flex-col items-center md:flex-row gap-8 p-8  bg-zinc-50 py-10'>

                <div className="relative w-full h-[50vh] aspect-square flex-1 card">
                        <Image
                            src={image}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt={title}
                            className="object-cover rounded-xl w-full bg-zinc-50"
                            />                
                </div>

                <div className='flex-1 p-8 md:p-10 card'>
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <h3 className='text-lg font-medium'>{description}</h3>
                    <h3 className='text-lg font-medium'>{longDescription}</h3>

                   <ul className='flex items-center font-bold gap-4 py-4'>
                   
                    <li>{material}</li>
                    <li>{finish}</li>
                    <li>{color}</li>
                   </ul>


                     <div className="flex gap-5 pb-3">
                                 <div className="flex items-center gap-2">
                                    <GiDominoTiles />
                                    <p>{color}</p>
                                </div>
                    
                                <Separator orientation="vertical"/>
                    
                    
                                   <div className="flex justify-center items-center gap-2">
                                   <IoIosStar className='text-orange-500'/>
                                    <p>{rating}</p>
                                </div>
                    </div>

                    <ul className='py-3'>
                        <li><span className='text-sm'>Dimension</span>: {dimensions}</li>
                        <li> <span className='text-sm'>Stock</span> : <span className={`${inStock? 'text-green-500': 'text-red-500'}`}>{inStock ? 'Available' : 'Out of Stock'}</span></li>
                    </ul>
                    
                    <ul className='flex items-center justify-around'>
                        <li> {currency} : $ {price}</li>
                         
                        <Button variant="outline" className="bg-green-600 hover:bg-green-500 text-white font-bold px-8">Buy now</Button>
                    </ul>
                </div>

            </div>

    {/* second image section  */}

            <div className="relative w-full h-[60vh] md:h-[70vh] rounded-xl">
                <Image
                    src={image2}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={title}
                    className="object-cover rounded-xl w-full"
                    />

                    

                    {/* <Chip size="sm" className="absolute right-2 top-2 bg-amber-500 text-white">{tiles.category}</Chip> */}
            </div>

           <Link href={'/all-tiles'}> <Button variant="outline" className="text-center flex mx-auto bg-green-600 hover:bg-green-500 text-white font-bold px-8">back to All Tiles</Button></Link>

        </div>
    );
};

export default TileDetails;