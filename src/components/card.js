import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';

export default function Card({img, width, height, title, description, link, text}) {

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="card bg-base-100 shadow-xl image-full m-2"
    >
      <figure>
        <Image
          src={img}
          width={width}
          height={height}
          alt={title}
          className="object-cover"
          loading="lazy"
        />
      </figure>
      <div className="justify-center items-center card-body">
        <Link href={link} className="card-title">
          {title}
        </Link>
        <p>{description}</p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card-actions"
        >
          <Link
            href={link}
            className="btn btn-primary rounded-lg prose-stone hover:prose-stone"
          >
            {text}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}