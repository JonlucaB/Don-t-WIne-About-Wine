/*
    This is where all the wines will be displayed. I have supplied two example elements 
    to practice with, but they are not concrete. I just gave the wines some basic
    characteristics we might define them off of.
*/
//Create the dummy data in a different file and then import it into this file
const wines = [
  {
    id: "w1",
    title: "Red Wine",
    image:
      "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q=",
    region: "Paris",
    sweetness: "5",
    age: "20",
    price: "$20",
    description: "it's a red wine",
  },
  {
    id: "w2",
    title: "White Wine",
    image:
      "https://assets.holyart.it/images/VI001027/us/500/R/SN067620/CLOSEUP01_HD/h-0cb394c6/white-tuscan-whine-farnetino-750-ml..jpg",
    region: "Texas",
    sweetness: "10",
    age: "3",
    price: "$15",
    description: "it's a white wine",
  },
];

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

function AllWinesPage() {
  return (
    <div>
      <h1>All Wines</h1>
      <ul>
        {wines.map((wine) => {
          return <li key={wine.id}>{wine.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default AllWinesPage;
