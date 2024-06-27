import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-zinc-200 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto text-center md:text-left">
          <h3 className="text-lg font-bold mb-2">FitLife</h3>
          <p>&copy; 2024 FitLife. All rights reserved.</p>
        </div>
        <div className="w-full md:w-auto text-center mt-4 md:mt-0">
          <nav className="flex flex-wrap justify-center space-x-4">
            <Link href="/workouts" className="hover:underline">Workouts</Link>
            <Link href="/nutrition" className="hover:underline">Nutrition</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/forums" className="hover:underline">Forums</Link>
          </nav>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer