import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import data from './API/api'; // Ensure correct import path

type Question = {
  id: number;
  name: string;
  questions: Array<string>;
  answers: Array<string>;
  examples: Array<string>;
};

type Data = {
  HTML: Question[];
  CSS: Question[];
  JavaScript: Question[];
  'DOM Manipulation': Question[];
  'React Components': Question[];
  'React Hooks': Question[];
};

const InterviewQuestions: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState<Question | null>(null);

  const handleQuestionClick = (item: Question) => {
    setShowAnswer(item);
    window.history.pushState({ answer: item }, '', '');
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setShowAnswer(null);
    window.history.back();
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.answer) {
        setShowAnswer(event.state.answer);
      } else {
        setShowAnswer(null);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <>
      {!showAnswer && (
        <>
          {Object.keys(data).map((category) => (
            <section key={category} className='questions'>
              <h2>{category}</h2>
              <ul>
                {data[category as keyof Data].map((item: Question) => (
                  <li
                    key={item.id}
                    className={`question q${category}`}
                    onClick={() => handleQuestionClick(item)}
                  >
                    <h3>{item.name}</h3>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      )}

      {showAnswer && (
        <Answer data={showAnswer} handleBackClick={handleBackClick} />
      )}
    </>
  );
};

export default InterviewQuestions;
