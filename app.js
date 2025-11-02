function updateClock () {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leadding zero if < 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //Date
    let day = now.getDate();
    let month = now.getMonth() + 1; //month start at 0
    let year = now.getFullYear();

    //weekdays
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekdays = days[now.getDay()];

    //add leading zero for day month
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    // week = week < 10 ? "0" + week : week;
    // year = year < 2025 ? "0" + year : year;

    // show time
    document.getElementById("Clock").textContent = `${hours}: ${minutes}: ${seconds}`;

    // show date 
    document.getElementById("Date").textContent = `${day} / ${month} / ${year}`;

    //weeks
    document.getElementById("week").textContent = weekdays;
}

setInterval(updateClock, 1000);
updateClock();

