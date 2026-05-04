import { SearchData } from "@/components/all-tilesPage/SearchData";
import TilesCard from "@/components/homePage/TilesCard";
import { Button } from "@heroui/react";


const tilesFetch = async() =>{
    const res = await fetch('http://localhost:5000/Tiles',{cache: 'no-store'})
    const dataRes = await res.json()
    return dataRes
}
const AllTilesPage = async() => {
   const data =  await tilesFetch()
    //    console.log(data)
    
       return (
           <div className='my-16 md:my-20 lg:my-24 px-4'>
                <div className="flex items-center w-3/5 justify-end">
                    <SearchData ></SearchData>
                    <Button variant="outline" >search by title</Button>
                </div>
              <h1 className="text-2xl font-bold my-5">All Featured Tiles</h1>
   
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                   {data.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)}
               </div>
           </div>
       );
};

export default AllTilesPage;