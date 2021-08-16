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

    var correct_answer_3 = document.getElementById('3answer4');
    var question_three_answer_one = document.getElementById('3answer1');
    var question_three_answer_two= document.getElementById('3answer2');
    var question_three_answer_three = document.getElementById('3answer3');
    if (correct_answer_3.checked === true) {
        score++
        alert('Amazing work, question 3 is correct!')
    } else {
        alert('Bad news... question 3 is incorrect')
    }

    var correct_answer_4 = document.getElementById('4answer1');
    var question_four_answer_two = document.getElementById('4answer2');
    var question_four_answer_three= document.getElementById('4answer3');
    var question_four_answer_four = document.getElementById('4answer4');
    if (correct_answer_4.checked === true) {
        score++
        alert('Question 4 is correct!')
    } else {
        alert('Question 4 is incorrect!')
    }

    var correct_answer_5 = document.getElementById('5answer2');
    var question_five_answer_one = document.getElementById('5answer1');
    var question_five_answer_three= document.getElementById('5answer3');
    var question_five_answer_four = document.getElementById('5answer4');
    if (correct_answer_5.checked === true) {
        score++
        alert('Question 5 is correct.. you smashed it!')
    } else {
        alert('Question 5 is incorrect.. better luck next time!')
    }
}