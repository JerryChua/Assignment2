let clock = () => {                                                                 //this is the clock that counts
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    if (hrs == 0) {
      hrs = 12;
    } else if (hrs >= 12) {
      hrs = hrs - 12;
      period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hrs}:${mins}:${secs} ${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
  };
  
  clock();
let date = () => {
    n =  new Date();                                                                //this gets the date
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
};
date();



$(document).ready(function () {                                                     //getting the psi
    $.ajax({
        type: "GET",
        dataType: 'json',
        contetType: "text/plain",
        url: "https://api.data.gov.sg/v1/environment/psi",
        headers: {},
        data: {
            "date": date()
        },
        success: function (data) {
            console.log("API status: " + data.api_info.status)
            var region = {west:data.items[0].readings.psi_twenty_four_hourly.west, 
                        north:data.items[0].readings.psi_twenty_four_hourly.north,
                        east:data.items[0].readings.psi_twenty_four_hourly.east,
                        south:data.items[0].readings.psi_twenty_four_hourly.south,
                        central:data.items[0].readings.psi_twenty_four_hourly.central}
            
            $("#west").html(region.west);
            $("#south").html(region.south);
            $("#east").html(region.east);
            $("#north").html(region.north);
            $("#central").html(region.central);             
        }
    });
});


function clicknorth() {
    document.getElementById("gonorth").innerHTML.id="north";
  }


function tod() {                                                                    //time of day for background change
    var time = new Date().getHours();
    if (time < 6) {
        window.location.replace("night.html");
    }
    else if (time < 10) {
        window.location.replace("index.html");
    }
    else if (time < 17) {
        window.location.replace("noon.html");
    }
    else if (time < 22) {
        window.location.replace("dusk.html");
    }
    else if (time > 22) {
        window.location.replace("night.html");
    }
  }
tod();