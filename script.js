/*Random Card created 25/01/2023 by PhilH.
Javascript, CSS, HTML5*/

var cards = [
  "/images/card1.jpg",
  "/images/card2.jpg",
  "/images/card3.jpg",
  "/images/card4.jpg",
  "/images/card5.jpg",
  "/images/card6.jpg",
  "/images/card7.jpg",
  "/images/card8.jpg",
  "/images/card9.jpg",
  "/images/card10.jpg",
  "/images/card11.jpg",
  "/images/card12.jpg",
  "/images/card13.jpg",
  "/images/card14.jpg",
  "/images/card15.jpg",
  "/images/card16.jpg",
  "/images/card17.jpg",
  "/images/card18.jpg",
  "/images/card19.jpg",
  "/images/card20.jpg",
  "/images/card21.jpg",
  "/images/card22.jpg",
  "/images/card23.jpg",
  "/images/card24.jpg",
  "/images/card25.jpg",
  "/images/card26.jpg",
  "/images/card27.jpg",
  "/images/card28.jpg",
  "/images/card29.jpg",
  "/images/card30.jpg",
  "/images/card31.jpg",
  "/images/card32.jpg",
  "/images/card33.jpg",
  "/images/card34.jpg",
  "/images/card35.jpg",
  "/images/card36.jpg",
  "/images/card37.jpg",
  "/images/card38.jpg",
  "/images/card39.jpg",
  "/images/card40.jpg",
  "/images/card41.jpg",
  "/images/card42.jpg",
  "/images/card43.jpg",
  "/images/card44.jpg",
  "/images/card45.jpg",
  "/images/card46.jpg",
  "/images/card47.jpg",
  "/images/card48.jpg",
  "/images/card49.jpg",
  "/images/card50.jpg",
  "/images/card51.jpg",
  "/images/card52.jpg",
  "/images/card53.jpg",
  "/images/card54.jpg",
  "/images/card55.jpg",
  "/images/card56.jpg",
  "/images/card57.jpg",
  "/images/card58.jpg",
  "/images/card59.jpg",
  "/images/card60.jpg",
  "/images/card61.jpg",
  "/images/card62.jpg",
  "/images/card63.jpg",
  "/images/card64.jpg",
  "/images/card65.jpg",
  "/images/card66.jpg",
  "/images/card67.jpg",
  "/images/card68.jpg",
  "/images/card69.jpg",
  "/images/card70.jpg",
  "/images/card71.jpg",
  "/images/card72.jpg",
  "/images/card73.jpg",
  "/images/card74.jpg",
  "/images/card75.jpg",
  "/images/card76.jpg",
  "/images/card77.jpg",
  "/images/card78.jpg",
  "/images/card79.jpg",
  "/images/card80.jpg",
  "/images/card81.jpg",
  "/images/card82.jpg",
  "/images/card83.jpg",
  "/images/card84.jpg",
  "/images/card85.jpg",
  "/images/card86.jpg",
  "/images/card87.jpg",
  "/images/card88.jpg",
  "/images/card89.jpg",
  "/images/card90.jpg",
  "/images/card91.jpg",
  "/images/card92.jpg",
  "/images/card93.jpg",
  "/images/card94.jpg",
  "/images/card95.jpg",
  "/images/card96.jpg",
  "/images/card97.jpg",
];

function getRandomCard() {
  var randomIndex = Math.floor(Math.random() * cards.length);
  var randomCard = cards[randomIndex];
  return randomCard;
}
