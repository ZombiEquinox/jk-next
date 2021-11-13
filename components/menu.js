import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/images/jk-Logo.png'
import style from './menu.module.scss'

export default function Menu(){

  function closeNav(){
    document.getElementById("myNav").style.display="none";
  }

  function openNav(){
    document.getElementById("myNav").style.display="block";
  }


  return(
  <header className="">
    <div id="myNav" className={style.overlay}>
  <a href="javascript:void(0)" className={style.closebtn} onClick={closeNav}>&times;</a>
  <div className={style.overlayContent}>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
    <Link href="/contact"><a>Contact</a></Link>
    <Link href="/resume"><a>Resume</a></Link>
  </div>
</div>
<span className={style.open} onClick={openNav}>&#9776;</span>
  </header>
)
}