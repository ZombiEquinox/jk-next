import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './menu.module.scss'

export default function Drawer(){

  const router = useRouter();

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <nav className="menu p-4 overflow-y-auto w-80 bg-base-100">
        <Link href="/" className={router.pathname == "/" ? `${style.active}` : ""}>
            Home
        </Link>
        <Link href="/web"className={router.pathname == "/web" ? `${style.active}` : ""}>
            Web Design and Development
        </Link>
        <Link href="/web" className={router.pathname == "/web" ? `${style.active}` : ""}>
            Web Design and Development
        </Link>
        <Link href="/video" className={router.pathname == "/video" ? `${style.active}` : ""}>
            Video
        </Link>
        <Link href="/graphic_design" 
            className={
              router.pathname == "/graphic_design" ? `${style.active}` : ""
            }
          >
            Graphic Design
        </Link>
        <Link href="/painting"  className={router.pathname == "/painting" ? `${style.active}` : ""}
          >
            Paintings
        </Link>
        <Link href="/drawing" className={router.pathname == "/drawing" ? `${style.active}` : ""}>
            Drawings
        </Link>
        <Link href="/interactive" 
            className={
              router.pathname == "/interactive" ? `${style.active}` : ""
            }
          >
            Interactive
        </Link>
        <Link href="/about" className={router.pathname == "/about" ? `${style.active}` : ""}>
            About
        </Link>
      </nav>
    </div>
  );
}