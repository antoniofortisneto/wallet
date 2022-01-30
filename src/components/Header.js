import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  total = () => {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => (
      acc + curr.value * curr.exchangeRates[curr.currency].ask
    ), 0).toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <p data-testid="email-field">{ email }</p>
          <br />
          <p data-testid="total-field">
            Total:
            { this.total() }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
