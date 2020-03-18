export function updateLocalStorage(currentDate, timeBlockId, inputValue) {
    // get old stored data to merge with the new
    // console.log('>>>', currentDate)
    
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

export function getLocalStorageData() {
    let storedData = localStorage.getItem('tk-calander')

    if (storedData) {
        storedData = JSON.parse(storedData)
    }

    return storedData
}