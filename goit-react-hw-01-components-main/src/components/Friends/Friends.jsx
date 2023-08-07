import PropTypes from 'prop-types';
import s from './Friends.module.css';

export default function Friends({ items }) {
  return <ul className={s.friendsList}>
    {items.map(({id, isOnline, avatar, name}) => (
        <li className={s.item} key={id}>
            <span className={isOnline ? s.online : s.offline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
      </li>
    ))}
  </ul>
}

Friends.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};