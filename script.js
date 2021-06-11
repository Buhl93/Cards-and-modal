    const cards = document.querySelectorAll('.card');
    const modal = document.querySelector('.modal');
    const backdrop = document.querySelector('#backdrop');

    // Make card image execute modalDisplay() when clicked
    cards.forEach(card => {
        card.querySelector(".cardImg").addEventListener('click', e => {
            modalDisplay(card);
        })
    })

    // Make backdrop execute modalHide() when clicked
    backdrop.addEventListener('click', e => {
        modalHide();
    })
    
    // Dynamically sets the content of modal to equal the content of the clicked card
    const modalDisplay = (card) => {
        const cardImg = card.querySelector("img").src;
        const cardHeader = card.querySelector("h2").innerHTML;
        const cardText = card.querySelector(".cardText").innerHTML;

        // Makes modal and backdrop visisble
        modal.style.display = 'block';
        backdrop.style.display = 'block';

        // Sets content to that of clicked card
        modal.querySelector("h2").innerHTML = cardHeader;
        modal.querySelector("p").innerHTML = cardText;
        modal.querySelector("img").src = cardImg;
    }

    // Hides modal and backdrop
    const modalHide = () => {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
    }