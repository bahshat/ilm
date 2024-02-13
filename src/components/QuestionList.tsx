import { MouseEvent, useEffect, useState } from "react";
import { getQuestions } from "../data/data";
function QuestionList(props:any) {
  const [questionsArr, setQuestionsArr] = useState([]);
  const {onClicked} = props;
  
  useEffect(() => {
    const getQuestion = async () => {
      setQuestionsArr(await getQuestions());  
    }
    getQuestion();
  },[]);

  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>Questions:</h1>
      <ul className="list-group">
        {questionsArr.map((question, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={question["qid"]}
            onClick={() => {
              onClicked(question["qid"], question["question"])
            }}
          >
            {question["question"]}
          </li>
        ))}
      </ul>
    </>
  );
}

export default QuestionList;
