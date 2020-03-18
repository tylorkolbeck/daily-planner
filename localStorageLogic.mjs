
/**
 * 
 * @param {string} currentDate 
 * @param {string} timeBlockId 
 * @param {string} inputValue 
 * @return {null}
 * updates local storage with the passed in value 
 */
export function updateLocalStorage(currentDate, timeBlockId, inputValue) {
    let storedData = getLocalStorageData()

    if (storedData) {
        storedData = {
            ...storedData,
            [currentDate]: {
                ...storedData[currentDate],
                [timeBlockId]: inputValue
            }
        }
    } else {
        storedData = {
            [currentDate]: {
                [timeBlockId]: inputValue
            }
        }
    }

    localStorage.setItem('tk-calander', JSON.stringify(storedData))
}

/**
 * Gets the data stored in local storage
 * @return {string|false}
 */
export function getLocalStorageData() {
    let storedData = localStorage.getItem('tk-calander')

    if (storedData) {
        storedData = JSON.parse(storedData)
        return storedData

    } else {
        return false
    }

}