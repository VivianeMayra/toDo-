import { Header } from "./components/Header";
import { Input } from './components/Input';
import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Input/>
      </div>
    </div>
    
  )
}

