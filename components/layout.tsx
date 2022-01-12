import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from './layout.module.scss'


const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
]

type LayoutProps = {
  children: JSX.Element | JSX.Element[] | string
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    const router = useRouter()
    const pathName = router.pathname.split('/[')[0]
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
            </Head>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    {links.map(({ name, path }) => (
                        <div key={name} className={styles.nav__item}>
                            <Link href={path}>
                                <a className={pathName === path ? styles.nav__text__active : styles.nav__text}>{name}</a>
                            </Link>
                        </div>
                    ))}
                    
                    <div className={styles.nav__item}>
                        <a className={styles.nav__text}
                           href="https://drive.google.com/file/d/1VgNxyLS7qaPr8agt7G8ikS9745WORijN/view?usp=sharing" 
                           target="_blank">Resume</a>
                    </div>
                </nav>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <ul className={styles.links}>
                    {links.map(({ name, path }) => (
                        <li key={name}>
                            <Link href={path}>
                                <a>{name}</a>
                            </Link>
                        </li>
                        
                    ))}
                    <li><a href="https://github.com/cowbonlin" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/chihhenglin/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/cowbonlin/Portfolio" target="_blank">Source Code</a></li>
                </ul>
                <p className={styles.copyright}>
                    © Chih-Heng Lin 2022
                </p>
            </footer>
        </div>
    )
}

export default Layout