import {Button, Input} from "@heroui/react";
export function SearchData() {
  return (
      <div className="flex justify-center items-center p-4 border rounded-lg bg-zinc-100/45 md:w-[50%]">

        <Input aria-label="Name" className=" rounded-none rounded-l-xl flex-1 w-full" placeholder=" search tiles by title " />
  
        <Button variant="outline" className="rounded-none rounded-r-xl bg-green-600 hover:bg-green-500 text-white ">search </Button>

      </div>
  
  )
}