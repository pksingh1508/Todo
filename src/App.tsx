import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import Banner from "./assets/Banner.mp4";

const App = () => {

  const gradientStyle = {
    background: 'linear-gradient(117.95deg, #833AB4, #FD1D1D, #FCB045)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

const gradientStyle2 = {
    background: 'linear-gradient(117.95deg, rgba(255, 81, 47, 1), rgba(240, 152, 25, 1))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
};


  return (
    <main className="relative w-full h-[100vh] bg-gray-400 flex flex-col items-center overflow-x-hidden">
      <div className="absolute w-full h-full z-0">
      <video
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4"/>
          </video>
      </div>
      <div className="absolute z-10 top-9 bg-transparent w-[300px] sm:w-[600px] lg:w-[900px]">
        <h1 className="text-4xl font-bold" style={gradientStyle}>TODO : </h1>
        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold" style={gradientStyle2}>Make Your Work List</h2>
        <Navbar />
        <AddTodo />
        <Todos />
      </div>
    </main>
  )
}

export default App;