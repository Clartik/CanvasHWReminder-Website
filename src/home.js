alwaysExpandCardsCheckbox = document.getElementById('always-expand-cards-checkbox');
alwaysExpandCardsBeforeImg = document.getElementById('always-expand-cards-before-img');
alwaysExpandCardsAfterImg = document.getElementById('always-expand-cards-after-img');

alwaysExpandCardsCheckbox.addEventListener('click', async (event) => {
    if (alwaysExpandCardsCheckbox.checked) {
        alwaysExpandCardsBeforeImg.classList.remove('active');
        alwaysExpandCardsAfterImg.classList.add('active');

    } else {
        alwaysExpandCardsBeforeImg.classList.add('active');
        alwaysExpandCardsAfterImg.classList.remove('active');
    }
})

showExactDueDatesCheckbox = document.getElementById('show-exact-due-dates-checkbox');
showExactDueDatesBeforeImg = document.getElementById('show-exact-due-dates-before-img');
showExactDueDatesAfterImg = document.getElementById('show-exact-due-dates-after-img');

showExactDueDatesCheckbox.addEventListener('click', async (event) => {
    if (showExactDueDatesCheckbox.checked) {
        showExactDueDatesBeforeImg.classList.remove('active');
        showExactDueDatesAfterImg.classList.add('active');

    } else {
        showExactDueDatesBeforeImg.classList.add('active');
        showExactDueDatesAfterImg.classList.remove('active');
    }
})

dontRemindNoSubmissionsCheckbox = document.getElementById('dont-remind-no-submissions-checkbox');
dontRemindNoSubmissionsBeforeImg = document.getElementById('dont-remind-no-submissions-before-img');
dontRemindNoSubmissionsAfterImg = document.getElementById('dont-remind-no-submissions-after-img');

dontRemindNoSubmissionsCheckbox.addEventListener('click', async (event) => {
    if (dontRemindNoSubmissionsCheckbox.checked) {
        dontRemindNoSubmissionsBeforeImg.classList.remove('active');
        dontRemindNoSubmissionsAfterImg.classList.add('active');

    } else {
        dontRemindNoSubmissionsBeforeImg.classList.add('active');
        dontRemindNoSubmissionsAfterImg.classList.remove('active');
    }
})