const getColor = ()=> {
    const randomNum = Math.floor( Math.random()*1677215);
    const randomCode = "#" + randomNum.toString(16);

    document.body.style.backgroundColor=randomCode;

    document.getElementById("color-code").innerText=randomCode;   
}

let btn = document.querySelector("#btn");

btn.addEventListener("click", getColor);

getColor();