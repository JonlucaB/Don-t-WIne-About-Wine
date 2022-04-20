import "./Quiz.css";

function submitQuiz() {
  const priceScale = document.getElementById("priceScale").value;
  const sweetScale = document.getElementById("sweetScale").value;
  const yearScale = document.getElementById("yearScale").value;
  const location = document.getElementById("regionInput").value;
  const redWine = document.getElementById("redWine").checked;
  const whiteWine = document.getElementById("whiteWine").checked;

  console.log("Price: " + priceScale);
  console.log("Sweetness: " + sweetScale);
  console.log("Year: " + yearScale);
  console.log("Location: " + location);
  console.log("Red Wine: " + redWine);
  console.log("White Wine: " + whiteWine);
}
// on submit, show results
//submitButton.addEventListener("click", submitQuiz);
//test
export default function QuizPage() {
  //values for scales and displaying them

  //get event value
  const getInputValue = (event) => {
    event.target.nextElementSibling.nextSibling.value = event.target.name + event.target.value;
  };

  return (
    <center>
      <div>
        <li>
          <ul>What color would you like your wine?</ul>
          <ul>
            <input type="checkbox" id="redWine" />
            <label for="redWine"> Red</label>
            <br />
            <input type="checkbox" id="whiteWine" />
            <label for="whiteWine"> White</label>
          </ul>
          <ul>How expensive?</ul>
          <ul>
            <input
              type="range"
              id="priceScale"
              name = "$"
              min="10"
              max="10000"
              onChange={getInputValue}
              append = "$"
            /><br/>
            <output>$100</output>
          </ul>
          <ul>How sweet?</ul>
          <ul>
            <input
              type="range"
              id="sweetScale"
              name = ""
              min="1"
              max="100"
              onChange={getInputValue}
            /><br/>
            <output>50</output>%
          </ul>
          <ul>What Year?</ul>
          <ul>
            <input
              type="range"
              id="yearScale"
              name = "Circa "
              min="1750"
              max="2022"
              onChange={getInputValue}
            /><br/>
            <output>Circa 1750</output>
          </ul>
          <ul>Region? (cuntry)</ul>
          <ul>
            <input type="text" id="regionInput" />
          </ul>
        </li>
        <button id="submit" onClick={submitQuiz}>
          Submit
        </button>
      </div>
    </center>
  );
}
