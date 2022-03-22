function changeImage(click_id) {
  var image = document.getElementById("myImage");
  var img1 = document.getElementById("1");
  var img2 = document.getElementById("2");
  var img3 = document.getElementById("3");



  if (click_id == 1) {
    console.log("maisonunifamiliale");
    image.src = "image/maisonunifamiliale.jpg";

    var w = document.getElementById("test1");
    var x = document.getElementById("test2");
    var y = document.getElementById("test3");
    var z = document.getElementById("test4");
    w.style.display = "block";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";

  } else if (click_id == 2) {
    image.src = "image/Condo.jpg";
    var w = document.getElementById("test1");
    var x = document.getElementById("test2");
    var y = document.getElementById("test3");
    var z = document.getElementById("test4");
    w.style.display = "none";
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  } else if (click_id == 3) {
    image.src = "image/duplex.jpg";
    var w = document.getElementById("test1");
    var x = document.getElementById("test2");
    var y = document.getElementById("test3");
    var z = document.getElementById("test4");
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    image.src = "image/fermette.jpg";
    var w = document.getElementById("test1");
    var x = document.getElementById("test2");
    var y = document.getElementById("test3");
    var z = document.getElementById("test4");
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  }
}

