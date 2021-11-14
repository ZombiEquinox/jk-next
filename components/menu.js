import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../public/images/jk-Logo.png'
import style from './menu.module.scss'

export default function Menu(){

  const router = useRouter();

  function closeNav(){
    document.getElementById("myNav").style.display="none";
  }

  function openNav(){
    document.getElementById("myNav").style.display="block";
  }

  return(
  <div className={style.menu}>
    <div id="myNav" className={style.overlay}>
      <a className={style.closebtn} onClick={closeNav}>&times;</a>
      <nav className={style.overlayContent}>
        <Link href="/"><a className={router.pathname == "/" ? "active" : ""}>Home</a></Link>
        <Link href="/painting"><a className={router.pathname == "/painting" ? "active" : ""}>Paintings</a></Link>
        <Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>About</a></Link>
        <Link href="/contact"><a className={router.pathname == "/active" ? "active" : ""}>Contact</a></Link>
        <Link href="/resume"><a className={router.pathname == "/resume" ? "active" : ""}>Resume</a></Link>
      </nav>
    </div>
    <header className="flex flex-row justify-between items-center">
      <Link href="/"><a>
        <Image 
        src={Logo}
        width={50}
        height={33}
        /></a>
      </Link>
    <span className={style.open} onClick={openNav}>&#9776;</span>
    </header>

  </div>
)
}