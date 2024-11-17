document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('authForm');
    const registrationForm = document.getElementById('registrationForm');

    if (authForm) {
        authForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            document.getElementById('usernameError').textContent = '';
            document.getElementById('passwordError').textContent = '';

            let valid = true;

            if (username.trim() === '') {
                document.getElementById('usernameError').textContent = 'მომხმარებლის სახელი აუცილებელია';
                valid = false;
            }

            if (password.trim() === '') {
                document.getElementById('passwordError').textContent = 'პაროლი აუცილებელია';
                valid = false;
            }

            if (valid) {
                console.log('ავტორიზაცია წარმატებით');
            }
        });
    }

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('reg-username').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const termsChecked = document.getElementById('terms-checkbox').checked;

            document.getElementById('reg-usernameError').textContent = '';
            document.getElementById('reg-emailError').textContent = '';
            document.getElementById('reg-passwordError').textContent = '';
            document.getElementById('confirmPasswordError').textContent = '';
            document.getElementById('termsError').textContent = '';

            let valid = true;

            if (username.trim() === '') {
                document.getElementById('reg-usernameError').textContent = 'მომხმარებლის სახელი აუცილებელია';
                valid = false;
            } else if (username.length < 6) {
                document.getElementById('reg-usernameError').textContent = 'მომხმარებლის სახელი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს';
                valid = false;
            }

            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                document.getElementById('reg-emailError').textContent = 'არასწორი ელ.ფოსტა';
                valid = false;
            }

            if (password.trim() === '') {
                document.getElementById('reg-passwordError').textContent = 'პაროლი აუცილებელია';
                valid = false;
            }

            if (password !== confirmPassword) {
                document.getElementById('confirmPasswordError').textContent = 'პაროლები არ ემთხვევა';
                valid = false;
            }

            if (!termsChecked) {
                document.getElementById('termsError').textContent = 'თქვენ უნდა დაეთანხმოთ წესებსა და პირობებს';
                valid = false;
            }

            if (valid) {
                console.log('რეგისტრაცია წარმატებით');
            }
        });
    }
});
