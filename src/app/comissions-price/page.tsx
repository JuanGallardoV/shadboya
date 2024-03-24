import styles from '../css/layout.module.css';
import Image from 'next/image';
import GallerySlider from '../components/gallerySlider';


const fullColour = [
    {
        name: 'acrid',
        width: 328,
        height: 315
    },
    {
        name: 'roberto',
        width: 286,
        height: 315
    },
    {
        name: 'evelynn',
        width: 328,
        height: 325
    },
    {
        name: 'millie',
        width: 292,
        height: 325
    }
]

const background = [
    {
        name: 'tf2_engie',
        width: 244,
        height: 328
    },
    {
        name: 'tf2_avatar',
        width: 255,
        height: 328
    }
]

export default function ComissionsPage() {
    return (
        <main className={styles.main}>
            <h1 className={`${styles.title} ${styles.mobile}`}>Prices</h1>
            <div className={styles.flex} id={styles.flexMult}>
                <div className={styles.left}>
                    <div className={styles.bgOpacity} id={styles.colour}>
                        <h3 className={styles.subtitle}>Full <br className={styles.desktop}></br> Colour</h3>
                            <GallerySlider images={fullColour}/>
                        <p className={styles.pricing}>
                            Full Body: 30 USD <br></br>
                            Half Body: 25 USD <br></br>
                            Headshots: 20 USD
                        </p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.bgOpacity} id={styles.background}>
                        <h3 className={styles.subtitle}>Drawn Background</h3>
                            <GallerySlider images={background}/>
                        <p className={styles.pricing}>
                            15-25 USD Background
                        </p>
                    </div>
                    <div className={styles.bgOpacity} id={styles.emotes}>
                        <h3 className={styles.subtitle}>Emotes</h3>
                        <p className={styles.pricing}>
                            +10 Emotes : 15 USD <br></br>
                            5 Emotes : 10 USD <br></br>
                            1 Emote : 3 USD
                        </p>
                    </div>
                    <div className={styles.bgOpacity} id={styles.sketches}>
                        <h3 className={styles.subtitle}>Sketches</h3>
                        <p className={styles.pricing}>
                            Line Art : 5~10 USD <br></br>
                            Painted Sketch : 5~15 USD
                        </p>
                    </div>
                    <div className={styles.bgOpacity} id={styles.info}>
                        <p>
                            The commission nsfw and sfw have the same
                            value!
                            extra characters increase the price!
                            The prices are referential! They can be cheaper
                            or more
                            expensive depending on the difficulty!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}