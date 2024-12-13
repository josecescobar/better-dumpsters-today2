var time = new Date().getHours();

// Your conditional statements here

// alert()
var greeting = "Hello";
var name = "Jose";

if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Why are you still up? Got to bed!)";
}

// alert(=
alert(`${greeting}, ${name}`);
