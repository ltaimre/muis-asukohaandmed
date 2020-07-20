// import App from 'next/app'

import Layout from "../components/Layout";
import React from "react";
import Head from "next/dist/next-server/lib/head";
import LStyles from "leaflet/dist/leaflet.css";

function MyApp({Component, pageProps, router}) {


    return (
        <Layout>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                />
                <style dangerouslySetInnerHTML={{__html: LStyles}}/>
                <title>Museaalide päritolukaart</title>
            </Head>
                <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp