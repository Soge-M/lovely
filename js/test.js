const answers = [3,2,4,1];
const checkButtons = document.querySelectorAll('.popup-link_check');
console.log(checkButtons)


if (checkButtons.length > 0) {
    for (let index = 0; index < checkButtons.length; index++){
        const checkButton = checkButtons[index];
        console.log(checkButton)
        checkButton.addEventListener("click", function(e) {
            if (document.querySelector(`input[name="q${index+1}"]:checked`).value == answers[index]){
                const curentPopup = document.getElementById(`popup-answer_${index+1}`);
                popupOpen(curentPopup);
            } 
            e.preventDefault();
        });
    }
}

