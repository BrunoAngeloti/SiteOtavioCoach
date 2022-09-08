import Head from 'next/head'
import { Main } from '../containers/Main'
import { Header } from '../containers/Header'
import { About } from '../containers/About'
import { Services } from '../containers/Services'
import { Depositions } from '../containers/Depositions'
import { Contact } from '../containers/Contact'
import { Footer } from '../containers/Footer'
import { Videos } from '../containers/Videos'

import styles from '../styles/pages/Home.module.scss'

import Prismic from 'prismic-javascript'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { BlogsContainer } from '../containers/BlogsContainer'

export default function Home({ blogs, videosLink }) {
  const about = useRef(null);
  const services = useRef(null);
  const depositions = useRef(null);
  const contact = useRef(null);
  const videos = useRef(null);

  const [buttonTop, setButtonTop] = useState(false);

  function handleScroll(){
    if(window.pageYOffset > 100){
      setButtonTop(true);
    }else{
      setButtonTop(false);
    }
  };

  function goToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setButtonTop(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <div>
      <Head>
        <title>Otavio Angeloti</title>
        <meta name="Site do Coach Otavio Angeloti" content="Site do Coach Otavio Angeloti" />
        <meta name="description" content="Site do Coach Otavio Angeloti" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header pag1={about} pag2={services} pag3={depositions} pag4={contact}/>
      <Main />
      <About referencia={about}/>
      <Services referencia={services}/>
      <Depositions referencia={depositions}/>
      <BlogsContainer blogs={blogs}/>
      <Videos referencia={videos} links={videosLink}/>
      <Contact referencia={contact}/>
      <Footer />
      {
        buttonTop && (
        <button onClick={() => goToTop()} className={styles.buttonGlobal}>
            <Image src="/arrow-up.svg" alt="imagem seta" width={30} height={30}/>
        </button>
        )
      }   
    </div>
  )
}



export async function getServerSideProps({res}){
  const client = await Prismic.client('https://angeloticoach.prismic.io/api/v2')
  const blog = await client.query(Prismic.Predicates.at('document.type', 'blog'))
  const video = await client.query(Prismic.Predicates.at('document.type', 'video'))
  return{
    props:{
      blogs: blog.results,
      videosLink: video.results
    }
  }
}
