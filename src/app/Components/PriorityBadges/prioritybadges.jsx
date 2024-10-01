import React from 'react'
import styles from "./priority.module.css"
const Low = () => {
  return (
    <div className={styles.low}>
      <p>Low</p>
    </div>
  )
}
const Medium = () => {
  return (
    <div className={styles.medium}>
      <p>Medium</p>
    </div>
  )
}
const High = () => {
  return (
    <div className={styles.high}>
      <p>High</p>
    </div>
  )
}

export {Low, Medium, High}
