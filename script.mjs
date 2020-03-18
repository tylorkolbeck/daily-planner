import { updateLocalStorage, getLocalStorageData } from './localStorageLogic.mjs'

// Globals
let currentHour
let currentDate = moment().format("MMM Do YYYY")
let currentDayOffset = 0

// Start the app
init()


/**
 * Update global current times, initalize the 
 * time block UI styles and then start an interval
 * to check the time every minute
 */
function init() {
    updateCurrentHour()

    // if (!currentDate) {
    //     setDateToToday()
    // }

    udpateBlockColors(currentHour)

    startTimeCheckInterval()

    updateHourBlocksWithData(currentDate)

    updateDateUI()

    setUpDaySelectionHandlers()
    $('textarea').on('keyup', handleFieldInput)

}


function handleFieldInput(event) {
    let inputValue = event.target.value
    let timeBlockId = event.target.parentNode.id
    // let dayToUse = $('#currentDay').text() 
    updateLocalStorage(currentDate, timeBlockId, inputValue)
    updateHourBlocksWithData(currentDate)
}


/**
 * update the global currentHour and currentDate 
 * variables
 */
function updateCurrentHour(currentDate) {
    currentHour = parseInt(moment().hour())
}


function updateDateUI() {
    $('#currentDay').text(currentDate)
}


/**
 * check the time every minute to
 * determine if the time blocks needs to be updated
 */
function startTimeCheckInterval() {
    setInterval(() => {
        udpateBlockColors(currentHour)
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


/**
 * @param {string} currentDate 
 * sets the string data of each time block depending on what day
 * it is
 */
function updateHourBlocksWithData(currentDate) {
    // clear all the blocks first
    $('.time-block').each(function(i, el) {
        console.log('>>>', $(el))
        $(el).find('textarea').val('')
    })

    let todaysData = getLocalStorageData()
    if (todaysData) {
        let dataObj = todaysData[currentDate]

        for (let block in dataObj) {
            $(`#${block}`).find('textarea').val(dataObj[block])
        }
    } 
}


/**
 * addevent listeners to the day selection buttons
 */
function setUpDaySelectionHandlers() {
    $('#minus-day-btn').on('click', updateDateOffset)
    $('#plus-day-btn').on('click', updateDateOffset)
}


/**
 * 
 * @param event
 * update the global page offset as well as 
 * the global date 
 */
function updateDateOffset(event) {
    if (event.target.id === 'minus-day-btn') {
        currentDayOffset++
    } else {
        currentDayOffset--
    }

    currentDate = moment().subtract(currentDayOffset, 'days').format('MMM Do YYYY')
    updateHourBlocksWithData(currentDate)
    updateDateUI()
}







