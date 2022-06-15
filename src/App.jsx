import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

export default function App() {
  return (
    <div>
      <Header />   

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Neander de Souza" 
            content="Conteúdo do dia 15/06/2022, venha conhecer as novidade" 
          />

          <Post 
            author="Neander de Souza" 
            content="Conteúdo do dia 14/06/2022, venha conhecer as novidade" 
          />
        </main> 
      </div> 
    </div>
  )
}

