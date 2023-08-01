let section = document.querySelector("section"),
icons = document.querySelector(".icons");
icons.oneclik =() =>{
    section.classList.toggle("dark")
}

setInterval(()=>{
    let date = new Date(),
    hour = date.getHours(),
    min =date.getMinutes(),
    sec = date.getSeconds();

    let d;
    d=hour >12? "AM":"PM";
    hour = hour >12?hour-12:hour;
    hour =hour==0?(hour=12):hour;

    hour =hour<10?"0"+hour:hour;
    min = min<10?"0"+min:min;
    sec = sec<10?"0"+sec:sec;

    document.querySelector(".hour-num").innerHTML =hour;
    document.querySelector(".min-num").innerHTML =min;
    document.querySelector(".sec-num").innerHTML= sec;
    document.querySelector(".am_pm").innerHTML =d;

},1000);