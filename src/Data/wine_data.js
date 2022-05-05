const Wine = (iD, name, type, year, region, price, sweetness, image) => {
  return {
    iD: iD,
    name: name,
    type: type,
    year: year,
    region: region,
    price: price,
    sweetness: sweetness,
    image: image,
  };
};

const wineOne = Wine(
  "1",
  "O' Shaughnessy 2018 Cabernet Sauvignon",
  "Red",
  "2018",
  "Napa Valley",
  "75",
  "40",
  "https://cdn.klwines.com/images/skus/1540775x.jpg"
);
const wineTwo = Wine(
  "2",
  "Santa Rita 2017 Medalla Real Gold Medal Single Vineyard Cabernet",
  "Red",
  "2017",
  "Maipo Valley",
  "20",
  "65",
  "https://images.vivino.com/thumbs/8oYEDb2SSteMtovw6qfAgA_pb_600x600.png"
);
const wineThree = Wine(
  "3",
  "Smith & Hook 2019 Cabernet Sauvignon",
  "Red",
  "2019",
  "Central Coast",
  "25",
  "30",
  "https://www.hahnwines.com/assets/images/products/pictures/SHCSCentralCoast.png"
);
const wineFour = Wine(
  "4",
  "Evenstad Reserve Pinot Noir",
  "Red",
  "2020",
  "Willamette Valley",
  "80",
  "20",
  "https://www.astorwines.com/images/items/20207.jpg"
);
const wineFive = Wine(
  "5",
  "Greywacke Pinot Noir",
  "Red",
  "2017",
  "New Zealand",
  "40",
  "80",
  "https://images.vivino.com/thumbs/JsXSWhpiSVObVPHCJ120Jw_pb_600x600.png"
);
const wineSix = Wine(
  "6",
  "Britton Horn Special",
  "Sparkling",
  "2015",
  "San Antonio, Texas",
  "1000",
  "80",
  "https://produits.bienmanger.com/45440-0w600h600_Auxerrois_Horn_Alsace_Wine_Organic_And_Without_Added_Sulphites.jpg"
);
const wineSeven = Wine(
  "7",
  "Seth Fogarty Special",
  "Sparkling",
  "2014",
  "Austin, Texas",
  "1200",
  "90",
  "https://products1.imgix.drizly.com/ci-fancy-pants-pinot-grigio-dbaf00e813d906e1.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20"
);
const wineEight = Wine(
  "8",
  "Mark Lewis Special",
  "Sparkling",
  "2013",
  "Dallas, Texas",
  "1400",
  "60",
  "https://produits.bienmanger.com/3151-0w600h600_Sauternes_Grande_Reserve_Kressmann.jpg"
);
const wineNine = Wine(
  "9",
  "Matthew Hibbs Special",
  "Sparkling",
  "2014",
  "Dallas, Texas",
  "1200",
  "85",
  "https://s-media-cache-ak0.pinimg.com/originals/42/13/dc/4213dc6f783cf5b31609998dfb8f074d.jpg"
);
const wineTen = Wine(
  "10",
  "Yu Zhang Special",
  "Sparkling",
  "2012",
  "Waco, Texas",
  "1500",
  "95",
  "https://www.meijer.com/content/dam/meijer/product/0008/50/0001/84/0008500001849_0_A1C1_1200.png"
);
const wineEleven = Wine(
  "11",
  "Leaping Lizard",
  "White",
  "2010",
  "California",
  "320",
  "10",
  "https://www.abcfws.com/ccstore/v1/images/?source=/file/v3021879775452646746/products/440805.jpg&height=475&width=475"
);
const wineTwelve = Wine(
  "12",
  "Gato Negro",
  "White",
  "2021",
  "San Pedro, Chile",
  "9",
  "20",
  "https://www.meijer.com/content/dam/meijer/product/0008/83/2013/00/0008832013000_2_A1C1_1200.png"
);
const wineThirteen = Wine(
  "13",
  "Silver Horse",
  "White",
  "2016",
  "California",
  "16.99",
  "88",
  "\https://cdn.ct-static.com/labels/656f2742-039f-423b-940a-d91cf125660e.jpg"
);
const wineFourteen = Wine(
  "14",
  "Three Fox",
  "White",
  "2020",
  "Delaplane, Virginia",
  "32",
  "5",
  "https://storage.googleapis.com/cdn.vinoshipper.com/wine/9dfc4355-b566-4ca8-948c-1b5eb9286fc3.jpg"
);
const wineFifteen = Wine(
  "15",
  "Yellow Hawk",
  "White",
  "2020",
  "Portland, Oregon",
  "26",
  "40",
  "https://winesfromus.com/wp-content/uploads/2020/08/2-hawk-Sauvignon-Blanc-2020.jpg"
);
const wineSixteen = Wine(
  "16",
  "Deer Springs",
  "Dessert",
  "2020",
  "Napa Valley",
  "90",
  "92",
  "https://www.wine-searcher.com/images/labels/08/64/11110864.jpg?width=260&height=260&fit=bounds&canvas=260,260"
);
const wineSeventeen = Wine(
  "17",
  "Winking Owl",
  "Dessert",
  "2021",
  "Califoria",
  "90",
  "20",
  "https://www.aldi.us/fileadmin/fm-dam/Products/Categories/Alcohol/Red_Wine/winking-owl-cabernet-sauvignon-desktop-lt.jpg"
);
const wineEighteen = Wine(
  "18",
  "Noble Pig",
  "Dessert",
  "2022",
  "Central Coast",
  "15",
  "81",
  "http://www.wespeakwine.com/Shared/Images/Product/Squealing-Pig-Sauvignon-Blanc-Marlborough-2017-750ML/squealing_pig_SB_bottle.jpg"
);
const wineNineteen = Wine(
  "19",
  "Butterfly Creek",
  "Dessert",
  "1999",
  "Williamette Valley",
  "899",
  "77",
  "https://static.wixstatic.com/media/772e19_3a52615a9f844363916bce6ce96ada83~mv2.gif"
);
const wineTwenty = Wine(
  "20",
  "Happy Goat",
  "Dessert",
  "2012",
  "Maipo Valley",
  "649",
  "92",
  "https://rlv.zcache.com/cute_brown_and_white_goat_photo_birthday_wine_label-rae4c9f22ba2e4259a10a00e0cc8b7c82_khoi6_704.webp?rlvnet=1"
);
const wineTwentyOne = Wine(
  "1",
  "JK Special",
  "White",
  "2019",
  "Fort Worth",
  "6",
  "55",
  "https://lilysfloristbali.com/images/detailed/1/Bali_Red_Wine.png"
);

const twentyWines = [
  wineOne,
  wineTwo,
  wineThree,
  wineFour,
  wineFive,
  wineSix,
  wineSeven,
  wineEight,
  wineNine,
  wineTen,
  wineEleven,
  wineTwelve,
  wineThirteen,
  wineFourteen,
  wineFifteen,
  wineSixteen,
  wineSeventeen,
  wineEighteen,
  wineNineteen,
  wineTwenty,
  wineTwentyOne
];

export default twentyWines;
