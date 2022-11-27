import React, { useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import TextInput from '../textField/TextInput';
import ButtonAdd from '../button/Button';
import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styles from './Form.module.css';
import Tasks from '../tasks/Tasks';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1),
            naxWidth: '500px',
            paddingRight: '10px'
        },
    }),
);

function Form() {
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [list, setList] = useState<[]>([]);
    const [description, setDescription] = useState('');
    const [messageError, setMessageError] = useState('');

    useEffect(() => {
        function checkedStateSotorage() {
            const dataStorage = JSON.parse(localStorage.getItem("tasks") || "[]");
            if (list && dataStorage) {
                setList(dataStorage);
            }
        }
        checkedStateSotorage()
    }, [])

    const handleSubmitTasks = async (e: any) => {
        e.preventDefault();

        if (title === '') {
            setMessageError('O campo título é obrigatório.');
            return;
        }

        if (description === '') {
            setMessageError('O campo descrição é obrigatório.')
            return;
        }

        let listTasks: any = new Array();

        if (localStorage.hasOwnProperty("tasks")) {
            listTasks = JSON.parse(localStorage.getItem("tasks") || "");
        }

        await listTasks.push({
            titleTask: title,
            descTask: description,
            id: Math.floor(Math.random() * 829017204) + 0
        });

        setList(listTasks);

        localStorage.setItem("tasks", JSON.stringify(listTasks));

        setMessageError('');
        setTitle('');
        setDescription('');
    }

    return (
        <div className={styles.form_tasks} >
            <form className={classes.root} onSubmit={handleSubmitTasks} autoComplete='off'>
                <h1>Lista de tarefas</h1>
                <TextInput
                    className={styles.textInput}
                    textType='text'
                    label='Título da terefa'
                    name='text'
                    value={title}
                    placeholder='Digite a título'
                    onChange={e => setTitle(e.target.value)}
                />
                <br />
                <TextInput
                    textType='text'
                    label='Descrição'
                    name='text'
                    value={description}
                    placeholder='Digite a descrição'
                    onChange={e => setDescription(e.target.value)}
                />
                <br />
                {messageError && <Alert severity="error">{messageError}</Alert>}
                <ButtonAdd>Adicionar</ButtonAdd>
            </form>

            <Tasks list={list} />
        </div>
    )
}

export default Form
