import style from './footer.module.scss'
import {IoLogoSteam, IoLogoXbox, IoLogoPlaystation, IoLogoTwitter, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function Footer(){

function year(){
  return new Date().getFullYear();
}

  return(
    <footer className={style.footer}>
      <div className={style.copyright}>
        &copy;{year()} <Link href="/">JonathanAKlein.com</Link>
      </div>
      <div className={style.social}>
      <Link href="https://steamcommunity.com/id/zombiequinox/"><IoLogoSteam height={32} width={32}/></Link>
      <Link href="https://live.xbox.com/en-US/Profile?gamertag=zombiequinox"><IoLogoXbox/></Link>
      <Link href="https://psnprofiles.com/MrSandman87"><IoLogoPlaystation/></Link>
      <Link href="https://twitter.com/zombiequinox"><IoLogoTwitter/></Link>
      <Link href="https://lnkd.in/4TxCZS"><IoLogoLinkedin/></Link>
      <Link href="/contact"><IoMailOutline/></Link>
      </div>
    </footer>
  )
}