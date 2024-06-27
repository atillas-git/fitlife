import React from 'react'
import fitnessBackground from "@/assets/fitness-background.jpg";
import Image from 'next/image';
const HomeBoard = () => {
  return (
    <div className='w-full relative h-[70vh]'>
        <Image src={fitnessBackground} alt='fitnes-background' width={2000} height={2000} className=' absolute w-full h-full object-cover blur-sm top-0 left-0'/>
        <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center bg-zinc-900/30 text-zinc-50 gap-6'>
            <div className=' sm:w-[40rem] p-2 flex flex-col text-center gap-5'>
                <p className='text-3xl sm:text-3xl font-semibold'>Welcome to FitLife</p>
                <p className='text-sm sm:text-medium'>Discover, Share, and Achieve Your Fitness Goals!</p>
                <p className='text-sm sm:text-medium'>
                    At FitLife, we are dedicated to connecting fitness enthusiasts with expert trainers and nutritionists. Whether you are looking to find the perfect workout routine, a meal plan that fits your lifestyle, or share your own success stories and plans with others, 
                    FitLife is your go-to platform. Join our community today and take the next step in your fitness journey!
                </p>
                <p className='text-sm sm:text-medium'><b>Empower Your Journey, Share Your Success.</b></p>
            </div>
        </div>
    </div>
  )
}

export default HomeBoard