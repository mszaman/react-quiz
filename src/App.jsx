import { useEffect } from "react";
import { useReducer } from "react";
import Error from "./components/Error";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Start from "./components/Start";
import NextButton from "./components/NextButton";
import Timer from "./components/Timer";
import Loader from "./components/Loader";

const initialState = {
  questions: [],

  // "loading", "error", "ready", "active", "finished"
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points >= state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        highScore: state.highScore,
        status: "ready",
      };

    default:
      break;
  }
}

function App() {
  const [{ questions, status, index, answer, points, highScore }, dispatch] =
    useReducer(reducer, initialState);

  const numOfQuestions = questions.length;
  const highestPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0,
  );

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="px-2 py-20">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Start numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              points={points}
              index={index}
              numOfQuestions={numOfQuestions}
              answer={answer}
              highestPossiblePoints={highestPossiblePoints}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            highestPossiblePoints={highestPossiblePoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
      {status === "active" && (
        <Footer>
          <Timer />
          <NextButton
            answer={answer}
            dispatch={dispatch}
            index={index}
            numOfQuestions={numOfQuestions}
          />
        </Footer>
      )}
    </div>
  );
}

export default App;
