const displayHangman = (penalty: number) => {
    const hangmanEl = document.querySelector('.hangman');
    if(hangmanEl){
        hangmanEl.innerHTML = "";
    }
    const imgEl = document.createElement('img');
    imgEl.src = `/img/00${penalty}.svg`;

    hangmanEl?.append(imgEl);
};

export default displayHangman;