let div= document.createElement('div');
let paragraphe= document.createElement('p');
paragraphe.textContent ="Ceci est un paragraphe";
div.appendChild(paragraphe);
document.body.appendChild(div);

paragraphe.textContent= "le texte a été modifié";

paragraphe.style.backgroundColor ="lightblue";
paragraphe.style.textAlign="center";
paragraphe.style.padding="10px";

div.addEventListener('click',function() {
    paragraphe.textContent="Un clic a été détecté";

});