import { useRouter } from "next/router";

export default function BackBtn(){
  const router = useRouter();
  return (
    <button className="btn rounded-lg my-6" onClick={()=>router.back()}>
      Go Back
    </button>
  );
}