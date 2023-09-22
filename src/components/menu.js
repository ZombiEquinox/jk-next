import Image from 'next/image'
import Link from 'next/link'

export default function Menu(){

  return (
    <div className="navbar justify-between sticky top-0 bg-primary px-4 z-50">
      <div className="">
        <Link href="/">
          <Image
            src="https://jk-docs.s3.us-east-2.amazonaws.com/images/jk-Logo.png"
            width={50}
            height={33}
            alt="Jonathan Klein Logo"
          />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/web">Web</Link>
          </li>
          <li>
            <Link href="/video">Video</Link>
          </li>
          <li>
            <Link href="/graphic_design">Graphic Design</Link>
          </li>
          <li>
            <Link href="/painting">Painting</Link>
          </li>
          <li>
            <Link href="/drawing">Drawing</Link>
          </li>
          <li>
            <Link href="/interactive">Interactive</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex lg:hidden">
        <label
          tabIndex={0}
          className="btn btn-ghost lg:hidden drawer-button"
          htmlFor="jk-drawer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
}