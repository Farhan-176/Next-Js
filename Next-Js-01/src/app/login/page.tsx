"use client"
import { useRouter } from "next/navigation";



export default function LoginPage(){
    const router = useRouter();
    const navigate = (page: string)=>{
       router.push("/login/" + page) 
    }
    return(
        <>
        <br />
        <h1 className="heading">This is Login Page</h1>

    <br />
    <button onClick={()=>router.push("/")}>Go to Home page through button</button>
        <br />
        <br />
        <br />
    <button onClick={()=>navigate("loginStudents")}>go to Login Students Page through button</button>
        <br />
    <button onClick={()=>navigate("loginTeachers")}>go to Login teachers Page through button</button>

    </>
    )
}