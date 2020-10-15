import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { create } from '../actions/crud';
import PropTypes from 'prop-types';

import styles from "./Login.module.css"

const CreateUser = ({ create}) => {
    

    const [formData, setFormData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        password: '',
        is_active: true
    });


    const { username, first_name, last_name, password, is_active } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        create({  username, first_name, last_name, password, is_active });
    };

    return (
        <div className={styles.auth}>
            <Helmet>
                <title>Создать аккаунт</title>
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
                <button className={styles.auth__form__button}>Отправить</button>
            </form>
        </div>
    );

};

CreateUser.propTypes = {
    create: PropTypes.func.isRequired,
    authenticated: PropTypes.bool
};

const mapStateToProps = ({appAuth: {authenticated}}) => ({
    authenticated
})

export default connect(mapStateToProps, { create })(CreateUser);