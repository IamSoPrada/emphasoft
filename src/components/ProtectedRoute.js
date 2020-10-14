import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class ProtectedRoute extends Component {
    render() {
        const Component = this.props.component;


        const isAuthenticated = this.props.token;

        return isAuthenticated ? (
            <Component />
        ) : (
                <Redirect to='/login' />
            );
    }
}

const mapStateToProps = ({ appAuth: { token } }) => ({
    token: token
});

export default connect(mapStateToProps, null)(ProtectedRoute);