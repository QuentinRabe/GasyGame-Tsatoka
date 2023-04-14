const onClickChoices =  (callback: Function) => {
    const node = document.querySelector('.choices');
    if(!node) {
        return;
    }
    node.addEventListener('click', ({ target }: { target: EventTarget | null })  => {
        if( !(target instanceof Element)) {
            return;
        }
        
        const letter: string | null = target.textContent;
        if(letter?.length != 1) {
            return;
        }
        callback(letter.toLocaleUpperCase());

    })

};

export default onClickChoices;