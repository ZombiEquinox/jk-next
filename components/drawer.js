import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Drawer(){

  const router = useRouter();

  return (
    <div className="drawer-side">
      <label htmlFor="jk-drawer" className="drawer-overlay"></label>
      <nav className="menu p-4 pt-16 w-80 h-full bg-base-200 z-50">
        <Link href="/">
            Home
        </Link>
        <Link href="/web">
            Web
        </Link>
        <Link href="/video">
            Video
        </Link>
        <Link href="/graphic_design">
            Graphic Design
        </Link>
        <Link href="/painting" >
            Paintings
        </Link>
        <Link href="/drawing">
            Drawings
        </Link>
        <Link href="/interactive">
            Interactive
        </Link>
        <Link href="/about">
            About Me
        </Link>
      </nav>
    </div>
  );
}