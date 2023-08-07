import PropTypes from 'prop-types';
import s from './Statistics.module.css';

// Function for random DARK color
function getColor() {
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

export default function StatisticsTable({ items }) {

  return <div className={s.statistics}>
    <h2 className={s.title}>Upload stats</h2>

    <ul className={s.stats}>
      {items.map(({ id, label, percentage }) => (
        
        <li className={s.item} key={id} style={{backgroundColor: getColor()}}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
      </ul>
    </div>
}

StatisticsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};