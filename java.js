document.getElementById('loginform').addEventListener('submit', validateform);

function validateform(e) {
    e.preventDefault();
    clearErrors();
    let isvalid = true;

    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        contact: document.getElementById('contact').value.trim(),
        foodType: document.getElementById('food-type').value,
        gender: document.querySelector('input[name="gender"]:checked'),
        password: document.getElementById('password').value
    };
    if (formData.name.length < 3) {
        showError('name',
            'Name must be aleast3 characters');
        isvalid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
        showError('name', 'Name can only contain letters and spaces');
        isvalid = false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showError('email', 'Enter a valid email like you@example.com');
        isvalid = false;
    }
    const phoneRegex = /^(\+256|0)[0-9]{8,9}$/;
    if (!phoneRegex.test(formData.contact.replace(/\s/g, ))) {
        showError('contact', 'Use format +256 772 123 456 or 0772123456');
        isvalid = false;
    }
    if (formData.password.length < 4) {
        showError('password', 'password must be atlest 4 characters');
        isvalid = false;
    } else if (formData.password.length > 8) {
        showError('password', 'password  cannot exceed 8 characters');
        isvalid = false;
    }
    if (!formData.gender) {
        showError('gender', 'please select gender');
        isvalid = false;
    }
    if (isvalid) {
        alert('Thank you! Form is ready to submit.');
        console.log('form Data:', formData);
        document.getElementById('loginform').submit();
    }
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId) || document.querySelector('input[name="${fieldId}"]');
    const errorElement = field.closest('.form-group').querySelector('.error');
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    if (field) field.style.border = '1px solid red';
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.textContent = "");
    document.querySelectorAll('input,select').forEach(el => {
        el.style.border = '1px solid #ccc'
    });

}