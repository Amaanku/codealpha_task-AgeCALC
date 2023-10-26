document.getElementById('calculate').addEventListener('click', function() {
    const dobInput = document.getElementById('dob');
    const result = document.getElementById('result');

    const dob = new Date(dobInput.value);
    const today = new Date();

    if (dob > today) {
        result.textContent = 'Please select a date of birth that is not in the future.';
    } else {
        const years = today.getFullYear() - dob.getFullYear();
        const months = today.getMonth() - dob.getMonth();
        const days = today.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        const message = `You are ${years} years, ${months} months, and ${days} days old.`;

        if (years < 2) {
            result.textContent = message + " You're still a baby!";
        } else if (years >= 2 && years < 6) {
            result.textContent = message + " You're a toddler!";
        } else if (years >= 6 && years < 13) {
            result.textContent = message + " You're a preschooler!";
        } else if (years >= 13 && years < 20) {
            result.textContent = message + " Ohh, you are a teenager!";
        } else if (years >= 20 && years < 30) {
            result.textContent = message + " You're a young adult!";
        } else if (years >= 30 && years < 60) {
            result.textContent = message + " You're in your middle years!";
        } else if (years >= 60) {
            result.textContent = message + " You're a senior citizen!";
        } else {
            result.textContent = "please enter the valid date";
        }
    }
});
