const container = document.querySelector('.container');
const thanks__card = document.querySelector('.thanks__card');
const submit = document.querySelector('.submit');
const ratings = document.querySelectorAll('.btn');
const num = document.getElementById('rating');
const voltar=document.getElementById('voltar');

submit.addEventListener("click", () => {
    container.style.display = "none";
    thanks__card.classList.remove("hidden");

})

ratings.forEach((rating) => {
        
    rating.addEventListener("click", () => {
       num.innerHTML=rating.innerHTML
    })

})


/* voltar buton set */
voltar.addEventListener("click", () => {
    container.style.display = "grid";
    thanks__card.classList.add("hidden");

})