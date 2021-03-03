import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(query);

  const detail = query.detail === 'true'; // 쿼리의 파싱결과값은 문자열

  return (
    <div>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고...</p>}
    </div>
  );
};

export default About;
