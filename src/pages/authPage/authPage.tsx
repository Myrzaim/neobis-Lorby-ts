import React from 'react';
import styles from './authPage.module.scss';
import Logo from '../../assets/image/logo.png';
import { AuthForm } from '../../components/authForm';

export const AuthPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <p className={styles.container__titleFirst}>Lorby</p>
        <p className={styles.container__titleSecond}>Твой личный репетитор</p>
      </div>
      <div className={styles.container__right}>
              <p className={styles.container__greet}>Вэлком бэк!</p>
              <AuthForm />

      </div>
    </div>
  )
}
