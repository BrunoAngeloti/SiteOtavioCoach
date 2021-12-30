import styles from '../styles/components/CardDepositions.module.scss'

export function CardDepositions(props){
    const {title, text, name, description, img} = props.people;
    return(
        <div className={styles.containerFeedback}>
            <div className={styles.feedbackProfileImage}>
                <img src={img} alt="profile image" />
            </div>
            <p className={styles.feedbackProfileText}>{text}</p>
            
            <h6 className={styles.feedbackName}>{name}, <span>{description}</span></h6>
        </div>
    )
}