import style from './homehero.module.scss'
import Link from 'next/link'

export default function HomeHero(){
  return(
    <div className="home-hero h-full md:h-screen overflow-hidden">
  <div className="bg-neutral-focus hero-container grid grid-cols-1 md:grid-cols-2 gap-20 h-full justify-end items-center">
   <div className='w-full h-full grid place-items-center'>
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold header-text">
            Konnic<span className={style.hello}>Hi</span>wa
          </h1> 
      <p className="mb-5">Welcome to the Portfolio of Jonathan Klein.</p>
      <p className="mb-5">I am a Developer, Designer, Artist, and tech enthuiast.</p>
      <p className="mb-5">Stay awhile and get to know me (and listen).</p>
      
      <div className="btn-group">
      <Link href="#portfolio"><button className="btn btn-lg btn-primary">View Work</button></Link>
      <Link href="/about"><button className="btn btn-lg btn-secondary">Learn About Me</button></Link>
      </div>
    </div>
    </div>
    <div className='photo-area h-screen place-items-end'>
    </div>
  </div>
</div>
  )
}