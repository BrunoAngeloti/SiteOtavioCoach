import { BlogsContainer } from "../../containers/BlogsContainer";
import Prismic from 'prismic-javascript'

import styles from '../../styles/pages/Blogs.module.scss'
import { Footer } from "../../containers/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Blogs({ blogs }) {
    return (
        <>
            <div className={styles.container}>
                <Link href="/" passHref>
                    <a className={styles.link}>
                        <Image src="/arrow-left.svg" alt="seta para esquerda" width={15} height={15}/>
                        <span>Voltar</span>
                    </a>
                </Link>
                <BlogsContainer blogs={blogs}/>         
            </div>
            <Footer />
        </>
    )
}


export async function getServerSideProps({res}){
    const client = await Prismic.client('https://angeloticoach.prismic.io/api/v2')
    const blog = await client.query(Prismic.Predicates.at('document.type', 'blog'))

    return{
      props:{
        blogs: blog.results,
      }
    }
  }