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