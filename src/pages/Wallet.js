import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { loginState } = this.props;
    return (
      <div>
        <div>bora ganar dinheiro</div>
        <header>
          <div data-testid="email-field">
            { loginState}
          </div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginState: state.user.email,
});

Wallet.propTypes = {
  loginState: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, null)(Wallet);
