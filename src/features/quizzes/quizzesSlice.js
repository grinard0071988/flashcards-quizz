import { createSlice } from "@reduxjs/toolkit";
import { addTopicQuiz } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, topicId, name, cardIds } = action.payload;
      state.quizzes[id] = { id, topicId, name, cardIds };
    },
  },
});

// Thunk to handle adding quiz + linking to topic
export const addQuizAndLinkToTopic = (quiz) => (dispatch) => {
  const { id, topicId } = quiz;

  // 1️⃣ Add quiz to quizzes slice
  dispatch(quizzesSlice.actions.addQuiz(quiz));

  // 2️⃣ Add quiz reference to topic slice
  dispatch(addTopicQuiz({ quizId: id, topicId }));
};

// Selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Actions + Reducer
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
