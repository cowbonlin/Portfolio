import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Layout from 'components/layout'
import Project from 'components/project'
import styles from 'styles/Home.module.scss'

import eyebusImg from 'public/Eyebus.jpeg'
import robotxImg from 'public/Robotx.jpeg'

const projectList = [
    {
        title: 'Eyebus - Bus-booking system for visually impaired',
        skills: ['Flask', 'MySQL', 'React.js', 'AWS EC2', 'Nginx', 'SQLAlchemy'],
        url: 'https://www.eyebustw.com/',
        img: eyebusImg,
        imgAlt: 'Eyebus',
        description: 'Eyebus aimed to build a bus-booking service for the visually impaired. I developed the whole system from scratch by myself, including a WebSocket server, admin interface, task scheduler, and others.'
    }, {
        title: 'Robotx - Backend system for unmanned surface vehicles',
        skills: ['Flask', 'Docker', 'MQTT', 'MySQL', 'CI/CD'],
        url: 'https://github.com/cowbonlin/USV-backend',
        img: robotxImg,
        imgAlt: 'Robotx',
        description: 'Robotx aimed to build an intelligent system for unmanned surface vehicles. I developed the backend system responsible for receiving sensor data from vehicles, as well as providing APIs for admins.'
    }
]

const Home: NextPage = () => (
    <Layout>
        <Head>
            <title>Chih-Heng Lin - Full-Stack Engineer</title>
        </Head>
        <section className={styles.sectionIntro}>
            <h1 className={styles.headingPrimary}>
                <span>Hello!</span>
                <span>I'm Chih-Heng Lin 👋</span>
            </h1>
            <div className={styles.intro}>
                <p className={styles.intro__text}>
                    I love being a software engineer. Tackling complex problems and building amazing products are fun. But what I want is more: I want to help people become better ones and focus on what matters to them.
                </p>
                <p className={styles.intro__text}>
                    I am a full-stack engineer from Taiwan 🇹🇼 , and currently pursuing my CS master's degree at USC.
                </p>
                <div className={styles.intro__skillSet}>
                    <div className={styles.intro__skillText}>Skills:</div>
                    <div className={styles.intro__skillTag}>Full Stack</div>
                    <div className={styles.intro__skillTag}>Python</div>
                    <div className={styles.intro__skillTag}>React.js</div>
                    <div className={styles.intro__skillTag}>MySQL</div>
                    <div className={styles.intro__skillTag}>AWS</div>
                    <div className={styles.intro__skillTag}>Docker</div>
                </div>
            </div>
        </section>
        <section className={styles.sectionProjects}>
            <h2 className={styles.projectHeading}>Selected Projects</h2>
            <div className={styles.projectList}>
                {projectList.map(project => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </section>
    </Layout>
)

export default Home
