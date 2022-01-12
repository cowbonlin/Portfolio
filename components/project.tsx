import Image from 'next/image'
import styles from './project.module.scss'

type ProjectProps = {
    title: string,
    skills: array,
    url: string,
    img: any,
    imgAlt: string,
    description: string
}

const Project = ({ title, skills, url, img, imgAlt, description }: ProjectProps): JSX.Element => (
    <a href={url} className={styles.project} target="_blank">
        <div>
            <Image src={img} alt={imgAlt} layout="responsive" objectFit="contain" className={styles.project__image} />
        </div>
        <div className={styles.project__text}>
            <div className={styles.project__title}>{title}</div>
                <ul className={styles.project__skills}>
                    {skills.map(skill => (
                        <li key={skill} className={styles.project__skillItem}>{skill}</li>
                    ))}
                </ul>
            <p className={styles.project__description}>{description}</p>
        </div>
    </a>
)

export default Project;