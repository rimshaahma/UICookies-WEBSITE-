function openPage() {
    // Redirect to your desired page
    window.location.href = 'Get-them.html'; 
}

// Ad
document.getElementById('threeDots').addEventListener('click', function() {
    document.querySelector('.ad-image').style.display = 'none';
    document.getElementById('adInfo').style.display = 'block';
});

document.getElementById('whyThisAdButton').addEventListener('click', function() {
    document.getElementById('feedbackButtons').style.display = 'block';
});

document.getElementById('stopAdButton').addEventListener('click', function() {
    document.getElementById('adContainer').style.display = 'none';
});
// CATEGORIES
document.querySelectorAll(.'category-btn')


document.getElementById('navbar-toggle').addEventListener('click', function() {
    var menu = document.getElementById('navbar-menu');
    if (menu.style.display === 'block' || menu.style.display === '') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
