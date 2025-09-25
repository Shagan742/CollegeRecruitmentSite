//basically compare against the average, make up some percent math whatever, average them, then tell result
//change out the random return stuff

// declare variables
const SATScore = document.getElementById("SATScore");
const ACTScore = document.getElementById("ACTScore");
const GPAValue= document.getElementById("GPAValue");


function SAT(SATScore) {

    //see if its good enough
    if(SATScore<1540) {
    return 'SAT could use some improvement'
    } else if(SATScore>=1540) {
    //good    
    }
}



function ACT(ACTScore) {

    //see if its good enough
    if(ACTScore<34) {
    //bad
    } else if(ACTScore>=34) {
        //good
    }
}

function GPA(GPAType) {

    if(GPAType==='four') {
        //count it outta 4
        
        if(GPAValue<3.8) {
          //bad
        } else if (GPAValue>=3.8) {
          //good
        }
    } else if (GPAType==='five') {
        //count it outta 5

        if(GPAValue<4.8) {
           //bad
        } else if (GPAValue>=4.8) {
        //good
        }
    } else if (GPAType==='six') {
        //count it outta 6
        if(GPAValue<5.8) {
         //bad
        } else if (GPAValue>=5.8) {
        //good
        }
    } else if (GPAType==='fourPointSix') {
        //count it outta 4.6
        if(GPAValue<4.4) {
         //bad
        } else if (GPAValue>=4.4) {
         //good
        }
    }
}


document.getElementById("SubmitBtn").addEventListener("click", function() {

    SAT();
    ACT();
    GPA();

    //print out the user inputs too
    document.getElementById("input1").innerHTML=`SAT Score: ${SATScore.value}`;
    document.getElementById("input2").innerHTML=`ACT Score: ${ACTScore.value}`;
    document.getElementById("input3").innerHTML=`GPA: ${GPAValue.value}`;

});

