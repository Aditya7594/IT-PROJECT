function showDetails(movieId) {
    document.getElementById('movie-details').style.display = 'flex';
    var details = document.querySelectorAll('.details');
    details.forEach(function(detail) {
        detail.style.display = 'none';
    });
    document.getElementById(movieId).style.display = 'block';
}

function hideDetails() {
    document.getElementById('movie-details').style.display = 'none';
}
