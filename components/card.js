import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";

export default function Card(props){
const onEnter = ({ currentTarget }) => {
  gsap.to(currentTarget, { backgroundColor: "#7CE69D",color:"#000" });
};

const onLeave = ({ currentTarget }) => {
  gsap.to(currentTarget, { backgroundColor: "#4D4C6D", color:"#fff" });
};

    const comp = useRef();

  useEffect(()=>{
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      gsap.to(".card-actions", {
        y: 100,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });
    }, comp);// <- Scope!
    
    return () => ctx.revert();
  }, []);
  return (
    <div className="card shadow-xl image-full m-2">
      <figure>
        <Image
          src={props.img}
          width={props.width}
          height={props.height}
          layout="responsive"
          className="object-cover"
        />
      </figure>
      <div className="justify-center items-center card-body">
        <Link href={props.link}>
          <h2 className="card-title">{props.title}</h2>
        </Link>
        <p>{props.description}</p>
        <div className="card-actions">
          <Link href={props.link} 
              className="btn btn-primary rounded-lg prose-stone hover:prose-stone"
            >
              {props.text}
          </Link>
        </div>
      </div>
    </div>
  );
}