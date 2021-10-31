import styles from '../styles/components/CardService.module.scss'

export function CardService(props){
    return(
        <div className={styles.container}>
            <img src="iconsServices/Communication.svg" alt="comunicação"/>
            <h1>{props.title}</h1>
            <p>Saiba como produzir mais e bla bla bla saiba como produzir mais e bla bla bla saiba como produzir mais e bla bla</p>
        </div>
    )
}