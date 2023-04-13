function displayData(n){
    outputscreen.value+=n
}
function AllClear(){
    outputscreen.value=""
}
function evalExprsn(){
    outputscreen.value=eval(outputscreen.value)
}
function backSpace(){
    s=outputscreen.value
    outputscreen.value=s.slice(0,-1)
}