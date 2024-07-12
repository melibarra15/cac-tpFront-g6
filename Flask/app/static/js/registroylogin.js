
document.addEventListener('DOMContentLoaded', function() {
    var alerts = document.querySelectorAll('.alerta');
    alerts.forEach(function(alert) {
        setTimeout(function() {
            alert.classList.add('oculto');
        }, 3000); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var closeButtons = document.querySelectorAll('.cerrar');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var alert = this.closest('.alerta');
            alert.style.display = 'none';
        });
    });
});