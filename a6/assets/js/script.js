$("#continueButton").click(() => {
    $('html, body')
            .animate({
                scrollTop: $("#section1").offset().top-40}, 'slow', 'swing', function() {});
})
