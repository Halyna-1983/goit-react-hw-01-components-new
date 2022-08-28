import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import user from './../user.json';
import data from './../data.json';
import friends from './../friends.json';

import { Title } from './App.styles';


export const App = () => {
  return (
    <div>
      <Title> 1 - Профіль соціальної мережі </Title>
        <Profile 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

      <Title> 2- Секція статистики </Title>
        <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data}/> */}

      <Title> 3 - Список друзів </Title>
      <FriendList friends={friends} />;

      <Title> 4 - Історія транзакцій </Title>

    </div>
  );
};
