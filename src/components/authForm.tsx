import React from 'react';
import styles from './authForm.module.scss';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


interface IFormInput {
    login: string;
    password: string;
}

export const AuthForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm<IFormInput>();
    
      const onSubmit = (data: IFormInput) => {
        alert(JSON.stringify(data));
      }; // your form submit function which will invoke after successful validation
    
    //   console.log(watch("example")); // you can watch individual input by pass the name of the input
    

   

  return (<>
    <form  className={styles.form}>
          <input placeholder='Введи логин'
             {...register("login", {
                 required: true
             })} />
          {errors?.login?.type === "required" && <p>Заполни поле</p>}
    <input placeholder='Введи пароль'/>
    <button type="submit">Войти</button>
      </form>
      <Link to={`/register`}> <p>У меня еще нет аккаунта</p></Link>
    </>
  )
}
