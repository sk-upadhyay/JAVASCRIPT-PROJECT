function postiveNegative(n){
    if(n>=0){
        console.log("Postive");
    }
    else{
        log("negative");
    }
}

function votingAge(n){
    if(n>=18){
        console.log("Cav vote");
    }
    else{
        console.log("Cant Vote");
    }
}

function largestThree(a,b,c){

       if(a>b){
        if(a>c){
            console.log("largest:",a);
        }
        else {
            console.log("largest:",c);
        }
       }
       else{
        if(b>c){
            console.log("largest:",b);
        }
        else{
            console.log("largest:",c);
        }
       }
}

function Dayname(n){

    switch(n){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("WednesDay");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default :
            console.log("there are 7 days in a week");
    }

}

function oddeven(a){
    console.log( a%2==0?"even":"odd");
}

function leapYear(a){
    console.log((a%4==0 && a%100==0)||a%400==0)?"Leap Year ":"Normal Year ";
}