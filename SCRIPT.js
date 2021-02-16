const vowel_list = 'aeiouAEIOU';

const input = document.getElementById("text input")
    //const words = str.split('a', 'e', 'i', 'o', 'u');
    //console.log(words);

let result = document.getElementById("Vowel Count")

var counter = 0

///button.addEventListener('click', countVowels);

//var a = input;
//vowels.forEach(function (item, index) {
//    document.getElementById("Vowel Count").innerHTML = "Vowel Count" + " " + 1;
//});

//i = index
//i++ = counter

///a.addEventListener("keyup",function(){

///var b = vowels 
//for (let i = 0; i < input.length; i++) {
//console.log(vowels[input]);
//if (i = 45) break;
//}

//Vowel Count 
//If you loop through a, e, i ,o , u return + 1

//console.log(document.getElementById("text input").value);

//document.getElementById("text input").addEventListener('input', function() {
//{console.log(this.input)};

//for each does not seem to be working 
///input.forEach(vowel => 
///input.forEach(vowel => +1);

//Causing error
//input.forEach( input => {
//console.log(input); 
//});

//for (let i = 0; i < input.length; i++) {
//console.log(input[i]);
//if (i === 3)break;
//}

//Word Count 
//keyup is when a user releases a key
var a = input;
a.addEventListener("keyup", function() {
    document.getElementById("Letter Count2").innerHTML = " " + a.value.length;
});


///a.addEventListener("keyup", vowel_count);

submitButton.addEventListener("onClick", () => {

    function vowel_count(str1) {
        var vowel_list = 'aeiouAEIOU';
        var vcount = 0;

        for (var x = 0; x < str1.length; x++) {
            if (vowel_list.indexOf(str1[x]) !== -1) {
                vcount += 1;
            }

        }
        return document.getElementById("Vowel Count").innerHTML = " " + vcount;
    }

});

///Almost there - i need this to work on keyup like the word count above 
//FIRING everytime i keyup - need to remove this
//var a = input;
//a.addEventListener("keyup",countVowels);
//function countVowels(){
//let word =  document.getElementById("text input").value
//for(w of word){

//for(v of vowels){
//if(w.toLowerCase() == v){
//counter++
//}
//if(w.toLowerCase() != v){
// counter--
//}
//}
//}
//result.innerText = "Vowel Count" + " " + counter;
//};

///result =  document.getElementById("Vowel Count").innerHTML = "Vowel Count" + " " + $(counter);})}







//const searchTerm = 'a';
//const indexOfFirst = input.indexOf(searchTerm);

//console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

//console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"


//if (input.indexOf("a") > -1)
//{alert("hello found an a inside input");

//}

//var b = input;
//a.addEventListener("keyup",function(){
//document.getElementById("Vowel Count").innerHTML = "Vowel Count" + " "+ a.value.length;
//})

///Turn input into an array and then run a loop which +1 to Vowel Count output 

/////hmmmmm

///if (input = Vowels) {console.log(vowels)}