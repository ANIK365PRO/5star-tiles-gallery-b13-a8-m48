
import TilesCard from './TilesCard';

const tilesFetch = async() =>{
    const res = await fetch('http://localhost:5000/Tiles',{cache: 'no-store'})
    const dataRes = await res.json()
    return dataRes
}

const FeaturedTiles = async() => {
   const data =  await tilesFetch()
    console.log(data)
    const top8Data = data.slice(0,8)
    return (
        <div className='my-16 md:my-20 lg:my-24 px-4'>
           <h1 className="text-2xl font-bold my-5">Featured Tiles</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {top8Data.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)}
            </div>
        </div>
    );
};

export default FeaturedTiles;