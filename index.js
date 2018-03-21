'use strict';
var yourCharacter="";
var yourCharacterName;
var opponentHealth= 100;
var opponent;
var yourCharacterPicture;
var yourStrength;
var yourAgility;
var yourIntellect;
var yourVitality;
var yourCharisma;
var yourLevel;
var yourClass;
var yourExperience= 0;
var boardSize= 6;
var currentSquare = 0;
// var playerDirection;

var squares;    // define globally once, going to be array of individual squares

var SQUARE_SIZE= 60;
// pac man direction
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

var SPACE_BAR_KEY = 32;
var ARROW_LEFT = 37;
var ARROW_UP = 38;
var ARROW_RIGHT = 39;
var ARROW_DOWN = 40;

var MOVE_RIGHT_EVENT = 1;
var MOVE_LEFT_EVENT = 2;
var MOVE_DOWN_EVENT = 3;
var MOVE_UP_EVENT = 4;
var FIND_TREASURE_EVENT = 5;

var yourBoardIcon;

var SQ_STATUS_PAC_ON_BLANK = 1;
var SQ_STATUS_TREASURE_ON_BLANK = 2;
var SQ_STATUS_PAC_ON_TREASURE_BAD = 3;
var SQ_STATUS_PAC_ON_TREASURE_MEDIUM = 4;
var SQ_STATUS_PAC_ON_TREASURE_GOOD = 5;

var SQ_STATUS_TREASURE_BAD = 20;
var SQ_STATUS_TREASURE_MEDIUM = 21;
var SQ_STATUS_TREASURE_GOOD = 22;

var SQ_STATUS_BLANK = 100;

var TREASURE_INDEX_POSITION = 0;
var TREASURE_INDEX_TYPE = 1;

var TREASURE_TYPE_BAD = 1;
var TREASURE_TYPE_MEDIUM = 2;
var TREASURE_TYPE_GOOD = 3;

var ICON_TREASURE = "<img src='adlani grass.jpg'>";

var treasures = new Array;
var yourLoot = new Array;

var themesong = new Audio("peanuts song.mp3");
var hotFudgeSound= new Audio("hot fudge sound.wav");
var denchSound= new Audio("dench sound.wav");
var carlSound= new Audio("carl sound.wav");
var mrMugglesSound= new Audio("mr muggles sound.wav")
var biggyCheeseSound= new Audio("biggy cheese sound.wav")
var bizmoFunionsSound= new Audio("bizmo funions sound.wav");
themesong.loop = true;
themesong.volume = 0.05;

// ------------------------------------------------

function chooseAdlani()
{
  if(yourCharacter!= "")
  {
    alert("You already chose "+yourCharacter+".")
  }
  else
  {
    biggyCheeseSound.play();
    document.getElementById("title").style.visibility= "visible";
    characterSelector.parentNode.removeChild(characterSelector);
    document.getElementById("yourStrength").innerHTML= 4;
    document.getElementById("yourAgility").innerHTML= 1;
    document.getElementById("yourIntellect").innerHTML= 7;
    document.getElementById("yourVitality").innerHTML= 10;
    document.getElementById("yourCharisma").innerHTML= 5;
    yourCharacter= "Biggy Cheese";
    yourCharacterName= "BIGGY CHEESE";
    banana.innerHTML = "<img src= 'adlani baby.jpg'>";
    yourLevel= 1;
    yourStrength= 4;
    yourAgility= 1;
    yourIntellect= 7;
    yourVitality= 10;
    yourCharisma= 5;
    yourBoardIcon= "<img src= 'adlani grass.jpg'>"
    calculateClass();
    title.innerHTML="YOUR NAME IS "+yourCharacterName+", LEVEL "+yourLevel +" "+ yourClass;

    var i;
    for (i=0;i<squares.length;i++)
    {
        processSquare(i);
    }

    return;
  }

}

// -------------

