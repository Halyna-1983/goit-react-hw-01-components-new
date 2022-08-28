import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
<>
        <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        name={friend.name}
                    />
                </li>
            ))}
            </ul>
            </>
    )
};

FriendList.propTypes = {
    isOnline: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
