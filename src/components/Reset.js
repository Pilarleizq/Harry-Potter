
import "../styles/App.scss";
import reset from '../images/reset.png';

function Input({resetButton}) {

  const resetInput = (e) => {
      resetButton()
  };

  return (
    <div className="reset">
      <button className="reset-btn" onClick={resetInput}>
      <img className="reset-img"src={reset} alt="reset"></img>
      </button>
    </div>
  );
}

export default Input;