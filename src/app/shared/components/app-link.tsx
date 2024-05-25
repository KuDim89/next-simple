import Link from 'next/link';
import React from 'react';
import styles from './app-link.module.css'
import { UrlObject } from 'node:url';


export function AppLink({children, href}: {children: React.ReactNode, href: string | UrlObject}) {
  return <Link className={styles.root} href={href}>{children}</Link>
}