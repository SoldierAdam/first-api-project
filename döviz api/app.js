const api_key = "AkkJVAsC0bks5WUtoRGgBVvgLoVnEq0s";
const url = `https://api.apilayer.com/exchangerates_data/convert?${currency_one}=${list_one}&${currency_two}=${list_two}&${amount}=${amount}`+api_key;

const currency_one = document.getElementById("currency_one");
const currency_two = document.getElementById("currency_two");
const list_one = document.getElementById("list_one");
const list_two = document.getElementById("list_two");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const calculate = document.getElementById("calculate");

fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        
    })