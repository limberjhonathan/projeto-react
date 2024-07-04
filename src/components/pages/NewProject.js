import { useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

import ProjectForm from '../project/ProjectForm'
import styles from './NewProjetc.module.css'

export default function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
        // project.id = uuidv4();
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projects', { message: 'Projeto criado com sucesso!' });
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>formulário</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
        </div>
    )
}