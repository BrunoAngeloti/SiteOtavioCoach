import styles from '../styles/containers/Contact.module.scss'
import { useState } from 'react';

import emailjs from "emailjs-com"
import ReactLoading from "react-loading";
import Swal from 'sweetalert2'

import { Bar } from '../components/Bar'
import Image from 'next/image';

export function Contact(props){

    const [nameValue, setNameValue] = useState("");
    const [subjectValue, setSubjectValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    const [loading, setLoading] = useState(false);

    function sendEmail(e){
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(
            "service_vvd1p08", 
            "template_789d76a", 
            e.target,
            "user_eKrDx6OksTnHKuRf2nDsU"
        ).then(res=>{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Email enviado com sucesso'
              })
              setNameValue("");
              setLoading(false);
              setSubjectValue("");
              setEmailValue("");
              setMessageValue("");
        }).catch(err=> {
            console.log(err);
            alert("Algo deu errado, tente novamente mais tarde")
        })
            
        
    }

    const handleUserInput = (e) => {
        setNameValue(e.target.value);
    };
    const handleSubjectInput = (e) => {
        setSubjectValue(e.target.value);
    };
    const handleEmailInput = (e) => {
        setEmailValue(e.target.value);
    };
    const handleMessageInput = (e) => {
        setMessageValue(e.target.value);
    };

    return(
        <div ref={props.referencia} className={styles.container}>
            <div  className={styles.content}>
                <form className={styles.formulario} onSubmit={sendEmail}>
                    <div>
                        <h1>Contato</h1>
                        <input value={nameValue} onChange={handleUserInput} required type="text" placeholder="NOME" name="name"/>
                        <input value={subjectValue} onChange={handleSubjectInput} required type="text" placeholder="ASSUNTO" name="subject"/>
                        <input value={emailValue} onChange={handleEmailInput} required type="email" placeholder="EMAIL" name="user_email"/>
                        <textarea value={messageValue} onChange={handleMessageInput} required placeholder="MENSAGEM" name="message"/>
                        <button disabled={loading} type="submit">
                            <span>ENVIAR</span>
                            {loading && <ReactLoading type="spin" color='#FFF' height={20} width={20} />}
                        </button>
                    </div>           
                </form>
                
                <div className={styles.contatos}>
                    
                    <div className={styles.contentInfo}>
                        <Bar type="1" color="blue"/>
                        <div className={styles.info}>
                            <Image src="/iconMap.svg" alt="icone de mapa" width={40} height={40}/>
                            <p>Vitória-ES</p>
                        </div>
                        <div className={styles.info}>
                            <Image src="/iconPhone.svg" alt="icone de telefone" width={40} height={40}/>
                            <p>(27)99862-4937</p>
                        </div>
                        <div className={styles.info}>
                            <Image src="/iconEmail.svg" alt="icone de email" width={40} height={40}/>
                            <p>otavioangeloti@terra.com.br</p>
                        </div>
                        <Bar type="2" color="blue"/>
                    </div>
                    <div className={styles.socialMedias}>
                        <a href="https://www.instagram.com/otavioangeloticoach/" target="_blank" rel="noreferrer">
                            <Image src="/iconInsta.svg" alt="icon instagram" width={48} height={48}/>
                        </a>
                        <a href="https://www.facebook.com/otavio.angelotipires" target="_blank" rel="noreferrer">
                            <Image src="/iconFace.svg" alt="icon facebook" width={48} height={48}/>
                        </a>
                        <a href="https://www.linkedin.com/in/ot%C3%A1vio-angeloti-pires-75006954/" target="_blank" rel="noreferrer">
                            <Image src="/iconLinkedin.svg" alt="icon linkedin" width={48} height={48}/>
                        </a>
                        <a href="https://wa.me/5527998624937/" target="_blank" rel="noreferrer">
                            <Image src="/iconZap.svg" alt="icon whatsapp" width={48} height={48}/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}