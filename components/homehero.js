import style from './homehero.module.scss'
import Link from 'next/link'

export default function HomeHero(){
  return(
    <div className="hero min-h-screen bg-base-200">
  <div className="text-center hero-content">
    <div className="max-w-md">
      <p><small>Site is under redevelopment</small></p>
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
</div>
  )
}