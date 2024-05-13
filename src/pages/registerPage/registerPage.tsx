import React from 'react';
import Logo from '../../assets/image/logo.png';
import RegisterForm from '../../components/registerForm';
import back from '../../assets/image/back.png';
import styles from './register.module.scss';
import { Link } from 'react-router-dom';

const RegisterPage :React.FC  = () => {
    return (<>
            <Link to ={`/`} className={styles.link}> <img src={back} alt="backIcon" />
            назад</Link> 
    <div className={styles.container}>
    <div className={styles.container__left}>
      <img src={Logo} alt="logo" className={styles.logo} />
      <p className={styles.container__titleFirst}>Lorby</p>
      <p className={styles.container__titleSecond}>Твой личный репетитор</p>
          </div>
    <div className={styles.container__right}>
<RegisterForm/>
    </div>
        </div>
        </>
  )
}

export default RegisterPage;