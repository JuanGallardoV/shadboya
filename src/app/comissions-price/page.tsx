'use client';
import styles from '../css/gallery.module.css';
import Image from 'next/image';
import GallerySlider from '../components/gallerySlider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';


const fullColour = [
    {
        name: 'tf2_spy'
    },
    {
        name: 'tf2_commission'
    },
    {
        name: 'tf2_fempyro'
    },
    {
        name: 'commission'
    },
    {
        name: 'tf2_saxton'
    }
]

const background = [
    {
        name: 'miss_pauling'
    },
    {
        name: 'tatsumaki'
    },
    {
        name: 'garou'
    },
    {
        name: 'zhanna_miss_pauling'
    }
]

const changeTab = (event: any) => {
    const tab = event.target.getAttribute('data-tab');
    const element = document.querySelector(`[data-id=${tab}]`);
    element?.scrollIntoView({
        behavior: 'smooth'
    })
}

export default function ComissionsPage() {

    const toastText = 'The commission nsfw and sfw have the same value! extra characters increase the price! The prices are referential! They can be cheaper or more expensive depending on the difficulty!';
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0,
      );
    const isMobile = screenWidth <= 600;
    const toastPosition = isMobile ? 'bottom-center' : 'top-right';

    const [show, hide] = useState(true);
  
    useEffect(() => {
      const notify = () => toast(toastText, {
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: 'text',
        containerId: 'text'
        });
  
      notify();
    }, [])
    
    return (
        <main className={styles.main}>
            <ToastContainer
                position={toastPosition}
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
                toastStyle={{ backgroundColor: '#FFFFFFCC', color: 'black', border: '3px solid #990000'}}
                containerId='text'
                />
            <h1 className={`${styles.title} ${styles.mobile}`}>Prices</h1>
            <div className={styles.flex} id={styles.flexMult}>
                <div className={styles.wrapper}>
                    <div className={styles.nav}>
                        <button onClick={changeTab} data-tab='colour'>Full Colour</button>
                        <button onClick={changeTab} data-tab='background'>Drawn Background</button>
                        <button onClick={changeTab} data-tab='sketches'>Sketches</button>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.bgOpacity} id={styles.colour} data-id='colour'>
                            <h3 className={styles.subtitle}>Full Colour</h3>
                            <GallerySlider images={fullColour} />
                            <p className={styles.pricing}>
                                Full Body: 40 USD <br></br>
                                Half Body: 35 USD <br></br>
                                Headshots: 25 USD
                            </p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.bgOpacity} id={styles.background} data-id='background'>
                            <h3 className={styles.subtitle}>Drawn Background</h3>
                            <GallerySlider images={background} />
                            <p className={styles.pricing}>
                                15-25 USD Background
                            </p>
                        </div>
                        {/* <div className={styles.bgOpacity} id={styles.emotes}>
                        <h3 className={styles.subtitle}>Emotes</h3>
                        <p className={styles.pricing}>
                            +10 Emotes : 15 USD <br></br>
                            5 Emotes : 10 USD <br></br>
                            1 Emote : 3 USD
                        </p>
                    </div> */}
                        <div className={styles.bgOpacity} id={styles.sketches} data-id='sketches'>
                            <h3 className={styles.subtitle}>Sketches</h3>
                            <p className={styles.pricing}>
                                Line Art : 10~15 USD <br></br>
                                Painted Sketch : 10~ USD
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}