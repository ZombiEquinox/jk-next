import Image from 'next/image'
import Link from 'next/link'
import style from './menu.module.scss'

export default function Menu(){

  

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
    <label htmlFor="my-drawer-3" className="hamburger hamburger--spin" type="button"
        aria-label="Menu" aria-controls="navigation">
          <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
        </label>

    </header>

  </div>
)
}