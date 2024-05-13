import React from 'react';
import styles from './authForm.module.scss';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';


interface IFormInput {
    username: string;
    password: string;
}

export const AuthForm = () => {
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm<IFormInput>();
    
      const onSubmit = async (data: IFormInput) => {
        console.log(JSON.stringify(data));
        try {
          let res = await axios.post(
            "http://207.154.255.31:8085/logIn",
            data
          );
          const accessToken = res.data.token;
          localStorage.setItem('accessToken', accessToken)
          // console.log(accessToken);
          navigate('/greet')
          
        } catch (error) {
          console.log(error);
          return;
        }
      }; 
    

   

  return (<>
    <form  className={styles.form } onSubmit={handleSubmit(onSubmit)} >
          <input placeholder='Введи логин'
             {...register("username", {
                 required: true
             })} />
          {errors?.username?.type === "required" && <p>Заполни поле</p>}
      <input placeholder='Введи пароль'
        {...register("password", {
                 required: true
        })} />
       {errors?.password?.type === "required" && <p>Заполни поле</p>}
    <button type="submit">Войти</button>
      </form>
      <Link to={`/register`}> <button className={styles.btn}>У меня еще нет аккаунта</button></Link>
    </>
  )
}
