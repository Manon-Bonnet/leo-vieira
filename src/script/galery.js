// var xmlhttp = new XMLHttpRequest();


// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myObj = JSON.parse(this.responseText);
//     document.querySelector(".figure-galery").innerHTML = myObj.name;
//   }
// };

// xmlhttp.open("GET","../src/php/file.php",true); 
// xmlhttp.send();

// Get elements

const images = document.getElementsByTagName('img');
const fullWidthBlock = document.getElementsByClassName('fullWidthImage')[0];
const croce = document.getElementsByClassName('croce')[0];

let tempImage;

// Add Listeners
for(let i = 0 ; i < images.length ; i++){
  images[i].addEventListener('click', openImage);
}
croce.addEventListener('click', closeImage);

// Functions

function openImage(){
  tempImage = document.createElement('img');
  tempImage.src = this.src;
  tempImage.alt = this.alt;

  console.log(this);

  fullWidthBlock.appendChild(tempImage);
  fullWidthBlock.classList.remove('hidden');
}

function closeImage(){
  fullWidthBlock.classList.add('hidden');
  fullWidthBlock.removeChild(tempImage);
}