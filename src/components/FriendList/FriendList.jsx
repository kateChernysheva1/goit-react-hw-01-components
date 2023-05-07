import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export function FriendList({ data }) {
  return (
    <ul className={css.friendlist}>
      {data.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            <span
              className={`${css.status} ${isOnline ? css.green : css.red}`}
            ></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
