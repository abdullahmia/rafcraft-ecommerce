import useAuthCheck from "./hooks/useAuthCheck";
import Main from "./pages/Main";

const App = () => {
    
  const authCheck = useAuthCheck();
  return !authCheck ? <div>Loading....</div>: (
    <Main />
  );
};

export default App;
