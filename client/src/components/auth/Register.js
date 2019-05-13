import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('wrong password');
    } else {
      const newUser = {
        name,
        email,
        password,
        password2
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post(
          'http://localhost:5000/api/users/register',
          body,
          config
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  return (
    <>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form
        onSubmit={(e) => onSubmit(e)}
        className='form'
        action='create-profile.html'
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            required
            onChange={(e) => onChange(e)}
            value={name}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={(e) => onChange(e)}
            value={email}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
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
        <div className='form-group'>
          <input
            type='text'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            onChange={(e) => onChange(e)}
            value={password2}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <a href='login.html'>Sign In</a>
      </p>
    </>
  );
};

export default Register;
