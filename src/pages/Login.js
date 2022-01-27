import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAdd } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  hendleChenge = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    const { email } = this.state;
    const { submitEmail } = this.props;
    submitEmail(email);
  };

  checkPassword = () => {
    const { email, password } = this.state;
    const minCharacter = 6;
    if (
      password.length >= minCharacter
      && email.includes('@')
      && email.includes('.')
    ) {
      return false;
    }
    return true;
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.hendleChenge }
            value={ email }
            placeholder="joga teu email"
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.hendleChenge }
            value={ password }
            placeholder="passa a senha ai"
          />
          <Link to="/carteira">
            <button
              type="submit"
              onClick={ this.hendleChenge }
              disabled={ this.checkPassword() }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    submitEmail: userAdd,
  },
  dispatch,
);
Login.propTypes = {
  submitEmail: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
