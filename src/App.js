import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './router/About';
import HistorySample from './router/HistorySample';
import Home from './router/Home';
import Profiles from './router/Profiles';

const App = () => {
<<<<<<< HEAD
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">사용자</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 설정하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};
=======
  return <Users />;
>>>>>>> 69018cbf356cea8181c76d1ad1cf8c6a799fa39a

export default App;
