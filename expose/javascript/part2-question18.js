/*function Time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(Time, 100);
*/
function print(){
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}

print();