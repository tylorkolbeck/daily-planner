import { updateLocalStorage, getLocalStorageData } from './localStorageLogic.mjs'

// Globals
let currentHour, currentDate

// Start the app
init()


/**
 * Update global current times, initalize the 
 * time block UI styles and then start an interval
 * to check the time every minute
 */
function init() {
    updateCurrentTimes()
    udpateBlockColors(currentHour)
    startTimeCheckInterval()
    updateHourBlocksWithData(currentDate)
    $('textarea').on('keyup', handleFieldInput)
}


function handleFieldInput(event) {
    let inputValue = event.target.value
    let timeBlockId = event.target.parentNode.id
    updateLocalStorage(currentDate, timeBlockId, inputValue)
}


/**
 * update the global currentHour and currentDate 
 * variables
 */
function updateCurrentTimes() {
    currentHour = parseInt(moment().hour())
    currentDate = moment().format("MMM Do YYYY")
    $('#currentDay').text(currentDate)
}


/**
 * check the time every minute to
 * determine if the time blocks needs to be updated
 */
function startTimeCheckInterval() {
    setInterval(() => {
        updateCurrentTimes()
        udpateBlockColors(currentHour)
        // updateBlockColors(currentHour)
    }, 60000)
}


/**
 * @param {string} currentDate - date formatted MMM Do YYYY
 * @param {num} currentHour
 * updates the time-block elements depending on whether or not 
 * the time is present, past or future time block
 */
function udpateBlockColors(currentHour) {
    // Loop through the elements and determine which class needs to be applied
    $('.time-block').each(function(i, el) {
        // Remove currently applied classes
        $(el).removeClass('present past')
        let hourId = parseInt($(el).attr('id').split("-")[1])
        if (hourId === currentHour) $(el).addClass('present')
        if (hourId < currentHour) $(el).addClass('past')
    })
}

function updateHourBlocksWithData(currentDate) {
    let todaysData = getLocalStorageData()
    
    if (todaysData) {
        let dataObj = todaysData[currentDate]

        for (let block in dataObj) {
            $(`#${block}`).find('textarea').val(dataObj[block])
        }
    }
}