function chooseNoah(){
  if(yourCharacter!= ""){
    alert("You already chose "+yourCharacter+".");
}
  else{
  denchSound.play();
  document.getElementById("title").style.visibility= "visible";
  characterSelector.parentNode.removeChild(characterSelector);
  document.getElementById("yourStrength").innerHTML= 5;
  document.getElementById("yourAgility").innerHTML= 10;
  document.getElementById("yourIntellect").innerHTML= 8;
  document.getElementById("yourVitality").innerHTML= 4;
  document.getElementById("yourCharisma").innerHTML= 5;
  yourCharacter= "Dench";
  yourCharacterName= "DENCH";
  banana.innerHTML = "<img src= 'noah baby.jpg'>";
  yourLevel= 1;
  yourStrength= 5;
  yourAgility= 10;
  yourIntellect= 8;
  yourVitality= 4;
  yourCharisma= 5;
  calculateClass();
  yourBoardIcon= "<img src= 'noah grass.jpg'>";
  processSquare(currentSquare);
  title.innerHTML="YOUR NAME IS "+yourCharacterName+", LEVEL "+yourLevel +" "+ yourClass;
  var i;
  for (i=0;i<squares.length;i++)
  {
      processSquare(i);
  }
  return
 }
}


function chooseJoey(){
  if(yourCharacter!= ""){
    alert("You already chose "+yourCharacter+".")
}
  else{
  bizmoFunionsSound.play();
  document.getElementById("title").style.visibility= "visible";
  characterSelector.parentNode.removeChild(characterSelector);
  document.getElementById("yourStrength").innerHTML= 5;
  document.getElementById("yourAgility").innerHTML= 3;
  document.getElementById("yourIntellect").innerHTML= 9;
  document.getElementById("yourVitality").innerHTML= 6;
  document.getElementById("yourCharisma").innerHTML= 10;
  yourCharacter= "Bizmo Funions";
  yourCharacterName= "BIZMO FUNIONS";
  banana.innerHTML = "<img src= 'joey baby.jpg'>";
  yourLevel= 1;
  yourStrength= 5;
  yourAgility= 3;
  yourIntellect= 9;
  yourVitality= 6;
  yourCharisma= 10;
  yourBoardIcon= "<img src= 'joey grass.jpg'>"
  calculateClass();
  processSquare(currentSquare);
  title.innerHTML="YOUR NAME IS "+yourCharacterName+", LEVEL "+yourLevel +" "+ yourClass;
  var i;
  for (i=0;i<squares.length;i++)
  {
      processSquare(i);
  }
  return
 }
}


function chooseCarlo(){
  if(yourCharacter!= ""){
    alert("You already chose "+yourCharacter+".")
}
  else{
  carlSound.play();
  document.getElementById("title").style.visibility= "visible";
  characterSelector.parentNode.removeChild(characterSelector);
  document.getElementById("yourStrength").innerHTML= 10;
  document.getElementById("yourAgility").innerHTML= 3;
  document.getElementById("yourIntellect").innerHTML= 2;
  document.getElementById("yourVitality").innerHTML= 8;
  document.getElementById("yourCharisma").innerHTML= 4;
  yourCharacter= "Carl";
  yourCharacterName= "CARL";
  banana.innerHTML = "<img src= 'carlo baby.jpg'>";
  yourLevel= 1;
  yourStrength= 10;
  yourAgility= 3;
  yourIntellect= 2;
  yourVitality= 8;
  yourCharisma= 4;
  yourBoardIcon= "<img src= 'carlo grass.jpg'>";
  processSquare(currentSquare);
  calculateClass();
  title.innerHTML="YOUR NAME IS "+yourCharacterName+", LEVEL "+yourLevel +" "+ yourClass;
  var i;
  for (i=0;i<squares.length;i++)
  {
      processSquare(i);
  }
  return;
 }
}

// -------------------------

function chooseDiego(){
  if(yourCharacter!= ""){
    alert("You already chose "+yourCharacter+".")
}
  else{
  mrMugglesSound.play();
  document.getElementById("title").style.visibility= "visible";
  characterSelector.parentNode.removeChild(characterSelector);
  document.getElementById("yourStrength").innerHTML= 2;
  document.getElementById("yourAgility").innerHTML= 7;
  document.getElementById("yourIntellect").innerHTML= 10;
  document.getElementById("yourVitality").innerHTML= 4;
  document.getElementById("yourCharisma").innerHTML= 6;
  yourCharacter= "Mr. Muggle";
  yourCharacterName= "MR. MUGGLE";
  banana.innerHTML = "<img src= 'diego baby.jpg'>";
  yourLevel= 1;
  yourStrength= 2;
  yourAgility= 7;
  yourIntellect= 10;
  yourVitality= 4;
  yourCharisma= 6;
  yourBoardIcon= "<img src= 'diego grass.jpg'>";
  processSquare(currentSquare);
  calculateClass();
  title.innerHTML="YOUR NAME IS "+yourCharacterName+", LEVEL "+yourLevel +" "+ yourClass;
  var i;
  for (i=0;i<squares.length;i++)
  {
      processSquare(i);
  }
  return
 }
}

