//basically compare against the average, make up some percent math whatever, average them, then tell result
//change out the random return stuff

// declare variables
const SATScore = document.getElementById("SATScore");
const ACTScore = document.getElementById("ACTScore");
const GPAValue = document.getElementById("GPAValue");
const GPAType=document.getElementById("GPAType");
let SATChance = 0;
let ACTChance = 0;
let GPAChance = 0;

//compare user score to SAT percentiles
function SAT() {

    //see if its good enough
    if (SATScore.value <= 1510) {
        SATChance = 25;
    } else if (SATScore.value > 1510 && SATScore.value < 1560) {
        SATChance = 50;
    } else if (SATScore.value >= 1560) {
        SATChance = 75;
    }
}


//compare user score to ACT percentiles
function ACT() {

    //see if its good enough
    if(ACTScore.value<20) {
        ACTChance=3;
    } else if(ACTScore.value>=20 && ACTScore.value<30) {
        ACTChance=10;
    } else if (ACTScore.value === 33) {
        ACTChance = 25;
    } else if (ACTScore.value > 33 && ACTScore.value < 35) {
        ACTChance = 50;
    } else if (ACTScore.value >= 35) {
        ACTChance = 75;
    }
}

function GPA(GPAType) {

    if (GPAType.value === 'four') {
        //count it outta 4
        if(GPAValue.value<=2.5) {
            GPAChance=4;
        } else if(GPAValue.value>2.5 && GPAValue.value<3.7) {
            GPAChance=15
        } else if (GPAValue.value === 3.7) {
            GPAChance = 25;
        } else if (GPAValue.value > 3.7 && GPAValue.value < 4.0) {
            GPAChance = 50;
        } else if (GPAValue.value >= 4.0) {
            GPAChance = 75;
        }
    } else if (GPAType.value === 'five') {
        //count it outta 5
    if(GPAValue.value<=3.5) {
            GPAChance=3;
        } else if(GPAValue.value>3.5 && GPAValue.value<4.7) {
            GPAChance=10; 
        } else if(GPAValue.value===4.7) {
            GPAChance=25;
        } else if (GPAValue.value > 4.7 && GPAValue.value < 5.0) {
            GPAChance = 50;
        } else if (GPAValue.value >= 5.0) {
            GPAChance = 75;
        }
    } else if (GPAType.value === 'six') {
        //count it outta 6
       if(GPAValue.value<=3.5) {
            GPAChance=2;
        } else if(GPAValue.value>4.5 && GPAValue.value<5.7) {
            GPAChance=15;
        } else if (GPAValue.value === 5.7) {
            GPAChance = 25;
        } else if (GPAValue.value > 5.7 && GPAValue.value < 6.0) {
            GPAChance = 50;
        } else if (GPAValue.value >= 6.0) {
            GPAChance = 75;
        }
    }
}


document.getElementById("SubmitBtn").addEventListener("click", function () {

    SAT();
    ACT();
    GPA(GPAType);

    let totalChance =0;

    if(!SATScore.value && ACTScore.value) {
            totalChance = (ACTChance + GPAChance)/2;
    } else if (SATScore.value && !ACTScore.value) {
            totalChance = (SATChance + GPAChance)/2;
    } else if(!SATScore.value && !ACTScore.value && GPAValue.value) {
        totalChance=GPAChance;
    } else if(!SATScore.value && !ACTScore.value && !GPAValue.value) {
        totalChance=0;
} else {
        totalChance=(SATChance+ACTChance+GPAChance)/3;
    }

    //print out the user inputs too
    document.getElementById("input1").innerHTML = `SAT Score: ${SATScore.value}`;
    document.getElementById("input2").innerHTML = `ACT Score: ${ACTScore.value}`;
    document.getElementById("input3").innerHTML = `GPA: ${GPAValue.value}`;
    document.getElementById("input4").innerHTML = `Your Total Chances: ${totalChance}%`;

});

