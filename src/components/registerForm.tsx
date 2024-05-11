import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './registerForm.module.scss';
import PasswordChecklist from "react-password-checklist"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
    email: string;
    login: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
      watch,
        reset,
        formState: { errors }
  } = useForm<IFormInput>();
  
    
      const onSubmit = (data: IFormInput) => {
        console.log(JSON.stringify(data));
        let email = data.email;
        let username = data.login;
        let password = data.password;
        let newObj = { email, username, password };
        console.log(JSON.stringify(newObj));
        try {
          let res = axios.post(
            "https://neobis-auth-project-e28eca5cdfcc.herokuapp.com/signUp",
            newObj
          );
          // const { accesToken, refreshToken } = res;
          
          console.log(res);
        } catch (error) {
          console.log(error);
          return;
        }
        reset();
        navigate('/emailSend')
      }; // your form submit function which will invoke after successful validation
    
    //   console.log(watch("example")); // you can watch individual input by pass the name of the input
    
    const [password, setPassword] = useState("");
    
    return (
      
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
              required: true
          })} />
    <input type="submit"/>
  </form>
  )
}

export default RegisterForm;