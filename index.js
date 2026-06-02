const mlaBtn = document.querySelector('#mla-btn');
const mlaFeedback = document.querySelector('#mla-feedback');
let counter = 0;

mlaBtn.addEventListener('click', () => {
    counter++;
    console.log('MULAI GRATIS button clicked!');
    console.log(`Button clicked ${counter} times.`);
    mlaFeedback.classList.remove('hidden');
    mlaFeedback.textContent = 'BWAAAAAA'

        if (counter == 1) {
            mlaFeedback.textContent = 'BWA BWA BWAAAA'
            }
        if (counter == 2) {
            mlaFeedback.textContent = 'MULAI GRATIS AJA NIH'
            }
        if (counter > 2) {
            mlaBtn.classList.add('disabled');
            mlaFeedback.textContent = 'STOP CLICKING ME!!!!'
            }
        })