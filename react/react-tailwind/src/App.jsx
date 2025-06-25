import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      {/* Navbar */}

      {/* Cards Section */}
      <Body name="Saurabh" />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
