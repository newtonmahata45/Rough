// const schedule = require("node-schedule");
console.log("Running...") 
function NotificationSchedule(scheduleDate, startDate, id) {
    const currentTime = new Date();
    if (currentTime >= scheduleDate) {
        let diffDays = parseInt((startDate - currentTime) / (1000 * 60 * 24), 10);
        if(diffDays == 0) return;
        else if(diffDays < 7 && diffDays >= 5) scheduleDate.setDate(startDate.getDate() - 5);
        else if(diffDays < 5 && diffDays >= 3) scheduleDate.setDate(startDate.getDate() - 3);
        else if(diffDays < 2 && diffDays >= 1) scheduleDate.setDate(startDate.getDate() - 1);
    }

    schedule.scheduleJob(scheduleDate, () => {
        //send mail(id,startDate);
        let nextSchedule = scheduleDate;
        nextSchedule.setDate(nextSchedule.getDate() + 2);
        if (nextSchedule > startDate) { nextSchedule = new Date(startDate.getTime() - (60 * 60 * 1000)) }

        NotificationSchedule(nextSchedule, startDate, id);
    })
}

// let startDate = new Date("2020-01-20T16:30:00.257Z");
// let nextSchedule = new Date(startDate.getTime()- (60 * 60 * 1000));
// console.log(startDate)
// console.log(nextSchedule)