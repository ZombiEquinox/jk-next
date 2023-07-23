import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";

export default function Card(props){

  return (
    <div className="card shadow-xl image-full m-2">
      <figure>
        <Image
          src={props.img}
          width={props.width}
          height={props.height}
          alt={props.title}
          className="object-cover"
          loading='lazy'
        />
      </figure>
      <div className="justify-center items-center card-body">
        <Link href={props.link}>
          <h2 className="card-title">{props.title}</h2>
        </Link>
        <p>{props.description}</p>
        <div className="card-actions">
          <Link href={props.link} 
              className="btn btn-primary rounded-lg prose-stone hover:prose-stone card-actions"
            >
              {props.text}
          </Link>
        </div>
      </div>
    </div>
  );
}