// --------------------------------------------

function chooseJon(){
  if(yourCharacter!= ""){
    alert("You already chose "+yourCharacter+".")
}
  else{
  hotFudgeSound.play();
  document.getElementById("title").style.visibility= "visible";
  characterSelector.parentNode.removeChild(characterSelector);
  document.getElementById("yourStrength").innerHTML= 8;
  document.getElementById("yourAgility").innerHTML= 8;
  document.getElementById("yourIntellect").innerHTML= 7;
  document.getElementById("yourVitality").innerHTML= 7;
  document.getElementById("yourCharisma").innerHTML= 5;
  yourCharacter= "Hot Fudge";
  yourCharacterName= "HOT FUDGE";
  banana.innerHTML = "<img src= 'jon baby.jpg'>";
  yourLevel= 1;
  yourStrength= 8;
  yourAgility= 8;
  yourIntellect= 7;
  yourVitality= 7;
  yourCharisma= 5;
  yourBoardIcon= "<img src= 'jon grass.jpg'>";
  processSquare(currentSquare);
  calculateClass();
  title.innerHTML="YOUR NAME IS "+yourCharacterName+", LEVEL "+yourLevel +" "+ yourClass;
  var i;
  for (i=0;i<squares.length;i++)
  {
      processSquare(i);
  }
  return

 }
}

// -----------------------------------------
function joeyHover(){
  document.getElementById("characterSpecialty").innerHTML = "kills enemies with jokes";
  document.getElementById("characterWeakness").innerHTML = "weak to punches";
  document.getElementById("yourStrength").innerHTML= "5";
  document.getElementById("yourAgility").innerHTML= "3";
  document.getElementById("yourIntellect").innerHTML= "9";
  document.getElementById("yourVitality").innerHTML= "6";
  document.getElementById("yourCharisma").innerHTML= "10";
}

// -----------------------------------------

function adlaniHover(){
  document.getElementById("characterSpecialty").innerHTML = "takes hits like a champ";
  document.getElementById("characterWeakness").innerHTML = "vulnerable to throat chops";
  document.getElementById("yourStrength").innerHTML= "4";
  document.getElementById("yourAgility").innerHTML= "1";
  document.getElementById("yourIntellect").innerHTML= "7";
  document.getElementById("yourVitality").innerHTML= "10";
  document.getElementById("yourCharisma").innerHTML= "5";
}

// -----------------------------------------

function noahHover(){
  document.getElementById("characterSpecialty").innerHTML = "enjoys throat chopping";
  document.getElementById("characterWeakness").innerHTML = "sometimes spazzes out and misses attacks";
  document.getElementById("yourStrength").innerHTML= "5";
  document.getElementById("yourAgility").innerHTML= "10";
  document.getElementById("yourIntellect").innerHTML= "8";
  document.getElementById("yourVitality").innerHTML= "4";
  document.getElementById("yourCharisma").innerHTML= "5";
}

// -----------------------------------------

function diegoHover(){
  document.getElementById("characterSpecialty").innerHTML = "very smart";
  document.getElementById("characterWeakness").innerHTML = "weak attacks";
  document.getElementById("yourStrength").innerHTML= "2";
  document.getElementById("yourAgility").innerHTML= "7";
  document.getElementById("yourIntellect").innerHTML= "10";
  document.getElementById("yourVitality").innerHTML= "4";
  document.getElementById("yourCharisma").innerHTML= "6";
}

// -----------------------------------------

function carloHover(){
  document.getElementById("characterSpecialty").innerHTML = "punches hard";
  document.getElementById("characterWeakness").innerHTML = "vulnerable to insults";
  document.getElementById("yourStrength").innerHTML= "10";
  document.getElementById("yourAgility").innerHTML= "3";
  document.getElementById("yourIntellect").innerHTML= "2";
  document.getElementById("yourVitality").innerHTML= "8";
  document.getElementById("yourCharisma").innerHTML= "4";
}

