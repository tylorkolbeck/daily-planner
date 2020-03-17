let currentHour


// Start the app
init()


/**
 * Sets global current hour, initalizes the 
 * time block UI styles and then starts an interval
 * to check the time every minute
 */
function init() {
    currentHour = moment().hour()
    updateTimeBlockUI()
    startTimeCheckInterval()
}

/**
 * check the time every minute to
 * determine if the time blocks needs to be updated
 */
function startTimeCheckInterval() {
    setInterval(() => {
        currentHour = moment().hour()
        updateTimeBlockUI()
        // updateBlockColors(currentHour)
    }, 60000)
}



/**
 * @param currentHour 
 * updates the time-block elements depending on whether or not 
 * the time is present, past or future time block
 */
function updateTimeBlockUI() {
    // Loop through the elements and determine which class needs to be applied
    $('.time-block').each(function(index, el) {

        // Remove currently applied classes
        $(el).removeClass('present past')
        let hourId = parseInt($(el).attr('id').split("-")[1])
        if (hourId === currentHour) $(el).addClass('present')
        if (hourId < currentHour) $(el).addClass('past')
    })
}




