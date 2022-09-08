import Image from 'next/image';
import Prismic from 'prismic-javascript'
import Link from 'next/link';

import styles from '../../styles/pages/Blog.module.scss'

export default function Blog({ blog }) {
    console.log(blog)
    return (
        <div className={styles.container}>
            <Link href="/blogs" passHref>
                <a className={styles.link}>
                    <Image src="/arrow-left.svg" alt="seta para esquerda" width={15} height={15}/>
                    <span>Voltar</span>
                </a>
            </Link>
            <div className={styles.content}>
                <h1>{blog.titulo[0].text}</h1>
                <span className={styles.data}>{
                    blog.data.split('-').reverse().join('/')
                }</span>
                {blog?.imagem_1?.url && (
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={blog.imagem_1.url} 
                            alt="imagem do blog"
                            width={blog.imagem_1.dimensions.width} 
                            height={blog.imagem_1.dimensions.height}
                        />
                    </div>
                )}
                <div className={styles.textWrapper}>
                    {blog.conteudo.map((text, index) => (
                        <p key={index}>{text.text}</p>
                    ))}
                </div>
                {blog?.imagem_2?.url && (
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={blog.imagem_2.url} 
                            alt="imagem do blog"
                            width={blog.imagem_2.dimensions.width} 
                            height={blog.imagem_2.dimensions.height}
                        />
                    </div>
                )}
                {blog.link_para_conteudo_externo.url && (
                <span className={styles.externo}>{
                    <a href={blog.link_para_conteudo_externo.url} target="_blank" rel="noreferrer">
                        Veja mais neste link
                    </a>
                }</span>
                )}
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    try {
    const slug = context.query.slug;
    const client = await Prismic.client('https://angeloticoach.prismic.io/api/v2')
    const blog = await client.query(Prismic.Predicates.at('document.type', 'blog'))

    const blogFilter = blog.results.filter((blog) => blog.slugs[0] === slug)

    return {
      props: {
        blog: blogFilter[0].data
      },
    };
    } catch (error) {
        return {
            notFound: true
        }
    }
  };