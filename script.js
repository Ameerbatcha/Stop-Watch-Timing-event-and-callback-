window.onload = function () {

    //Declaring the count interval as 0 initially
    var secondcount = 00;
    var minutecount = 00;
    var minuteholder = document.getElementById("minutes");
    var secondholder = document.getElementById("seconds");
    var interval;



    started = function () {
        clearInterval(interval);
        interval = setInterval(stopwatch, 1000);
    }

    stop = function () {
        clearInterval(interval);

    }


    reset = function () {

        clearInterval(interval);
         secondcount = 0;
         minutecount = 0;
        minuteholder.innerHTML = `00`;
        secondholder.innerHTML = `00`;
    }


    //Action which performs stopwatch
    function stopwatch() {
        secondcount++;

        if (secondcount < 10) {
            secondholder.innerHTML = "0" + secondcount;
        }

        else if (secondcount >= 10 && secondcount < 60) {
            secondholder.innerHTML = secondcount;
        }

        else if (secondcount >= 60 && minutecount < 9) {
            minutecount++;
            secondcount = 0;
            minuteholder.innerHTML = `0` + minutecount;
        }
        else if (secondcount >= 60 && minutecount >= 9 && minutecount < 60) {
            minutecount++;
            minuteholder.innerHTML = minutecount;
            secondcount = 0;
        }
        else if (minutecount == 60) {
            minutecount = 0;
            secondcount = 0;

        }
    }
}