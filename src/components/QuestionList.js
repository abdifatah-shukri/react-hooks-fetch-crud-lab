import React from "react";

function QuestionList() {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {quizes.map((item) => (
          <QuestionItem question={item} key={item.id} onDelete={onDelete} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