// -----------------------------------------

function jonHover(){
  document.getElementById("characterSpecialty").innerHTML = "no weaknesses";
  document.getElementById("characterWeakness").innerHTML = "no Specialty";
  document.getElementById("yourStrength").innerHTML= "8";
  document.getElementById("yourAgility").innerHTML= "8";
  document.getElementById("yourIntellect").innerHTML= "7";
  document.getElementById("yourVitality").innerHTML= "7";
  document.getElementById("yourCharisma").innerHTML= "5";
}

// -----------------------------------------
function pauseThemeSong(){
  themesong.pause();
}
function playThemeSong(){
  themesong.play();
}
//--------------------------------------player movment

// function {
//   document.getElementById("goBattle").style.visibility = "visible";
// }

// Enter your js code Her


document.onkeydown = checkKey;

function checkKey(evt)
{
  // this line of code was needed due to old browsers, possibly firefox, Nathan had an issue
  evt = evt || window.event;

  //console.log ("Keycode pressed from event: " + evt.keyCode);

  var key = evt.keyCode;
  switch (key)
  {
      case ARROW_RIGHT:

        console.log("Right key is pressed");
        processEvent(currentSquare, MOVE_RIGHT_EVENT);  // ppp
        break;
      case ARROW_LEFT:

        console.log("left key is pressed");
        processEvent(currentSquare, MOVE_LEFT_EVENT);  // ppp
        break;
      case ARROW_DOWN:

        console.log("down key is pressed");
        processEvent(currentSquare, MOVE_DOWN_EVENT);  // ppp
        break;
      case ARROW_UP:

        console.log("Up key is pressed");
        processEvent(currentSquare, MOVE_UP_EVENT);  // ppp
        break;
    default:

      // do nothing
    } // end switch

}

function processEvent(pos,code)
{
   switch (code)
   {
     case MOVE_RIGHT_EVENT:
       if (checkLegalMove(currentSquare,RIGHT)==false) return;

       currentSquare++;
       // playerDirection = RIGHT;
       processSquare(currentSquare);
       processSquare(currentSquare-1);

       break;
      case MOVE_LEFT_EVENT:
       if (checkLegalMove(currentSquare,LEFT)==false) return;

       currentSquare=currentSquare-1;
       //playerDirection = LEFT;
       processSquare(currentSquare);
       processSquare(currentSquare+1);

       break;
       case MOVE_DOWN_EVENT:
        if (checkLegalMove(currentSquare,DOWN)==false) return;

        currentSquare=currentSquare+boardSize;
        //playerDirection = DOWN;
        processSquare(currentSquare);
        processSquare(currentSquare-boardSize);

        break;
        case MOVE_UP_EVENT:
         if (checkLegalMove(currentSquare,UP)==false) return;

         currentSquare=currentSquare-boardSize;
         //playerDirection = UP;
         processSquare(currentSquare);
         processSquare(currentSquare+boardSize);

         break;
         // case FIND_TREASURE_EVENT:
         //  if (currentSquare==) return;
         //
         //  currentSquare=currentSquare-boardSize;
         //  playerDirection = UP;
         //  processSquare(currentSquare);
         //  processSquare(currentSquare+boardSize);
         //
         //  break;
     default:

   }
}

// -------------------------------------------------

function checkLegalMove(position,direction)
{
  switch (direction) {
      case UP:

      if (position < boardSize) return false;
          break;

      case DOWN:

      if (position > (boardSize * boardSize)-(boardSize + 1)) return false;
        break;

      case LEFT:

      if (position % boardSize == 0)
        return false;

        break;

      case RIGHT:

        if ((position % boardSize) == (boardSize-1))
          return false;

        break;

      default:

    } // end switch

    return true;

}

// ---------------------------------------

