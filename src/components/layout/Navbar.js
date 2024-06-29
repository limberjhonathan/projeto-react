import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import Container from './Container'

// import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

export default function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to={"/"}>Home </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={"/projects"}>Projetos </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={"/contact"}>Contato </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={"/company"}>Empresa </Link>
                    </li>
                    {/* <li class={styles.item}>
                        <Link to={"/newproject"}>Novo Projeto </Link>
                    </li> */}
                </ul>
            </Container>
        </nav>
    )
}