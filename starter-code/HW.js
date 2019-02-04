const readline = require('readline-sync');

function planTrip(LOn, SOn, LOff, SOff){

    var OnStopsList = "";
    var OffStopsList = "";
    var OnIndex, OffIndex, USIndex = 0;

    if ( (LOn == "N" || LOn == "L" ||  LOn == "6") && (LOff == "N" || LOff == "L" ||  LOff == "6")){
        if (lines[LOn].includes(SOn)){
            OnIndex = lines[LOn].indexOf(SOn);
            USIndex = lines[LOn].indexOf("Union Square");
            var count = Math.abs(USIndex - OnIndex);

            for(let i=OnIndex ; i< lines[LOn].length; i++){
                OnStopsList += lines[LOn][i] ;
                if (i < lines[LOn].length-1){
                    OnStopsList += ", ";
                }
            }
            console.log(`You must travel through the following stops on the ${LOn} line: ${OnStopsList}.`);
            console.log("Change at Union Square.");
            if (lines[LOff].includes(SOff)){
                OffIndex = lines[LOff].indexOf(SOff);
                USIndex = lines[LOff].indexOf("Union Square");
                count += Math.abs(USIndex - OffIndex);

                for(let i= 0 ; i <= OffIndex; i++){
                    OffStopsList += lines[LOff][i] ;
                    if (i < OffIndex){
                        OffStopsList += ", ";
                    }
                }
        
                console.log(`Your journey continues through the following stops: ${OffStopsList}.`);
                console.log(`${count} stops in total.`);
            }else{
                console.log("Incorrect inputs");
            }

        }else{
            console.log("Incorrect inputs");
        }
    
    }else{
        console.log("Incorrect inputs");
    }
}

var lines = {
    "N" : ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" : ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var LOn = (readline.question("Which Line are you in?")).toUpperCase();
var SOn = readline.question("Which Stop are you in?");
var LOff = (readline.question("Which Line you want to go?")).toUpperCase();
var SOff = readline.question("Which Stop you want?");


planTrip(LOn, SOn, LOff, SOff);