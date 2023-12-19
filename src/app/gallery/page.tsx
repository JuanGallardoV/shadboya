import styles from '../css/layout.module.css';

export default function GalleryPage() {
    return (
        <>
            <h1 className={styles.title}>Gallery</h1>
            <div className={styles.flex}>
                <div className={styles.left}>
                    <p>Latest finished drawings, if you want to see the progress behind these or drawings with explicit content you can check my Twitter or Newgrounds!</p>
                </div>
                <div className={styles.right}></div>
            </div>
        </>
    )
}