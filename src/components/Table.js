import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpenseAction, deleteButton } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete({ target }) {
    const { id } = target.parentElement.parentElement;
    const { dispatchDelete } = this.props;
    dispatchDelete(parseInt(id, 10));
    target.remove(target.parentElement.parentElement);
  }

  handleEdit({ target }) {
    const { id } = target.parentElement.parentElement;
    const { dispatchEdit } = this.props;
    dispatchEdit(id);
  }

  render() {
    const { expenses, editExpense } = this.props;
    return (
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
        <tbody>
          {
            expenses.length > 0 && expenses.map((
              { id, value, description, currency, method, tag, exchangeRates },
            ) => (
              <tr id={ id } key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>
                  {
                    (parseFloat(value) * parseFloat(exchangeRates[currency].ask))
                      .toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => editExpense(expense.id) }
                  >
                    edit
                  </button>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ this.handleDelete }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDelete: (id) => dispatch(deleteButton(id)),
  dispatchEdit: (id) => dispatch(editExpense(id)),
  editExpense: (id) => dispatch(editExpenseAction(id)),

});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchDelete: PropTypes.func.isRequired,
  dispatchEdit: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
