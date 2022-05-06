

  import WineDisplay from "../Components/WineDisplay.js";
  import twentyWines from "../Data/wine_data.js";
  import PriorityQueue from "../Data/PriorityQueue.js";
  import wineQueue from "./Quiz.js";
  import "./Results.css";

  
 
  /*
  var count = 1;
  while(!wineQueue.isEmpty() && count < 5) {
    const w = wineQueue.dequeue();
    myWines += w.element.name;
    count += 1;
    
  }*/
  /*
          {twentyWines.filter((wine) => myWines.includes(wine.name)).map((wine) => {*/
  function ResultsPage() {
    
    var myWines = ""; 
 //   console.log(wineQueue.front().element.name);
    
    return (
      <div class="grid">
        {twentyWines.map((wine) => {
          return (
            <div>
              <WineDisplay
                iD={wine.iD}
                name={wine.name}
                type={wine.type}
                year={wine.year}
                region={wine.region}
                price={wine.price}
                sweetness={wine.sweetness}
                image={wine.image}
              />
            </div>
          );
        })}
      </div>
    );
  }
  
  export default ResultsPage;
  