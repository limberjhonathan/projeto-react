import { useLocation } from "react-router-dom"

import Message from "../layout/Message"
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCards";

import styles from "./project.module.css"
import { useState, useEffect } from "react";

export default function Projects(){
    const [projects, setProjects] = useState([])
    
    const location = useLocation();
    let message = ''
    if(location.state){
        message = location.state.message
        console.log('message -------->', message)
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json',
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meu Projetos</h1>
                <LinkButton to={'/newproject'} text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass='start'>
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard
                        id={project.id} 
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                    />
                ))}
            </Container>
        </div>
    )
}