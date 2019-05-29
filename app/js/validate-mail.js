    function getNewsletter() {

    const form = document.querySelector('.newsletter--content-form');

    form.addEventListener('submit', validateMail);

    function saveToDatabase(mail) {
        console.log("Saved to database");
    }

    function validateMail() {

        event.preventDefault();

        let inputField = document.querySelector('.form-email');
        const mailValue = inputField.value;
        const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

        let isProper = reg.test(mailValue);

        if (isProper) {
            let trimMailValue = mailValue.trim();
            saveToDatabase(trimMailValue);

        } else {
            alert('Your e-mail address is incorrect.');
        }

        form.reset();
    }
}

getNewsletter();