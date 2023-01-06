import styles from './Input.module.css';
import { PlusCircle } from "phosphor-react";
export function Input(){
    return(
        <div className={styles.input}>
            <form className={styles.commentForm}>
            <textarea
                    name='comment'
                    placeholder='Adicione uma nova tarefa'
            />
            <button type='submit'>
                Criar
                <PlusCircle size={20} weight='bold'/>
            </button>
    
            </form>
        </div>
    )
}