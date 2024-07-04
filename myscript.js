document.addEventListener("DOMContentLoaded", function() {
    const text = "IT engineering student proficient in C, C++, and Python. Eager to leverage strong analytical skills and passion for technology to contribute towards the work. Pursuing excellence in Information Technology to drive innovation and solve challenges.";
    let index = 0;
    const speed = 50; 
    function typeText() {
      if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, speed);
      }
    }
    typeText();
  });