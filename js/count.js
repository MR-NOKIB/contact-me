const numberField = document.getElementById('count');
const number = numberField.innerText;
let count = parseInt(number);

const numberCount = () => {
    count = count + 1;
    dispalyCountedNumber(count);
    saveCountedNumberToLocalStorage(count);
    return count;
}

function dispalyCountedNumber(count){
    numberField.innerText = count;
}

const getStoredCount = () =>{
    let count = '';
    const countedNumber = localStorage.getItem('count');
    if(countedNumber){
        count = parseInt(JSON.parse(countedNumber));
    }
    else{
        return parseInt(count);
    }
}
const saveCountedNumberToLocalStorage = (countedNumber) =>{
    getStoredCount();
    count = countedNumber;
    localStorage.setItem('count', count);
}

const dispalyCountedNumberToLocalStorage = () => {
    const count = localStorage.getItem('count');
    console.log(count);
    dispalyCountedNumber(count);
}

dispalyCountedNumberToLocalStorage();