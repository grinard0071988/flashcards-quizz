// src/features/quizzes/NewQuizForm.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ROUTES from "../app/routes";
import { selectTopics } from "../features/topics/topicsSlice";
import { addQuizAndLinkToTopic } from "../features/quizzes/quizzesSlice";
import { addCard } from "../features/cards/cardsSlice";

export default function NewQuizForm() {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);
  const [topicId, setTopicId] = useState("");
  const navigate = useNavigate();
  const topics = useSelector(selectTopics);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !topicId) {
      alert("Please enter a quiz name and select a topic.");
      return;
    }

    const cardIds = [];

    cards.forEach((card) => {
      let cardId = uuidv4();
      cardIds.push(cardId);
      dispatch(addCard({ cardId: cardId, front: card.front, back: card.back }));
    });

    const quizId = uuidv4();
    dispatch(
      addQuizAndLinkToTopic({
        id: quizId,
        name,
        topicId,
        cardIds,
      })
    );

    // Redirect to quizzes page
    navigate(ROUTES.quizzesRoute());
  };

  const addCardInputs = (e) => {
    e.preventDefault();
    setCards([...cards, { front: "", back: "" }]);
  };

  const removeCard = (e, index) => {
    e.preventDefault();
    setCards(cards.filter((_, i) => i !== index));
  };

  const updateCardState = (index, side, value) => {
    const newCards = [...cards];
    newCards[index][side] = value;
    setCards(newCards);
  };

  return (
    <>
      <section>
        <h1>Create a New Quiz</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="quiz-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Quiz Title"
          />

          <select
            id="quiz-topic"
            value={topicId}
            onChange={(e) => setTopicId(e.target.value)}
          >
            <option value="">Select Topic</option>
            {Object.values(topics).map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.name}
              </option>
            ))}
          </select>

          {cards.map((card, index) => (
            <div key={index} className="card-front-back">
              <input
                id={`card-front-${index}`}
                value={card.front}
                onChange={(e) =>
                  updateCardState(index, "front", e.target.value)
                }
                placeholder="Front"
              />
              <input
                id={`card-back-${index}`}
                value={card.back}
                onChange={(e) => updateCardState(index, "back", e.target.value)}
                placeholder="Back"
              />
              <button
                onClick={(e) => removeCard(e, index)}
                className="remove-card-button"
              >
                Remove Card
              </button>
            </div>
          ))}

          <div className="actions-container">
            <button onClick={addCardInputs} type="button">
              Add a Card
            </button>
            <button type="submit">Create Quiz</button>
          </div>
        </form>
      </section>
    </>
  );
}
