import styles from '../styles/containers/Footer.module.scss'

export function Footer(props){
    return(
        <div ref={props.referencia} className={styles.containerFooter}>          
            <p>Feito com ❤️ por <a href="https://github.com/BrunoAngeloti"><span>Bruno Angeloti</span></a></p>
        </div>
    )
}