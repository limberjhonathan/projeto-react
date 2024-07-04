import { useState, useEffect } from 'react'

import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import Input from '../form/input'
import styles from './ProjectForm.module.css'

export default function ProjectForm({ handleSubmit, btnText, ProjectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(ProjectData || {})

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('http://localhost:5000/categories', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setCategories(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchCategories();
    }, []);

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        console.log("project -------> ", project)
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input handleOnChange={handleChange} type='text' text='Nome do projeto' name='name' placeHolder='Insira o nome do projeto' value={project.name ? project.name : ''}/>
            <Input handleOnChange={handleChange} type='number' text='Orçamento do projeto' name='budget' placeHolder='Insira o orçamento total' value={project.budget ? project.budget : ''}/>
            <Select handleOnChange={handleCategory} name="category_id" text="Selecione a categoria" options={categories} value={project.category ? project.category.id : ''}/>
            <SubmitButton text={btnText} />
        </form>
    )
}