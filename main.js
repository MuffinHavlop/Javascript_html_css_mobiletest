let signupStatus = false;

function registration(){
    signupStatus = !signupStatus;
    if (signupStatus == true){
        alert('You have successfully signing up the plan!');
    }
}
function newTask(){
    newestTask = document.getElementById('newtask').value;
    alert(`${newestTask} has been succesfully added!`)
}