import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from './../user.json';
import data from './../data.json';
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

    </div>
  );
};
