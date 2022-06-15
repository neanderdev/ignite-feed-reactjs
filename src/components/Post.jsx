import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
    return (
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://www.github.com/neanderdev.png"  />

                    <div className={styles.authorInfo}>
                        <strong>Neander de Souza</strong>

                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                    title='15 de junho às 08:30h' 
                    dateTime='2022-06-15 08:30:15'
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>            

                <p>👉{" "}<a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a> {" "} 
                    <a href="#">#nlw</a> {" "}
                    <a href="#">#rocketseat</a> 
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                  placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />

                <Comment />

                <Comment />
            </div>
       </article>
    );
}