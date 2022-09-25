let countEl = document.getElementById("count-ele")
let previous = document.getElementById("entries")
let count = 0
function increment(){
    count+=1
    countEl.textContent=count
}
function save(){
    let  countStr = count + " - "
    previous.textContent += countStr
    countEl.textContent=0
    count=0
}