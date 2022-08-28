import PropTypes from 'prop-types'; 
// import {  } from './Statistics.styled';

const Transaction = ({ items }) => {
    const {type, amount, currency} = items 
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    );
};

// Transaction.propTypes = {
//     statistics: PropTypes.exact({
//         type: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//         percentage: PropTypes.string.isRequired,
//     }),
// };

export default Transaction;