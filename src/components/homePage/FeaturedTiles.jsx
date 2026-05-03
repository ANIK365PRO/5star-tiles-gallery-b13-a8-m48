import React from 'react';
import TilesCard from './TilesCard';

const FeaturedTiles = async() => {
    const res = await fetch('http://localhost:3000/data.json')
    const data = await res.json()
    console.log(data)
    return (
        <div>
           <h1 className="text-2xl font-bold my-5">Top Generations</h1>

            <div className="grid grid-cols-4 gap-5">
                {data.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)}
            </div>
        </div>
    );
};

export default FeaturedTiles;