import PropTypes from 'prop-types'; 
import { ProfileCard, Avatar, UserName, Tag, Stats, StatsUl, StatsItem, Quantity } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes}}) => {
    return (

    <ProfileCard>
        
        <Avatar
            src={avatar}
            alt="User avatar"
        />
            
            <UserName>{ username }</UserName>
            <Tag>@{ tag }</Tag>
            <Tag>{ location }</Tag> 
        
        <Stats>
                    
            <StatsUl>
                <StatsItem>
                    <span>Followers</span>
                    <Quantity>{ followers }</Quantity>
                </StatsItem>
                <StatsItem>
                    <span>Views</span>
                    <Quantity>{views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <span>Likes</span>
                    <Quantity>{likes}</Quantity>
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