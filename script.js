const textinput = document.querySelector("#text");
console.log(textinput);
const result = document.getElementById("output");
const checkbtn = document.getElementById("btn");

function textfxn() 
{
    result.innerHTML = "";
    let text = document.getElementById("text").value;
    let newtext = text.replace(/[^0-9]/g, '');
    let alphatext = text.replace(/[0-9]/g, '');
    console.log(newtext, alphatext);

    if (newtext && !alphatext) 
    {
        checkbtn.addEventListener("click", check);
    }
    else 
    {
        alert("Please Enter a Positive Value");
    }
}

function check() 
{
    let text = document.getElementById("text").value;
    let newtext = text.replace(/[^0-9]/g, '');
    let temp = newtext;
    let sum = 0;

  if (newtext === "") 
  {
        result.innerHTML = "";
        return;
    }
  
    while (temp > 0) 
    {
        let rem = temp % 10;
        sum = sum * 10 + rem;
        temp = parseInt(temp / 10);
    }
  
    if (sum == newtext) 
    {
        result.innerHTML = `${newtext} is a Palindrome Number`;
    }
    else 
    {
        result.innerHTML = `${newtext} is not a Palindrome Number`;
    }
}
