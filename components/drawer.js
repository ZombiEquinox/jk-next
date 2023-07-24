import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Drawer(){

  const router = useRouter();

  return (
    <div className="drawer-side z-50">
      <label htmlFor="jk-drawer" className="drawer-overlay"></label>
      <nav className="menu p-4 pt-16 w-80 h-full bg-base-200 z-50">
        <Link className='text-xl mb-3' href="/">
            Home
        </Link>
        <Link className='text-xl mb-3' href="/web">
            Web
        </Link>
        <Link className='text-xl mb-3' href="/video">
            Video
        </Link>
        <Link className='text-xl mb-3' href="/graphic_design">
            Graphic Design
        </Link>
        <Link className='text-xl mb-3' href="/painting" >
            Paintings
        </Link>
        <Link className='text-xl mb-3' href="/drawing">
            Drawings
        </Link>
        <Link className='text-xl mb-3' href="/interactive">
            Interactive
        </Link>
        <Link className='text-xl mb-3' href="/about">
            About Me
        </Link>
      </nav>
    </div>
  );
}