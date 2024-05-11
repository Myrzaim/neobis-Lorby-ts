import React from 'react';
import Logo from '../../assets/image/logo.png';
import styles from "./email.module.scss";
import back from '../../assets/image/back.png';
import { Link } from 'react-router-dom';

const EmailSendPage:React.FC = () => {
  return (<>
    <Link to ={`/`}>    <img src={back} alt="backIcon" />
    <span>назад</span></Link> 
<div className={styles.container}>
<div className={styles.container__left}>
<img src={Logo} alt="logo" className={styles.logo} />
<p className={styles.container__titleFirst}>Lorby</p>
<p className={styles.container__titleSecond}>Твой личный репетитор</p>
          </div>
          <div className={styles.container__right}>
              <p className={styles.container__message1}>Выслали письмо со ссылкой для завершения регистрации на example@gmail.com</p>
              <p className={styles.container__message2}>Если письмо не пришло, не спеши ждать совиную почту - лучше <span>проверь ящик “Спам” 

                  (´｡• ω •｡`) </span> </p>
              <button>Письмо не пришло</button>
    </div>
              </div>
              </>)
}

export default EmailSendPage;