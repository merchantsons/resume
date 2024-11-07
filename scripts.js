const photoUpload = document.getElementById('photoUpload');
const photoDiv = document.getElementById('photo');

// photoUpload.addEventListener('change', (event) => {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             photoDiv.style.backgroundImage = `url(${e.target.result})`;
//         }
//         reader.readAsDataURL(file);
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const photoUpload = document.getElementById('photoUpload');
//     const photoDiv = document.getElementById('photoDiv'); // Make sure this element exists

//     if (photoUpload) {
//         photoUpload.addEventListener('change', (event) => {
//             const file = event.target.files[0];
//             if (file) {
//                 const reader = new FileReader();
//                 reader.onload = function (e) {
//                     photoDiv.style.backgroundImage = `url(${e.target.result})`;
//                 };
//                 reader.readAsDataURL(file);
//             }
//         });
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const photoUpload = document.getElementById('photoUpload');
    const photoDiv = document.getElementById('photo');

    if (photoUpload) {
        photoUpload.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                console.log('Selected file:', file); // Debugging line

                const reader = new FileReader();
                reader.onload = function (e) {
                    photoDiv.style.backgroundImage = `url(${e.target.result})`;
                };
                reader.readAsDataURL(file);
            } else {
                console.log('No file selected.'); // Debugging line
            }
        });
    }
});




// Function to add new Education entry
function addEducation() {
    const educationList = document.getElementById('educationList');
    const newEntry = document.createElement('li');
    newEntry.innerHTML = `<textarea style="width: 60vmin; height: 4vmin;"></textarea>
                                          <button class="remove-education" onclick="removeEducation(this)">Remove</button>`;
    educationList.appendChild(newEntry);
}

// Function to remove Education entry
function removeEducation(button) {
    const entry = button.parentElement;
    entry.remove();
}

// Function to add new Experience entry
function addExperience() {
    const experienceList = document.getElementById('experienceList');
    const newEntry = document.createElement('li');
    newEntry.innerHTML = `<textarea style="width: 60vmin; height: 4vmin;"></textarea>
                                          <button class="remove-experience" onclick="removeExperience(this)">Remove</button>`;
    experienceList.appendChild(newEntry);
}

// Function to remove Experience entry
function removeExperience(button) {
    const entry = button.parentElement;
    entry.remove();
}

// Function to add new Project entry
function addProject() {
    const projectList = document.getElementById('projectList');
    const newEntry = document.createElement('li');
    newEntry.innerHTML = `<textarea style="width: 60vmin; height: 4vmin;"></textarea>
                                          <button class="remove-project" onclick="removeProject(this)">Remove</button>`;
    projectList.appendChild(newEntry);
}

// Function to remove Project entry
function removeProject(button) {
    const entry = button.parentElement;
    entry.remove();
}


// Function to add new Tech Skills entry
function addTskills() {
    const tskillsList = document.getElementById('tskillsList');
    const newEntry = document.createElement('li');
    newEntry.innerHTML = `<textarea style="width: 60vmin; height: 4vmin;"></textarea>
                                          <button class="remove-project" onclick="removeTskills(this)">Remove</button>`;
    tskillsList.appendChild(newEntry);
}

// Function to remove Tech Skills entry
function removeTskills(button) {
    const entry = button.parentElement;
    entry.remove();
}

// Function to add new Publication entry
function addPublication() {
    const publicationList = document.getElementById('publicationList');
    const newEntry = document.createElement('li');
    newEntry.innerHTML = `<textarea style="width: 60vmin; height: 4vmin;"></textarea>
                                          <button class="remove-publication" onclick="removePublication(this)">Remove</button>`;
    publicationList.appendChild(newEntry);
}

// Function to remove Publication entry
function removePublication(button) {
    const entry = button.parentElement;
    entry.remove();
}

// Function to add new Achievement entry
function addAchievement() {
    const achievementList = document.getElementById('achievementList');
    const newEntry = document.createElement('li');
    newEntry.innerHTML = `<textarea style="width: 60vmin; height: 4vmin;"></textarea>
                                          <button class="remove-achievement" onclick="removeAchievement(this)">Remove</button>`;
    achievementList.appendChild(newEntry);
}

// Function to remove Achievement entry
function removeAchievement(button) {
    const entry = button.parentElement;
    entry.remove();
}


// Function to add new Key courses taken entry
function addKeycourses() {
    const KeycoursesList = document.getElementById('KeycoursesList');
    const newEntry = document.createElement('li');
    newEntry.innerHTML = `<textarea style="width: 60vmin; height: 4vmin;"></textarea>
                                          <button class="remove-achievement" onclick="removeKeycourses(this)">Remove</button>`;
    KeycoursesList.appendChild(newEntry);
}

