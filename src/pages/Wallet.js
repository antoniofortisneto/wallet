import React from 'react';
import WalletHeader from '../components/Header';
import WalletForm from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <WalletForm />
      </div>
    );
  }
}

export default Wallet;
