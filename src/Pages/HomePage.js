import React from 'react'
import { Link } from "react-router-dom"
import styles from "./HomePage.module.css"


const HomePage = () => {
    return (
        <div className={styles.menu}>
            <Link className={styles.menu__link} to="/users">Загрузить пользователей</Link>
        </div>

    )
}

export default HomePage
