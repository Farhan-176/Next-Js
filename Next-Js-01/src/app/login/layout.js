import Link from "next/link";
import './login.css'








export default function Layout({children}){
    return(
        <div> 
            <h1>THis is the Common Layout for LOGIN PORTION</h1>
            <ul className="login-menu">
                <li>
                    <h4>Login NavBar</h4>
                </li>
                <li>
                    <Link href={"/login"}>Login Main</Link>
                </li>
                <li>
                    <Link href={"/login/loginStudents"}>Students Main</Link>
                </li>
                <li>
                    <Link href={"/login/loginTeachers"}>Teacher Main</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}