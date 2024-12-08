import Link from "next/link";





export default function About(){
    return(
        <>
        <h1 className="heading">This is About Page.</h1>
        <Link href="/">Back to Home Page</Link>

        <br />
        <br />
        <Link href="/about/aboutCollege">Go to About College Page</Link>
        <br /><br />
        <Link href="/about/aboutStudents">Go to About Student Page</Link>
        </>
    )
}