/** Checks the answer and confirms if the answers are correct or incorrect */
function check () {
    var score = 0
    var correct_answer_1 = document.getElementById('1answer3');
    var question_one_answer_one = document.getElementById('1answer1');
    var question_one_answer_two = document.getElementById('1answer2');
    var question_one_answer_four = document.getElementById('1answer4');
    if (correct_answer_1.checked === true) {
        score++
        alert('You are a genius... you got the first question right!')
    } else {
        alert('Oh no... you got the first question wrong!')
    }

    var correct_answer_2 = document.getElementById('2answer2');
    var question_two_answer_one = document.getElementById('2answer1');
    var question_two_answer_three = document.getElementById('2answer3');
    var question_two_answer_four = document.getElementById('2answer4');
    if (correct_answer_2.checked === true) {
        score++
        alert('Well Done! Question 2 is Correct!')
    } else {
        alert('Unfortunately you did not get question 2 right!')
    }
}