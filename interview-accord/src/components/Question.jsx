import { useState } from "react";
import { arrowup } from "../helper/icons";
import { arrowdown } from "../helper/icons";

const Question = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <div className="card-group">
      {show ? (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}. {question}
            </h5>
            <button onClick={handleToggle}>{arrowup}</button>
          </div>
          <p>{answer}</p>
        </div>
      ) : (
        <div className="card">
          <div className="ques">
            <h5>
              {id}. {question}
            </h5>
            <button onClick={handleToggle}>{arrowdown}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
