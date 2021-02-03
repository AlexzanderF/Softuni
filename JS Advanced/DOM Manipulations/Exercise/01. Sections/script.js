function create(words) {
   const content = document.getElementById('content');
   for (let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', (e) => {
         e.target.firstElementChild.style.display = 'block';
         console.log(e.target.firstElementChild.style.display);
      });

      content.appendChild(div);
   }
}