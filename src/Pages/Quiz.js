import "./Quiz.css";
import match from "../Data/Match.js";
import PriorityQueue from "../Data/PriorityQueue.js";
import WineDisplay from "../Components/WineDisplay.js";

function submitQuiz() {
  //grab results from quiz
  const priceScale = document.getElementById("priceScale").value;
  const sweetScale = document.getElementById("sweetScale").value;
  const yearScale = document.getElementById("yearScale").value;
  const location = document.getElementById("regionInput").value;
  const redWine = document.getElementById("redWine").checked;
  const whiteWine = document.getElementById("whiteWine").checked;
  const dessertWine = document.getElementById("dessertWine").checked;

  //put types of wine user chose together
  var type = ""
  if(redWine) type += "red";
  if(whiteWine) type += "white";
  if(dessertWine) type += "dessert";

  //create priority queue of matched wines and print them out
  var wineMatches = new PriorityQueue();
  wineMatches = match(priceScale, sweetScale, yearScale, location, type);
  //console.log(wineMatches.front().element.name);
  while(!wineMatches.isEmpty()) {
    const w = wineMatches.dequeue();
    console.log(w.element.name, w.priority);
    document.write(w.element.name)

    document.write("<br></br>")
  }
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
          <ul>What type of wine would you like?</ul>
          <ul>
            <input type="checkbox" id="redWine" />
            <label for="redWine"> Red</label>
            <br />
            <input type="checkbox" id="whiteWine" />
            <label for="whiteWine"> White</label>
            <br />
            <input type="checkbox" id="dessertWine" />
            <label for="dessertWine"> Dessert</label>
          </ul>
          <ul>How expensive?</ul>
          <ul>
            <input
              type="range"
              id="priceScale"
              name = "$"
              min="10"
              max="500"
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
          <ul>Region?</ul>
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