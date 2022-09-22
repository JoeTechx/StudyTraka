window.onload = () =>{
    alert('Login and Register page is not ready yet so click the button on the nav bar to go straight to the dashboard')
}

const submitBtn = document.querySelectorAll('.submit-btn');

submitBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert(' This page is not ready');

    })
})

const texts = ["Studies, Class Date And The Period Your Exams Will Start..."]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.getElementById('auto_type').textContent = letter;
    if (letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 100)
}())


const types = ["study traka"]
let trCount = 0;
let trIndex = 0;
let trCurrentText = "";
let trLetter = "";

(function text(){
  
    if(trCount === types.length){
        trCount = 0;
    }
    trCurrentText = types[trCount];
    trLetter = trCurrentText.slice(0, ++trIndex);
    document.getElementById('auto').textContent = trLetter;
    if (trLetter.length === trCurrentText.length){
        trCount++;
        trIndex = 0;
    }
    setTimeout(text, 300)
}())