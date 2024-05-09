import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="bg-red-50 min-h-screen flex flex-col gap-8 justify-center items-center">
      <h1 className="bg-purple-200 w-[936px] text-4xl font-bold">2024, May</h1>
      <Calendar />
    </div>
  );
};

export default App;
