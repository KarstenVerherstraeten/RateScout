import React from 'react';
import NotFound from '../styles/404.module.css'

const PageNotFound = () => {
  return (
    <div className={NotFound.container}>
      <h1 className={NotFound.header}>404</h1>
      <h2 className={NotFound.subHeader}>Pagina niet gevonden</h2>
      <p className={NotFound.paragraph}>
      Oeps! De pagina die je zoekt, bestaat niet. Het kan zijn verplaatst of verwijderd.
      </p>
      <a href="/" className={NotFound.link}>Terug naar home</a>
    </div>
  );
};

export default PageNotFound;
