//------------------PAINT--------------------------

let isDrawing = false;
let x = 0;
let y = 0;
action ='libre';
epaisseur = 1;
Nepaisseur.value = epaisseur;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
  //context.beginPath();
  context.strokeStyle="blue";
  context.lineWidth="2"; 
  context.fillStyle="white";
  context.save();
  context.fillRect(0,0,400,400);
   // Je créé un canvas temporaire de la même taille que le canvas principal
  canvas.temporaire = document.createElement('canvas');
  canvas.temporaire.width = 400;
  canvas.temporaire.height = 400;
  // Je créé le pointeur vers le contexte du canvas temporaire
  canvas.temporaireCtx = canvas.temporaire.getContext('2d');

canvas.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
  if (action == 'ligne') {
  canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
  canvas.departY = e.clientY - canvas.getBoundingClientRect().top;

  // Je garde en mémoire l'image actuelle du canvas et je la dessine dans le canvas temporaire
  canvas.temporaireCtx.drawImage(canvas,0,0);
 }
 if (action == 'carre') {
	canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
	canvas.departY = e.clientY - canvas.getBoundingClientRect().top;

	// Je garde en mémoire l'image actuelle du canvas et je la dessine dans le canvas temporaire
	canvas.temporaireCtx.drawImage(canvas,0,0);
  
  
 }
 if (action == 'tri') {
	canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
	canvas.departY = e.clientY - canvas.getBoundingClientRect().top;

	// Je garde en mémoire l'image actuelle du canvas et je la dessine dans le canvas temporaire
	canvas.temporaireCtx.drawImage(canvas,0,0);
 }
 
 if (action == 'cer') {
	canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
	canvas.departY = e.clientY - canvas.getBoundingClientRect().top;
	canvas.temporaireCtx.drawImage(canvas,0,0);
 }
  if (action == 'rect') {
	canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
	canvas.departY = e.clientY - canvas.getBoundingClientRect().top;
	canvas.temporaireCtx.drawImage(canvas,0,0);
 }
 
});

canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    if(action=='libre'){
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
    }
    if (action == 'ligne') {
	  x2 = e.clientX - canvas.getBoundingClientRect().left;
      y2 = e.clientY - canvas.getBoundingClientRect().top;

      // J'affiche sur le canvas, le canvas temporaire pour effacer ma ligne précédente
      drawImage(canvas, 0, 0, canvas.temporaire);
      drawLine(context, canvas.departX, canvas.departY, x2, y2);
    }
	if (action == 'carre') {
      drawImage(canvas, 0, 0, canvas.temporaire);
      drawCarre(canvas, canvas.departX, canvas.departY, x2, y2);


    }
	if (action == 'rectangle') {
      drawImage(canvas, 0, 0, canvas.temporaire);
      drawRect(canvas, canvas.departX, canvas.departY, x2, y2);


    }
	if (action == 'cercle') {
      drawImage(canvas, 0, 0, canvas.temporaire);
      drawCer(canvas, canvas.departX, canvas.departY, x2, y2);
    }
  }
});

window.addEventListener('mouseup', e => {
  /*if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
  if (isDrawing2 === true) {
    drawLine2(canvas, canvas.departX, canvas.departY, x2, y2);
    x = 0;
    y = 0;
    isDrawing2 = false;
  }*/
  isDrawing = false;
});



function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  //changeCoulF();
  changeCoul();
  //watchColorPicker();
  context.lineWidth = epaisseur;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
  //console.log(x);
  //console.log(y);
  valeurDirectX.value = x; //recup données de la souris dans le input
  valeurDirectY.value = y;
  if (action=="gomme"){
  context.clearRect(x1, x2, y1, y2);
  context.save();  
  }
  
}

//-------------choisir la couleur du stylo avant de dessiner---------
var coul= document.getElementById("coul");
coul.addEventListener("change",changeCoul,false);
function changeCoul(){
	if (coul.value == 1) {
	context.strokeStyle = 'black';
	context.lineWidth = 50;
  }
	if (coul.value == 2){
		context.strokeStyle = '#FF00FF';  
		context.strokeWidth = 50;
  }
	if (coul.value == 3){
		context.strokeStyle = '#007FFF';  
  }
	if (coul.value == 4){
		context.strokeStyle = '#FF0000';  
  }
  if (coul.value == 5){
		context.strokeStyle = 'white';  
  }
}

//-------------choisir la couleur du fond (à faire avant de dessiner)----------------
/* var coulF= document.getElementById("coulF");
coulF.addEventListener("change",changeCoulF,false);
function changeCoulF(){
	if (coulF.value == 1) {
  context.fillStyle = "grey";
  context.fillRect(0,0,400,400);
  }
	if (coulF.value == 2){
  context.fillStyle = '#FF00FF';
context.fillRect(0,0,400,400);  
		 
  }
	if (coulF.value == 3){
context.fillStyle = '#007FFF';  
context.fillRect(0,0,400,400);
		
  }
	if (coulF.value == 4){
context.fillStyle = '#FF0000'; 
context.fillRect(0,0,400,400); 
		 
  }
} */

// Dessine une image
function drawImage(canvas, x, y, image){
  ctx = canvas.getContext('2d');
  ctx.drawImage(image, x, y);
}

//-------------------dessiner une ligne--------------------

