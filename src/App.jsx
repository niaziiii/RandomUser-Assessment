import RandomUserList from "./components/RandomUserList";
import useInitApp from "./utils/customHooks/useInitApp";

function App() {
  const { loading } = useInitApp();

  if (loading) return <>loading...</>;
  return (
    <div className="min-h-screen">
      <div className="mt-[10vh]">
        <h1 className="text-center text-4xl capitalize font-semibold">
          Assesment test
        </h1>
        <RandomUserList />
      </div>
    </div>
  );
}

export default App;
