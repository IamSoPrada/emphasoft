import React, { Component } from 'react'
import Spinner from "../spinner"
import { WithUsersService } from "../../hoc"
import { compose } from "../../utils"
import ErrorIndicator from "../../error-indicator"
import styles from "./UserListTable.module.css"

import { fetchUsers } from "../../actions/users"
import { connect } from "react-redux"


const UserListTable = ({ users }) => {

    return (
        <div className={styles.users__table}>
            <h2>Пользователи</h2>
            <table>
                <thead className="table">
                    <tr>
                        <th>#</th>
                        <th>Логин</th>
                        <th>Пароль</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Предыдущий логин</th>
                        <th>Суперпользователь</th>
                    </tr>
                </thead>
                <tbody className="table__text">
                    {
                        users.map((user, idx) => {
                            const { id, username, first_name, last_name, last_login, is_superuser } = user
                            return (
                                <tr key={id}>
                                    <td>{idx + 1}</td>
                                    <td>{username}</td>
                                    <td>{first_name}</td>
                                    <td>{last_name}</td>
                                    <td>{last_login}</td>
                                    <td>{is_superuser}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

class UsersListContainer extends Component {


    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const { users, loading, error } = this.props

        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <UserListTable users={users} />
    }
}

const mapStateToProps = ({ appUsers: { users, loading, error } }) => {
    return {
        users,
        loading,
        error
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    const { usersService } = ownProps
    return {
        fetchUsers: fetchUsers(usersService, dispatch)
    }

}


export default compose(
    WithUsersService(),
    connect(mapStateToProps, mapDispatchToProps))(UsersListContainer)