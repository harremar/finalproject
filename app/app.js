const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const myData = document.querySelector("#myData");

hamburger.addEventListener("click", mobileMenu);
navMenu.addEventListener("click", closeMobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
function closeMobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
function myFunction() {
  // .classList is a DOM property that allows styling in CSS
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of the menu
window.onclick = function (e) {
  // We assume a negative condition (!) menu is not active
  // until the user clicks on a button
  if (!e.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//GETTING PAGE
function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  if (pageID == "") {
    MODEL.getMyContent("home");
  } else {
    MODEL.getMyContent(pageID);
    // console.log(pageID);
    getData();
  }
}

const additembtn = document.getElementsByClassName("addtocart-btn");

const circle = document.querySelector(".circleCount");
//GETTING CART NUMBER
let cartNumbers = 0;
function addCart() {
  alert("Item has been added to cart");
  cartNumbers = cartNumbers + 1;
  console.log(cartNumbers);
  circle.style.display = "flex";
  circle.innerHTML = cartNumbers;
}

function initListeners() {
  $(window).on("hashchange", route);
  route();
}
let games = [
  {
    id: 0,
    gameName: "Mario",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "dog1.webp",
  },
  {
    id: 1,
    gameName: "Mario Kart",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "dog2.jpg",
  },
  {
    id: 2,
    gameName: "Kirby",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "dog3.jpg",
  },
  {
    id: 3,
    gameName: "Pets",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "dog4.webp",
  },
  {
    id: 4,
    gameName: "xbox 1",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "cat1.jpg",
  },
  {
    id: 5,
    gameName: "xbox 2",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "cat2.jpg",
  },
  {
    id: 6,
    gameName: "xbox 3",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "cat3.jpg",
  },
  {
    id: 7,
    gameName: "xbox 4",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "cat4.jpg",
  },
  {
    id: 8,
    gameName: "sony 1",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "bird1.webp",
  },
  {
    id: 9,
    gameName: "sony 2",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "bird2.jpg",
  },
  {
    id: 10,
    gameName: "sony 3",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "bird3.webp",
  },
  {
    id: 11,
    gameName: "sony 4",
    gameDescription:
      "this is the description of the game. this game is pretty okay i guess. Go ahead and buy it to see how you like it bud.",
    gamePrice: "$43.99",
    gameImageName: "bird4.jpeg",
  },
];

//when button on browse page is clicked
function getNumber(event) {
  console.log("getting number... " + event);
  console.log(games[event]);
  let newEl = document.createElement("div");
  //what is in the innerHTML
  //using ID number to get right content
  newEl.innerHTML = `<h1>${games[event].gameName}</h1>
  <div class="game-holder">
      <img src="../../images/${games[event].gameImageName}" alt="">
      <div class="game-info">
          <p>${games[event].gameDescription}</p>
          <h3>${games[event].gamePrice}</h3>
          <div onclick="addCart()" class="addtocart-btn">
              <p>add to cart</p>
          </div>
      </div>
  </div>
  <div class="game-pictures">
      <img src="../../images/${games[event].gameImageName}" alt="">
      <img src="../../images/${games[event].gameImageName}" alt="">
      <img src="../../images/${games[event].gameImageName}" alt="">
      <img src="../../images/${games[event].gameImageName}" alt="">
      <img src="../../images/${games[event].gameImageName}" alt="">
      <img src="../../images/${games[event].gameImageName}" alt="">

  </div>
</div>`;
  console.log(newEl);
  // new content on the page ----NOT WORKING
  $(".content4").append(newEl);
  console.log(newEl.innerHTML);
}

function getData() {
  // =====NINTENDO DATA==========
  $.getJSON("data/data.json", function (data) {
    // This is called when the file is loaded
    // console.log(data.Dogs);
  })
    .done(function (doneData) {
      $(".content").html(``);
      // GETS ALL GAMES IN DATA.JSON AND PUTS IT ON PAGE
      $.each(doneData.NintendoGames, function (index, nintendo) {
        let nDiv = `<div class="nintendoholder">
        <img src="images/${nintendo.gameImageName}" alt="">
        <h1>${nintendo.gameName}</h1>
        <a href="#/games"><div class="btn" onClick="getNumber(${nintendo.id})" > view details </div></a>
    </div>`;
        $(".content").append(nDiv);
      });
    })
    .fail(function (error) {
      //This is called when there is an error loading the file
      console.log("File", error.statusText);
    });
  // =====XBOX DATA===========
  $.getJSON("data/data2.json", function (data) {
    // This is called when the file is loaded
    // console.log(data.Cats);
  })
    .done(function (doneData) {
      $(".content2").html(``);
      //  This is an example of jQuery's each statement
      $.each(doneData.XboxGames, function (index, xbox) {
        let xDiv = `<div class="xboxholder">
        <img src="images/${xbox.gameImageName}" alt="">
        <h1>${xbox.gameName}</h1>
        <a href="#/games"><div class="btn" onClick="getNumber(${xbox.id})" > view details </div></a>
    </div>`;
        $(".content2").append(xDiv);
      });
    })
    .fail(function (error) {
      //This is called when there is an error loading the file
      console.log("File", error.statusText);
    });

  // =========SONY DATA=========
  $.getJSON("data/data3.json", function (data) {
    // This is called when the file is loaded
    // console.log(data.Birds);
  })
    .done(function (doneData) {
      $(".content3").html(``);
      //  This is an example of jQuery's each statement
      $.each(doneData.SonyGames, function (index, sony) {
        let sDiv = `<div class="sonyholder">
        <img src="images/${sony.gameImageName}" alt="">
        <h1>${sony.gameName}</h1>
        <a href="#/games"><div class="btn" onClick="getNumber(${sony.id})" > view details </div></a>
    </div>`;
        $(".content3").append(sDiv);
      });
    })
    .fail(function (error) {
      //This is called when there is an error loading the file
      console.log("File", error.statusText);
    });
}

$(document).ready(function () {
  initListeners();
  getData();
});
