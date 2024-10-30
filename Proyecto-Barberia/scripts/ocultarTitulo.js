let titulo = document.getElementById('titulo');
if (titulo.style.display === '') {
    titulo.style.display = 'block'; 
}

let check = document.getElementById('check').addEventListener('click', function() {
    titulo.style.display = (titulo.style.display === 'block') ? 'none' : 'block';
});
