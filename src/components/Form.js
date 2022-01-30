import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrency, wallet } from '../actions';
import apiAllCurrency from '../helper/ApiService';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: [],
    };

    this.handleButton = this.handleButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.mountCurrencie = this.mountCurrencie.bind(this);
  }

  componentDidMount() {
    this.mountCurrencie();
  }

  async mountCurrencie() {
    const fetch = await apiAllCurrency();
    this.setState({ exchangeRates: fetch });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleButton() {
    const { setDispatch, setDispatchFetch } = this.props;
    const { currency } = this.state;
    setDispatch(this.state);
    setDispatchFetch(currency);
    this.setState((state) => ({ value: 0, id: state.id + 1 }));
  }

  render() {
    const { method, tag, currency, value, description } = this.state;
    return (
      <form>
        <input
          data-testid="value-input"
          type="number"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <input
          data-testid="description-input"
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            <option data-testid="USD" value="USD">USD</option>
            <option data-testid="CAD" value="CAD">CAD</option>
            <option data-testid="EUR" value="EUR">EUR</option>
            <option data-testid="GBP" value="GBP">GBP</option>
            <option data-testid="ARS" value="ARS">ARS</option>
            <option data-testid="BTC" value="BTC">BTC</option>
            <option data-testid="LTC" value="LTC">LTC</option>
            <option data-testid="JPY" value="JPY">JPY</option>
            <option data-testid="CHF" value="CHF">CHF</option>
            <option data-testid="AUD" value="AUD">AUD</option>
            <option data-testid="CNY" value="CNY">CNY</option>
            <option data-testid="ILS" value="ILS">ILS</option>
            <option data-testid="ETH" value="ETH">ETH</option>
            <option data-testid="XRP" value="XRP">XRP</option>
          </select>
        </label>
        <label htmlFor="method">
          Método De Pagamento:
          <select
            value={ method }
            id="method"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            value={ tag }
            name="tag-input"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => this.handleButton() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDispatch: (value) => dispatch(wallet(value)),
  setDispatchFetch: (val) => dispatch(getCurrency(val)),
});

Form.propTypes = {
  setDispatch: PropTypes.func.isRequired,
  setDispatchFetch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
