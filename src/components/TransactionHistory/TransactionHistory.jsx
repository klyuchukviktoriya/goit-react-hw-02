import clsx from "clsx";
import s from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => (
    <table className={s.table}>
        <thead className={s.tableHeader}>
            <tr>
                <th className={clsx(s.tableHeaderCell, s.tableCell,)}>Type</th>
                <th className={clsx(s.tableHeaderCell, s.tableCell)}>Amount</th>
                <th className={clsx(s.tableHeaderCell, s.tableCell)}>Currency</th>
            </tr>
        </thead>
        <tbody className={s.tableBody}>
            {items.map(item => (
                <tr key={item.id} className={s.tableRow}>
                    <td className={clsx(s.tableCell, s.type)}>{item.type}</td>
                    <td className={clsx(s.tableCell, s.amount)}>{item.amount}</td>
                    <td className={s.tableCell}>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
export default TransactionHistory;