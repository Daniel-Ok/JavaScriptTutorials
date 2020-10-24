const task3Element = document.getElementById('task-3');
function one(){
    alert('Hello There!');
    
}
function two(name){
    alert(name);
}

one();
two('Daniel');
task3Element.addEventListener('click', one);

function threeStrings(name1,name2,name3){
   alert(name1 + name2 + name3);
}

threeStrings('Kofi','Ama', 'Yaa');