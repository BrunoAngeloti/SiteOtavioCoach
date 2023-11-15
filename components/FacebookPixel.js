import React from 'react';
import Head from 'next/head';

const FacebookPixel = () => {
  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ 
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src='https://connect.facebook.net/en_US/fbevents.js';
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script');
            fbq('init', '358020483379641');
            fbq('track', 'PageView');
          ` 
        }} />
      </Head>
      <noscript>
        <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=358020483379641&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
};

export default FacebookPixel;
