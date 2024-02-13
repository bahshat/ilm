// dataService.js

const baseURL = "https://knowledge-backend.onrender.com";
// const baseURL = "http://127.0.0.1:5000"

const fetchQuestionsFromServer = async () => {
  try {
    const response = await fetch(`${baseURL}/api/questions`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const fetchAnswersFromServer = async (questionId: number) => {
  try {
    const response = await fetch(`${baseURL}/api/answer/${questionId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getQuestions = async () => {
  const data = await fetchQuestionsFromServer();
  return data;
};

export const getAnswers = async (questionId: number) => {
  const data = await fetchAnswersFromServer(questionId);
  return data;
};

const fetchLocally = async () => {
  try {
    const response = await fetch("./data/question.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
