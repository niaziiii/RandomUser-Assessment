import RandomUserList from "./components/RandomUserList";
import LoadingSpinner from "./components/common/LoadingSpinner";
import useInitApp from "./utils/customHooks/useInitApp";

function App() {
  const { loading } = useInitApp();

  if (loading) return <LoadingSpinner />;
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-[10vh] w-[95%] lg:w-[80%] m-auto">
        <h1 className="text-center text-4xl capitalize font-semibold">
          Assesment test
        </h1>
        <RandomUserList />
      </div>
    </div>
  );
}

export default App;
