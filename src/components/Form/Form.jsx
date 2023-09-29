import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import {AiOutlineMail, AiFillPhone} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {FaUserAlt} from 'react-icons/fa'
import {useForm} from "react-hook-form";
import InputMask from "react-input-mask"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"

import api from "../../config/api/api";
import {CustomContext} from "../../config/context/context";


const Form = () => {


    const [passwordView, setPasswordView] = useState(false)

    const {registerUser, loginUser} = useContext(CustomContext)

    const password = useRef()

    const location = useLocation()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "onBlur"
    })

    password.current = watch("password");



    const submitForm = (data) => {
        let {confirmPwd, ...user} = data

        if (location.pathname === '/login'){
            loginUser(user)
        } else {
            registerUser(user)
        }
    }

    return (
        <div className='form'>
                <div className="form__left">
                    <form noValidate action="" className="form__content" onSubmit={handleSubmit(submitForm)}>

                        <h2 className="form__content-title">
                            {
                                <Link className="form__span" to='/login'>Войти</Link>
                            }
                            {
                                <Link className="form__span" to='/register'>Регистрация</Link>

                            }

                        </h2>
                        <p className="form__content-text">



                        </p>

                            <label className="form__label">
                                <span className="form__label-text">Email</span>
                                <div className="form__label-field">
                            <span className="form__label-icon">
                                <AiOutlineMail/>
                            </span>
                                    <input {...register('email', {
                                        required: {
                                            message:'Поле не может быть пустым',
                                            value: true
                                        },
                                        minLength: {
                                            message: 'Напишите правильно свой email',
                                            value: 10
                                        },
                                        pattern: {
                                            message: 'Напишите правильно свой email',
                                            value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                        }
                                    })} type="email" className="form__label-input" placeholder='email'/>
                                </div>
                                <p className='register__label-error'>
                                    {errors.email && errors.email?.message}
                                </p>
                            </label>
                            {
                                location.pathname === '/register' &&  <label className="form__label">
                                    <span className="form__label-text">номер телефона</span>
                                    <div className="form__label-field">
                            <span className="form__label-icon">
                                <AiFillPhone/>
                            </span>
                                        <InputMask mask={`+\\9\\96(999)-999-999`} {...register('Phone', {
                                            required: {
                                                message: 'Поле не может быть пустым',
                                                value: true
                                            },
                                            pattern: {
                                                value: /^\+996\(\d{3}\)-\d{3}-\d{3}$/,
                                                message: 'Поле не может быть пустым'
                                            }
                                        })} type="tel" className="form__label-input" placeholder='телефон номер'/>
                                    </div>
                                    <p className='register__label-error'>
                                        {errors.phone && errors.phone?.message}
                                    </p>
                                </label>

                            }
                            <label className="form__label">
                                <span className="form__label-text">пароль</span>
                                <div className="form__label-field">
                            <span className="form__label-icon" onClick={() => setPasswordView(prev => !prev)}>
                                {
                                    passwordView ? <BsFillEyeFill/> :  <BsFillEyeSlashFill/>
                                }
                            </span>
                                    <input {...register('password', {
                                        required: {
                                            message: "а пароль?:(",
                                            value: true
                                        },
                                        pattern: {
                                            value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                            message: 'Пароль должен содержать не менее 8 символов'
                                        }
                                    })} type={passwordView ? 'text' : 'password'} className="form__label-input" placeholder='введите пароль'/>
                                </div>
                                <p className='register__label-error'>
                                    {errors.password && errors.password?.message}
                                </p>
                            </label>
                            {
                                location.pathname === '/register' &&  <label className="form__label">
                                    <span className="form__label-text">подтвердите пароль</span>
                                    <div className="form__label-field">
                                        <span className="form__label-icon" onClick={() => setPasswordView(prev => !prev)}>
                                            {
                                                passwordView ? <BsFillEyeFill/> :  <BsFillEyeSlashFill/>
                                            }
                                        </span>
                                        <input {...register('confirmPwd', {
                                            validate: value =>
                                                value === password.current || "Пароль не соответствует"
                                        })} type={passwordView ? 'text' : 'password'} className="form__label-input" placeholder='подтвердите пароль'/>
                                    </div>
                                    <p className='register__label-error'>
                                        {errors.confirmPwd && errors.confirmPwd?.message}
                                    </p>
                                </label>
                            }
                        {
                            location.pathname==='/register'?<button className="form__btn" type='submit'>Регистрация</button>:<button className="form__btn" type='submit'>Войти</button>
                        }


                    </form>
                </div>



        </div>
    );
};

export default Form;