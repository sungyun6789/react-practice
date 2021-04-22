import React, { useEffect, useState } from 'react';
import useOnMounted from './useOnMounted';

const EffectComponent = ({ userId }) => {
  const [user, setUser] = useState();
  const [needDetail, setNeedDetial] = useState(false);

  // useEffect(() => {
  //   fetchUser(userId, needDetial).then((data) => setUser(data));
  // }, [userId]);
  useOnMounted(() => fetchUser(userId).then((data) => setUser(data)));

  console.log(user, setNeedDetial);
  return null;
};

function fetchUser() {}

export default EffectComponent;
