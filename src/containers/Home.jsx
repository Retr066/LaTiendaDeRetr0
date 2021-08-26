import React from 'react';
import { Helmet } from 'react-helmet';
import initialState from '../initialState';
import Products from '../components/Products';

function Home() {
  return (
    <>
      <Helmet>
        <title>Tienda de Retr0 - Productos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devferx" />
        <meta name="twitter:creator" content="@devferx" />
        <meta name="twitter:title" content="Tienda de Retr0 Productos" />
        <meta name="twitter:description" content="Tienda de Retr0 Productos" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="iTienda de Retr0 Productos" />
        <meta property="og:description" content="Tienda de Retr0 Productos" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta
          property="og:url"
          content="https://platzi-conf-merchandising.web.app"
        />
        <meta property="og:site_name" content="Tienda de Retr0 Productos" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
      </Helmet>
      <Products products={initialState.products}>Home</Products>
    </>
  );
}

export default Home;
