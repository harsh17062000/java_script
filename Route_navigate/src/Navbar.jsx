import { Link,Outlet } from "react-router-dom"

const Navbar = () =>
{
    return (
        <>
            <nav>
                <ul style={{display:"flex",listStyle:"none",gap:"100px"}}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="about">ABOUT</Link></li>
                    <li><Link to="contact">CONTACT</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Navbar