var inputText = document.getElementById('userInput');
var button = document.getElementById('colorButton');
var close = document.getElementById('close');
var notification = document.getElementById('notification');
var loader = document.getElementById('loader');
var store = document.querySelector('.normal-store')
let storesCounter = document.getElementById("storesCounter");

console.log(storesCounter)
// console.log(store.classList)

function changeButtonColor() {
    // Перевірка, чи порожній введений текст
    if (inputText.value.trim() === '') {
        // console.log(inputText)
        button.classList.remove('button-input-active');
        button.classList.add('button-input-normal');
    } else {
        button.classList.remove('button-input-normal');
        button.classList.add('button-input-active');
        // console.log('0')
    }
    // console.log('1')
}  
function showNotification() {
    if ( button.classList.contains('button-input-active') ) {
        loader.classList.add('active')
        setTimeout(function() {
            loader.classList.remove('active');
        }, 200);
        setTimeout(function() {
            notification.classList.add('active'); // Додаємо клас "active"
        }, 300);
        setTimeout(function() {
            store.classList.remove('normal-store'); // Додаємо клас "active"
            store.classList.add('active-store')
            storesCounter.textContent = '3/50'
        }, 210);
        // console.log()
    }
};
function closeNotification() {
    notification.classList.remove('active'); // Видаляємо клас "active"
};

button.addEventListener('click', () => {
    showNotification(); // Показати повідомлення при натисканні на кнопку
    console.log(';')
});
close.addEventListener('click', () => {
    closeNotification(); // Закрити повідомлення при натисканні на кнопку "x"
    console.log(':')
}); 