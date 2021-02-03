function solve() {
   const btn = document.getElementById('searchBtn');
   const tableCells = Array.from(document.querySelectorAll('tbody > tr > td'));
   let selected = [];

   btn.addEventListener('click', () => {
      const input = document.getElementById('searchField');
      let str = input.value;
      if (selected.length > 0) {
         selected.forEach(tr => {
            tr.classList.remove('select');
         });
         selected = [];
      }
      tableCells.forEach(cell => {

         if (cell.textContent.includes(str)) {
            cell.parentElement.classList.add('select');
            selected.push(cell.parentElement);
         }
      });
      input.value = null;
   });
}