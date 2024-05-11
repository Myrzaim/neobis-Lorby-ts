import React from 'react';
import styles from './greetPage.module.scss';
import Logo from '../../assets/image/logo.png';

type PropTypes = {
    title: string
  };
  

const GreetPage :React.FC<PropTypes>   = ({title}) => {
    return (<>
       
        <div className={styles.container}>
            <p className={styles.container__greet}>{title}</p>
        <p className={styles.container__title}> Lorby - твой личный репетитор</p>
            <img src={Logo} alt="logo" className={styles.logo} />
            <button>Выйти</button>
        </div>
      </>   
  )
}

export default GreetPage;