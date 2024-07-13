import React from 'react';

type AnswerProps = {
  data: {
    id: number;
    name: string;
    questions: Array<string>;
    answers: Array<string>;
    examples: Array<string>;
  };
  handleBackClick: () => void;
};

const Answer: React.FC<AnswerProps> = ({ data, handleBackClick }) => {
  return (
    <section className='answers'>
      <h3 onClick={handleBackClick}>← {data.name}</h3>
      <div className='question-container'>
        {data['questions'].map((question) => (
          <div key={question} className='question-img'>
            <img src={question} alt='' />
          </div>
        ))}
        <div className='answer-container'>
          {data['answers'].map((asnwer) => (
            <div key={asnwer} className='answer-img'>
              <img src={asnwer} alt='' />
            </div>
          ))}
        </div>
        {data['examples'].map((example) => (
          <div key={example} className='example-img'>
            <img src={example} alt='' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Answer;
