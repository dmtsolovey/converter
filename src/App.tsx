import ConvertationBlock from "./components/ConvertationBlock/ConvertationBlock";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Header />
        <ConvertationBlock />
      </div>
      <Footer />
    </>
  );
}
export default App;
