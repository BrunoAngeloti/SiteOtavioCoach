import styles from '../styles/containers/Contact.module.scss'

import { Bar } from '../components/Bar'

export function Contact(props){
    function sendEmail(){

    }
    return(
        <div ref={props.referencia} className={styles.container}>
            <div  className={styles.content}>
                <form className={styles.formulario} onSubmit={sendEmail}>
                    <div>
                        <h1>Contato</h1>
                        <input type="text" placeholder="NOME"/>
                        <input type="text" placeholder="ASSUNTO"/>
                        <input type="email" placeholder="EMAIL"/>
                        <textarea placeholder="MENSAGEM" />
                        <button type="submit">ENVIAR</button>
                    </div>           
                </form>
                
                <div className={styles.contatos}>
                    
                    <div className={styles.contentInfo}>
                        <Bar type="1" color="blue"/>
                        <div className={styles.info}>
                            <img src="iconMap.svg" alt="icone de mapa" />
                            <p>Serra-ES</p>
                        </div>
                        <div className={styles.info}>
                            <img src="iconPhone.svg" alt="icone de telefone" />
                            <p>(27)99999-9999</p>
                        </div>
                        <div className={styles.info}>
                            <img src="iconEmail.svg" alt="icone de email" />
                            <p>cris_pamela@terra.com.br</p>
                        </div>
                        <Bar type="2" color="blue"/>
                    </div>
                    <div className={styles.socialMedias}>
                        <a href="">
                            <img src="iconInsta.svg" alt="icon instagram" />
                        </a>
                        <a href="">
                            <img src="iconFace.svg" alt="icon facebook" />
                        </a>
                        <a href="">
                            <img src="iconLinkedin.svg" alt="icon linkedin" />
                        </a>
                        <a href="">
                            <img src="iconZap.svg" alt="icon whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}