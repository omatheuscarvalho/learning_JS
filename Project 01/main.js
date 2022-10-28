let count = 0;
let counter = document.querySelector('.counter');
let addBtn = document.querySelector('#add-btn');
let saveBtn = document.querySelector('#save-btn');
let entries = document.querySelector('#entries');
let decreasseBtn = document.querySelector('#decreasse-btn');

addBtn.addEventListener('click', function(e){
    count++;
    counter.innerHTML = count;
})
decreasseBtn.addEventListener('click', function(e){
    if(count > 0){
        count--;
        counter.innerHTML = count;}
})
saveBtn.addEventListener('click', function(e){
    entries.innerHTML += `${count} - `
    count = 0;
    counter.innerHTML = count;
})

function save(){
    console.log(count);
}
