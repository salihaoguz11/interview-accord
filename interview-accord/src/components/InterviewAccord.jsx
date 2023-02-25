import Question from "./Question";
const InterviewAccord = (props) => {
  const { data } = props;

  return (
    <div className="row">
      {data.map((item) => (
        <Question key={item.id} id={item.id} question={item.question} />
      ))}
    </div>
  );
};

export default InterviewAccord;
