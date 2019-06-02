import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {
  createOrUpdateProfile,
  getCurrentProfile
} from '../../actions/profileActions';
import PropTypes from 'prop-types';

const UpdateProfile = ({
  profile: { profile, isLoading },
  createOrUpdateProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  useEffect(() => {
    getCurrentProfile();
    if (!profile || profile === null) return history.push('/dashboard');
    setFormData({
      company: !profile.company || isLoading ? '' : profile.company,
      website: !profile.website || isLoading ? '' : profile.website,
      location: !profile.location || isLoading ? '' : profile.location,
      status: !profile.status || isLoading ? '' : profile.status,
      skills: !profile.skills || isLoading ? '' : profile.skills.join(','),
      githubusername:
        !profile.githubusername || isLoading ? '' : profile.githubusername,
      bio: !profile.bio || isLoading ? '' : profile.bio,
      twitter: !profile.social || isLoading ? '' : profile.social.twitter,
      facebook: !profile.social || isLoading ? '' : profile.social.facebook,
      linkedin: !profile.social || isLoading ? '' : profile.social.linkedin,
      youtube: !profile.social || isLoading ? '' : profile.social.youtube,
      instagram: !profile.social || isLoading ? '' : profile.social.instagram
    });
  }, [isLoading]);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createOrUpdateProfile(formData, history, true);
  };
  return (
    <>
      <section className='container'>
        <h1 className='large text-primary'>Update Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Let's get some information to make your
          profile stand out
        </p>
        <small>* = required field</small>
        <form onSubmit={(e) => onSubmit(e)} className='form'>
          <div className='form-group'>
            <select
              name='status'
              value={formData.status}
              onChange={(e) => onChange(e)}
            >
              <option value='0'>* Select Professional Status</option>
              <option value='Developer'>Developer</option>
              <option value='Junior Developer'>Junior Developer</option>
              <option value='Senior Developer'>Senior Developer</option>
              <option value='Manager'>Manager</option>
              <option value='Student or Learning'>Student or Learning</option>
              <option value='Instructor'>Instructor or Teacher</option>
              <option value='Intern'>Intern</option>
              <option value='Other'>Other</option>
            </select>
            <small className='form-text'>
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className='form-group'>
            <input
              value={formData.company}
              onChange={(e) => onChange(e)}
              type='text'
              placeholder='Company'
              name='company'
            />
            <small className='form-text'>
              Could be your own company or one you work for
            </small>
          </div>
          <div className='form-group'>
            <input
              value={formData.website}
              onChange={(e) => onChange(e)}
              type='text'
              placeholder='Website'
              name='website'
            />
            <small className='form-text'>
              Could be your own or a company website
            </small>
          </div>
          <div className='form-group'>
            <input
              value={formData.location}
              onChange={(e) => onChange(e)}
              type='text'
              placeholder='Location'
              name='location'
            />
            <small className='form-text'>
              City & state suggested (eg. Boston, MA)
            </small>
          </div>
          <div className='form-group'>
            <input
              value={formData.skills}
              onChange={(e) => onChange(e)}
              type='text'
              placeholder='* Skills'
              name='skills'
            />
            <small className='form-text'>
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Github Username'
              name='githubusername'
              value={formData.githubusername}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className='form-group'>
            <textarea
              value={formData.bio}
              onChange={(e) => onChange(e)}
              placeholder='A short bio of yourself'
              name='bio'
            />
            <small className='form-text'>Tell us a little about yourself</small>
          </div>

          <div className='my-2'>
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type='button'
              className='btn btn-light'
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

          {displaySocialInputs && (
            <>
              {' '}
              <div className='form-group social-input'>
                <i className='fab fa-twitter fa-2x' />
                <input
                  value={formData.twitter}
                  onChange={(e) => onChange(e)}
                  type='text'
                  placeholder='Twitter URL'
                  name='twitter'
                />
              </div>
              <div className='form-group social-input'>
                <i className='fab fa-facebook fa-2x' />
                <input
                  value={formData.facebook}
                  onChange={(e) => onChange(e)}
                  type='text'
                  placeholder='Facebook URL'
                  name='facebook'
                />
              </div>
              <div className='form-group social-input'>
                <i className='fab fa-youtube fa-2x' />
                <input
                  value={formData.youtube}
                  onChange={(e) => onChange(e)}
                  type='text'
                  placeholder='YouTube URL'
                  name='youtube'
                />
              </div>
              <div className='form-group social-input'>
                <i className='fab fa-linkedin fa-2x' />
                <input
                  value={formData.linkedin}
                  onChange={(e) => onChange(e)}
                  type='text'
                  placeholder='Linkedin URLs'
                  name='linkedin'
                />
              </div>
              <div className='form-group social-input'>
                <i className='fab fa-instagram fa-2x' />
                <input
                  type='text'
                  placeholder='Instagram URL'
                  name='instagram'
                  value={formData.instagram}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </>
          )}

          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </form>
      </section>
    </>
  );
};

UpdateProfile.propTypes = {
  createOrUpdateProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createOrUpdateProfile, getCurrentProfile }
)(withRouter(UpdateProfile));
