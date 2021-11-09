import styles from '../styles/components/CardDepositions.module.scss'

export function CardDepositions(props){
    const {title, text, name, description, img} = props.people;
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{title}</h1>
            </div>
            <p>{text}</p>
            
            <div className={styles.info}>
                <img src={img} alt="bruno" />
                <div className={styles.title}>
                    <h2>{name}</h2>
                    <h3>{description}</h3>
                </div>
            </div>
        </div>
    )
}