function processSquare(pos)
{
  var squareStatus = getSquareStatus(pos);  // ppp
  //var squares = document.querySelectorAll('.square');  // faster to get first?

  //console.log ("Get Square Status called.  Status is " + squareStatus);
  switch (squareStatus)
  {
    case SQ_STATUS_PAC_ON_BLANK:

        squares[pos].innerHTML = yourBoardIcon;
        break;

    case SQ_STATUS_PAC_ON_TREASURE_BAD:

        // what treasue does
        squares[pos].innerHTML = yourBoardIcon;
        alert("bad treasure found");
        getBadTreasure();
        deleteTreasure(pos);
        break;


    case SQ_STATUS_PAC_ON_TREASURE_MEDIUM:

        // what treasue does
        squares[pos].innerHTML = yourBoardIcon;
        alert("medium treasure found");
        deleteTreasure(pos);
        getMediumTreasure();
        getExperience();
        break;

    case SQ_STATUS_PAC_ON_TREASURE_GOOD:

        // what treasue does
        squares[pos].innerHTML = yourBoardIcon;
        alert("good treasure found");
        deleteTreasure(pos);
        getGoodTreasure();
        getExperience();
        break;

    case SQ_STATUS_TREASURE_BAD:

        // show bad treasure
        squares[pos].innerHTML = ICON_TREASURE;
        break;


    case SQ_STATUS_TREASURE_MEDIUM:

        // process medium
        squares[pos].innerHTML = ICON_TREASURE;
        break;

    case SQ_STATUS_TREASURE_GOOD:

        // process good
        squares[pos].innerHTML = ICON_TREASURE;
        break;

    case SQ_STATUS_BLANK:

        squares[pos].innerHTML = "<img src= 'grass.jpg'>";
        break;

    default:
      console.log("Error in renderGame switch, invalid square status : " + squareStatus );

  }  // end switch

}

// ------------------------------
function deleteTreasure(pos){
  var i=0;
  var treasureFound=false;
  while ((treasureFound == false) && (i < treasures.length))
  {
    if (treasures[i][TREASURE_INDEX_POSITION] == pos){
        treasures.splice(i,1)
        treasureFound = true;
    }
    else i++
  }
}
function getBadTreasure(){
  var lootAmount=Math.floor((Math.random() * 3 + 1));
  var lootFoundAlert;
  var i;
  for (i=0;i<lootAmount;i++)
  {
    var lootNumber=Math.floor((Math.random() * 6 + 1));
    switch (lootNumber) {
      case 1:yourLoot.push("banana peel");

             lootFoundAlert=lootFoundAlert+"banana peel"
        break;
      case 2:yourLoot.push("old spice deoderant");

             lootFoundAlert=lootFoundAlert+"old spice deoderant"
        break;
      case 3:yourLoot.push("bottle of lard");

             lootFoundAlert=lootFoundAlert+"bottle of lard"
        break;
      case 4:yourLoot.push("a pile of bat guano");

             lootFoundAlert=lootFoundAlert+"a pile of bat guano"
        break;
      case 5:yourLoot.push("used band-aid");

             lootFoundAlert=lootFoundAlert+"used band-aid"
        break;
      case 6:yourLoot.push("knickleback album");

             lootFoundAlert=lootFoundAlert+"knickleback album"
        break;

      default:

    }
  }
}
function getMediumTreasure(){
  var lootAmount=Math.floor((Math.random() * 3 + 1));
  var lootFoundAlert;
  var i;
  for (i=0;i<lootAmount;i++)
  {
    var lootNumber=Math.floor((Math.random() * 5 + 1));
    switch (lootNumber) {
      case 1:yourLoot.push("tiny mustache statue");

             lootFoundAlert=lootFoundAlert+"tiny mustache statue"
        break;
      case 2:yourLoot.push("Pokemon card");

             lootFoundAlert=lootFoundAlert+"Pokemon card"
        break;
      case 3:yourLoot.push("box labeled GABI'S ESTUCHE");

             lootFoundAlert=lootFoundAlert+"box labeled GABI'S ESTUCHE"
        break;
      case 4:yourLoot.push("angry inchworm in a tupperware");

             lootFoundAlert=lootFoundAlert+"angry inchworm in a tupperware"
        break;
      case 5:yourLoot.push("cell phone charger");

             lootFoundAlert=lootFoundAlert+"cell phone charger";
        break;

      default:

    }
  }
  getExperience();
}
function getGoodTreasure(){
  var lootAmount=Math.floor((Math.random() * 3 + 1));
  var lootFoundAlert;
  var i;
  for (i=0;i<lootAmount;i++)
  {
    var lootNumber=Math.floor((Math.random() * 5 + 1));
    switch (lootNumber) {
      case 1:yourLoot.push("phantom menace on blu-ray");

             lootFoundAlert=lootFoundAlert+"phantom menace on blu-ray"
        break;
      case 2:yourLoot.push("leopard skin speedo");

             lootFoundAlert=lootFoundAlert+"leopard skin speedo"
        break;
      case 3:yourLoot.push("tiny metallic crab");

             lootFoundAlert=lootFoundAlert+"tiny metallic crab"
        break;
      case 4:yourLoot.push("CARL'S JR. EXTRA BIG*** TACO");

             lootFoundAlert=lootFoundAlert+"CARL'S JR. EXTRA BIG*** TACO"
        break;
      case 5:yourLoot.push("a 7 pound chunk of whale vomit");

             lootFoundAlert=lootFoundAlert+"cell phone charger";
        break;

      default:

    }
  }
  getExperience();
}
function getSquareStatus(pos)
{
    var treasureType;

    if (pos == currentSquare)  // pac man found
    {
        treasureType = checkForTreasure(pos);
        if (treasureType > 0)
        {
            switch (treasureType) {
              case TREASURE_TYPE_BAD:
                return SQ_STATUS_PAC_ON_TREASURE_BAD;
                break;

              case TREASURE_TYPE_MEDIUM:
                return SQ_STATUS_PAC_ON_TREASURE_MEDIUM;
                break;

              case TREASURE_TYPE_GOOD:
                return SQ_STATUS_PAC_ON_TREASURE_GOOD;
                break;

              default:

            } // END SWITCH

        }   // end if found treasure

        // check treasure.
        return SQ_STATUS_PAC_ON_BLANK;
    }  // end if pos = pac man

    treasureType = checkForTreasure(pos);
    if (treasureType > 0)
    {
        switch (treasureType) {
          case TREASURE_TYPE_BAD:
            return SQ_STATUS_TREASURE_BAD;
            break;

          case TREASURE_TYPE_MEDIUM:
            return SQ_STATUS_TREASURE_MEDIUM;
            break;

          case TREASURE_TYPE_GOOD:
            return SQ_STATUS_TREASURE_GOOD;
            break;

          default:

        } // END SWITCH

    }   // end if found treasure


    return SQ_STATUS_BLANK;

}  // end function get Square status

