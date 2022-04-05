var butterfly = new Audio('sound/butterfly.mp3');
var door = new Audio('sound/door.mp3');
var leaves = new Audio('sound/leaves.mp3');
var nuts = new Audio('sound/nuts.mp3');
var soil = new Audio('sound/soil.mp3');
var water = new Audio('sound/water.mp3');
var wolves = new Audio('sound/wolves.mp3');
var audios = [butterfly, door, leaves, nuts, soil, water, wolves];

var butterflyDiv = document.getElementById("butterfly");
var doorDiv = document.getElementById("door");
var leavesDiv = document.getElementById("leaves");
var nutsDiv = document.getElementById("nuts");
var soilDiv = document.getElementById("soil");
var waterDiv = document.getElementById("water");
var wolvesDiv = document.getElementById("wolves");
var divs = [butterflyDiv, doorDiv, leavesDiv, nutsDiv, soilDiv, waterDiv, wolvesDiv];

function myAudioFunction(letter) {
   if(letter == 'butterfly') {
	     for (var i = 0; i < audios.length; i++){
				 audios[i].pause();
			 }
       for (var i = 0; i < divs.length; i++){
				 divs[i].style="box-shadow:none";
			 }
       butterfly.play();
       butterflyDiv.style="box-shadow: 10px 10px 10px #cff123;";
   }else if(letter == 'door') {
		 for (var i = 0; i < audios.length; i++){
			 audios[i].pause();
		 }
     for (var i = 0; i < divs.length; i++){
      divs[i].style="box-shadow:none";
    }
       door.play();
       doorDiv.style="box-shadow: 10px 10px 10px #cff123;";
   }else if(letter == 'leaves') {
		 for (var i = 0; i < audios.length; i++){
			 audios[i].pause();
		 }
     for (var i = 0; i < divs.length; i++){
      divs[i].style="box-shadow:none";
    }
       leaves.play();
       leavesDiv.style="box-shadow: 10px 10px 10px #cff123;";
   }else if(letter == 'nuts') {
		 for (var i = 0; i < audios.length; i++){
			 audios[i].pause();
		 }
     for (var i = 0; i < divs.length; i++){
      divs[i].style="box-shadow:none";
    }
       nuts.play();
       nutsDiv.style="box-shadow: 10px 10px 10px #cff123;";
   }else if(letter == 'soil') {
		 for (var i = 0; i < audios.length; i++){
			 audios[i].pause();
		 }
     for (var i = 0; i < divs.length; i++){
      divs[i].style="box-shadow:none";
    }
       soil.play();
       soilDiv.style="box-shadow: 10px 10px 10px #cff123;";
   }else if(letter == 'water') {
		 for (var i = 0; i < audios.length; i++){
			 audios[i].pause();
		 }
     for (var i = 0; i < divs.length; i++){
      divs[i].style="box-shadow:none";
    }
       water.play();
       waterDiv.style="box-shadow: 10px 10px 10px #cff123;";
   }else if(letter == 'wolves') {
		 for (var i = 0; i < audios.length; i++){
			 audios[i].pause();
		 }
     for (var i = 0; i < divs.length; i++){
      divs[i].style="box-shadow:none";
    }
       wolves.play();
       wolvesDiv.style="box-shadow: 10px 10px 10px #cff123;";
   }
}
