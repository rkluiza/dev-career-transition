var btnc = document.querySelector('.listaDeArtigos-slider-item');
var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');

document.querySelector('#new0').style.display = 'block';

var btns = document.querySelectorAll('.listaDeArtigos-slider-item');

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    
    document.querySelectorAll('.listaDeArtigos-item').forEach(function(noticia) {
      noticia.style.display = 'none';

    });

    if (this.getAttribute('data-sliderItem') === '0') {
      new0.style.display = 'block';
      new1.style.display = 'none';
      new2.style.display = 'none';
    }

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})