// ---------------------------------------

function checkForTreasure(position)
{
  var i = 0;

  // check for ghosts in specific order
  var treasureFound = false;

  // you always need to go through the entire array of ghosts to check for special ones.
  while ((treasureFound == false) && (i < treasures.length))
  {
    if (treasures[i][TREASURE_INDEX_POSITION] == position)
        treasureFound = true;
    else
      i++;
  }

    if (treasureFound == true)
      return treasures[i][TREASURE_INDEX_TYPE];
    else
      return 0;

}

// ---------------------------------------

function createBoard()
{
    // get the board
    var myBoard = document.getElementById("board");
    myBoard.innerHTML = "";
    var i;

    //  set the width and height styles to the number of pixels
    myBoard.style.width = (boardSize*SQUARE_SIZE) + "px"; // ppp
    myBoard.style.height = (boardSize*SQUARE_SIZE) + "px";

    // Create the squares
    for (i=0;i<boardSize*boardSize;i++)
    {
      myBoard.innerHTML = myBoard.innerHTML + '<div class="square"></div>';
    }

    squares = document.querySelectorAll('.square');

}

// ----------------------------------------

function createTreasures()
{
  treasures.push([2,TREASURE_TYPE_GOOD]);
  treasures.push([35,TREASURE_TYPE_MEDIUM]);
  treasures.push([20,TREASURE_TYPE_BAD]);

}

// ----------------------------------------

