"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home(){
  const router = useRouter();
  const navigation = (name : any)=>{
    router.push(name)
  }
  return(
    <>
    <h1> Link & Navigation |Nesting Routing | Common Layout</h1> 
    <br />
    <Link href="/login">Go to login page through link</Link>
    <br />
    <Link href="/about">Go to About page through link</Link>
    <br />
    <br />
    <button onClick={()=>navigation("/login")}>Go to login page through button</button>
    <br />
    <button onClick={()=>navigation("/about")}>Go to about page through button</button>
    </>
  )
}