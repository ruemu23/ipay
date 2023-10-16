function myFunctions() {
    var x = document.getElementById("myInputs");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const d = new Date();
  let year = d.getFullYear();
  document.getElementById("demo").innerHTML = year;

