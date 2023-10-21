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
      <a 
        className={styles.buttonGlobal}
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=5527998624937&text=Ol%C3%A1%2C%20Ot%C3%A1vio!%20Eu%20gostaria%20de%20come%C3%A7ar%20um%20servi%C3%A7o%20com%20voc%C3%AA!">
          <Image src="/zap.svg" alt="icone whatsapp" width={30} height={30}/>
      </a>  
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
