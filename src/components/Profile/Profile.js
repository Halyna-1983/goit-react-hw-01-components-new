import PropTypes from 'prop-types'; 
import { ProfileCard, Avatar, UserName, Tag, Stats, StatsUl, StatsItem } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes}}) => {
    return (

    <ProfileCard>
        
        <Avatar
            src={avatar}
            alt="User avatar"
            className="avatar"
        />
            
            <UserName className="name">{ username }</UserName>
            <Tag className="tag">@{ tag }</Tag>
            <Tag className="location">{ location }</Tag> 
        
        <Stats>
                    
            <StatsUl>
                <StatsItem>
                    <span className="label">Followers</span>
                    <span className="quantity">{ followers }</span>
                </StatsItem>
                <StatsItem>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </StatsItem>
                <StatsItem>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </StatsItem>
            </StatsUl>
        </Stats>
    </ProfileCard>
            
    )
};

Profile.propTypes = {
    profile: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};