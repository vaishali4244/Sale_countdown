setInterval((cdown) => {
    const countDate = new Date('November 09,2023 00:00:00').getTime();
    
    const now = new  Date();
    const gap = countDate -now;
    
    //set-up the time
    const second =1000;
    const minute = second*60;
    const hour = minute*60;
    const day =hour*24;
    
    
    //calculate the time gap
    const cday = Math.floor(gap / day);
    const chour= Math.floor((gap%day)/ hour);
    const cmin =Math.floor((gap%hour) / minute);
    const csec = Math.floor((gap %minute)/second);
    
    //Update the HTML
    document.querySelector('.day').innerText = cday;
    document.querySelector('.hour').innerText = chour;
    document.querySelector('.min').innerText = cmin;
    document.querySelector('.sec').innerText = csec;
    

    if (gap < 0) {
        clearInterval();
        document.getElementById("clock").innerHTML = "EXPIRED";
      }
}, 1000);