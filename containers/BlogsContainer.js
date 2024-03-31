import styles from "../styles/containers/Blogs.module.scss";

import { Bar } from "../components/Bar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export function BlogsContainer({ blogs }) {
  if (blogs.length === 0) return null;

  const router = useRouter();
  const total = router.pathname === "/" ? 3 : blogs.length;

  function handleButton() {
    // levar para o path /blogs
    router.push("/blogs");
  }

  console.log(blogs);

  function formatarParaURL(texto) {
    // Remove acentos
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Substitui espaços por hífens
    texto = texto.replace(/\s+/g, "-");
    // Remove caracteres especiais, mantém letras, números e hífens
    texto = texto.replace(/[^a-zA-Z0-9-]/g, "");
    // Converte para minúsculas
    texto = texto.toLowerCase();

    return texto;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>BLOG</h1>
        <Bar type="1" color="blue" />
      </div>
      <div className={styles.content}>
        {blogs?.map(
          (blog, index) =>
            index < total && (
              <Link
                key={index}
                href={`/blogs/${formatarParaURL(blog.data.titulo[0].text)}`}
                passHref
              >
                <a className={styles.cardBlog}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={blog.data.imagem_1.url}
                      alt="blog"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.contentCard}>
                    <div className={styles.headerCard}>
                      <h1>{blog.data.titulo[0].text}</h1>
                      <span>
                        {blog.data.data
                          ? blog.data.data.split("-").reverse().join("/")
                          : null}
                      </span>
                    </div>
                    <p>{blog.data.conteudo[0].text}</p>
                    <span className={styles.link}>
                      <span>Veja completo</span>
                      <Image
                        src="/arrow-right2.svg"
                        alt="seta para direita"
                        width={10}
                        height={10}
                      />
                    </span>
                  </div>
                </a>
              </Link>
            )
        )}
        {router.pathname === "/" && (
          <button className={styles.button} onClick={handleButton}>
            Ver todas as postagens
          </button>
        )}
      </div>
    </div>
  );
}
