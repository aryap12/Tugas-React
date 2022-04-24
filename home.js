import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./home.module.css"
const Navbar = ({nav}) =>{
    const navigate = useNavigate();
    const NavbarHandler =()=>{
        if(nav.id===1){
            navigate("/")
        }
        if(nav.id===2){
            navigate("/product")
        }
        if(nav.id===3){
            navigate("/about")
        }
        if(nav.id===4){
            navigate("/wrong")
        }
    }
    return (
        <React.Fragment>
        <div>
          <ul className={styles.navbar}>
            <li><button className={styles.navbarButton} onClick={NavbarHandler}>{nav.title}</button></li>
          </ul>
        </div>
        </React.Fragment>
    )
}
export default Navbar;