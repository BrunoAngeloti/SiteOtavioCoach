import styles from '../styles/components/CardDepositions.module.scss'

export function CardDepositions(){
    return(
        <div className={styles.container}>
            
            <h1>“Extraordinária”</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
            
            <div className={styles.info}>
                <img src="brunin.JPG" alt="bruno" />
                <div className={styles.title}>
                    <h2>Bruno Angeloti</h2>
                    <h3>Aluno da personal</h3>
                </div>
            </div>
        </div>
    )
}