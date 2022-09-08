import Image from 'next/image';
import styles from '../styles/components/CardDepositions.module.scss'

export function CardDepositions(props){
    const {title, text, name, description, img} = props.people;
    return(
        <div className={styles.containerFeedback}>
            <div className={styles.feedbackProfileImage}>
                <Image src={img} alt="profile image" width={100} height={100}/>
            </div>
            <p className={styles.feedbackProfileText}>{text}</p>
            
            <h6 className={styles.feedbackName}>{name}, <span>{description}</span></h6>
        </div>
    )
}