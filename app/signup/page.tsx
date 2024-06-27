'use client'
import { Button, Checkbox, Divider, Input, Link } from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import fitnessBackground from "@/assets/fitness-background.jpg";
import { z } from 'zod';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    email:z.string().email().min(10,"Email must be minimum 10 characters long!"),
    password:z.string().min(8).max(50,"Password must be minimum 8 characters and maximum 50 characters long!")
})

type Credentials = z.infer<typeof formSchema>
const Signup = () => {

    const [email,setEmail] = useState("")
    const [emailRepeat,setEmailRepeat] = useState("")
    const [password,setPassword] = useState("")
    const [passwordRepeat,setPasswordRepeat] = useState("")
    const router = useRouter()

    const [isLoading,setIsLoading] = useState(false)

    const handleSignup = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const cred : Credentials = {
            email:email,
            password:password
        }
        const {success,error} = formSchema.safeParse(cred)
        if(success){
            try {
                if(email !== emailRepeat || password !== passwordRepeat){
                    return toast.error("Email and password must match!")
                }
                setIsLoading(true)
                await axios.post("/api/signup",{
                    ...cred
                })
                toast.success("Signup Success!")
                router.replace("/signin")
            } catch (error) {
                console.log(error)
                toast.error("Invalid Credentials!")
            } finally{
                setIsLoading(false)
            }
        }
        else{
            toast.error(error ? error.issues[0].message : "An error occured during form valdiation!Please check your inputs!")
        }
    }

    return (
        <div className="min-h-[90vh] grid grid-cols-12">
          <div className="hidden sm:flex col-span-4 bg-zinc-700 h-full relative">
            <Image src={fitnessBackground} height={500} width={700} alt='fitness-background' className='absolute top-0 left-0 object-cover h-full blur-sm'/>
            <div className='absolute top-0 left-0 text-zinc-50 w-full h-full flex flex-col gap-7 items-center justify-center bg-zinc-950/25'>
                <p className='text-4xl font-semibold'>FitLife</p>
                <p><i>Place where fit people are made!</i></p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-8 gap-3 p-4 sm:p-12 h-full flex items-center flex-col justify-center">
            <form
              className="flex flex-col gap-3 sm:w-[90%] w-full"
              onSubmit={handleSignup}
            >
              <p className="text-xl font-semibold w-full text-start">
                Welcome To FitLife
              </p>
                <Input
                    label="Email"
                    value={email}
                    isRequired
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                <Input
                label="Email Repeat"
                value={emailRepeat}
                isRequired
                onChange={(e) => setEmailRepeat(e.target.value)}
                type="email"
              />
              <Input
                label="Password"
                value={password}
                isRequired
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
                <Input
                label="Password Repeat"
                value={passwordRepeat}
                isRequired
                onChange={(e) => setPasswordRepeat(e.target.value)}
                type="password"
              />
              <div className="flex justify-between items-center w-full">
                <p className="underline">Forgot Password?</p>
                <Checkbox>Remember Me</Checkbox>
              </div>
              <Button
                fullWidth
                type="submit"
                isLoading={isLoading}
                disabled={isLoading}
              >
                Signup
              </Button>
              <Divider className="my-4" />
              <div className="w-full flex items-center justify-center">
                <p className="-mt-14 w-fit p-2 bg-white font-semibold">
                  Or Signup Using
                </p>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <Button startContent={<FaGoogle />}>Google</Button>
                <Button startContent={<FaFacebook />}>Facebook</Button>
              </div>
              <Divider className="my-4" />
              <div className="w-full flex items-center justify-center">
                <small className="-mt-14 w-fit p-2 bg-white font-semibold">
                  You already have an account?
                </small>
              </div>
    
              <Button
                as={Link}
                href="/signin"
                className="bg-zinc-900 text-white"
              >
                Signin
              </Button>
            </form>
          </div>
        </div>
      );
}

export default Signup