let userName = document.getElementById("txt-name");
let gradeOne = document.getElementById("grade-one");
let gradeTwo = document.getElementById("grade-two");
let gradeThree = document.getElementById("grade-three");
let responsePredictionNote = document.getElementById("response-prediction-third-note");
let response = document.getElementById("response");
const btnSend = document.getElementById("btn-send");

btnSend.addEventListener("click", calculateNote)

function calculateNote(){

    let studentName = userName.value;
    let noteOne = gradeOne.value;
    let notetwo = gradeTwo.value;
    let noteThree = gradeThree.value;

        if(noteOne <= 5 && noteOne >= 1 && notetwo <= 5 && notetwo >= 1 && noteThree <= 5 && noteThree >= 1){
            let finalNote = ((noteOne * 30)/100) + ((notetwo * 30)/100) + ((noteThree * 40)/100);
            if(finalNote >= 4.6){
             response.textContent = studentName + " su nota es: " + finalNote + " usted es un estudiante excelente";
            }else if(finalNote >= 3.5 && finalNote <=4.5){
                response.textContent = studentName + " su nota es: " + finalNote + " usted es un estudiante bueno";
            }else if(finalNote >= 2 && finalNote <= 3.4){
                response.textContent = studentName + " su nota es: " + finalNote + " usted perdio al materia y podra recuperar";
            }else if(finalNote < 2){
             response.textContent = studentName + " su nota es: " + finalNote + " usted perdio al materia y debera repetirla";
            }
        }
}

    