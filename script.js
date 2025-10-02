
document.addEventListener('DOMContentLoaded', function () {
    const sapaButton = document.getElementById('sapaButton');
    const notif = document.getElementById('notif');

    sapaButton.addEventListener('click', function () {

        notif.textContent = 'Halo!';
        notif.classList.add('show');

        setTimeout(() => {
            notif.classList.remove('show');
        }, 2000);
    });
});
