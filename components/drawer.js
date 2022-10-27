import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './menu.module.scss'

export default function Drawer(){

  const router = useRouter();

  return(
    <div className="drawer-side">
       <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
       <nav className="menu p-4 overflow-y-auto w-80 bg-base-100">
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
  )
}