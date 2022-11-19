

let texto1 = document.getElementById("texto1");
console.log(texto1.style);

let texto2 = document.getElementById("texto2");
console.log(texto2.style);

console.log("Computed style")
console.log(window.getComputedStyle(texto1).fontSize);
console.log(window.getComputedStyle(texto1).color);
console.log(window.getComputedStyle(texto2).fontSize);
console.log(window.getComputedStyle(texto2).color);
