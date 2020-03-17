let currentHour

init()

function init() {
    currentHour = moment().hour()
    updateBlockColors(currentHour)
    startTimeCheckInterval()
}

/**
 * check the time every minute to
 * determine if the time blocks needs to be updated
 */
function startTimeCheckInterval() {
    setInterval(() => {
        currentHour = moment().hour()
        updateBlockColors(currentHour)
    }, 1000)
}

/**
 * 
 * @param currentHour 
 * updates the time-block elements depending on whether or not 
 * the time is present, past or future time block
 */
function updateBlockColors(currentHour) {
    $('.time-block').removeClass('present past')
    $('.time-block').each(function() {
        let id = parseInt($(this).attr('id').split('-')[1])
        if (id === currentHour) $(this).addClass('present')
        if (id < currentHour) $(this).addClass('past')
    })
}



