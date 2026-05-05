import {Label, ListBox, Select} from "@heroui/react";

const getCategory = async() =>{
    const res = await fetch('https://5star-tiles-gallery-b13-a8-m48.vercel.app/category.json')

    return res.json()
}

export async function SelectByCategory() {
    const categoryInfo = await getCategory()
    console.log(categoryInfo)

  return (
    <Select className="min-w-64  p-4 border rounded-lg bg-zinc-100/45" placeholder="Select Tiles Category" selectionMode="multiple">
      {/* <Label>Countries to Visit</Label> */}
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox selectionMode="multiple">

            {
                categoryInfo.map(category =><ListBox.Item key={category.id} textValue={category.category}>
                        {category.category}
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                 )
            }

        </ListBox>
      </Select.Popover>
    </Select>
  );
}