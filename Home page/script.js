// Timmer JS
var countDownDate = new Date( "Aug 12,2024 00:00:00" ).getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance<0)
    {
        clearInterval(x);
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;
    }

},1000)
//Menu Bar
    $('#menu-btn').click(function(){
        $('nav .navagiation ul').addClass('active')
    })
    $('#menu-close').click(function(){
        $('nav .navagiation ul').removeClass('active')
    })

//Redirection
function redirectToLocationPage() {
    // Redirect to the Google Maps location page
    window.location.href = 'https://www.google.com/maps/place/Birla+Institute+of+Technology+-+Mesra/@23.412305,85.439901,15z/data=!4m2!3m1!1s0x0:0x66180c1cf3c5e704?sa=X&ved=2ahUKEwjhgvLzh8aEAxXtn2MGHVjKCvMQ_BJ6BAhnEAA';
}
function redirectToEmailPage() {
    // Redirect to the email page
    window.location.href = 'mailto:admissions@bitmesra.ac.in';
}

function redirectToFacebookPage() {
    // Redirect to the Facebook page
    window.location.href = 'https://www.facebook.com/BITMesraRanchi/';
}

function redirectToYoutubePage() {
    // Redirect to the YouTube page
    window.location.href = 'https://www.youtube.com/@birlainstituteoftechnology8069';
}

function redirectToTwitterPage() {
    // Redirect to the Twitter page
    window.location.href = 'https://twitter.com/BITMesra_Ranchi';
}
