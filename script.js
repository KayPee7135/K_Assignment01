document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is connected and working!');
});

function generateResume() {
    const photo = document.getElementById('photo').files[0];
    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const citizenId = document.getElementById('citizenId').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const summary = document.getElementById('summary').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const education = document.getElementById('education').value.trim();
    const skills = document.getElementById('skills').value.trim();

    // Check if any required field is missing
    if (!photo) {
        alert('Please upload a photo.');
        return;
    }
    if (!name) {
        alert('Please enter your full name.');
        return;
    }
    if (!gender) {
        alert('Please enter your gender.');
        return;
    }
    if (!dob) {
        alert('Please enter your date of birth.');
        return;
    }
    if (!citizenId) {
        alert('Please enter your citizen ID.');
        return;
    }
    if (!age || isNaN(age)) {
        alert('Please enter a valid age (number).');
        return;
    }
    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!phone || isNaN(phone)) {
        alert('Please enter a valid phone number (number).');
        return;
    }
    if (!address) {
        alert('Please enter your address.');
        return;
    }
    if (!summary) {
        alert('Please enter a summary.');
        return;
    }
    if (!experience) {
        alert('Please enter your experience.');
        return;
    }
    if (!education) {
        alert('Please enter your education details.');
        return;
    }
    if (!skills) {
        alert('Please enter your skills.');
        return;
    }

    const reader = new FileReader();
    reader.onloadend = function () {
        localStorage.setItem('resumePhoto', reader.result);
        localStorage.setItem('resumeName', name);
        localStorage.setItem('resumeGender', gender);
        localStorage.setItem('resumeDob', dob);
        localStorage.setItem('resumeCitizenId', citizenId);
        localStorage.setItem('resumeAge', age);
        localStorage.setItem('resumeEmail', email);
        localStorage.setItem('resumePhone', phone);
        localStorage.setItem('resumeAddress', address);
        localStorage.setItem('resumeSummary', summary);
        localStorage.setItem('resumeExperience', experience);
        localStorage.setItem('resumeEducation', education);
        localStorage.setItem('resumeSkills', skills);

        window.location.href = 'resume.html';
    };
    reader.readAsDataURL(photo);
}

function loadResume() {
    document.getElementById('resumePhoto').src = localStorage.getItem('resumePhoto');
    document.getElementById('resumeName').textContent = localStorage.getItem('resumeName');
    document.getElementById('resumeGender').textContent = localStorage.getItem('resumeGender');
    document.getElementById('resumeDob').textContent = formatDate(localStorage.getItem('resumeDob'));
    document.getElementById('resumeCitizenId').textContent = localStorage.getItem('resumeCitizenId');
    document.getElementById('resumeAge').textContent = localStorage.getItem('resumeAge');
    document.getElementById('resumeEmail').textContent = localStorage.getItem('resumeEmail');
    document.getElementById('resumePhone').textContent = localStorage.getItem('resumePhone');
    document.getElementById('resumeAddress').textContent = localStorage.getItem('resumeAddress');

    // Convert line breaks into bullet points
    populateList('resumeSummary', localStorage.getItem('resumeSummary'));
    populateList('resumeExperience', localStorage.getItem('resumeExperience'));
    populateList('resumeEducation', localStorage.getItem('resumeEducation'));
    populateList('resumeSkills', localStorage.getItem('resumeSkills'));
}

function populateList(elementId, text) {
    const listElement = document.getElementById(elementId);
    const lines = text.split('\n'); // Split text by line breaks
    lines.forEach(line => {
        if (line.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = line.trim();
            listElement.appendChild(listItem);
        }
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateInteger(value) {
    return /^\d+$/.test(value);
}