import styles from '../styles/containers/Services.module.scss'
import { CardService } from '../components/CardService'
import { Bar } from '../components/Bar'

import Swal from 'sweetalert2'

export function Services(props) {

  function openModalService1(){
    Swal.fire({
      title: `<strong>Analista de Perfil Comportamental</strong>`,
      html:
        '<p style={{ textAlign: "justify" }}>A análise de perfil comportamental auxilia no estudo de elementos e comportamento humano como suas crenças, percepções, grau de participação e atitudes, satisfação e nível de eficiência no trabalho, e na sua motivação, entenda seus relacionamentos, pessoais ou profissionais. Tenha direcionamento para sua área de trabalho, estudo, relacionamento, solicite uma degustação sem compromisso pelo link:</p>' +
        '<a target="_blank" href="https://cisassessment.com.br/degustacao/httpspagae7vwkm41g7">link</a>',
      
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
    })
  }

  function openModalService2(){
      Swal.fire({
          title: '<strong>Coach Integral Sistêmico</strong>',
          html:
        '<p style={{ textAlign: "justify" }}>O coach apoia e estimula a pessoa em todo seu potencial para conquistar o que for estabelecido. O indivíduo cria sua meta e objetivos, que pode estar relacionada a diferentes áreas, e o coach o apoiará no desenvolvimento de habilidades e competências para alcançar o objetivo, identificando onde está e onde quer chegar</p>' +
        '<h2>Processo de coaching</h2>' +
        '<p style={{ textAlign: "justify" }}>O processo de coaching desencadeia mudanças importantes e significativas na pessoa, com resultados satisfatórios que podem ser alcançados em pouco tempo. O indivíduo consegue visualizar com clareza alguns pontos do seu comportamento que precisam ser trabalhados, além de receber estímulos que ajudam na formação da autoconfiança, para vencer os obstáculos e atingir suas metas.</p>' +
        '<p style={{ textAlign: "justify" }}>Esse processo se dá por um acompanhamento realizado de forma confidencial e profissional, através de sessões com o especialista coach. Essas sessões podem durar de uma a duas horas e são realizadas de forma individual ou em grupo, com frequência semanal, quinzenal ou mensal.</p>' +
        '<p style={{ textAlign: "justify" }}>Não há tempo determinado para essa meta ser atingida, o importante é ajudar a pessoa a maximizar seu potencial e gerar melhores resultados para sua empresa, projeto ou algo pessoal. Solicite uma entrevista sem compromisso para entender o processo.</p>',
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      width: '60%'
    })
  }

  function openModalService3(){
      Swal.fire({
        title: `<strong>Consultoria Empresarial</strong>`,
        html:
          '<p style={{ textAlign: "justify" }}>- Faço consultoria comportamental, e questões burocráticas, estruturando sua empresa, soluções e serviços.</p>' +
          '<p style={{ textAlign: "justify" }}>- Prospecção, diagnostico e proposta sem compromisso.</p>' +
          '<p style={{ textAlign: "justify" }}>- Treinamentos para Lideres e equipes.</p>',   
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
    })
  }

  return (
    <div ref={props.referencia} className={styles.container}>
      <div className={styles.backdrop}></div>
      <div className={styles.header}>
        <Bar type="1" color="blue"/>
        <h1>SERVIÇOS</h1>
      </div>
      <div className={styles.content}>
        <CardService title="Analista de Perfil Comportamental" img="/iconsServices/service1.svg" openModal={openModalService1}/>
        <CardService title="Coach Integral Sistêmico" img="/iconsServices/service2.svg" openModal={openModalService2}/>
        <CardService title="Consultoria Empresarial" img="/iconsServices/service3.svg" openModal={openModalService3}/>
      </div>
    </div>
  )
}