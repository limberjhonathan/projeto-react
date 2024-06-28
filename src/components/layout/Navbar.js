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
                <ul class={styles.list}>
                    <li>
                        <Link to={"/"}>Home </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contato </Link>
                    </li>
                    <li>
                        <Link to={"/company"}>Empresa </Link>
                    </li>
                    <li>
                        <Link to={"/newproject"}>Novo Projeto </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}