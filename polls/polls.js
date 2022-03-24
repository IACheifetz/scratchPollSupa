
const currentPollContainerEl = document.querySelector('.current-poll-container');
const publishButton = document.querySelector('#publish-poll');
const pastPollsEl = document.querySelector('.past-polls-list');
const formEl = document.querySelector('form');
const currentQuestionEl = document.querySelector('.current-question-text');
const currentOption1El = document.querySelector('.option-1-text');
const currentOption2El = document.querySelector('.option-2-text');
const option1VoteAddButton = document.querySelector('.option-1-add-vote');
const option1VoteSubtractButton = document.querySelector('.option-1-subtract-vote');
const option2VoteAddButton = document.querySelector('.option-2-add-vote');
const option2VoteSubtractButton = document.querySelector('.option-2-subtract-vote');

let currentPollQuestion = '';
let currentOption1 = '';
let currentOption2 = '';
let currentVote1 = '';
let currentVote2 = '';

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    currentPollQuestion = data.get('question');
    currentOption1 = data.get('option-1');
    currentOption2 = data.get('option-2');

    displayCurrentPoll();

    formEl.reset();

});

function displayCurrentPoll() {
    currentQuestionEl.textContent = currentPollQuestion;
    currentOption1El.textContent = currentOption1;
    currentOption2El.textContent = currentOption2;
}

option1VoteAddButton.addEventListener('click', () => {
    currentVote1++;
    currentOption1El.textContent = `${currentOption1} (${currentVote1})`;
});

option1VoteSubtractButton.addEventListener('click', () => {
    currentVote1--;
    currentOption1El.textContent = `${currentOption1} (${currentVote1})`;
});

option2VoteAddButton.addEventListener('click', () => {
    currentVote2++;
    currentOption2El.textContent = `${currentOption2} (${currentVote2})`;
});

option2VoteSubtractButton.addEventListener('click', () => {
    currentVote2--;
    currentOption2El.textContent = `${currentOption2} (${currentVote2})`;
});