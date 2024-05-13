import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './registerForm.module.scss';
import PasswordChecklist from "react-password-checklist"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import EmailSendPage from '../pages/emailSendPage/emailSendPage';

interface IFormInput {
    email: string;
    login: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
      watch,
        reset,
        formState: { errors, }
  } = useForm<IFormInput>();
  
    
      const onSubmit = (data: IFormInput) => {
        console.log(JSON.stringify(data));
        let email = data.email;
        let username = data.login;
        let password = data.password;
        setUserEmail(data.email)
        let newObj = { email, username, password };
        console.log(JSON.stringify(newObj));
        try {
          let res = axios.post(
            "https://neobis-auth-project-e28eca5cdfcc.herokuapp.com/signUp",
            newObj
          );
          setShowRegisterForm(false);
        
          console.log(res);
        } catch (error) {
          console.log(error);
          return;
        }
        reset();
        
      }; 
    
  
    
    const [password, setPassword] = useState("");
    
  return (
      showRegisterForm?
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <p className={styles.container__greet}>Создать аккаунт Lorby</p>
        <input placeholder='Введи адрес почты'
        
          {...register("email", {
          required: "Обязательное поле",
          pattern: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i
      })}
        />
        <div className={styles.form__error}>
          {errors?.email && <p>{errors?.email?.message || "Должен содержать @"}</p>}</div>
        
    
          

        <input placeholder='Придумай логин' {...register("login", {
          required: "Обязательное поле",
          pattern: /^[A-Za-z]+$/i
        })} />
        <div className={styles.form__error}>
          {errors?.login && <p>{errors?.login?.message || "Errors"}</p>}</div>

        <input placeholder='Создай пароль' 
          {...register("password", {
            required: true
          })}
          onChange={e => setPassword(e.target.value)}
        />
  
        <PasswordChecklist className={styles.form__error}
				rules={["minLength","letter","number","specialChar"]}
				minLength={5}
          value={password}
          onChange={(isValid) => { }}
          messages={{
            minLength: "От 8 до 15 символов",
            letter: "Строчные и прописные буквы",
            number: "Минимум 1 цифра",
            specialChar: 'Минимум 1 спецсимвол (!, ", #, $...)'
          }}
			/>
          
        
          <input   placeholder='Повтори пароль'{...register("confirmPassword", {
              required: true, validate: (val: string) => {
                if (watch('password') != val) {
                  return "Пароли не совпадают!";
                }
              }
          })} />
        <div className={styles.form__error}>
          {errors?.confirmPassword && <p>{errors?.confirmPassword?.message || "Errors"}</p>}</div>
    <input type="submit"/>
      </form> : <EmailSendPage email={userEmail} />
  )
}

export default RegisterForm;