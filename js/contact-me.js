const nameField = document.getElementById('name-field');
const emailField = document.getElementById('email-field');
const messageArea = document.getElementById('message-area');



const saveToLocalStorage = (key, value) =>{
    localStorage.setItem(key, value);
}


const deleteFromLoclaStorage = (key, value) => {
    localStorage.removeItem(key, value);
}



document.getElementById('send-name-btn').addEventListener('click', function(){
    const name = nameField.value;
    saveToLocalStorage('Name', name)
})
document.getElementById('send-email-btn').addEventListener('click', function(){
    const email = emailField.value;
    saveToLocalStorage('email', email);
    
})
document.getElementById('send-message-btn').addEventListener('click', function(){
    const message = messageArea.value;
    saveToLocalStorage('message', message)
})




document.getElementById('delete-name-btn').addEventListener('click', function(){
    const name = nameField.value;
    deleteFromLoclaStorage('Name', name)
    nameField.value = '';
})
document.getElementById('delete-email-btn').addEventListener('click', function(){
    const email = emailField.value;
    deleteFromLoclaStorage('email', email)
    emailField.value = '';
})
document.getElementById('delete-message-btn').addEventListener('click', function(){
    const message = messageArea.value;
    deleteFromLoclaStorage('message', message)
    messageArea.value = '';
})



const reset = () => {
    nameField.value = '';
    emailField.value = '';
    messageArea.value = '';
    localStorage.clear();
}


const saveAll = () => {
    localStorage.clear()
    let info = {};
    info['name'] = nameField.value;
    info['email'] = emailField.value;
    info['message'] = messageArea.value;
    
    const strinigifyInfo = JSON.stringify(info);

    saveToLocalStorage('info', strinigifyInfo);

    nameField.value = '';
    emailField.value = '';
    messageArea.value = '';
}
