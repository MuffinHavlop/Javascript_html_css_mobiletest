let signupStatus = false;

function registration(){
    signupStatus = !signupStatus;
    if (signupStatus == true){
        alert('You have successfully signing up the plan!');
    }
}
function newTask(){
    newestTask = document.getElementById('newtask').value;
    titleNewTodoList.textContent = 'New to do list!';
    newlist.textContent = `+ ${newestTask}`;
}