// Function to remove Key courses taken entry
function removeKeycourses(button) {
    const entry = button.parentElement;
    entry.remove();
}

// Function to open links based on button clicked
document.addEventListener('DOMContentLoaded', function () {
    function openLink(buttonId) {
        let url;
        switch (buttonId) {
            case 'homeBtn':
                url = 'index.html'; // Replace with your URL
                break;
            case 'staticBtn':
                url = 'static.html'; // Replace with your URL
                break;
            case 'dynamicBtn':
                url = 'dynamic.html'; // Replace with your URL
                break;            
            default:
                return;
        }
        window.open(url, '_self'); // Open link in the same tab
    }

    // Adding click event listeners to each button
    document.getElementById('indexBtn').addEventListener('click', function () {
        openLink('homeBtn');
    });
    document.getElementById('staticBtn').addEventListener('click', function () {
        openLink('staticBtn');
    });
    document.getElementById('dynamicBtn').addEventListener('click', function () {
        openLink('dynamicBtn');
    });
});







function makeStatic() {
    // Hide the element with ID 'bott'
    const bottElement = document.getElementById('bott');
    if (bottElement) {
        bottElement.style.display = 'none';
    }

    // Replace signature input field with its value as static HTML
    const signatureInput = document.getElementById('sign');
    if (signatureInput) {
        const signatureText = document.createElement('span');
        signatureText.innerHTML = signatureInput.value;  // Use innerHTML to preserve HTML
        signatureText.style.fontFamily = 'Great Vibes';
        signatureText.style.fontSize = '4vmin';
        signatureText.style.paddingLeft = '1vmin';
        signatureText.style.paddingTop = '15vmin';
        signatureText.style.color = '#b7b5b5';
        // signatureText.style.color = '#0f15ff'; //BLUE COLOR INK
        signatureText.style.transform = 'rotate(-10deg)'; // Corrected 'rotate' to 'transform'
        signatureText.style.marginLeft = '-1vmin';
        signatureText.style.marginBottom = '1.5vmin';
        signatureText.style.display = 'block';
        signatureInput.parentNode.replaceChild(signatureText, signatureInput);
    }

    // Replace other text inputs and textareas with their values
    const inputs = document.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(input => {
        const span = document.createElement('span');
        span.innerHTML = input.value;  // Use innerHTML to preserve HTML content
        input.parentNode.replaceChild(span, input);
    });

    // Handle the selected image
    const photoUpload = document.getElementById('photoUpload');
    const existingImage = document.getElementById('uploadedImage');

    if (photoUpload && photoUpload.files.length > 0) {
        if (!existingImage) {
            const img = document.createElement('img');
            img.id = 'uploadedImage';
            img.src = URL.createObjectURL(photoUpload.files[0]);
            img.style.maxWidth = '100%';
            img.style.display = 'block';
            img.style.marginTop = '-20vmin';
            photoUpload.parentNode.replaceChild(img, photoUpload);
        }
    }

    if (existingImage && photoUpload.files.length > 0) {
        existingImage.src = URL.createObjectURL(photoUpload.files[0]);
    }

    // Hide all buttons initially
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.display = 'none';
    });

    // Disable inputs and replace them with static text
    const allInputs = document.querySelectorAll('input, textarea');
    allInputs.forEach(input => {
        input.disabled = true;  // Disable all inputs
        const span = document.createElement('span');
        span.innerHTML = input.value;  // Replace input with HTML content
        input.parentNode.replaceChild(span, input);  // Replace with span containing HTML
    });

    // Create button container
    let buttonContainer = document.getElementById('buttonContainer');
    if (!buttonContainer) {
        buttonContainer = document.createElement('div');
        buttonContainer.id = 'buttonContainer';       
        buttonContainer.style.textAlign = 'center';
        buttonContainer.style.marginTop = '-10vmin'; // Adjust as needed        
        buttonContainer.style.marginLeft = '61vmin'; // Adjust as needed        
        document.body.appendChild(buttonContainer);
    }

    // Add unique URL button
    let uniqueUrlButton = document.getElementById('uniqueUrlBtn');
    if (!uniqueUrlButton) {
        uniqueUrlButton = document.createElement('button');
        uniqueUrlButton.id = 'uniqueUrlBtn';
        uniqueUrlButton.textContent = 'Generate Unique URL';
        uniqueUrlButton.style.marginTop = '5vmin'; // Adjust as needed
        uniqueUrlButton.style.marginLeft = '-12vmin'; // Adjust as needed
        uniqueUrlButton.style.fontSize = '1.2vmin'; // Set the font size
        uniqueUrlButton.style.marginRight = '.25vmin'; // Adjust as needed
        uniqueUrlButton.style.background = '#014646';
        uniqueUrlButton.onclick = function() {
            // Logic to generate a unique URL
            const formData = {}; // Collect form data here
            allInputs.forEach(input => {
                formData[input.id] = input.value; // Collect each input value by ID
            });

            // Generate a random number
            const randomNum = Math.floor(Math.random() * 100000); // Random number between 0 and 99999

            // For demonstration, we'll create a simple unique URL with the random number
            const uniqueUrl = `                                                                                                             https://your-resume.com/uniqueurl?${randomNum}`;

            alert("Unique URL generated! It has been copied to your clipboard.");

            // Copy to clipboard
            navigator.clipboard.writeText(uniqueUrl).then(() => {
                // Show the unique URL at the bottom
                const urlDisplay = document.getElementById('urlDisplay');
                if (urlDisplay) {
                    urlDisplay.textContent = uniqueUrl;
                } else {
                    const newUrlDisplay = document.createElement('div');
                    newUrlDisplay.id = 'urlDisplay';   
                    newUrlDisplay.style.textAlign = 'center'; // Adjust as needed                 
                    newUrlDisplay.style.marginTop = '-5vmin'; // Adjust as needed                   
                    // newUrlDisplay.style.marginLeft = '90vmin'; // Adjust as needed                   
                    newUrlDisplay.style.fontSize = '1.8vmin';
                    newUrlDisplay.style.fontWeight = '800';
                    newUrlDisplay.style.color = '#014646';
                    newUrlDisplay.textContent = uniqueUrl;
                    document.body.appendChild(newUrlDisplay);
                }
            });
        };
        buttonContainer.appendChild(uniqueUrlButton);
    }

    // Add print button
    let printButton = document.getElementById('printBtn');
    if (!printButton) {
        printButton = document.createElement('button');
        printButton.id = 'printBtn';
        printButton.textContent = 'Print Or PDF';
        printButton.style.fontSize = '1.2vmin'; // Set the font size
        printButton.style.marginRight = '.25vmin'; // Set the font size
        printButton.style.background = '#014646';
        printButton.onclick = function() {
            // Disable all buttons when printing
            buttons.forEach(button => {
                button.disabled = true; // Disable buttons
            });

            // Trigger print dialog
            window.print();
        };
        buttonContainer.appendChild(printButton);
    }

    // Add close button
    let closeButton = document.getElementById('closeBtn');
    if (!closeButton) {
        closeButton = document.createElement('button');
        closeButton.id = 'closeBtn';
        closeButton.textContent = 'GO BACK TO EDIT';
        closeButton.style.fontSize = '1.2vmin'; // Set the font size
        closeButton.style.marginTop = '-50vmin'; // Adjust as needed
        closeButton.style.marginLeft = '0vmin'; // Adjust as needed  
        closeButton.style.background = '#014646';
        closeButton.onclick = function() {
            // Reload the page to return to the original state
            location.reload();
        };
        buttonContainer.appendChild(closeButton);
    }

    // Set the main background color
    document.body.style.backgroundColor = '#444740';

    // Add print styles
    const style = document.createElement('style');
    style.textContent = `
        @media print {
            body {
                background-color: #014646 !important;
                color: '#eee' !important;                
            }
            u, ul, input, textarea, h4, h6 {
                color: '#eee' !important;
                font-weight: bold !important;
            }
            div {
                color: '#eee' !important;
                font-weight: bold !important;
            }
            button {
                display: none !important;
            }
            @page {
                size: A4 portrait; /* Set page size to A4 */
                margin:0; /* Remove page margins */                
            }
            
            footer, header, .page-number {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}








function resetAll() {
    // Reset personal details
    document.getElementById('photoUpload').value = ''; // Clear photo upload
    document.getElementById('photo').style.backgroundImage = ''; // Clear photo preview
    const personalDetails = [
        "contact",
        "info",
        "sectionCurricular", // Update with the correct IDs of your personal details section
        "sectionlinks",
        "sectionCurricular",
        "sectionInterest",
        "sectionFooterMessage"
    ];

    personalDetails.forEach(section => {
        const inputs = document.querySelectorAll(`#${section} input[type="text"]`);
        inputs.forEach(input => input.value = '');
    });

    // Reset education, experience, publications, projects, technical skills, achievements, key courses
    const sections = [
        "educationList",
        "experienceList",
        "publicationList",
        "projectList",
        "tskillsList",
        "achievementList",
        "KeycoursesList"
    ];

    sections.forEach(section => {
        const list = document.getElementById(section);
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    });

    // Optionally, add default entries if needed
    addEducation();
    addExperience();
    addPublication();
    addProject();
    addTskills();
    addAchievement();
    addKeycourses();

    // Reset name and contact information
    document.getElementById('contentName').querySelector('input[type="text"]').value = 'Barack Hussein Obama';
    const contactInputs = document.querySelectorAll('#contact input[type="text"]');
    contactInputs.forEach(input => input.value = '');
}