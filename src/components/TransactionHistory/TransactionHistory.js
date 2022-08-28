// import PropTypes from 'prop-types';
import Transaction from './Transaction';

const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    const { type, amount, currency, id } = item
                    return <tr key={id} >
                        <Transaction
                            type={type}
                            amount={amount}
                            currency={currency}
                            id={id}
                        />
                    </tr>
                })}
      
            </tbody>
        </table>
    )
};

// TransactionHistory.propTypes = {
// items: PropTypes.arrayOf(
//     PropTypes.shape({id: PropTypes.string.isRequired}).isRequired
// ).isRequired
// }

export default TransactionHistory;