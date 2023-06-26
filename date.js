//JSHINT VERSION:6

exports.getDate = function () {
    var today = new Date()

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    var boom = today.toLocaleDateString("en-US", options)
    return boom
}

exports.getWeekDay = function () {
    var today = new Date()

    var options = {
        weekday: "long",
    }

    var weekday = today.toLocaleDateString("en-US", options)
    return weekday
}