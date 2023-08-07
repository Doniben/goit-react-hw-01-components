import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export default function Transactions({ items }) {
    return <table className={s.transactions}>
        <thead className={s.head}>
            <tr>
                <th className={s.head_item}>Type</th>
                <th className={s.head_item}>Amount</th>
                <th className={s.head_item}>Currency</th>
            </tr>
        </thead>
        
        {items.map(({ id, type, amount, currency }) => (
            <tbody key={id} className={s.body}>
                <tr className={s.row}>
                    <td className={s.row_item}>{type}</td>
                    <td className={s.row_item}>{amount}</td>
                    <td className={s.row_item}>{currency}</td>
                </tr>
            </tbody>
        ))}
    </table>
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};