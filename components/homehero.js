import Link from 'next/link'

export default function HomeHero(){
  return(
    <div className="">
  <div className="hero-container grid grid-cols-1 md:grid-cols-2 gap-20 h-full justify-end items-center">
   <div className='w-full h-full grid place-items-center sm:py-4'>
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold header-text">
            Konnic<span className="text-red-600">Hi</span>wa
          </h1> 
      <p className="mb-5">Welcome to the Portfolio of Jonathan Klein.</p>
      <p className="mb-5">I am a Developer, Designer, Artist, and tech enthusiast.</p>
      <p className="mb-5">Stay awhile and get to know me (and listen).</p>
      
      <div className="btn-group">
      <Link href="#portfolio"><button className="btn btn-md bg-mulled-wine-500 hover:bg-mulled-wine-700">View Work</button></Link>
      <Link href="/about"><button className="btn btn-md bg-pastel-green-500 hover:bg-pastel-green-700">Learn About Me</button></Link>
      </div>
    </div>
    </div>
  </div>
</div>
  )
}