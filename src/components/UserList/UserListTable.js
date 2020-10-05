import React, { Component, useState } from 'react'
import Spinner from "../spinner"
import { WithUsersService } from "../../hoc"
import { compose } from "../../utils"
import ErrorIndicator from "../../error-indicator"
import styles from "./UserListTable.module.css"
import { Helmet } from "react-helmet"
import { fetchUsers } from "../../actions/users"
import { connect } from "react-redux"
import { onFindUsername } from '../../actions/find'


const UserListTable = ({ users, find }) => {

    const [findUsername, setFindUsername] = useState("")

    return (
        <React.Fragment>
            <Helmet>
                <title>Emphasoft Пользователи</title>
                <meta
                    name='description'
                    content='login page'
                />
            </Helmet>
            <div className={styles.container}>
                <h2>Поиск по username:</h2>

                <div className={styles.users__table}>

                    <div className={styles.users__form}>
                        <input className={styles.users__form__input} type="text" onChange={e => setFindUsername(e.target.value)} />
                        <button className={styles.users__form__button} onClick={() => find(findUsername)}>Найти</button>
                    </div>

                    <table align="center" className={styles.table}>
                        <thead >
                            <tr >
                                <th scope="col" className={styles.table__head}>#</th>
                                <th scope="col" className={styles.table__head}>ID</th>
                                <th scope="col" className={styles.table__head}>Username</th>
                                <th scope="col" className={styles.table__head}>Имя</th>
                                <th scope="col" className={styles.table__head}>Фамилия</th>
                            </tr>
                        </thead>
                        <tbody className="table__text">
                            {
                                users.map((user, idx) => {
                                    const { id, username, first_name, last_name } = user
                                    return (
                                        <tr key={id}>
                                            <td data-label="#" className={styles.table__row}>{idx + 1}</td>
                                            <td data-label="ID" className={styles.table__row}>{id}</td>
                                            <td data-label="Username" className={styles.table__row}>{username}</td>
                                            <td data-label="Имя" className={styles.table__row}>{first_name}</td>
                                            <td data-label="Фамилия" className={styles.table__row}>{last_name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>

    )
}

class UsersListContainer extends Component {


    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const { users, loading, error, find } = this.props

        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <UserListTable users={users} find={find} />
    }
}

const mapStateToProps = ({ appUsers: { users, loading, error }, appFind: { findUsername } }) => {

    return {
        users: users.filter(user => user.username.includes(findUsername)),
        loading,
        error,
        findUsername
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    const { usersService } = ownProps
    return {
        fetchUsers: fetchUsers(usersService, dispatch),
        find: (input) => dispatch(onFindUsername(input))
    }

}


export default compose(
    WithUsersService(),
    connect(mapStateToProps, mapDispatchToProps))(UsersListContainer)