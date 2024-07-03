import { useState, useEffect } from 'react'

import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import Input from '../form/input'
import styles from './ProjectForm.module.css'

export default function ProjectForm({btnText}) {

    const [categories, setCategories] = useState([])

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

    return (
        <form className={styles.form}>
            <Input type='text' text='Nome do projeto' name='name' placeHolder='Insira o nome do projeto'/>
            <Input type='number' text='Orçamento do projeto' name='budget' placeHolder='Insira o orçamento total'/>
            <Select name="category_id" text="Selecione a categoria" options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}