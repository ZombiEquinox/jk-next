import Link from 'next/link';
import Image from 'next/image'

export default function Card(props){
  return(
    <div className="card shadow-xl image-full w-full m-2">
      <figure>
        <Image src={props.img} width={props.width} height={props.height} layout="responsive" className="object-cover"/>
      </figure> 
      <div className="justify-center items-center card-body">
        <Link href={props.link}><h2 className="card-title">{props.title}</h2></Link>
        <p>{props.description}</p> 
        <div className="card-actions">
          <Link href={props.link}><a className="btn btn-primary rounded-lg">{props.text}</a></Link>  
        </div>
      </div>
    </div>
  )
}