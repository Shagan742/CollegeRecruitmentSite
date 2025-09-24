// declare variables

let SATScore = document.getElementById("SATScore");
let ACTScore = document.getElementById("ACTScore");
let rankType= document.getElementById("rankType");
let classRank=document.getElementById("classRank");
let GPAValue=document.getElementById("GPAValue").value;
let GPAType=document.getElementById("GPAType");
let SubmitBtn=document.getElementById("SubmitBtn");


function SATScore() {
    //get user input
    let SATInput=SATScore.value;

    //see if its good enough
    if(SATInput<1540) {
        return false;
    } else if(SATInput>=1540) {
        return true;
    }
}

function ACTScore() {
    //get user input
    let ACTInput=ACTScore.value;

    //see if its good enough
    if(ACTInput<34) {
        return false;
    } else if(ACTInput>=34) {
        return true;
    }
}

 function neither() {
            document.getElementsByClassName("form").classList.add('d-none');
        }

function typeOfRank(rankType) {
    if(rankType==='Decile') {
        let x=classRank.value;
        if(x>=3) {
            return false;
        } else if (x<3) {
            return true;
        }
    } else if (rankType==='Neither') {
        //dont count it but idk howta do that
        neither();
    }
}

function GPA(GPAType) {
    if(GPAType==='four') {
        //count it outta 4
        
        if(GPAValue<3.8) {
            return false;
        } else if (GPAValue>=3.8) {
            return true;
        }
    } else if (GPAType==='five') {
        //count it outta 5

        if(GPAValue<4.8) {
            return false;
        } else if (GPAValue>=4.8) {
            return true;
        }
    } else if (GPAType==='six') {
        //count it outta 6
        if(GPAValue<5.8) {
            return false;
        } else if (GPAValue>=5.8) {
            return true;
        }
    } else if (GPAType==='fourPointSix') {
        //count it outta 4.6
        if(GPAValue<4.4) {
            return false;
        } else if (GPAValue>=4.4) {
            return true;
        }
    }
}

SubmitBtn.addEventListener(function() {
    SATScore();
    ACTScore();
    typeOfRank(rankType);
    GPA(GPAType);
});