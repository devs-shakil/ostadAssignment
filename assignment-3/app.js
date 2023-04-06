const DigitalClock = () =>{
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = 'AM';
    if(hh == 0){
        hh = 12;
    }if(hh > 12){
        hh = hh - 12;
        session = "PM"
    }
    hh = (hh < 10 ) ? "0" + hh : hh;
    mm = (mm < 10 ) ? "0" + mm : mm;
    ss = (ss < 10 ) ? "0" + ss : ss;
    let time  = `${hh} : ${mm} : ${ss} ${session}`;
    document.querySelector('#clock').innerHTML = time;
    let t = setTimeout(function(){DigitalClock()},1000);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let curWeekDay = days[date.getDay()];
    let curDate = date.getDate();
    let curMonth = months[date.getMonth()];
    let curYear = date.getFullYear();
    let dateOutput = `${curWeekDay}, ${curDate} ${curMonth} ${curYear}`;
    document.querySelector('#date').innerHTML = dateOutput;

}

DigitalClock()