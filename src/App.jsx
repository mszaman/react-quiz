import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Start from "./components/Start";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="px-2 py-20">
      <Header />
      <Main>
        {/* <Start /> */}
        <Progress />
        <Question />
      </Main>
      <Footer>
        <Timer />
        <NextButton />
      </Footer>
    </div>
  );
}

export default App;
