// --------------------------------------1--------------------------------

// Variables

const message = document.querySelector('.message');
const text = document.getElementById('text');
const send = document.getElementById('send');
const clear = document.getElementById('clear');


// Click event 

send.addEventListener('click',deliverMessage);

function deliverMessage()   {

    let textValue = text.value; // значение написанного текста 
    message.innerHTML = textValue; // это значение добовляется в message!
} 


// Second click event 
clear.addEventListener('click',clearField);

function clearField()  {
    message.innerHTML = '';
    text.value = '';
}

// ----------X---------------------------1---------------------------X----


// --------------------------------------2--------------------------------
let quotes = [

    {
        'quote':"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        'author': "― Marilyn Monroe"
    },

    {
        'quote':"“A friend is someone who knows all about you and still loves you.”",
        'author': "― Elbert Hubbard"
    },

    {
        'quote':"“It is better to be hated for what you are than to be loved for what you are not.”",
        'author': "― Andre Gide, Autumn Leaves"
    },

    {
        'quote':"“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
        'author': "― John Green, The Fault in Our Stars"
    },

    {
        'quote':"“Love all, trust a few, do wrong to none.”",
        'author': "― William Shakespeare, All's Well That Ends Well"
    },

    {
        'quote':"“Korpeliy heyat terzimdi!”",
        'author': "― Hebib Sadiqzade"
    },

    {
        'quote':"Oxumag Oxumag ve bir daha Oxumag",
        'author': "― Perviz Namazli"
    },

    {
        'quote':"“Olsunda mirta bax maraga men ne geldi baxiram ama oyrenmirem”",
        'author': "― Ferid Eyvazov"
    },

    {
        'quote':"“Teki heyatda 15 deq qabagda olasan!”",
        'author': "― Nizami Alimamedov"
    },

]

// Pure JS 
const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

btn.addEventListener('click', randomQuote);

function randomQuote()   {

    let number = Math.floor(Math.random()*quotes.length);     // !!! If you want a random number between 1 and 10, multiply the results of Math.random by 10, then round up or down.

    quote.innerHTML = quotes[number].quote;
    author.innerHTML = quotes[number].author;
} 

// Another variant by jQuery
const $btn = $('#btn');
const $quote = $('#quote');
const $author = $('#author');

$btn.click(function(){

    let number = Math.floor(Math.random()*quotes.length);

    $quote.html(quotes[number].quote);
    $author.html(quotes[number].author);
});

// ----------X---------------------------2---------------------------X----

// --------------------------------------3--------------------------------

    //variables

let color = '#';
const colors = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'
];

const btn_bg  = document.getElementById('btn_bg');
const bodyBackground = document.getElementById('section');
const value = document.querySelector('.value');

    //logic

btn_bg.addEventListener('click', getColor);

function getColor() {
    color = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * colors.length);

        color += colors[random];
        console.log(color); // чтобы увидеть на консоли
    }

    bodyBackground.style.backgroundColor = color;
    value.innerHTML = color;
}
// ----------X---------------------------3---------------------------X----
// --------------------------------------4--------------------------------

    //variables

let color2 = '#';
const colors2 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'
];

const bodyBackground2 = document.getElementById('section-2');
const value2 = document.querySelector('.value-2');

    //logic

(function(){setInterval(getColor2,6000)})();

function getColor2() {
    color2 = '#';
    for (let i = 0; i < 6; i++) {
        let random2 = Math.floor(Math.random() * colors2.length);

        color2 += colors2[random2];
        // console.log(color2); // чтобы увидеть на консоли
    }

    bodyBackground2.style.backgroundColor = color2;
    value2.innerHTML = color2;
}
// ----------X---------------------------4---------------------------X----


// --------------------------------------5--------------------------------

    //variables

let boybtn = document.getElementById('boy-btn');
let answer = document.getElementById('answer');
let next = document.getElementById('boy-btn-next');
let name = document.getElementById('name');

    //logic

boybtn.addEventListener('click', findAnswer);
next.addEventListener('click', NextName);

function findAnswer()   {
    let random_answer = Math.floor(Math.random()*100);

    answer.innerHTML = "<h3>Oglannig:</h3>" + random_answer + "%";
}

let names = ['Nizami Alimamedov','Hebib Sadiqzade', 'Perviz Namazli'];


function NextName() {

    name.innerHTML = names[0];
    next.addEventListener('click', NextName2);

    function NextName2() {
        name.innerHTML = names[1];
        next.addEventListener('click', NextName3);
        
        function NextName3() {
            name.innerHTML = names[2];
        }

    }

}


// ----------X---------------------------5---------------------------X----
// --------------------------------------6--------------------------------

var prevName = document.getElementById('previous');
var nextName = document.getElementById('next');
var namesSet = document.querySelectorAll('.names-new h1')


// ----------X---------------------------6---------------------------X----
    
prevName.addEventListener('click', prevFunction);
nextName.addEventListener('click', nextFunction);

console.log(namesSet.length);


i = 0;

function prevFunction() {

    namesSet[i].style.display = 'none';
    i--;

    if(i < 0){
        i = 3;
    }

    namesSet[i].style.display = 'block';

}

function nextFunction() {

    namesSet[i].style.display = 'none';
    i++;

    if(i >= namesSet.length){
        i = 0;
    }

    namesSet[i].style.display = 'block';

}


