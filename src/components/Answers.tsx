import { MouseEvent, useEffect, useState } from "react";
import { getAnswers } from "../data/data";
function Answers(props: any) {
  const [answerArr, setAnswerArr] = useState([]);

  const { questionNum, question } = props;

  useEffect(() => {
    const getData = async () => {
      setAnswerArr(await getAnswers(questionNum));
    };
    getData();
  }, []);

  const [selectedItem, setSelectedItem] = useState(-1);

  const getListOfAnswers = () => {
    return (
      <ul className="list-group">
        {answerArr.map((answer, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={answer["aid"]}
          >
            {answer["answer"]}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <h3>Question:</h3>
      <p>{question}</p>
      <h3>Answers:{questionNum}</h3>

      <>{answerArr.length > 0 ? getListOfAnswers() : <p>Fetching...</p>}</>
    </>
  );
}

export default Answers;
