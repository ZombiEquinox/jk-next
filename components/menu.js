import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './menu.module.scss'

export default function Menu(){

  const router = useRouter();



  function toggleNav(){
    let menuWidth = document.getElementById("myNav").offsetWidth;
    let hamburger = document.querySelector('.hamburger');

    hamburger.classList.toggle('is-active');


    if(menuWidth > 0){
      return closeNav();
    } else{
      return openNav();
    }
  }

  function closeNav(){
    document.getElementById("myNav").style.width="0";
    document.getElementById("page").style.marginRight = "0";
  }

  function openNav(){
    document.getElementById("myNav").style.width="250px";
    document.getElementById("page").style.marginRight="250px";
  }

  

  return(
  <div className={style.menu}>
    <header className="flex flex-row justify-between items-center">
      <Link href="/"><a>
        <Image 
        src="https://jk-docs.s3.us-east-2.amazonaws.com/images/jk-Logo.png"
        width={50}
        height={33}
        /></a>
      </Link>
    <button className="hamburger hamburger--spin" type="button"
        aria-label="Menu" aria-controls="navigation" onClick={toggleNav}>
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>
<div id="myNav" className={style.overlay}>
      <nav className={style.overlayContent}>
        <Link href="/"><a className={router.pathname == "/" ? `${style.active}` : ""}>Home</a></Link>
        <Link href="/web"><a className={router.pathname == "/web" ? `${style.active}` : ""}>Web Design and Development</a></Link>
        <Link href="/video"><a className={router.pathname == "/video" ? `${style.active}` : ""}>Video</a></Link>
        <Link href="/graphic_design"><a className={router.pathname == "/graphic_design" ? `${style.active}` : ""}>Graphic Design</a></Link>
        <Link href="/painting"><a className={router.pathname == "/painting" ? `${style.active}` : ""}>Paintings</a></Link>
        <Link href="/drawing"><a className={router.pathname == "/drawing" ? `${style.active}` : ""}>Drawings</a></Link>
        <Link href="/interactive"><a className={router.pathname == "/interactive" ? `${style.active}` : ""}>Interactive</a></Link>
        <Link href="/about"><a className={router.pathname == "/about" ? `${style.active}` : ""}>About</a></Link>
      </nav>
    </div>

    </header>

  </div>
)
}