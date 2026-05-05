import { Button } from '@heroui/react';
import Link from 'next/link'
import { FaStarOfDavid } from 'react-icons/fa';

 
export default function NotFound() {
  return (
    <div  className='flex justify-center items-center'>
     <div className='card p-10 my-10 bg-white/50 backdrop-blur-lg shadow-lg border border-zinc-200/50'>
        <h2 className='text-2xl'>Page Not Found </h2>
        <p>Could not find requested resource!</p>
        <Link href="/"><Button className="bg-green-600 hover:bg-green-500 text-white ">Return Home</Button></Link>
     </div>
    </div>
  )
}