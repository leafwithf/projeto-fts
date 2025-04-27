window.onload = function() {
    setTimeout(function() {
        document.querySelector('.loader-container').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loader-container').style.display = 'none';
            document.getElementById("content").style.display = 'block';
            document.getElementById("content").style.opacity = '1';
        }, 1000);
    }, 3500);
};
