window.onload = () => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let gethours = document.querySelector("#hours");
  let getminutes = document.querySelector("#minutes");
  let getseconds = document.querySelector("#seconds");

  /* ---------PAUSE TME--------- */
  document.querySelector("#pausewatch").addEventListener("click", () => {
    if(clearInterval(myInterval)!==true){
        document.querySelector("#resetwatch").addEventListener("click", () => {
            clearInterval(myInterval);
            hours = 0;
            seconds = 0;
            minutes = 0;
            gethours.innerHTML = "00";
            getseconds.innerHTML = "00";
            getminutes.innerHTML = "00";
          });
    }
  });
  /* -------------- */

  /* ---------START TME--------- */
  document.querySelector("#startwatch").addEventListener("click", () => {
    myInterval = setInterval(starttime, 1000);
  });
  /* -------------- */

  /* ---------RESET TME--------- */
  document.querySelector("#resetwatch").addEventListener("click", () => {
    clearInterval(myInterval);
    hours = 0;
    seconds = 0;
    minutes = 0;
    gethours.innerHTML = "00";
    getseconds.innerHTML = "00";
    getminutes.innerHTML = "00";
  });
  /* -------------- */

  /* ---------TME MOVES FUNCTION--------- */
  function starttime() {
    seconds++;
    if (seconds <= 9) {
      getseconds.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
      getseconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      minutes++;
      getminutes.innerHTML = " 0 " + minutes;
      seconds = 0;
      getseconds.innerHTML = " 0 " + 0;
    }
    if (minutes > 59) {
      hours++;
      gethours.innerHTML = " 0 " + hours;
      minutes = 0;
      getminutes.innerHTML = " 0 " + 0;
    }
    if (hours > 23) {
      hours++;
      gethours.innerHTML = " 0 " + hours;
    }
  }
};
