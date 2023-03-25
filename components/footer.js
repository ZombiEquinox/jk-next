import style from './footer.module.scss'
import {IoLogoSteam, IoLogoXbox, IoLogoPlaystation, IoLogoTwitter, IoLogoLinkedin, IoMailOutline, IoLogoGithub } from 'react-icons/io5';
import Link from 'next/link';

export default function Footer(){

function year(){
  return new Date().getFullYear();
}

  return(
    <footer className={`${style.footer} flex flex-col md:flex-row gap-4 justify-between items-center p-1`}>
      <div className={style.copyright}>
        &copy;{year()} <Link href="/">JonathanAKlein.com</Link>
      </div>
      <div>
        <Link href="/myMess">Excuse My Mess</Link>
      </div>
      <div className={`${style.social} md:w-auto w-full`}>
      <Link href="https://steamcommunity.com/id/zombiequinox/" target="_blank" rel="nofollow"><IoLogoSteam height={32} width={32}/></Link>
      <Link href="https://live.xbox.com/en-US/Profile?gamertag=zombiequinox" target="_blank" rel="nofollow"><IoLogoXbox/></Link>
      <Link href="https://psnprofiles.com/MrSandman87" target="_blank" rel="nofollow"><IoLogoPlaystation/></Link>
      <Link href="https://twitter.com/zombiequinox" target="_blank" rel="nofollow"><IoLogoTwitter/></Link>
      <Link href="https://github.com/ZombiEquinox" target="_blank" rel="nofollow"><IoLogoGithub/></Link>
      <Link href="https://lnkd.in/4TxCZS" target="_blank" rel="nofollow"><IoLogoLinkedin/></Link>
      <Link href="mailto:jonathan.klein87@gmail.com"><IoMailOutline/></Link>
      </div>
    </footer>
  )
}