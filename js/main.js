let canvas = window.document.querySelector('canvas');
let context = canvas.getContext('2d');
let dataStore = [
    {
        "value": 178.78 ,
        "data": "Apr 04" ,
    },
    {
        "value": 248.78 ,
        "data": "Apr 05" ,
    },
    {
        "value": 98.78 ,
        "data": "Apr 06" ,
    },
    {
        "value": 352.78 ,
        "data": "Apr 07" ,
    },
    {
        "value": 874.78 ,
        "data": "Apr 08" ,
    },
    {
        "value": 1293.78 ,
        "data": "Apr 09" ,
    },
];
const create = (xData,yData) => {
    let chart = new Chart();
};
let xData = [ ];
let yData = [ ];
for(let i = 0 ; i < dataStore.length ; i++ ) {
    xData.push(dataStore[i].data)
    yData.push(dataStore[i].value)
}
create(xData,yData)


// console.log(canvas);