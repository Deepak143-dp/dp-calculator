let currentDisplay = " ";
document.querySelector('#input').value = currentDisplay;

document.querySelector("#classButtonOne").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '1';
    document.querySelector('#input').value = currentDisplay;

});

document.querySelector("#classButtonTwo").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '2';
    document.querySelector('#input').value = currentDisplay;

});

document.querySelector("#classButtonThree").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '3';
    document.querySelector('#input').value = currentDisplay;

});

document.querySelector("#classButtonFour").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '4';
    document.querySelector('#input').value = currentDisplay;

});

document.querySelector("#classButtonFive").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '5';
    document.querySelector('#input').value = currentDisplay;

});

document.querySelector("#classButtonSix").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '6';
    document.querySelector('#input').value = currentDisplay;

});

document.querySelector("#classButtonSeven").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '7';
    document.querySelector('#input').value = currentDisplay;

});

document.querySelector("#classButtonEight").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '8';
    document.querySelector('#input').value = currentDisplay;

});

document.querySelector("#classButtonNine").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '9';
    document.querySelector('#input').value = currentDisplay;

});



document.querySelector("#classButtonZero").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '0';
    document.querySelector('#input').value = currentDisplay;

});


document.querySelector("#classButtonDot").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '.';
    document.querySelector('#input').value = currentDisplay;

});

document.querySelector("#classButtonDiv").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '/';
    document.querySelector('#input').value = currentDisplay;

});


document.querySelector("#classButtonMulti").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '*';
    document.querySelector('#input').value = currentDisplay;

});


document.querySelector("#classButtonAdd").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '+';
    document.querySelector('#input').value = currentDisplay;

});


document.querySelector("#classButtonSub").addEventListener("click",() =>{
    currentDisplay = currentDisplay + '-';
    document.querySelector('#input').value = currentDisplay;

});


document.querySelector("#classButtonClear").addEventListener("click",() =>{
    currentDisplay = " ";
    document.querySelector('#input').value = currentDisplay;

});




document.querySelector("#classButtonEqual").addEventListener("click",() =>{
    let result = eval(currentDisplay);
    currentDisplay = result ;
    document.querySelector('#input').value = currentDisplay;

});

















