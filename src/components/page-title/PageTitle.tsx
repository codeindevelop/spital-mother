import React from 'react';
import { Helmet } from 'react-helmet-async';

function PageTitle({ name }: any) {
  return (
    <>
      <Helmet>
        <title> {name} | اسپیتال</title>
      </Helmet>
    </>
  );
}

export default PageTitle;
