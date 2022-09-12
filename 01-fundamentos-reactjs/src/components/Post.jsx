import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/pedro-costa1.png" />
                    <div className={styles.authorInfo}>
                        <strong>Pedro Costa</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="12 de setembro às 14:14h" dataTime="2022-09-12 14:14:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Faala galera :)</p>
                <p>Acabei de subir um projeto no meu portifas. esquece Ignite ta estourado</p>
                <p><a href="">jane.designe/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                    <a href="">#ignite</a>
                </p>
            </div>
        </article>
    );
}