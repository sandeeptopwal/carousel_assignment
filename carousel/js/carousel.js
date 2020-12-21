"use strict";

const mainArray = [
  {
    name: "Buzzoo",
    price: "13,000",
    category: "Puppy",
    url: "./assets/puppies/pup1.jpg",
  },
  {
    name: "Tuffy",
    price: "8,000",
    category: "Puppy",
    url: "./assets/puppies/pup2.jpg",
  },
  {
    name: "Boxer",
    price: "10,000",
    category: "Puppy",
    url: "./assets/puppies/pup3.jpg",
  },
  {
    name: "Coco",
    price: "11,000",
    category: "Puppy",
    url: "./assets/puppies/pup4.jpg",
  },
  {
    name: "Buddy",
    price: "15,000",
    category: "Puppy",
    url: "./assets/puppies/pup5.jpg",
  },
  {
    name: "Lucy",
    price: "5,000",
    category: "Kitten",
    url: "./assets/kittens/cat1.jpg",
  },
  {
    name: "Bella",
    price: "8,000",
    category: "Kitten",
    url: "./assets/kittens/cat2.jpg",
  },
  {
    name: "Luna",
    price: "5,000",
    category: "Kitten",
    url: "./assets/kittens/cat3.jpg",
  },
  {
    name: "Max",
    price: "8,000",
    category: "Kitten",
    url: "./assets/kittens/cat4.jpg",
  },
  {
    name: "Lily",
    price: "4,000",
    category: "Kitten",
    url: "./assets/kittens/cat5.jpg",
  },
  {
    name: "Lily",
    price: "4,000",
    category: "Rabbit",
    url: "./assets/rabbits/rab1.jpg",
  },
  {
    name: "Thumper",
    price: "4,000",
    category: "Rabbit",
    url: "./assets/rabbits/rab6.jpg",
  },
  {
    name: "Oreo",
    price: "6,000",
    category: "Rabbit",
    url: "./assets/rabbits/rab2.jpg",
  },
  {
    name: "Bunny",
    price: "3,000",
    category: "Rabbit",
    url: "./assets/rabbits/rab3.jpg",
  },
  {
    name: "Bella",
    price: "7,000",
    category: "Rabbit",
    url: "./assets/rabbits/rab4.jpg",
  },
  {
    name: "Bunny",
    price: "9,000",
    category: "Rabbit",
    url: "./assets/rabbits/rab5.jpg",
  },
];

var itemsArray = mainArray;

var itemLeftIndex = itemsArray.length - 1;
var itemCurrentIndex = 0;
var itemRightIndex = 1;
var body = document.getElementsByTagName('body')[0];
var itemLeft = document.getElementById("item-left");
var itemCurrent = document.getElementById("item-current");
var itemRight = document.getElementById("item-right");

var itemLeftInfo = document.getElementById("item-left-info");
var itemCurrentInfo = document.getElementById("item-current-info");
var itemRightInfo = document.getElementById("item-right-info");

var slideLeftBtn = document.getElementById("slide-left");
var slideRightBtn = document.getElementById("slide-right");

var categoryBtn = document.getElementById("category-btn");
var filterDiv = document.getElementById("filter-div");

var checkBoxes = document.getElementsByClassName('category-check');
var applyFilterBtn =  document.getElementById("apply-filters");

slideLeftBtn.addEventListener("click", function () {
  slideLeft();
});

slideRightBtn.addEventListener("click", function () {
  slideRight();
});

itemLeft.onmouseenter = function () {
  itemLeftInfo.style.visibility = "visible";
  itemLeft.style.transform = "translate(20px)";
  itemCurrent.style.transform = "translate(20px)  scale(.9)";
};

itemLeft.onmouseleave = function () {
  itemLeftInfo.style.visibility = "hidden";
  itemLeft.style.removeProperty("transform");
  itemCurrent.style.removeProperty("transform");
};

