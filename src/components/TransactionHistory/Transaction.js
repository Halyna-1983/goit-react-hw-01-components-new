import PropTypes from 'prop-types'; 

const Transaction = ({type, amount, currency}) => (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
)

Transaction.propTypes = {
    transaction: PropTypes.shape({
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    }),
};

export default Transaction;