import PropTypes from 'prop-types';
import Transaction from './Transaction';
import { ProfileCard, Structure, Table } from './Transactiorn.styled.js';

export const TransactionHistory = ({ items }) => {
    
    return (
        <ProfileCard>
            <thead>
                <tr>
                    <Structure>Type</Structure>
                    <Structure>Amount</Structure>
                    <Structure>Currency</Structure>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    const { type, amount, currency, id } = item
                    return <Table key={id} >
                        <Transaction
                            type={type}
                            amount={amount}
                            currency={currency}
                            id={id}
                        />
                    </Table>
                })}
      
            </tbody>
        </ProfileCard>
    )
};

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.string.isRequired}).isRequired
).isRequired
}

