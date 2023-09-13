import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";

export default function Card(props){

  return (
    <div className="card bg-base-100 shadow-xl image-full m-2">
      <figure>
        <Image
          src={props.img}
          width={props.width}
          height={props.height}
          alt={props.title}
          className="object-cover"
          loading="lazy"
        />
      </figure>
      <div className="justify-center items-center card-body">
        <Link href={props.link}>
          <p className="card-title">{props.title}</p>
        </Link>
        <p>{props.description}</p>
        <div className="card-actions">
          <Link
            href={props.link}
            className="btn btn-primary rounded-lg prose-stone hover:prose-stone"
          >
            {props.text}
          </Link>
        </div>
      </div>
    </div>
  );
}