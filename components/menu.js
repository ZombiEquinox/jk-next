import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
    <header className="flex flex-row justify-between items-center">
      <Link href="/"><a>
        <Image 
        src="https://jk-docs.s3.us-east-2.amazonaws.com/images/jk-Logo.png"
        width={50}
        height={33}
        /></a>
      </Link>
    <span className={style.open} onClick={openNav}>&#9776;</span>
    </header>

  </div>
)
}