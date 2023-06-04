
function activateModal(){
    document.getElementById("modal").showModal();
}
function deactivateModal(){
    document.getElementById("modal").close();
}
setInterval(showTime, 1000);
        function showTime() 
        {
            let time = new Date();
            //Zeit
            let hour = time.getHours();
            //let hour = 10;      //09 Uhr
            let min = time.getMinutes();
            //let min = 15;       //Min: 46
            let day = time.getDate();
            //let day = 17;
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            currentTime = hour +":"+ min;
            document.getElementById("time").innerHTML = currentTime;
            
            if (day == 32){
                //Block 1
                if ((hour == 8 && min <= 59) || (hour == 9 && min <= 45)){
                    document.getElementById("block1").classList.add("active"); 
                }
                else{                    
                    document.getElementById("block1").classList.add("finish");
                        //Pause 1
                    if ((hour == 9 && min <= 59) || (hour == 10 && min <= 14)){
                        document.getElementById("pause1").classList.add("active");
                    }
                    else{                   
                        document.getElementById("pause1").classList.add("finish");
                        //Block 2
                        if ((hour == 10 || hour == 11 && min <= 59) || (hour == 12 && min <= 14)){
                            document.getElementById("block2").classList.add("active");
                        }
                        else{
                            document.getElementById("block2").classList.add("finish"); 
                            //Pause 2
                            if (hour == 12 && min >= 15 && min <= 44){
                                document.getElementById("pause2").classList.add("active");
                            }
                            else{
                                document.getElementById("pause2").classList.add("finish"); 
                                //Block 3
                                if ((hour == 12 && min <= 59) || (hour == 13 && min <= 25)){
                                    document.getElementById("block3").classList.add("active");
                                }
                                else{
                                    document.getElementById("block3").classList.add("finish"); 
                                    //Block 3
                                    if (hour == 13 && min >= 45){
                                        document.getElementById("block4").classList.add("active");
                                    }
                                    else{
                                        if(hour >= 14){
                                            document.getElementById("block4").classList.add("finish");
                                        }
                                    }
                                }
                            }
                        }
                    }                  
                }
            }
        }
showTime();

function showkarte(){
    document.getElementById("karte").style.display = "block";
    document.getElementById("btn").style.filter = "none";
}
function hidekarte(){
    document.getElementById("karte").style.display = "none";
    document.getElementById("btn").style.filter = "drop-shadow(#bbb 10px 10px 10px)";
}