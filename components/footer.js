import style from './footer.module.scss'
import {IoLogoSteam, IoLogoXbox, IoLogoPlaystation, IoLogoTwitter, IoLogoLinkedin, IoMailOutline, IoLogoGithub } from 'react-icons/io5';
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
      <div>
        <Link href="/myMess">Excuse My Mess</Link>
      </div>
      <div className={style.social}>
      <a href="https://steamcommunity.com/id/zombiequinox/" target="_blank" rel="nofollow"><IoLogoSteam height={32} width={32}/></a>
      <a href="https://live.xbox.com/en-US/Profile?gamertag=zombiequinox" target="_blank" rel="nofollow"><IoLogoXbox/></a>
      <a href="https://psnprofiles.com/MrSandman87" target="_blank" rel="nofollow"><IoLogoPlaystation/></a>
      <a href="https://twitter.com/zombiequinox" target="_blank" rel="nofollow"><IoLogoTwitter/></a>
      <a href="https://github.com/ZombiEquinox" target="_blank" rel="nofollow"><IoLogoGithub/></a>
      <a href="https://lnkd.in/4TxCZS" target="_blank" rel="nofollow"><IoLogoLinkedin/></a>
      <a href="mailto:jonathan.klein87@gmail.com"><IoMailOutline/></a>
      </div>
    </footer>
  )
}