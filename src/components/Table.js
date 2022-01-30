import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <body>
            {expenses.map((data) => (
              <tr key={ data.id }>
                <td>{data.description}</td>
                <td>{data.tag}</td>
                <td>{data.method}</td>
                <td>{data.value}</td>
                <td>{data.exchangeRates[data.currency].name}</td>
                <td>{Number(data.exchangeRates[data.currency].ask).toFixed(2)}</td>
                <td>
                  {Number(data.exchangeRates[data.currency].ask
               * data.value).toFixed(2)}
                </td>
                <td>Real</td>
              </tr>
            ))}
          </body>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Table);
