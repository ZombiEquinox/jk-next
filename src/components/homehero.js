import Image from 'next/image';
import Link from 'next/link'

export default function HomeHero(){
  return (
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='relative w-full m-w-[400px] aspect-square'>
      <Image
      src={'https://jk-docs.s3.us-east-2.amazonaws.com/images/JonathanKleinPortrait2.jpg'}
      fill
      priority
      alt='Jonathan Klein Portrait'
      sizes='(max-width: 400px) 100vw, 400px'
      className=''/>
    </div>
    <div>
       <h1 className="mb-5 text-5xl font-bold header-text">
              Konnic<span className="text-red-600">Hi</span>wa
            </h1>
            <p className="mb-5">Welcome to the Portfolio of Jonathan Klein.</p>
            <p className="mb-5">
              I am a Developer, Designer, Artist, and tech enthusiast.
            </p>
            <p className="mb-5">Stay awhile and get to know me (and listen).</p>
            <div className='join'>
              <Link href="#portfolio" className='btn btn-md rounded-lg btn-primary'>
                View My Work
              </Link>
              <Link href="/about" className='btn btn-md rounded-lg btn-secondary'>
                Learn About Me
              </Link>
            </div>
    </div>
  </div>
</div>
  );
}