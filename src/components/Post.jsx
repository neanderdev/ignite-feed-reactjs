import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState(['Post muito bacana, hein!']);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedAtFormatted = format(publishedAt, 
        "d 'de' LLLL 'às' HH:mm'h'", 
        { 
            locale: ptBR 
        }
        );

    const publishedAtFormattedRelativeToNow = formatDistanceToNow(publishedAt, 
        {
            locale: ptBR,
            addSuffix: true,
        }
    );

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    return (
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>

                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedAtFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedAtFormattedRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return <p key={index}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={index}>👉{" "}<a href="#">{line.content}</a></p>
                    }
                })}

                <p>
                    <a href="#">#novoprojeto</a> {" "} 
                    <a href="#">#nlw</a> {" "}
                    <a href="#">#rocketseat</a> 
                </p>
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) => (
                    <Comment key={index} content={comment} />
                ))}
            </div>
       </article>
    );
}