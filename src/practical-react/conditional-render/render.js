function Greeting({ isLogin, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다
      {isLogin && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원입니다.</p>
        </div>
      )}
    </div>
  );
}

function GreetingA({ isLogin, name }) {
  if (isLogin) {
    return (
      <p className="greeting" onClick={showMenu}>{`${name}님 안녕하세요`}</p>
    );
  } else {
    return (
      <p className="noAuth" onClick={goToLoginPage}>
        권한이 없습니다
      </p>
    );
  }
}

function GreetingB({ isLogin, name }) {
  return (
    <p
      className={isLogin ? 'greeting' : 'noAuth'}
      onClick={isLogin ? showMenu : goToLoginPage}
    >
      {isLogin ? `${name}님 안녕하세요.` : `권한이 없습니다`}
    </p>
  );
}

const v1 = 'ab' && 0 && 2; // v1 === 0
const v2 = 'ab' && 2 && 3; // v2 === 3
const v3 = 'ab' || 0; // v3 === ab
const v4 = '' || 0 || 3; // v4 === 3
