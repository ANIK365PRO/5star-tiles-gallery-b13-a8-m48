"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Fieldset, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
// import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const router = useRouter()

    const onSubmit = async(e) => {

        e.preventDefault()

        const name = e.target.name.value;
        const image = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, image, email, password)

        const { data, error } = await authClient.signUp.email({
            name: name, // required
            image: image, // required
            password: password, // required
            email:email,
            callbackURL: "/",
        });

        {
          data && toast.success('Welcome Register successful!') 
        }
        
        {!error && router.push('/')}
        
        {
          error && toast.warning(error.message + ' Or login your account.')
        }


         console.log(data, error
, 'data-error')
    };



    
    return (
        <div className=" bg-zinc-100">
              <div className="flex justify-center items-center py-20">

                <Form className="flex flex-col gap-4 card p-10 shadow-xl backdrop-blur-2xl bg-white/50 space-y-3" onSubmit={onSubmit}>


                    <Fieldset.Legend>Register your account</Fieldset.Legend>

                {/* name field  */}
                    <TextField
                      isRequired
                      name="name"
                      type="name"
            
                    >
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                      <FieldError />
                    </TextField>

                {/* photo Url field  */}
                    <TextField
                      isRequired
                      name="photo"
                      type="photo"
                      
                    >
                      <Label>Photo URL</Label>
                      <Input placeholder="Enter your photo url" />
                      <FieldError />
                    </TextField>

                {/* email field  */}
                    <TextField
                      isRequired
                      name="email"
                      type="email"
                      validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                          return "Please enter a valid email address";
                        }
                        return null;
                      }}
                    >
                      <Label>Email</Label>
                      <Input placeholder="Enter your email" />
                      <FieldError />
                    </TextField>

                {/* password field  */}
                    <TextField
                      isRequired
                      minLength={8}
                      name="password"
                      type="password"
                      validate={(value) => {
                        if (value.length < 8) {
                          return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                          return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                          return "Password must contain at least one number";
                        }
                        return null;
                      }}
                    >
                      <Label>Password</Label>
                      <Input placeholder="Enter your password" />
                      <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                      <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                      <Button type="submit" className=" bg-green-600 hover:bg-green-500 font-bold px-8 text-white">
                        <Check />
                        Register
                      </Button>
                      <Button type="reset" variant="secondary" className="text-green-600 hover:text-green-500  font-bold px-8">
                        Reset
                      </Button>
                    </div>
                      
                    <small> You have an account? Please <Link href={'/login'}><span className="text-green-600">Login </span></Link></small>
                </Form>
                
            </div>
        </div>
    );
};

export default RegisterPage;