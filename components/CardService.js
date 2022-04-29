import styles from '../styles/components/CardService.module.scss'
import Image from 'next/image'

export function CardService(props){
    return(
        <div className={styles.container} onClick={props.openModal}>
            <Image src={props.img} alt={props.title} width={100} height={100}/>   
            <h1>{props.title}</h1>    
            <p>LER MAIS</p>             
        </div>
    )
}