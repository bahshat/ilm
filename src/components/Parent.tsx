import { useEffect, useState } from "react";
import QuestionList from "./QuestionList";
import Answers from "./Answers";
function Parent() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState("");

  const questionClicked = (id: number, answer: string) => {
    console.log("[INVOKED] questionClicked");
    setShowAnswer(true);
    setQuestionId(id);
    setQuestion(answer);
  };

  return (
    <div className="content">
      {showAnswer ? (
        <Answers questionNum={questionId} question={question}></Answers>
      ) : (
        <QuestionList onClicked={questionClicked}></QuestionList>
      )}
    </div>
  );
}

export default Parent;
