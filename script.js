// Show the image when the correct code is entered
document.getElementById('submitButton').addEventListener('click', function () {
    const secretCode = 'Open Letter'; // Replace with your desired code
    const userInput = document.getElementById('codeInput').value;

    if (userInput === secretCode) {
        const imageContainer = document.getElementById('imageContainer');
        const surpriseImage = document.getElementById('surpriseImage');

        // Set the image source
        surpriseImage.src = "Winter Blessings.png"; // Adjust the path
        surpriseImage.alt = 'Your Christmas Surprise!';

        // Show the container
        imageContainer.classList.remove('hidden');
    } else {
        alert('Incorrect code! Please try again.');
    }
});
