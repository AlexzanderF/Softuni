function growingWord() {
    const heading = document.querySelector('#exercise p');
    let colors = {
        blue: 'green',
        green: 'red',
        red: 'blue'
    };

    if (!heading.hasAttribute('style')) {
        heading.setAttribute('style', `color:blue; font-size:${2}px`);
    } else {
        let newSize = heading.style['font-size'].split('px')[0];
        newSize = Number(newSize) * 2;
        let currColor = heading.style['color'];
        let newColor = colors[currColor];
        heading.setAttribute('style', `color:${newColor}; font-size:${newSize}px`);
    }

}