let canvas = window.document.querySelector('canvas');
let context = canvas.getContext('2d');
let revenue = document.getElementById('revenue');
let sales = document.getElementById('sales');
let dataTime = document.getElementById('dataTime');
let mainData = {
    start: 'Apr 12',
    end: 'May 11',
    avg:38.99,
};

// Данные для графика
let dataStore = [
    { "value": 0, "data": "Apr 12" },
    { "value": 0, "data": "Apr 13" },
    { "value": 0, "data": "Apr 14" },
    { "value": 0, "data": "Apr 15" },
    { "value": 0, "data": "Apr 16" },
    { "value": 0, "data": "Apr 17" },
    { "value": 0, "data": "Apr 18" },
    { "value": 0, "data": "Apr 19" },
    { "value": 0, "data": "Apr 20" },
    { "value": 0, "data": "Apr 21" },
    { "value": 0, "data": "Apr 22" },
    { "value": 0, "data": "Apr 23" },
    { "value": 0, "data": "Apr 24" },
    { "value": 0, "data": "Apr 25" },
    { "value": 0, "data": "Apr 26" },
    { "value": 0, "data": "Apr 27" },
    { "value": 0, "data": "Apr 28" },
    { "value": 0, "data": "Apr 29" },
    { "value": 0, "data": "Apr 30" },
    { "value": 0, "data": "Apr 01" },
    { "value": 0, "data": "Apr 02" },
    { "value": 0, "data": "Apr 03" },
    { "value": 0, "data": "Apr 04" },
    { "value": 0, "data": "Apr 05" },
    { "value": 0, "data": "Apr 07" },
    { "value": 0, "data": "Apr 08" },
    { "value": 0, "data": "Apr 09" },
    { "value": 0, "data": "Apr 10" },
    { "value": 0, "data": "Apr 11" },
];
dataTime.textContent = `${mainData.start} - ${mainData.end}`
// Извлечение данных для оси X и Y
let xData = [];
var yData = [];
dataStore.forEach(data => {
    xData.push(data.data);
    yData.push(data.value);
});

let a = yData.reduce((sum, num) => sum + num, 0);
revenue.textContent = `$ ${a}` ;
sales.textContent = `${Math.round( a / mainData.avg)}`
console.log(revenue.textContent)

// Функция для создания графика
const createChart = (xData, yData) => {
    // Функция для форматирования чисел
    const formatNumber = (value) => {
        if (value >= 1000000000) {
            return (value / 1000000000).toFixed(1) + 'b';
        } else if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + 'm';
        } else if (value >= 1000) {
            return (value / 1000).toFixed(1) + 'k';
        } else {
            return value.toString();
        }
    };

    const filterData = (dataStore, startDay, endDay) => {
        const startIndex = dataStore.findIndex(data => data.data === startDay);
        const endIndex = dataStore.findIndex(data => data.data === endDay);
    
        if (startIndex === -1 || endIndex === -1) {
            return []; // Якщо дати не знайдено в dataStore, повертаємо пустий масив
        } else {
            return dataStore.slice(startIndex, endIndex + 1);
        }
    };
    
    // Використання функції для фільтрації даних
    const filteredData = filterData(dataStore, mainData.start, mainData.end);
    console.log(filteredData);

    let dataSet = {
        labels: xData,
        datasets: [{
            data: yData,
            pointStyle: false
        }]
    };

    let config = {
        type: 'line',
        data: dataSet,
        options: {
            scales: {
                x: {
                    grid: {
                        color: '#fff'
                    },
                    ticks: {
                        maxRotation: 0, // Максимальне обертання підписів на осі X
                        maxTicksLimit: 6
                    },
                },
                y: {
                    beginAtZero: true, // Починати від нуля
                    suggestedMin: 0, // Мінімальне значення на вертикальній осі
                    // Функція для форматування чисел
                    callback: function (value) {
                        console.log('s')
                    },
                },
            },
            plugins: {
                legend: {
                    display: false
                },
            },
        },
    };

    // Создание нового графика
    new Chart(context, config);
};

// Создание графика
createChart(xData, yData);