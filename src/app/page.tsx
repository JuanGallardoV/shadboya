'use client';
import Image from 'next/image';
import styles from './css/home.module.css';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const links = [
  {
    name: 'Comissions Prices',
    href: '/comissions-price'
  },
  {
    name: 'Terms of Service',
    href: '/terms-of-service'
  },
  {
    name: 'About Me',
    href: '/about-me'
  }
  // {
  //   name: 'gallery',
  //   href: '/gallery'
  // }
]

const copyToClipboard = () => {
  navigator.clipboard
      .writeText("Shadboi#7154")
      .then(() => {
        toast.info("User ID Copied");
      })
      .catch(() => {
        toast.error("something went wrong");
      });
}

export default function Home() {
  return (
    <main className={styles.main}>
      <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="colored"
        />
      <div className={styles.left}>
        <Image
          className={styles.img}
          src="/shadboi.png"
          alt="Shadboi"
          width={655}
          height={880}
          priority
          sizes='(max-width: 991px) 528px 360px'
        />
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Shadboi</h1>
        <h3 className={styles.subtext}>Comissions<br/><span>Open</span></h3>
        <div className={styles.contbtn}>
        {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={styles.btn}
          >
            {link.name}
          </Link>
        );
      })}
        </div>
      </div>
      <div className={styles.socials}>
          <a href="https://shadboya.newgrounds.com" target='_blank'>
            <Image
              src="/logo_newgrounds.svg"
              alt="Newgrounds"
              width={82}
              height={80}
              sizes='(max-width: 991px) 59px 43px'
            />
          </a>
          <button onClick={copyToClipboard}>
            <Image
              src="/logo_discord.svg"
              alt="Discord"
              width={82}
              height={80}
              sizes='(max-width: 991px) 59px 60px'
            />
          </button>
          <a href="https://twitter.com/Shad_boya" target='_blank'>
            <Image
              src="/logo_x.svg"
              alt="X"
              width={82}
              height={80}
              sizes='(max-width: 991px) 59px 60px'
            />
          </a>
          <a href="https://steamcommunity.com/id/Shad_boya/" target='_blank'>
            <Image
              src="/logo_steam.svg"
              alt="Steam"
              width={82}
              height={80}
              sizes='(max-width: 991px) 59px 60px'
            />
          </a>
      </div>
    </main>
  )
}
