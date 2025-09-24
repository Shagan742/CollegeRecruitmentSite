//basically compare against the average, make up some percent math whatever, average them, then tell result
//change out the random return stuff

// declare variables

let SATScore = document.getElementById("SATScore").value;
let ACTScore = document.getElementById("ACTScore").value;
let rankType= document.getElementById("rankType");
let classRank=document.getElementById("classRank");
let GPAValue=document.getElementById("GPAValue").value;
let GPAType=document.getElementById("GPAType");
let SubmitBtn=document.getElementById("SubmitBtn");
let points=0;

function SAT() {

    //see if its good enough
    if(SATScore<1540) {
        points;
    } else if(SATScore>=1540) {
        points++;
    }
}

function ACT() {

    //see if its good enough
    if(ACTScore<34) {
        points;
    } else if(ACTScore>=34) {
        points++;
    }
}

 function neither() {
            document.getElementsByClassName("form").classList.add('d-none');
        }

function typeOfRank(rankType) {
    if(rankType==='Decile') {
        let x=classRank.value;
        if(x>=3) {
            points
        } else if (x<3) {
            points++;
        }
    } else if (rankType==='Neither') {
        //dont count it but idk howta do that
        neither();
        points;
    }
}

function GPA(GPAType) {
    if(GPAType==='four') {
        //count it outta 4
        
        if(GPAValue<3.8) {
            points;
        } else if (GPAValue>=3.8) {
            points++;
        }
    } else if (GPAType==='five') {
        //count it outta 5

        if(GPAValue<4.8) {
            points;
        } else if (GPAValue>=4.8) {
             points++;
        }
    } else if (GPAType==='six') {
        //count it outta 6
        if(GPAValue<5.8) {
            points;
        } else if (GPAValue>=5.8) {
            points++;
        }
    } else if (GPAType==='fourPointSix') {
        //count it outta 4.6
        if(GPAValue<4.4) {
            points;
        } else if (GPAValue>=4.4) {
            points++;
        }
    }
}

SubmitBtn.addEventListener(function() {
    SAT();
    ACT();
    typeOfRank(rankType);
    GPA(GPAType);

});