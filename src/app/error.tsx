'use client';

import { ERRORS } from '@/app/errors';


export  default  function HomePageError({error}: {error: Error}) {
  if(error.message === ERRORS.NOT_FOUND) {
    return <>Articles not found.</>
  }

  return (
    <>
      <h1>Sorry, bro</h1>
      <p>Something went wrong</p>
    </>
  )
}