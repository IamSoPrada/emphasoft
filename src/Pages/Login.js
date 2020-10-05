import React, { useState } from 'react'
import { Redirect, Link } from "react-router-dom"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { login } from "../actions/auth"
import styles from "./Login.module.css"


const Login = ({ login, authenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(username, password);
    };

    if (authenticated)
        return <Redirect to='/' />;

    return (
        <div className={styles.auth}>
            <Helmet>
                <title>Emphasoft Авторизация</title>
                <meta
                    name='description'
                    content='login page'
                />
            </Helmet>

            <h1 className='auth__title'>Авторизация</h1>
            <form className={styles.auth__form} onSubmit={e => onSubmit(e)}>
                <div className='auth__form__group'>
                    <input
                        className={styles.auth__form__input}
                        type='username'
                        placeholder='Логин'
                        name='username' value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='auth__form__group'>
                    <input
                        className={styles.auth__form__input}
                        type='password'
                        placeholder='Пароль'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='8'
                        required
                        pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
                    />
                </div>
                <button type='submit' className={styles.auth__form__button}>Войти</button>

            </form>
            <p className={styles.auth__authtext}>
                Нет аккаунта? <Link className='auth__authtext__link' to='/signup'>Зарегистрироваться</Link>
            </p>
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    authenticated: PropTypes.bool
};

const mapStateToProps = ({ appAuth: { authenticated } }) => {
    return {
        authenticated
    }
};

export default connect(mapStateToProps, { login })(Login);