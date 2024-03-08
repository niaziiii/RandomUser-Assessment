import RandomUserList from "./components/RandomUserList";
import UserProfile from "./components/UserProfile";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { useAssessmentContext } from "./context";
import useInitApp from "./utils/customHooks/useInitApp";

function App() {
  const { loading } = useInitApp();
  const { state } = useAssessmentContext();
  const { activeUser } = state;

  if (loading) return <LoadingSpinner />;
  if (activeUser) return <UserProfile />;
  return <RandomUserList />;
}

export default App;
