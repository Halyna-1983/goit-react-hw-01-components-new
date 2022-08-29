import PropTypes from 'prop-types';
import { ProfileCard, Name } from './FriendListItem.styled';

 const FriendListItem = friends => {
    const { avatar, name, isOnline } = friends
    return (
        <ProfileCard>
            <span style={{ backgroundColor: isOnline === true ? 'green' : 'red' }} />
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <Name className="name">{name}</Name>
        </ProfileCard>
    );
};

export default FriendListItem;

FriendListItem.propTypes = {
isOnline: PropTypes.bool.isRequired,
name: PropTypes.string.isRequired,
avatar: PropTypes.string,
}
