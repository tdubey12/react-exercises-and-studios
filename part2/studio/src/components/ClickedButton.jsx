import "./styling.css";

function ClickedButton() {
  function handleClick() {
    alert("You are removing the pin !");
  }
  return (
    <button id="clickedButton" onClick={handleClick}>
      Saved
    </button>
  );
}



export default ClickedButton;

