/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const createEmployeeRecord = (array) => {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = (array) => {
    return array.map((array) => createEmployeeRecord(array))
}

function createTimeInEvent (stamp) {
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(stamp.split(" ")[1]),
        date: stamp.split(" ")[0],
    }
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent (stamp) {
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(stamp.split(" ")[1]),
        date: stamp.split(" ")[0],
    }
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(date) {
    const clockIn = this.timeInEvents.find((row) => row.date === date).hour
    const clockOut = this.timeOutEvents.find((row) => row.date === date).hour
    return clockOut/100 - clockIn/100
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const allWagesFor = function () {
    //console.log(empArr[0].timeInEvents)
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    
    /*
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    */

    const payable = eligibleDates.reduce((memo, d)=>{
        return memo + wagesEarnedOnDate.call(this, d)
    }, 0)
    
    return payable
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find((empObj) => empObj.firstName == firstName)
}

function calculatePayroll(empArr){
    return empArr.reduce((acc,cur) => acc + allWagesFor.call(cur),0)
}
