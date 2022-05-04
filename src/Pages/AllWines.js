/*
    This is where all the wines will be displayed. I have supplied two example elements 
    to practice with, but they are not concrete. I just gave the wines some basic
    characteristics we might define them off of.
*/
//Create the dummy data in a different file and then import it into this file

/*
function generateWines(props) {
    This will be where we pull data from the Wine API and create wine objects 
    and store them in the WINES array. The first time the AllWinePage is called,
    the function, this function should be called. It should only be called once 
    because we are going to make this a Single-Page-Application probably, so we're 
    only going to request all the wines one time, not every time we go to the
    AllWines page.

    The props argument should take the results of the quiz and then this will
    nicely package the quiz results up as a request to the API
    
  }
  */

import WineDisplay from "../Components/WineDisplay.js";
import twentyWines from "../Data/wine_data.js";
import "./AllWines.css";

function AllWinesPage() {
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

export default AllWinesPage;

// <div class="grid">
//   {twentyWines.map((wine) => {
//     return (
//       <div>
//         Cell
//         <WineDisplay
//           iD={wine.iD}
//           name={wine.name}
//           type={wine.type}
//           year={wine.year}
//           region={wine.region}
//           price={wine.price}
//           sweetness={wine.sweetness}
//           img={wine.img}
//         />
//       </div>
//     );
//   })}
// </div>
