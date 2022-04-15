// 1. We need the quote to be in an array
const quote = ["Be your own kind of beautiful!",
"I's not about being the best, it's about being better than you were yesterday.",
"Self care is not a luxury. It's a necessity.",
"You will never be motivated, so you must learn to be disciplined.",
"Today is your opportunity to build the tomorrow you want.",
"Spend time with people who are good for your mental health.",
"Always say 'my peace is more important' when you find yourself reacting to something that doesn't deserve your energy.",
"Prove yourself to Yourself, not others.",
"Your current situation is giving you an opportunity to re-evaluate what you want.",
"Don't compare your life to others. There's no comparison between the sun and the moon, they shine when it's their time.",
"Not everyone will understand your journey. That's okay. You're here to live your life, not to make everyone understand."];
// 2. Then we need a random number to call in the array
//And the random number can not be greater than the number of quotes in the array
function newQuote() {
    const randomNumber = Math.floor(Math.random() * (quote.length));
    //Placing the quote into the HTML quoteDisplay element
    document.getElementById('quoteDisplay').innerHTML = quote[randomNumber];
}

var today = newDate();
function startDate() {
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("date").innerHTML = days[d.getDay()] + " | " + [d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}