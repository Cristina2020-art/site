document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Nume: ${name}\nEmail: ${email}\nMesaj: ${message}\n\nMesajul a fost trimis cu succes!`);
});
