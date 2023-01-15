document.querySelector('#sass_skills').onclick = function () {
    // document.querySelector('#bootstrap_more_skills').show();

    // $('#bootstrap_more_skills').fadeIn('slow');

    if ($('#sass_more_skills').is(":visible")) {
        $('#sass_more_skills').fadeOut('slow');
    } else {
        $('#sass_more_skills').slideDown('slow');

    }
}


document.querySelector('#bootstrap_skills').onclick = function () {
    // document.querySelector('#bootstrap_more_skills').show();

    // $('#bootstrap_more_skills').fadeIn('slow');

    if ($('#bootstrap_more_skills').is(":visible")) {
        $('#bootstrap_more_skills').fadeOut('slow');
    } else {
        $('#bootstrap_more_skills').slideDown('slow');

    }
}

