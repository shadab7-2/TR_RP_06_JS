function greet(name){
    //return `hellow ${name}`;
    console.log("hello ",name)
}
greet("shadab")
// console.log(greet("shadab"))

// Area of rectangle
function areaOfRectangel(a,  b){
    let area = a*b
    console.log(`area of rectange is: ${area} `)
}
areaOfRectangel(4,5);

//celsius to fahrenheit converter
function celsiusToFahrenheit( celsius){
    let fahrenheit = ( celsius*9/5) +32;
    console.log(celsius +"°C  = "+ fahrenheit+"F")
    
};
celsiusToFahrenheit(30);

//Fahrenheit to Celsius Converter
function fahrenheitToCelsius(fahrenheit){
 let celsius = ((fahrenheit - 32)/9)*5;
 console.log(fahrenheit+"F = "+celsius+"°C" )
}
fahrenheitToCelsius(86)