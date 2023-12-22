import styles from '../css/layout.module.css';
import Image from 'next/image';


export default function ComissionsPage() {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                <div className={`${styles.colour} ${styles.bgOpacity}`}>
                    <h3 className={styles.subtitle}>Full <br></br> Colour</h3>
                    <div className={styles.galery}>
                        <Image
                            src="/draws/acrid.png"
                            alt="Acrid"
                            width={368}
                            height={354}
                        />
                        <Image
                            src="/draws/roberto.png"
                            alt="Roberto"
                            width={321}
                            height={354}
                        />
                        <Image
                            src="/draws/evelynn.png"
                            alt="Evelynn"
                            width={368}
                            height={365}
                        />
                        <Image
                            src="/draws/millie.png"
                            alt="Millie"
                            width={329}
                            height={365}
                        />
                    </div>
                        <p className={styles.pricing}>
                            Full Body: 25 USD <br></br>
                            Half Body: 20 USD <br></br>
                            Headshots: 15 USD
                        </p>
                </div>
                <div className={`${styles.background} ${styles.bgOpacity}`}>
                    <h3 className={styles.subtitle}>Drawn Background</h3>
                    <div className={styles.galery}>
                        <Image
                            src="/draws/tf2_engie.png"
                            alt="TF2 Engie"
                            width={275}
                            height={370}
                        />
                        <Image
                            src="/draws/tf2_avatar.png"
                            alt="TF2 Avatar"
                            width={287}
                            height={370}
                        />
                    </div>
                    <p className={styles.pricing}>
                        Full Body: 25 USD + 10 USD Background <br></br>
                        Half Body: 20 USD + 10 USD Background <br></br>
                        Headshots: 15 USD + 10 USD Background
                    </p>
                </div>
                <div className={`${styles.emotes} ${styles.bgOpacity}`}>
                    <h3 className={styles.subtitle}>Emotes</h3>
                    <p className={styles.pricing}>
                        +10 Emotes : 15 USD <br></br>
                        5 Emotes : 10 USD <br></br>
                        1 Emote : 3 USD
                    </p>
                </div>
                <div className={`${styles.sketches} ${styles.bgOpacity}`}>
                    <h3 className={styles.subtitle}>Sketches</h3>
                    <p className={styles.pricing}>
                        Line Art : 5~10 USD <br></br>
                        Painted Sketch : 5~15 USD
                    </p>
                </div>
                <div className={`${styles.info} ${styles.bgOpacity}`}>
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
        </main>
    )
}