import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { setAlert } from '../actions/alert';
import { signup } from '../actions/auth';
import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid"
import styles from "./Login.module.css"

const SignUp = ({ setAlert, signup, authenticated }) => {
    const id_user = uuid()

    const [formData, setFormData] = useState({
        id: id_user,
        username: '',
        first_name: '',
        last_name: '',
        password: '',
        is_active: true
    });


    const { id, username, first_name, last_name, password, is_active } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        signup({ id, username, first_name, last_name, password, is_active });
    };

    if (authenticated)
        return <Redirect to='/home' />;

    return (
        <div className={styles.auth}>
            <Helmet>
                <title>Регистрация</title>
                <meta
                    name='description'
                    content='sign up page'
                />
            </Helmet>
            <h1 className='auth__title'>Создать аккаунт</h1>
            <form className={styles.auth__form} onSubmit={e => onSubmit(e)}>
                <div className='auth__form__group'>
                    <input
                        className={styles.auth__form__input}
                        type='text'
                        placeholder='Логин'
                        name='username'
                        value={username}
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
                        required
                    />
                </div>
                <div className='auth__form__group'>
                    <input
                        className={styles.auth__form__input}
                        type='text'
                        placeholder='Имя'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}

                    />
                </div>
                <div className='auth__form__group'>
                    <input
                        className={styles.auth__form__input}
                        type='text'
                        placeholder='Фамилия'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}

                    />
                </div>

                <button className={styles.auth__form__button}>Регистарция</button>
            </form>
            <p className={styles.auth__authtext}>
                Уже есть аккаунт? <Link className='auth__authtext__link' to='/'>Авторизоваться</Link>
            </p>
        </div>
    );

};

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    authenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    authenticated: state.appAuth.authenticated
})

export default connect(mapStateToProps, { setAlert, signup })(SignUp);