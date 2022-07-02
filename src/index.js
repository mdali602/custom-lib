import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Greet = ({ name }) => {
  return (
    <div>
      <h1> Hi {name}! </h1>
    </div>
  );
};

// export default Greet;
