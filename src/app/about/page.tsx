import React from 'react';
import Image from 'next/image';
import meImage from './me.png';
import styles from './about.module.css';


export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image src={meImage} alt="Photo" priority={true} loading={'eager'}/>
      <div className={''}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, cumque debitis quasi quos repudiandae sit
        unde. Aperiam, consectetur dolorem error eveniet, fugit hic ipsum placeat rerum sed tempora totam ut?
      </div>
    </article>
  );
}