import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';

export default function Card(props){

  return (
    <motion.div whileInView={{ opacity:1, y:0 }} initial={{ opacity: 0, y:100 }} transition={{ type:"spring", stiffness: 500, damping: 30 }} className="card bg-base-100 shadow-xl image-full m-2">
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
          <motion.Link whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            href={props.link}
            className="btn btn-primary rounded-lg prose-stone hover:prose-stone"
          >
            {props.text}
          </motion.Link>
        </div>
      </div>
    </motion.div>

  );
}