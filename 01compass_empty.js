//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }

        if(compassHeading > 315 || compassHeading < 45) {
        text_area.textContent = "tis north, a lamp";
        }


        if(compassHeading >= 45 && compassHeading < 135) {
        text_area.textContent = "east, a balcony \r south";
        }

        if(compassHeading >= 135 && compassHeading < 225) {
        text_area.textContent = "south, nothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnMEMEMEMEMEMEMEMthingnothiMEMEMEMEMEMEMEMngnothingnMEMEMEMEMEMEMEMthingnothiMEMEMEMEMEMEMEMgnothingnoMEMEMEMEMEMEMEMhingnothinMEMEMEMEMEMEMEMnothingnotMEMEMEMEMEMEMEMhingnothinMEMEMEMEMEMEMEMnothingnotMEMEMEMEMEMEMEMingnothingMEMEMEMEMEMEMEMothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothingnothing";
        }

        if(compassHeading >= 225 && compassHeading < 315) {
        text_area.textContent = "west, a roasted duck on a contrete skin";
        }
//"&& is and" "||" is or        
 
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


