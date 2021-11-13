import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/images/jk-Logo.png'
import style from './menu.module.scss'

export default function Menu(){
  return(
  <header className="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative">
        <Link href="/"><a className="block"><span className="sr-only">Jonathan A Klein</span>
          <Image 
            src={Logo}
            width={48}
            height={30}
            alt="Themes.dev Logo" 
            title="Themes.dev Logo"
          />
        </a></Link>
<input type="checkbox" id={style.main-navigation-toggle} class={style.btn btn--close} title="Toggle main navigation" />
<label for="main-navigation-toggle">
  <span></span>
</label>
<nav id="main-navigation" class="nav-main">
  <ul class="menu">
    <li class="menu__item">
      <Link href="/"><a class="menu__link">Home</a></Link>
    </li>
    <li class="menu__item">
      <Link href="/about"><a class="menu__link">About</a></Link>
    </li>
    <li class="menu__item">
      <Link href="#0"><a class="menu__link">Portfolio</a></Link>
      <ul class="submenu">
        <li class="menu__item">
          <Link href="/portfolio/painting"><a class="menu__link">Paintings</a></Link>
        </li>
      </ul>
    </li>
    <li class="menu__item">
      <Link href="/contact"><a class="menu__link">Contact</a></Link>
    </li>
    <li class="menu__item">
      <Link href="/resume"><a class="menu__link">Resume</a></Link>
    </li>
  </ul>
</nav>
</header>
)
}