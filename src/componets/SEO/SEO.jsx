import { Helmet } from "react-helmet-async";

export const SEO = () => {
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>Alex Fabricio | Developer</title>
      <meta
        name="description"
        content="Professional portfolio of Alex Fabricio Pachacama, Full Stack developer specialized in backend, mobile applications and modern technologies."
      />
      <meta
        name="keywords"
        content="developer, portfolio, programmer, full stack, backend, scriptcase, kalipso studio, sql server, postgresql, javascript, nestJS, nodeJS, express, flutter, reactJS, insomia, github"
      />
      <meta name="author" content="Alex Fabricio Pachacama" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aleks-fabricio.vercel.app/" />
      <meta
        property="og:title"
        content="Alex Fabricio | Developer"
      />
      <meta
        property="og:description"
        content="Professional portfolio of Alex Fabricio Pachacama, Full Stack developer specialized in backend, mobile applications and modern technologies."
      />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://aleks-fabricio.vercel.app/" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Idioma */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
    </Helmet>
  );
};
