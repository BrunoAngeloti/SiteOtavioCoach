import { Bar } from "../components/Bar";
import styles from "../styles/containers/About.module.scss";
import Image from "next/image";

import { returnDates } from "../utils/dateUtils";

export function About(props) {
  const { yearsLiving, yearsOld, yearsMarried, yearsKickboxing } =
    returnDates();

  return (
    <div ref={props.referencia} className={styles.container}>
      <Image
        src="/fotoPaiNova.png"
        width={400}
        height={542}
        alt="Otavio Angeloti Pires"
        quality={100}
      />
      <div className={styles.textArea}>
        <h1>Otavio Angeloti Pires</h1>
        <p>Graduado em Gestão Comercial - Estácio de Sá</p>
        <Bar type="1" />
        <p>
          Saber quem sou eu é o que me define!!!
          <br />
          Sou Otavio Angeloti Pires, tenho {yearsOld} anos, nascido em São
          Paulo, morando em Vitória à {yearsLiving} anos.
          <br />
          Pai de Bruno e Pâmela e casado com Valéria à {yearsMarried} anos.
          <br />
          <br />- Coach Integral Sistêmico formado pela Instituição{" "}
          <strong>FEBRACIS</strong>.<br />- Analista de Perfil Comportamental{" "}
          <strong>CIS ASSESSMENT</strong>.<br />- Ministrante{" "}
          <strong>“O Poder da Ação”</strong> Best Seller de Paulo Vieira.
          <br />- Atuo a mais de 14 anos em gestão de{" "}
          <strong>equipes e pessoas</strong>
          - Se você não entende de pessoas, não entende de negócios !!!
          <br />
          <br />
          Minha maior certeza é...{" "}
          <strong>“Que podemos ser o que acreditamos ser!” </strong>.
        </p>
      </div>
    </div>
  );
}
