import styles from '../css/layout.module.css';

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <div className={`${styles.centered} ${styles.bgOpacity} ${styles.maxWidth}`}>
                <h3 className={styles.subtitle}>About Me</h3>
                <p>
                    Hello! My name is Shadboi!, I am a Chilean artist who generally focuses on digital art while I finish my Engineering studies.
                    I currently work in the following fields in digital arts topics:
                    <ul>
                        <li>Emotes</li>
                        <li>Illustrations</li>
                        <li>Comics</li>
                        <li>Banners</li>
                        <li>Whether for personal or commercial.</li>
                    </ul>
                    use, any information regarding this will be in the TOS.
                    Hobbies: Drawing, Video games, generally Lol, TF2 and Roguelikes, music and probably streaming in the future &lt;3
                </p>
            </div>
        </main>
        )
}