document.getElementById('login-btn').addEventListener('click', function () {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.classList('hidden');
});

document.getElementById('show-register').addEventListener('click',
    function (event) {
        event.preventDefault();
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('register-form').classList.remove('hidden');
    });


document.getElementById('show-login').addEventListener('click',
    function (event) {
        event.preventDefault();
        document.getElementById('register-form').classList.add('hidden');
        document.getElementById('login-form').classList.add('hidden');
})