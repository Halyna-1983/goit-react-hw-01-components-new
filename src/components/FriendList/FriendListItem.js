import PropTypes from 'prop-types';
// import {  } from './FriendListItem.styled';

 const FriendListItem = friends => {
    const { avatar, name, isOnline } = friends
    return (
        <>
            <span style={{ backgroundColor: isOnline === true ? 'green' : 'red' }} />
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </>
    );
};

export default FriendListItem;

FriendListItem.propTypes = {
isOnline: PropTypes.bool.isRequired,
name: PropTypes.string.isRequired,
avatar: PropTypes.string,
}
