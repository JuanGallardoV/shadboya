import styles from '../css/layout.module.css';

export default function galeryPage() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Galery</h1>
            <div className={styles.flex}>
                <div className={`${styles.left} ${styles.bgOpacity}`}>
                    <p>Latest finished drawings, if you want to see the progress behind these or drawings with explicit content you can check my Twitter or Newgrounds!</p>
                </div>
                <div className={`${styles.right} ${styles.bgOpacity}`}></div>
            </div>
        </main>
    )
}