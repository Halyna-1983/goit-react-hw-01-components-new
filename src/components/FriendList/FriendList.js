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
    friendlist: PropTypes.shape({
        isOnline: PropTypes.string,
        avatar: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
    }),
};
