import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Layout from 'components/layout'
import styles from 'styles/about.module.scss'
import aboutMeImg from 'public/picture_of_me.jpg'

const About: NextPage = () => (
    <Layout>
        <Head>
            <title>About Chih-Heng Lin</title>
        </Head>
        <section className={styles.sectionAbout}>
            <div className={styles.about__imageWrapper}>
                <Image layout="responsive" priority unoptimized={true} className={styles.about__image} src={aboutMeImg} alt="About Me" />
            </div>
            <p className={styles.about__paragraph}>
                Hi, I am Chih-Heng Lin (林志恒), a CS master's student at the <a href="https://www.usc.edu/" target="_blank">University of Southern California</a>. I come from Taiwan 🇹🇼 and currently live in Los Angeles.
            </p>
            <p className={styles.about__paragraph}>
                I love being a programmer. Years of experience in web development enables me to build a service from scratch by myself. In 2020, I joined <a href="https://www.eyebustw.com/" target="_blank">Eyebus</a> Project. We built a bus-booking service for the visually impaired because they had a hard time waiving hands to stop buses. As the only engineer in the team, I developed the whole system by myself, including a WebSocket server, admin interface, and other services.
            </p>
            <p className={styles.about__paragraph}>
                But at the same time, I don’t want just to be a programmer. Actually, I wanted to be a designer when I was in the college! I designed posters for <a href="https://tedxnctu.nctu.edu.tw/index.php/about/" target="_blank">TEDxNCTU</a> events; I conducted user experience evaluation for a tech company; I also did some <a href="https://dl.acm.org/doi/abs/10.1145/3290605.3300756" target="_blank">research</a> in Human-Computer Interaction. Although I didn’t become a designer, this valuable experience gave me another perspective of how people and technology shape the world we live in today.
            </p>
            <p className={styles.about__paragraph}>
                In my spare time, I love watching basketball 🏀. I am a legit warrior fan! GO DUB NATION! I also play music back to the time in school. I am a drummer🥁, and I like to play funk and RnB music.
            </p>
        </section>
        
    </Layout>
)

export default About