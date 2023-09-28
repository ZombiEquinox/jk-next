import {IoLogoSteam, IoLogoXbox, IoLogoPlaystation, IoLogoTwitter, IoLogoLinkedin, IoMailOutline, IoLogoGithub } from 'react-icons/io5';
import Link from 'next/link';
import Image from "next/image";

export default function Footer(){

function year(){
  return new Date().getFullYear();
}

  return (
    <footer className="footer items-center p-4 bg-[#3c2f46] text-neutral-content mt-3 min-h-[60px]">
      <div className="items-center grid-flow-col">
        <Image
          src="https://jk-docs.s3.us-east-2.amazonaws.com/images/jk-Logo.png"
          width={50}
          height={33}
          alt="Jonathan Klein Footer Logo"
        />
        <Link href="/">JonathanAKlein.com</Link> &copy;{year()}
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
          <Link
            href="https://steamcommunity.com/id/zombiequinox/"
            target="_blank"
            rel="nofollow"
          >
            <IoLogoSteam height={32} width={32} />
          </Link>
          <Link
            href="https://live.xbox.com/en-US/Profile?gamertag=zombiequinox"
            target="_blank"
            rel="nofollow"
          >
            <IoLogoXbox />
          </Link>
          <Link
            href="https://psnprofiles.com/MrSandman87"
            target="_blank"
            rel="nofollow"
          >
            <IoLogoPlaystation />
          </Link>
          <Link
            href="https://twitter.com/zombiequinox"
            target="_blank"
            rel="nofollow"
          >
            <IoLogoTwitter />
          </Link>
          <Link
            href="https://github.com/ZombiEquinox"
            target="_blank"
            rel="nofollow"
          >
            <IoLogoGithub />
          </Link>
          <Link href="https://lnkd.in/4TxCZS" target="_blank" rel="nofollow">
            <IoLogoLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}