itemRight.onmouseenter = function () {
  itemRightInfo.style.visibility = "visible";
  itemCurrent.style.transform = "translate(-20px) scale(.9)";
  itemRight.style.transform = "translate(-20px)";
};

itemRight.onmouseleave = function () {
  itemRightInfo.style.visibility = "hidden";
  itemCurrent.style.removeProperty("transform");
  itemRight.style.removeProperty("transform");
};

categoryBtn.addEventListener('click',function(){
  if(filterDiv.classList.contains('active')){
    filterDiv.style.visibility = 'hidden';
    filterDiv.classList.remove('active');
  }else{
    filterDiv.style.visibility = 'visible';
    filterDiv.className = 'active';
  }
  
});

applyFilterBtn.addEventListener('click',function(){

  let checkedArray = [];
  for(let i = 0;i<checkBoxes.length;i++){
    if(checkBoxes[i].checked){
      checkedArray.push(checkBoxes[i].value)
    }    
  }
  filterCategories(checkedArray);
  filterDiv.style.visibility = 'hidden';
  filterDiv.classList.remove('active');
});

function filterCategories(checkedArray){

  if(checkedArray.length > 0){
  itemsArray = mainArray.commonValues(checkedArray);
  }else{
    itemsArray = mainArray;
  }
  itemLeftIndex = itemsArray.length - 1;
  itemCurrentIndex = 0;
  itemRightIndex = 1;
  init();


}

function init() {
  body.style.background =
    "url(" + itemsArray[itemCurrentIndex].url + ") "
  itemLeft.style.background =
    "url(" + itemsArray[itemLeftIndex].url + ") no-repeat center";
  itemCurrent.style.background =
    "url(" + itemsArray[itemCurrentIndex].url + ") no-repeat center";
  itemRight.style.background =
    "url(" + itemsArray[itemRightIndex].url + ") no-repeat center";

  createItemInfo();
}

function createItemInfo() {
  let itemLeftObj = itemsArray[itemLeftIndex];
  let itemCurrrentObj = itemsArray[itemCurrentIndex];
  let itemRightObj = itemsArray[itemRightIndex];

  itemLeftInfo.innerHTML = createInfoHTMLString(
    itemLeftObj.name,
    itemLeftObj.price,
    itemLeftObj.category
  );
  itemCurrentInfo.innerHTML = createInfoHTMLString(
    itemCurrrentObj.name,
    itemCurrrentObj.price,
    itemCurrrentObj.category
  );
  itemRightInfo.innerHTML = createInfoHTMLString(
    itemRightObj.name,
    itemRightObj.price,
    itemRightObj.category
  );
}

function createInfoHTMLString(itemName, itemPrice, itemCategory) {
  let htmlString =
    `
    <div class="item-info-sub-1">
            <div class="row">
              <span class="title">Name :</span>
              <span class="title-value">` +
    itemName +
    `</span>
            </div>
            <div class="row">
              <span class="title">Price :</span>
              <span class="title-value">` +
    itemPrice +
    `</span>
            </div>
          </div>
          <div class="item-info-sub-2">
            <span class="title">Category :</span>
            <span class="title-value">` +
    itemCategory +
    `</span>
          </div>`;

  return htmlString;
}

function slideRight() {
  itemLeftIndex = itemCurrentIndex;
  itemCurrentIndex = itemRightIndex;
  if (itemRightIndex === itemsArray.length - 1) {
    itemRightIndex = 0;
  } else {
    itemRightIndex++;
  }
  init();
}

function slideLeft() {
  itemRightIndex = itemCurrentIndex;
  itemCurrentIndex = itemLeftIndex;

  if (itemLeftIndex === 0) {
    itemLeftIndex = itemsArray.length - 1;
  } else {
    itemLeftIndex--;
  }
  init();
}

init();


Array.prototype.commonValues = function(arr) {
  var commonValArr = [];
  for(var i in this) {   
      if(arr.indexOf(this[i].category) > -1){
        commonValArr.push(this[i]);
      }
  }
  return commonValArr;
};


