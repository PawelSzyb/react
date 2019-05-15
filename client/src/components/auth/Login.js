import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('SUCCESS');
  };

  return (
    <>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Sign Into Your Account
      </p>
      <form
        onSubmit={(e) => onSubmit(e)}
        className='form'
        action='create-profile.html'
      >
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={(e) => onChange(e)}
            value={email}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Password'
            name='password'
            minLength='6'
            onChange={(e) => onChange(e)}
            value={password}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign In</Link>
      </p>
    </>
  );
};

export default Login;
