import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://www.github.com/neanderdev.png',
          name: 'Neander de Souza',
          role: 'Web Developer',
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋' },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
          { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-06-15 08:30:15'),
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://www.github.com/neanderdev.png',
          name: 'Neander de Souza',
          role: 'Web Developer',
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋' },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
          { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-06-16 08:30:15'),
  }
];

export default function App() {
  return (
    <div>
      <Header />   

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main> 
      </div> 
    </div>
  )
}

