"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { LuNotebookPen } from "react-icons/lu";
import { RiGhost2Line, RiTeamFill } from "react-icons/ri";

export function UpdateProfileModal() {

    const handleOnSubmit = async(e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value

        console.log(name, image, 'modal info')

        await authClient.updateUser({
            image: image,
            name: name,
        })
    }


  return (
    <Modal>

      <Button variant="secondary" className="bg-green-600 hover:bg-green-500 font-bold text-white px-8"> <RiGhost2Line/> Update Feature</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <LuNotebookPen className="size-5 text-green-600 hover:text-green-500 font-bold"/>
               
              </Modal.Icon>
              <Modal.Heading>Update your profile</Modal.Heading>

            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your image url" />
                  </TextField>
                  
                    <Modal.Footer>
                        <Button slot="close" variant="secondary" className="text-green-600 hover:text-green-500 font-bold  px-8">
                            Cancel
                        </Button>
                        <Button type="submit" slot="close" className="bg-green-600 hover:bg-green-500 font-bold text-white px-8">Save</Button>
                    </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}