var btLigne = document.getElementById("btLigne");
btLigne.addEventListener("click", drawLine2, false);
function drawLine2(canvas, x1, y1, x2, y2){
	action='ligne';
}

//------------------retrouver stylo-------------------------
var btStylo = document.getElementById("btStylo");
btStylo.addEventListener("click", drawWithStylo, false);
function drawWithStylo(canvas, x1, y1, x2, y2){
	action='libre';
}


//-----------------epaisseur--------------------------
//Augmenter :
var btPlus = document.getElementById("btPlus");
btPlus.addEventListener("click", drawPlus, false);
function drawPlus(canvas, x1, y1, x2, y2){
	epaisseur+=1;
	Nepaisseur.value = epaisseur;
}
//Reduire :
var btMoins = document.getElementById("btMoins");
btMoins.addEventListener("click", drawMoins, false);
function drawMoins(canvas, x1, y1, x2, y2){
	epaisseur-=1;
	Nepaisseur.value = epaisseur;
}

//-----------------Gommer---------------------------------------
var btGomme = document.getElementById('btGomme');
btGomme.addEventListener("click", drawGomme, false);
function drawGomme(){
	action='libre';
	coul.value = 5;
	context.strokeStyle = 'white';
  
}




//--------------------changer style du stylo-----------------



//------------------dessiner un carré--------------------------

var btCarre = document.getElementById("btCarre");
btCarre.addEventListener("click", drawCarre, false);
function drawCarre(canvas, x1, y1, x2, y2){
	action='carre';
}

//-----------------dessiner un rectangle------------------------
var btRect = document.getElementById("btRect");
btRect.addEventListener("click", drawRect, false);
function drawRect(canvas, x1, y1, x2, y2){
	action='rect';
	var canvas  = document.getElementById("canvas");
            context     = canvas.getContext('2d');

            base_image = new Image();
            base_image.src = "rectangle.png";
            base_image.onload = function(){
                context.drawImage(base_image, 0, 0);
            }
	//var canvas = document.getElementById("canvas");
	var canvas  =  document . querySelector ( 'canvas' ) ;
	var context = canvas.getContext("2d");
	//context = canvas.getContext("2d");
	context.fillStyle = "#000000";
	context.beginPath();
	context.rect(x1, y1, x2-x1, y2-y1);
	context.stroke();
}

//---------------dessiner un triangle----------------------------
var btTri = document.getElementById("btTri");
btTri.addEventListener("click", drawTri, false);
function drawTri(canvas, x1, y1, x2, y2){
	//alert("test");
	action='tri';
}


//---------------dessiner un cercle----------------------------
var btCer = document.getElementById("btCer");
btCer.addEventListener("click", drawCer, false);
function drawCer(canvas, x1, y1, x2, y2){
	action='Cer';
	var canvas  = document.getElementById("canvas");
            context     = canvas.getContext('2d');

            base_image = new Image();
            base_image.src = "cercle.png";
            base_image.onload = function(){
                context.drawImage(base_image, 0, 0);
            }
	//var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	//var canvas = $("#canvas");
	//var myCanvasContext = myCanvas[0].getContext("2d");
	//var context = canvas[0].getContext("2d");
	context.fillStyle = "#000000";
	context.beginPath();
	if(Math.abs(x2-x2) >= Math.abs(y2-y1)){
		context.arc(x1,y1, Math.abs(x2-x1), 0, 2* Math.PI, false);
	}else{
		context.arc(x1, y1, Math.abs(x2-y1), 0, 2* Math.PI, false);
	}
	context.stroke();
}

//------------------save image du canvas------------------------------------------------


function putImage(){
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
window.location.href=image;

}                    

//------------------recommencer/effacer tout------------------------(fonctionne)-------------------------
var btReco = document.getElementById('btReco');
btReco.addEventListener("click", recommencer, false);
function recommencer(){
	context.fillStyle = 'white'; 
	context.fillRect(0,0,400,400); 
  
}

//--------------retour en arriere-------------------------
var btReAr = document.getElementById('btReAr');
btReAr.addEventListener("click", retourArriere, false);
function retourArriere(){
	context.restore();
	context.fillRect(0,0,400,400);
	context.save();  
	
  
}

//--------------retour en avant-------------------------
var btReAv = document.getElementById('btReAv');
btReAv.addEventListener("click", retourAvant, false);
function retourAvant(){
	context.restore();               // Restaure l'état d'origine
	context.fillRect(0,0,400,400);   // Dessine un rectangle avec les réglages restaurés
	context.save();  
  
}


//--------------inserer un texte------------------------------

var btText = document.getElementById('btText');
btText.addEventListener("click", insertText, false);
function insertText(){
	context.font = 'bold 20px Verdana, Arial, serif';

	context.strokeStyle = '#48B';
	context.strokeText('Texte test', 25, 50);

	context.font = 'bold 20px Verdana, Arial, serif';
	context.fillStyle = '#48B';
	context.textAlign = 'center'; //Le milieu du texte sera à 150
	context.fillText('Texte test 2 ', 150, 100);
}

//---------------changer couleur avec colorPicker------------------------------


/* colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    //p.style.color = event.target.value;
	context.strokeStyle = event.target.value;
	context.lineWidth = 50;
  });
}

colorWell.select();
 */


