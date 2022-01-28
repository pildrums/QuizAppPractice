import React, { useState } from 'react';
import 'App.css';

const quizzes = [
  {
    id: 1,
    question: '당신은 모든 동물을 기를 수 있는 능력을\n 갖게 되었습니다.\n 만약 한마리의 동물을 자신의 애완동물로\n 선택할 수 있다면 어떤 동물을\n 선택하시겠습니까?',
    answers: [
      { text: "표범", type: 1 },
      { text: "공룡", type: 2 },
      { text: "북극곰", type: 3 },
      { text: "백호", type: 4 },
    ]
  },
  {
    id: 2,
    question: '자신이 어떠한 동물을 마주쳤는데,\n 그 동물이 갑자기 사람의 말을 하기 시작합니다.\n 그 때 봤었던 동물은 과연 어떤 동물이었습니까?',
    answers: [
      { text: "말", type: 1 },
      { text: "토끼", type: 2 },
      { text: "양", type: 3 },
      { text: "새", type: 4 },
    ]
  },
  {
    id: 3,
    question: '당신은 어떤 마법에 걸려\n동물이 되어야만 합니다.\n 그런데 다행히 어떤 동물로 변할지 선택할 수 있군요.\n 당신은 어떤 동물을 선택하시겠습니까?',
    answers: [
      { text: "말", type: 1 },
      { text: "뱀", type: 2 },
      { text: "강아지", type: 3 },
      { text: "고양이", type: 4 },
    ]
  },
];

const App = () => {
  const [current, setCurrent] = useState(0);
  const onClickAnswer = type => {
    if (type === 1) {
      console.log('표범: 결혼은 언젠가는 해야 한다고 생각합니다.');
    } else if (type === 2) {
      console.log('공룡: 대체적으로 결혼에 대해서 비관적인 생각을 갖고 있는 유형입니다.');
    } else if (type === 3) {
      console.log('북극곰: 결혼이라는 삶은 자유 생활을 박탈할 것 같은 두려움이 강합니다.');
    } else {
      console.log('백호: 결혼은 제 2의 인생을 맞이하는 중요하고 신성한 제도라고 생각합니다.');
    }
    setCurrent(currentNumber => currentNumber + 1);
  };

  return (
    <div className="container">
      <div className="app">
        <div className="question-section">
          <h1 className="question-header">
            <span>{quizzes[current].id}</span>/{quizzes.length}
          </h1>
          <div className="question-text">{quizzes[current].question}</div>
        </div>
        <div className="answer-section">
          {quizzes[current].answers.map((answer, index) => (
            <button key={index} onClick={() => onClickAnswer(answer.type)} value={answer.text}>{answer.text}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;