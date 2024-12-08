import Link from "next/link";

import './about.css'







export default function Layout({children}){
    return(
        <div>
            <ul className="about-heading">
                <li>
                <Link href={"/about"}>About Page</Link>
                </li>
                <li>
                <Link href={"/about/aboutCollege"}>College Page</Link>
                </li>
                <li>
                <Link href={"/about/aboutStudents"}>Students Page</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}