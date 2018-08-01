// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

//
window.onload = function() {
  // document.getElementsByClassName("navWrapper")[0].className += ' firstState ';
}

//
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("bckBtn").style.display = "block";
  } else {
    document.getElementById("bckBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById('mobBtnDiv').onclick = function() {
  var className = '' + mobBtnDiv.parentElement.className + '';
   if (~className.indexOf(' inactive ')) {
    this.parentElement.className = className.replace(' inactive', ' active');
    scroltoPos(171);
  } else if (~className.indexOf(' active ')) {
    this.parentElement.className = className.replace(' active', ' inactive');
    scroltoPos(-171);;
  } else {
    this.parentElement.className += ' active ';
    scroltoPos(171);
  }
  //document.getElementById( 'top' ).scrollIntoView();
}

function scroltoPos(pos) {
  window.scrollBy({ top: pos, left: 0, behavior: 'smooth' });
}

// function toggleMonileMenu(show) {
//
//   var mainHeading = document.getElementById("mainHeading");
//
//   if (show !== true) {
//     mainHeading.style.display = "none";
//   } else {
//     mainHeading.style.display = "block";
//   }
// }
