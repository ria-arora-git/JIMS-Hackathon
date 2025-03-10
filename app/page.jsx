import React from 'react'
import Image from 'next/image'
import sample from '@/public/sample.webp'
import logo from '@/public/logo.svg'


function landing() {
  return (
    <>
    <header className='w-full bg-purple-800 h-20 flex justify-between items-center p-4'>
      <div className='flex justify-between items-center'>
      <div>
        <Image
        src={logo}
        alt='logo'
        className='h-20 w-20 p-1 ml-6'
        />
      </div>
      <div>
        <h1 className='text-white text-4xl font-bold ml-2'>RentoAI</h1>
      </div>
      </div>
      <div className='p-2 mx-8 flex justify-between text-xl font-semibold text-white gap-14'>
      <a href="/advertisements">Latest</a>
      <a href="/chatpage">AiBot</a>
      <a href="/sign-in">SignUp</a>
      </div>
        
    </header>
    <main className="h-screen mx-auto bg-purple-50">
        <div className="mx-auto bg-white w-5/6 my-8 p-6 gap-3 pt-0">
        <div className="flex justify-between items-center mx-auto bg-black h-[60vh] w-full rounded-3xl">
        <div className="p-4 mx-auto flex flex-col">
          <h1 className="text-white font-bold text-4xl p-6">Your Own AI to Find Perfect Home!</h1>
          <p className="text-white p-6 text-xl">Find the home of your desires  <br></br> with just few prompts.</p>
          <a href='/advertisements'><button className='bg-white text-black p-4 mx-6'>Get Started</button></a>
        </div>
        
      <div className="p-4 mx-auto">
        <Image
        src={sample}
        alt='sample'
        className='h-[45vh] w-[45vh] rounded-lg'
        />
      </div>
      </div>
      <h1 className='p-8 text-center text-3xl text-black font-bold'>What Makes <span className='text-purple-600'>RentoAI</span> unique?</h1>
        <div className='flex justify-between items-center gap-4'>
        <div className="mx-auto w-1/3 bg-purple-100 h-40 rounded-xl">
        <h1 className='text-xl font-bold text-black px-4 pt-4 text-center'>Easy Renting and Selling</h1>
        <p className='p-4'>A platform that connects buyers and sellers.</p>
        </div>
        <div className="mx-auto w-1/3 bg-purple-100 h-40 rounded-xl">
        <h1 className='text-xl font-bold text-black px-4 pt-4 text-center'>Authentic Details</h1>
        <p className='p-4'>AI database is taken from 99acres making it realible.</p>
        </div>
        <div className="mx-auto w-1/3 bg-purple-100 h-40 rounded-xl">
        <h1 className='text-xl font-bold text-black px-4 pt-4 text-center'>Fully Personalized Results</h1>
        <p className='p-4'>Choose your prompts and get your results.</p>
        </div>
        </div>
      </div>
    </main>
    <footer className="h-[6vh] bg-purple-800 w-full py-4">
        <p className="text-white text-center">© RentoAI</p>
      </footer>
    </>
  )
}

export default landing

