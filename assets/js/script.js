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
        alert('Well done! Question 2 is correct!')
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
        alert('Bad news... question 3 is incorrect!')
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

    var correct_answer_6 = document.getElementById('6answer2');
    var question_six_answer_one = document.getElementById('6answer1');
    var question_six_answer_three= document.getElementById('6answer3');
    var question_six_answer_four = document.getElementById('6answer4');
    if (correct_answer_6.checked === true) {
        score++
        alert('And you got the sixth question right.. good job!')
    } else {
        alert('Hard luck the sixth question was incorrect!')
    }

    var correct_answer_7 = document.getElementById('7answer3');
    var question_seven_answer_one = document.getElementById('7answer1');
    var question_seven_answer_two= document.getElementById('7answer2');
    var question_seven_answer_four = document.getElementById('7answer4');
    if (correct_answer_7.checked === true) {
        score++
        alert('Question 7 is correct.. Absolute superstar!')
    } else {
        alert('Unlucky on question number 7, you picked the incorrect answer!')
    }

    var correct_answer_8 = document.getElementById('8answer1');
    var question_eight_answer_two = document.getElementById('8answer2');
    var question_eight_answer_three= document.getElementById('8answer3');
    var question_eight_answer_four = document.getElementById('8answer4');
    if (correct_answer_8.checked === true) {
        score++
        alert('Give yourself a pat on the back, you got question 8 right!')
    } else {
        alert('You picked the wrong answer for question 8!')
    }

    var correct_answer_9 = document.getElementById('9answer3');
    var question_nine_answer_one = document.getElementById('9answer1');
    var question_nine_answer_two= document.getElementById('9answer2');
    var question_nine_answer_four = document.getElementById('9answer4');
    if (correct_answer_9.checked === true) {
        score++
        alert('High five! You got question 9 right!')
    } else {
        alert('Sorry you did not get question 9 correct!')
    }

    var correct_answer_10 = document.getElementById('10answer4');
    var question_ten_answer_one = document.getElementById('10answer1');
    var question_ten_answer_two= document.getElementById('10answer2');
    var question_ten_answer_three = document.getElementById('10answer3');
    if (correct_answer_10.checked === true) {
        score++
        alert('You got the last question correct, I knew you could do it!')
    } else {
        alert('The last answer was incorrect!')
    }
    alert('Your total score is ' + score++ + ' / 10')
}