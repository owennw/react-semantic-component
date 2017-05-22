import React from 'react'

import styles from './Page.css'

export function Page({ children }) {
  return (
    <div className={styles.page}>
      {children}
    </div>
  )
}

export function Header({ title, children }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export function SideHeader({ children }) {
  return (
    <div className={styles.sideHeader}>
      {children}
    </div>
  )
}

export function Body({ children }) {
  return (
    <div className={styles.body}>{children}</div>
  )
}
