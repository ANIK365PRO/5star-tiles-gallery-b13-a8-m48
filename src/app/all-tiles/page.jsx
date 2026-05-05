import { SearchData } from "@/components/all-tilesPage/SearchData";
import { SelectByCategory } from "@/components/all-tilesPage/SelectByCategory";
import TilesCard from "@/components/homePage/TilesCard";
import { Button } from "@heroui/react";
import Link from "next/link";


const tilesFetch = async() =>{
    const res = await fetch('https://5star-tiles-gallery-b13-a8-m48.vercel.app/data.json',{cache: 'no-store'})
    const dataRes = await res.json()
    return dataRes
}
const AllTilesPage = async() => {
   const data =  await tilesFetch()
    //    console.log(data)
    
       return (
           <div className='my-16 md:my-20 px-4'>
                <h1 className="text-2xl font-bold my-5">All Featured Tiles</h1>

               <div className="flex flex-col-reverse md:flex-row gap-5 items-center justify-between my-8">

                    <div className="flex-1">
                        <SelectByCategory ></SelectByCategory>
                    </div>
                
                    <SearchData className="flex-1"></SearchData>


               </div>
   
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                   {data.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)}
               </div>

              <Link href={'/all-tiles'} > <Button  variant="outline" className="flex md:hidden w-full mt-20 text-green-500 outline-green-500">Back to Top</Button></Link>
           </div>
       );
};

export default AllTilesPage;