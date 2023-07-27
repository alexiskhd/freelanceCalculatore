// creer une function et recuperer le form par l'id 
function calculGain(){
    
    checkInputs();

    let myForm = document.getElementById("formCalculGain")
// transformer le form en objet FormData afin d'utiliser les methode associer (get en particulier)
    let formObj = new FormData(myForm);

    let tauxHoraire = formObj.get('TH');
    let tauxJournalierMoyen = formObj.get('TJM');
    let extras = formObj.get('extras');

    let qtetauxHoraire = formObj.get('qteTH');
    let qtetauxJournalierMoyen = formObj.get('qteTJM');
    let qteextras = formObj.get('qteextras');

    let charges = formObj.get('charges');
    
    let gainHeure = tauxHoraire * qtetauxHoraire;
    let gainJour =  tauxJournalierMoyen * qtetauxJournalierMoyen;
    let gainExtras = extras * qteextras;

    let totalBrut = gainHeure + gainJour + gainExtras;
    let ChargesDeduire = totalBrut * (charges / 100);
    let totalNet = totalBrut - ChargesDeduire;

    document.getElementById("resultatBrut").innerText = totalBrut.toFixed(2)+' €';
    document.getElementById("resultatCharges").innerText = ChargesDeduire.toFixed(2)+' €';
    document.getElementById("resultatNet").innerText = totalNet.toFixed(2)+' €';
}
function checkInputs(){

    let mesInputs = document.querySelectorAll('input');
    mesInputs.forEach(monInput => {
        if (monInput.value > 0) {
            
        }
        else {
            monInput.value = 0;
        }
    });
}
    
function saveFormInCookies(FormData){}

let btn = document.getElementById("buttonValidate");
btn.addEventListener('click', calculGain);

