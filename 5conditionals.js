// decision making

// if(condition){
//      this block will only execute when the condition is true
//      _____
// }

let userSubscription = "premium";

if(userSubscription == "unsubscribed") {
    console.log("Show pricing page");
} else if(userSubscription == "super") {
    console.log("Only hindi content");
} else if(userSubscription == "premium") {
    console.log("Show all content");
} 

console.log("end");

console.log("Starting...");
let isUserSignedIn = true; // this denotes that user is signed in to the app
let isPaidUser = true;

if (isUserSignedIn == true && isPaidUser == true) {
    // this particular block will only execute if the condition mentioned is true
    console.log("Show the dashboard");
} else {
    console.log("Show the homepage");
}
 
console.log("End...");

// nested if else
let isUserSubscribed = true;
let userHasLionsGatePlay = false;
let userHasSony = true;
if(isUserSubscribed)  {
    if(userHasLionsGatePlay) {
        console.log("Watch john wick");
    } else if(userHasSony) {
        console.log("Show the guardian")
    } else {
        console.log("Show Panchaayat");
    }
}