import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Navbar = ({ auth: { isAuthenticated, isLoading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <NavLink onClick={logout} to='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </NavLink>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <NavLink to='/#!'>Developers</NavLink>
      </li>
      <li>
        <NavLink to='/register'>Register</NavLink>
      </li>
      <li>
        <NavLink to='/login'>Login</NavLink>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <NavLink to='/'>
          <i className='fas fa-code' /> DevConnector
        </NavLink>
      </h1>
      {!isLoading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
