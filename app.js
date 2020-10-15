var allProducts = [];
var totalVotes = 0;

var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');

var recentRandomImage = [];
var alreadyRenderedArray =[];
var recentAndAlready = recentRandomImage.concat(alreadyRenderedArray);

function Product(filepath, name, views = 0, votes = 0){
  this.filepath = filepath;
  this.name = name;
  this.views = views;
  this.votes = votes;


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

//////////////////////////////////////////////
console.log('1. my allProduct array:', allProducts); //just checking!
//turn AllProducts array into JSON
var stringifyAllProducts = JSON.stringify(allProducts);
console.log('2. my allProducts array as JSON:', stringifyAllProducts);
// setting allProducts array JSON into local storage
localStorage.setItem('allProducts', stringifyAllProducts);

// getting allProducts array BACK from local storage
// var productsFromLocalStorage = localStorage.getItem('allProducts');
// console.log('3. allProducts from local storage:', productsFromLocalStorage);

// // parse the allProductsArray as it comes back
// var parsedAllProducts = JSON.parse(productsFromLocalStorage);
// console.log('4. parsed allProducts array from local storage', parsedAllProducts);

function checkLocal(){

  var productsFromLocalStorage = localStorage.getItem('allProducts');
  console.log('3. allProducts from local storage:', productsFromLocalStorage);

  if(productsFromLocalStorage){

    // parse the allProductsArray as it comes back
    var parsedAllProducts = JSON.parse(productsFromLocalStorage);
    console.log('4. parsed allProducts array from local storage', parsedAllProducts);

    for(var x = 0; x < parsedAllProducts.length; x++){
      new Product(parsedAllProducts[x].filepath, parsedAllProducts[x].name, parsedAllProducts[x].views, parsedAllProducts[x].votes);
    }

  } else {
    generateNew();
  }
}






/////////////////////////////////////////////////


function render(imageElement){
  var randomProductImage = getRandomImage(allProducts.length);

  while(recentRandomImage.includes(randomProductImage) || recentRandomImage.includes(recentAndAlready)){
    randomProductImage = getRandomImage(allProducts.length);
  }


  imageElement.src = allProducts[randomProductImage].filepath;
  imageElement.alt = allProducts[randomProductImage].name;
  imageElement.title = allProducts[randomProductImage].name;

  allProducts[randomProductImage].views++;

  if(recentRandomImage.length > 5){
    recentRandomImage.shift();
  }

  recentRandomImage.push(randomProductImage);



}

function getRandomImage(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(event){
  var chosenImage = event.target.title;

  for(var i = 0; i < allProducts.length; i++){
    if(chosenImage === allProducts[i].name){
      console.log('increasing votes for ', allProducts[i].name);
      allProducts[i].votes++;
    }
  }

  render(imageOneElement);
  render(imageTwoElement);
  render(imageThreeElement);

  var chartVotes = [];

  for(var v = 0; v < allProducts.length; v++){
    chartVotes.push(allProducts[v].votes);
  }


  var productLabels = [];

  for(var n = 0; n < allProducts.length; n++){
    productLabels.push(allProducts[n].name);
  }

  totalVotes++;
  if(totalVotes >= 25){
    document.getElementById('form').removeEventListener('click', handleClick);


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      responsive: false,
      maintainAspectRatio: false,


      data: {
        labels: productLabels,// produducts/////
        datasets: [{
          label: 'Total Votes, Hover To View Number Of Votes',
          data: chartVotes, // add votes to this array
          backgroundColor: [
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
          ],
          borderColor: [
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor:'white'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'white'
            }
          }]
        }
      }
    });

  }
}

document.getElementById('form').addEventListener('click', handleClick);

render(imageOneElement);
render(imageTwoElement);
render(imageThreeElement);

