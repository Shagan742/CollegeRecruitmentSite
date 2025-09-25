//basically compare against the average, make up some percent math whatever, average them, then tell result
//change out the random return stuff

// declare variables
const SATScore = document.getElementById("SATScore");
const ACTScore = document.getElementById("ACTScore");
const GPAValue= document.getElementById("GPAValue");
let SATChance=0;
let ACTChance=0;
let GPAChance=0;

//compare user score to SAT percentiles
function SAT() {

    //see if its good enough
    if(SATScore.value<=1510) {
    SATChance=25;

    } else if(SATScore.value>1510 && SATScore.value<1560) {
    SATChance=50;
} else if(SATScore.value>=1560) {
    SATChance=75;
    }
}


//compare user score to ACT percentiles
function ACT() {

    //see if its good enough
    if(ACTScore<=33) {
    ACTChance=25;
    } else if(ACTScore>33 && ACTScore<35) {
        ACTChance=50;
    } else if(ACTScore>=35) {
        ACTChance=75;
    }
}

function GPA(GPAType) {

    if(GPAType==='four') {
        //count it outta 4
        
        if(GPAValue<=3.7) {
            GPAChance=25;
        } else if(GPAValue>3.7 && GPAValue<4.0){
            GPAChance=50;
        } else if (GPAValue>=4.0) {
          GPAChance=75;
        }
    } else if (GPAType==='five') {
        //count it outta 5 but you must convert GPA to out of 4.0

        let GPAConvert=GPAValue.value*0.8;

        if(GPAConvert<=3.7) {
            GPAChance=25;
        } else if(GPAConvert>3.7 && GPAValue<4.0){
            GPAChance=50;
        } else if (GPAConvert>=4.0) {
          GPAChance=75;
        }
    } else if (GPAType==='six') {
        //count it outta 6 but you must convert GPA to out of 4.0

        
        if(GPAValue<=3.7) {
            GPAChance=25;
        } else if(GPAValue>3.7 && GPAValue<4.0){
            GPAChance=50;
        } else if (GPAValue>=4.0) {
          GPAChance=75;
        }
    } else if (GPAType==='fourPointSix') {
        //count it outta 4.6 but you must convert GPA to out of 4.0
        if(GPAValue<=3.7) {
            GPAChance=25;
        } else if(GPAValue>3.7 && GPAValue<4.0){
            GPAChance=50;
        } else if (GPAValue>=4.0) {
          GPAChance=75;
        }
    }
}


document.getElementById("SubmitBtn").addEventListener("click", function() {

    SAT();
    ACT();
    GPA();

    let totalChance=(SATChance+ACTChance+GPAChance)/3;

    //print out the user inputs too
    document.getElementById("input1").innerHTML=`SAT Score: ${SATScore.value}`;
    document.getElementById("input2").innerHTML=`ACT Score: ${ACTScore.value}`;
    document.getElementById("input3").innerHTML=`GPA: ${GPAValue.value}`;
    document.getElementById("input4").innerHTML=`Your Total Chances: ${totalChance}%`;

});

