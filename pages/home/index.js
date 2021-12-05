import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta charset="UTF-8" />

        <title>nirvana</title>

        <link rel="icon" href="/icon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&display=swap" rel="stylesheet" />
      
      </Head>

        <main>
            <p id="main-title">nirvana</p>

            <p>🍃your minimalist social media</p>

            <p>done with the rat race on <font color="grey">insta, tiktok, snap, "meta"...</font>?</p>

            <p>start your detox to:
                <br />
                - live in the present
                <br />
                - build a more intimate inner circle
                <br />
                - cut out the noise
                <br />
                - focus on your goals and personal growth
                <br />
            </p>

            <p>want an invite? text us @ <font color="grey">949.237.2715</font></p>

            <p id="side-note">
                p.s. we don't sell your data, nor do we hire phd's to drug you...
                <br />
                <Image src="/zuck.jpg" alt="mark zuckerberg" width={60} height={60} />
            </p>
            
        </main>

      <footer className={styles.footer}>
        <a
          href="anonymous/top/secret"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          🍃
          anonymous
        </a>
      </footer>
    </div>
  )
}
