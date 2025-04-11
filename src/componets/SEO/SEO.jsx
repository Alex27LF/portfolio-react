import { Helmet } from "react-helmet-async";

export const SEO = () => {
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>Alex Fabricio | Desarrollador</title>
      <meta
        name="description"
        content="Portafolio profesional de Alex Fabricio Pachacama, desarrollador Full Stack especializado en backend, aplicaciones moviles y tecnologías modernas."
      />
      <meta
        name="keywords"
        content="desarrollador, portfolio, programador, full stack, backend, scriptcase, kalipso studio, sql server, postgresql, javascript, nestJS, nodeJS, express, flutter, reactJS, insomia, github"
      />
      <meta name="author" content="Alex Fabricio Pachacama" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aleks-fabricio.vercel.app/" />
      <meta
        property="og:title"
        content="Alex Fabricio | Desarrollador"
      />
      <meta
        property="og:description"
        content="Portafolio profesional de Alex Fabricio Pachacama, desarrollador Full Stack especializado en backend, aplicaciones moviles y tecnologías modernas."
      />
      <meta
        property="og:image"
        content="https://fabricio-paucar.vercel.app/assets/og-image.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://fabricio-paucar.vercel.app/"
      />
      <meta
        property="twitter:title"
        content="Fabricio Paucar | Desarrollador Full Stack"
      />
      <meta
        property="twitter:description"
        content="Portafolio profesional de Fabricio Paucar, desarrollador Full Stack especializado en React, Node.js y tecnologías modernas."
      />
      <meta
        property="twitter:image"
        content="https://fabricio-paucar.vercel.app/assets/og-image.png"
      />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://fabricio-paucar.vercel.app/" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Idioma */}
      <meta httpEquiv="Content-Language" content="es" />
      <meta name="language" content="Spanish" />
    </Helmet>
  );
};
