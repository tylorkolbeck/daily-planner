

let currentHour = 12 // FOR TESTING
// let currentHour = moment().hour()

init()

function init() {
    updateBlockColors(currentHour)
    startTimeCheckInterval()
}

// setInterval(() => currentHour++, 1000) // For testing running through time

/**
 * check the time every minute to
 * determine if the time blocks need to be updated
 */
function startTimeCheckInterval() {
    setInterval(() => {
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



