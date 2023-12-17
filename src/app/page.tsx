import Image from 'next/image'
import styles from './home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <Image
          className={styles.img}
          src="/shadboi.png"
          alt="Shadboi"
          width={655}
          height={880}
          priority
        />
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Shadboi</h1>
        <h3 className={styles.subtext}>Comissions<br/><span>Open</span></h3>
        <div className={styles.contbtn}>
          <button className={styles.btn}>Comissions Prices</button>
          <button className={styles.btn}>Terms of Service</button>
          <button className={styles.btn}>About Me</button>
          <button className={styles.btn}>Gallery</button>
        </div>
      </div>
      {/* <div className={styles.socials}>

      </div> */}
    </main>
  )
}
