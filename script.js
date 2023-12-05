
let totalseconds ;
let id =null;
function start() {
     totalseconds =Number (document.getElementById("hours").value) * 3600 + 
    Number (document.getElementById("minute").value) * 60 + 
     Number(document.getElementById("second").value); 

    if(totalseconds <= 0) {
        alert ("Please enter a valid time");
        return;
    }

    id = setInterval( updateTimer,1000);
};

function updateTimer (){
    if (totalseconds<= 0){
        clearInterval(id)
        document.getElementById("hours").value = "0";
        document.getElementById("minute") .value = "0";
        document.getElementById ("second"). value = "0";
        alert ("Please enter  time");
        return;
}
        let hours =Math.floor (totalseconds / 3600);
        let minutes = Math.floor((totalseconds % 3600)/ 60);
        let seconds = totalseconds % 60;
        
        document.getElementById("hours").value = hours < 10 ? "0" + hours : hours ;
        document.getElementById("minute") .value =  minutes < 10 ? "0" + minutes  : minutes;
        document.getElementById ("second"). value = seconds < 10 ? "0" + seconds  : seconds;
   
        totalseconds--     
}

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(id);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(id);
    document.getElementById("hours").value = "0";
    document.getElementById("minute") .value = "0";
    document.getElementById ("second"). value = "0";

}); 

