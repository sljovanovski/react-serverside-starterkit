import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/user';
import { Link } from 'react-router';
import styles from './FirstPage.scss';

class FirstPage extends Component {
    render() {
        return (
            <div>
                <div className={styles.red}>
                    <p className={styles.bold}>
                        First Page
                    </p>
                    <p>{'Email: ' + this.props.user.email}</p>
                    <Link to={'/second'}>Second</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstPage)
