import { useState } from 'react';
import styles from './Input.module.css';
import { PlusCircle } from "phosphor-react";
export function Input({onAddTask}){
    const[newTaskText, setNewTaskText] = useState("");

    function handleChangeNewText(event){
        event.target.setCustomValidity("")
        setNewTaskText(event.target.value)
    }

    function handleNewTaskTextInvalid(event){
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    function handleSubmit(event) {
        event.preventDefault()
    
        onAddTask({
          text: newTaskText,
          isFinished: false
        })
    
        setNewTaskText("")
      }

    const isNewTaskEmpty = newTaskText.length === 0
   
    return(
        <div className={styles.input}>
            <form onSubmit={handleSubmit} className={styles.commentForm}>
            <textarea
                    name='comment'
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleChangeNewText}
                    onInvalid={handleNewTaskTextInvalid}
                    required

            />
            <button type='submit' disabled={isNewTaskEmpty}>
                Criar
                <PlusCircle size={20} weight='bold'/>
            </button>
    
            </form>
        </div>
    )
}