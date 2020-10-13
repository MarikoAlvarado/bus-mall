var allProducts = [];

//image element id's for rendering
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
var imagesForm = document.getElementById('form');

var recentRandomImage = [];
var alreadyRenderedArray =[];
var recentAndAlready = recentRandomImage.concat(alreadyRenderedArray);

//////////////////////////////////////////////////////////////////////////////////////

function Product(filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.votes = 0;


  allProducts.push(this);
}

new Product('img/bag.jpg', 'bag');
new Product('img/banana.jpg', 'banana');
new Product('img/bathroom.jpg', 'bathroom');
new Product('img/boots.jpg', 'boots');
new Product('img/breakfast.jpg', 'breakfast');
new Product('img/bubblegum.jpg', 'bubblegum');
new Product('img/chair.jpg', 'chair');
new Product('img/cthulhu.jpg', 'cthulhu');
new Product('img/dog-duck.jpg', 'dog-duck');
new Product('img/dragon.jpg', 'dragon');
new Product('img/pen.jpg', 'pen');
new Product('img/pet-sweep.jpg', 'pet-sweep');
new Product('img/scissors.jpg', 'scissors');
new Product('img/shark.jpg', 'shark');
new Product('img/sweep.png', 'sweep');
new Product('img/tauntaun.jpg', 'tauntaun');
new Product('img/unicorn.jpg', 'unicorn');
new Product('img/usb.gif', 'usb');
new Product('img/water-can.jpg', 'water-can');
new Product('img/wine-glass.jpg', 'wine-glass');



function render(imageElement){
  var randomProductImage = getRandomImage(allProducts.length);

  while(recentRandomImage.includes(randomProductImage) || recentRandomImage.includes(recentAndAlready)){
    randomProductImage = getRandomImage(allProducts.length);
  }


  imageElement.src = allProducts[randomProductImage].filepath;
  imageElement.alt = allProducts[randomProductImage].name;
  imageElement.title = allProducts[randomProductImage].name;

  recentRandomImage.push(randomProductImage);



}

function getRandomImage(max){
  return Math.floor(Math.random() * Math.floor(max));
}


imagesForm.addEventListener('click', function(event){

  render(imageOneElement);
  render(imageTwoElement);
  render(imageThreeElement);

  var chosenImage = event.target.title;

  for(var i = 0; i < allProducts.length; i++){
    if(chosenImage === allProducts[i].name){
      console.log('increasing votes for ', allProducts[i].name);
      allProducts[i].votes++;
    }

  }

});

//ONLY ABLE TO CLICK 5 TIMES?!!!!!!!!!!!!!!!!!!!!!!!!??????
//STILL NEED TO RENDER LIST WITH VOTES
//UPDATE NEWLY ADDED PROPERTY TO REFLECT IF CLICKED
//GIVE 25 ROUNDS
//REMOVE EVENT LISTENER AFTER 25 ROUNDS
//ADD BUTTON WITH "VIEW RESULTS"


render(imageOneElement);
render(imageTwoElement);
render(imageThreeElement);






