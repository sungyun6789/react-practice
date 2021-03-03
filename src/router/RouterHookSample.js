import useReactRouter from 'use-react-router';

const RouterHookSample = () => {
  const { history, location, match } = useReactRouter;
  console.log({ history, location, match });
  return null;
};

export default RouterHookSample;
