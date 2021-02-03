function loadRepos() {
   let url = 'https://api.github.com/repos/testnakov/Flappy-Nakov';
   const httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('loadend', function () {
      let data = this.responseText; 
      console.log();
      document.getElementById('res').textContent = data;
   });

   httpRequest.open('GET', url);
   httpRequest.send();
}