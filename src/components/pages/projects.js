import { useLocation } from "react-router-dom"

import Message from "../layout/Message"
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

import styles from "./project.module.css"

export default function Projects(){
    const location = useLocation();
    let message = ''
    if(location.state){
        message = location.state.message
        console.log('message -------->', message)
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meu Projetos</h1>
                <LinkButton to={'/newproject'} text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass='start'>
                <p>Projetos...</p>
            </Container>
        </div>
    )
}