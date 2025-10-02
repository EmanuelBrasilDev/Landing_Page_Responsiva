const form = document.getElementById('leadForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado pelo cadastro! Em breve entraremos em contato.');
    form.reset();
});
