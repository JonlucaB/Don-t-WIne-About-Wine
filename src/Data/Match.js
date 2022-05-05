/*
  You can use these lines of code to create a priority queue and then
  fill it with wines after the matching process

  var wineMatches = new PriorityQueue();
  wineMatches = match(priceScale, sweetScale, yearScale, location, type);
  
  while(!wineMatches.isEmpty()) {
    console.log(wineMatches.dequeue().element.name);
                                      ^You have to use '.element' to get the wine,
                                      or else you will get a QElement(element, priority)
                                      object!
  
*/

import { math } from "toxiclibsjs";
import PriorityQueue from "./PriorityQueue.js";
import twentyWines from "./wine_data.js";

function match(price, sweetness, year, location, type) {
  var wineMatches = new PriorityQueue();

  var _price, _sweetness, _year, _location, _type;
  /*
    The matching takes 5 characteristics of the wine, and then we generate 
    a score based on similarities that is on a scale of 1-100 (1 being the worst match)
    We do this for every wine and add them to a priority queue and give them
    a priority based on their similarity score. Each trait is worth 20%
  */
  twentyWines.map((wine) => {
      _price = wine.price;
      _sweetness = wine.sweetness;
      _year = wine.year;
      _location = wine.region;
      _type = _type;

    var match = 0;

      //generate price similarity
      match += Math.abs((((_price - price)/price) * 100)/25);
      //generate sweetness similarity
      match += Math.abs((((_sweetness - sweetness)/_sweetness) *100)/25);
      //generate year similarity
      match += Math.abs((((_year - year)/year) * 100)/25);
      //does location match?
      match += (_location == location) ? 25 : 0;
      //does the type of wine match? 
      match += (type.includes(_type)) ? 25 : 0;

      //console.log(wine.name+" "+match);

      wineMatches.enqueue(wine, match);
  });
  return wineMatches;
}

export default match;


