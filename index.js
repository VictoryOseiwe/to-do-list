function addTask(){
    //get the task input
    var taskInput = document.querySelector(".txt");
    var taskValue = taskInput.value;

    // check if input is not empty

    if(taskValue !== ""){
        var li = document.createElement("li");   //creating one more list
        li.appendChild(document.createTextNode(taskValue));

        //adding it to task list
    document.querySelector(".taskList").appendChild(li);
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    li.appendChild(checkBox);
    

 

//clear input field

taskInput.value = "";
    

    }
}