function calculateClass()
{
  if ((yourStrength>yourAgility)&&(yourStrength>yourIntellect)&&(yourStrength>yourVitality)&&(yourStrength>yourCharisma)){
      yourClass= "DESTROYER";
      return
  }
  if ((yourStrength==yourAgility)&&(yourStrength>yourIntellect)&&(yourStrength>yourVitality)&&(yourStrength>yourCharisma)){
      yourClass= "KNIGHT";
      return
  }
  if ((yourStrength>yourAgility)&&(yourStrength==yourIntellect)&&(yourStrength>yourVitality)&&(yourStrength>yourCharisma)){
      yourClass= "WARLORD";
      return
  }
  if ((yourStrength>yourAgility)&&(yourStrength>yourIntellect)&&(yourStrength==yourVitality)&&(yourStrength>yourCharisma)){
      yourClass= "SOLDIER";
      return
  }
  if ((yourStrength>yourAgility)&&(yourStrength>yourIntellect)&&(yourStrength>yourVitality)&&(yourStrength==yourCharisma)){
      yourClass= "HERO";
      return
  }
  if ((yourAgility>yourStrength)&&(yourAgility>yourIntellect)&&(yourAgility>yourVitality)&&(yourAgility>yourCharisma)){
      yourClass= "NINJA";
      return
  }
  if ((yourAgility>yourStrength)&&(yourAgility==yourIntellect)&&(yourAgility>yourVitality)&&(yourAgility>yourCharisma)){
      yourClass= "PEE-WEE";
      return
  }
  if ((yourAgility>yourStrength)&&(yourAgility>yourIntellect)&&(yourAgility==yourVitality)&&(yourAgility>yourCharisma)){
      yourClass= "SPY";
      return
  }
  if ((yourAgility>yourStrength)&&(yourAgility>yourIntellect)&&(yourAgility>yourVitality)&&(yourAgility==yourCharisma)){
      yourClass= "ROGUE";
      return
  }
  if ((yourIntellect>yourStrength)&&(yourIntellect>yourAgility)&&(yourIntellect>yourVitality)&&(yourIntellect>yourCharisma)){
      yourClass= "GENIUS";
      return
  }
  if ((yourIntellect>yourStrength)&&(yourIntellect>yourAgility)&&(yourIntellect==yourVitality)&&(yourIntellect>yourCharisma)){
      yourClass= "CHIEF";
      return
  }
  if ((yourIntellect>yourStrength)&&(yourIntellect>yourAgility)&&(yourIntellect>yourVitality)&&(yourIntellect==yourCharisma)){
      yourClass= "TRICKSTER";
      return
  }
  if ((yourVitality>yourStrength)&&(yourVitality>yourAgility)&&(yourVitality>yourIntellect)&&(yourVitality>yourCharisma)){
      yourClass= "TANK";
      return
  }
  if ((yourVitality>yourStrength)&&(yourVitality>yourAgility)&&(yourVitality>yourIntellect)&&(yourVitality==yourCharisma)){
      yourClass= "COOL-DUDE";
      return
  }
  if ((yourCharisma>yourStrength)&&(yourCharisma>yourAgility)&&(yourCharisma>yourIntellect)&&(yourCharisma>yourVitality)){
      yourClass= "TONGUE-LASHER";
  }
  else yourClass= "DUDE"


}
function getExperience(){
  yourExperience= yourExperience+1
  if (yourExperience== 1){
    var statBoost= Math.floor((Math.random() * 5) + 1);
    yourLevel++;
    yourExperience= 0;
    if (statBoost== 1){
      yourStrength++;
      document.getElementById("yourStrength").innerHTML++;
    }
    if (statBoost== 2){
      yourAgility++;
      document.getElementById("yourAgility").innerHTML++;
    }
    if (statBoost== 3){
      yourIntellect++;
      document.getElementById("yourIntellect").innerHTML++;
    }
    if (statBoost== 4){
      yourVitality++;
      document.getElementById("yourVitality").innerHTML++;
    }
    if (statBoost== 5){
      yourCharisma++;
      document.getElementById("yourCharisma").innerHTML++;
    }
    calculateClass();
    title.innerHTML="YOUR NAME IS "+yourCharacterName+", LEVEL "+yourLevel +" "+ yourClass;
  }
}
// ---------------------------


document.getElementById("title").style.visibility= "hidden";

themesong.play();

createBoard();
createTreasures();
squares = document.querySelectorAll('.square');  // faster to get first?


var i;
for (i=0;i<squares.length;i++)
{
    //processSquare(i);
    squares[i].innerHTML = "<img src= 'grass.jpg'>";
}
