"use client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Fieldset, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
// import { authClient } from "@/lib/auth-client";

const LoginPage = () => {

    const onSubmit = async(e) => {

      e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

       
    };



    
    return (
        <div className=" bg-zinc-100">
              <div className="flex justify-center items-center h-[85vh]">

                <Form className="flex flex-col gap-4 card p-10 shadow-xl backdrop-blur-2xl bg-white/50 space-y-3" onSubmit={onSubmit}>

                <Fieldset.Legend>Login your account</Fieldset.Legend>
               
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
                      <Button type="submit" className="px-6  bg-purple-600 text-white">
                        <Check />
                        Login
                      </Button>
                      <Button type="reset" variant="secondary" className="px-6 text-purple-600">
                        Reset
                      </Button>
                    </div>
                <small> Don't have an account? Please <Link href={'/register'}><span className="text-green-600">Register </span></Link></small>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;