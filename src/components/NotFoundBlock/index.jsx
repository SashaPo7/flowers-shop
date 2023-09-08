import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>
          😕
        </span>
        <br />
        Page is not found
      </h1>
      <p className={styles.description}>Unfortunately, this page is not available in our online store</p>
    </div>
  )
}

export default NotFound;