// const url = 
// //取得資料 資料網址(位址)
// fetch('https://datacenter.taichung.gov.tw/Swagger/OpenData/44ff471a-8bda-429d-b5ba-29eace7b05ed?limit=1000')
//     .then(function(response){//對方要回應給你
//         console.log(response)
//         //回傳json格式資料 response.json()
//         return response.json();
//         //return response.text()
//     }).then(function(myJson){//接受資料
//         console.log(myJson);
//     });
let tw = document.querySelector('#tw')
let nt = document.querySelector('#nt')
let mt = document.querySelector('#mt')
let st = document.querySelector('#st')
let et = document.querySelector('#et')
let island = document.querySelector('#island')


const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-D074525B-C033-4B85-BE6A-3F1C6A162C52';
const cityAll = [
    ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'],
    ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣'],
    ['臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣'],
    ['臺南市', '高雄市', '屏東縣'],
    ['宜蘭縣', '花蓮縣', '臺東縣'],
    ['澎湖縣', '金門縣', '連江縣'],
];

let nowCityAll = cityAll[0];
let nowCity1 = cityAll[1];
let nowCity2 = cityAll[2];
let nowCity3 = cityAll[3];
let nowCity4 = cityAll[4];
let nowCity5 = cityAll[5];
let orgData = [];//放有用的城市資料
//取得資料 資料網址(位址)
//異步處理
fetch(url)
    .then(function (response) {//對方要回應給你
        console.log(response)
        //回傳json格式資料 response.json()
        return response.json();
        //return response.text()
    }).then(function (myJson) {//接受資料
        console.log(myJson);
        organizationData(myJson);
        arrange_cities();
        // console.log('處裡完了');
    });

function organizationData(myJson) {
    const locationAll = myJson.records.location;
    // console.log('123', locationAll);
    //[] array    {}  object
    //[{}, {}, {}]物件組成的陣列
    //{age : 10}  age : 鍵  /  10 : 鍵值
    locationAll.forEach(function (location, index) {
        const locationName = location.locationName;
        let loc_we0_ti0 = location.weatherElement[0].time[0];
        let startTime = loc_we0_ti0.startTime;
        let endTime = loc_we0_ti0.endTime;
        let wx = loc_we0_ti0.parameter.parameterName;
        let minT = location.weatherElement[2].time[0].parameter.parameterName;
        let maxT = location.weatherElement[4].time[0].parameter.parameterName;
        let ci = location.weatherElement[3].time[0].parameter.parameterName;
        let pop = location.weatherElement[1].time[0].parameter.parameterName;

        orgData[locationName] = {
            'wxCondition': wx,
            'startTime': startTime,
            'endtime': endTime,
            'minT': minT,
            'maxT': maxT,
            'ci': ci,
            'pop': pop,
        };
    });
    console.log(orgData);
    // console.log('處理資料');
}

function arrange_cities() {
    const cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = '';
    nowCityAll.forEach(function (city, index) {
        console.log(city, orgData);
        let cityData = orgData[city];
        cardRegion.innerHTML += `<div class="card">
                <br>
                <div class="city-name">${city}</div>
                <br>
                <div class="weather">${cityData.wxCondition}</div>
                <br>
                <div class="start">${cityData.startTime}</div>
                <div>|</div>
                <div class="end">${cityData.endtime}</div>
                <br>
                <div class="min">${cityData.minT}°C</div>
                <br>
                <div class="max">${cityData.maxT}°C</div>
                <br>
                <div class="ci">${cityData.ci}</div>
                <br>
                <div class="pop">降雨機率 : ${cityData.pop}%</div>
                </div>`

    })

}

function arrange_cities1() {
    const cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = '';
    nowCity1.forEach(function (city, index) {
        console.log(city, orgData);
        let cityData = orgData[city];
        cardRegion.innerHTML += `<div class="card">
                <br>
                <div class="city-name">${city}</div>
                <br>
                <div class="weather">${cityData.wxCondition}</div>
                <br>
                <div class="start">${cityData.startTime}</div>
                <div>|</div>
                <div class="end">${cityData.endtime}</div>
                <br>
                <div class="min">${cityData.minT}°C</div>
                <br>
                <div class="max">${cityData.maxT}°C</div>
                <br>
                <div class="ci">${cityData.ci}</div>
                <br>
                <div class="pop">降雨機率 : ${cityData.pop}%</div>
                </div>`
    })

}

function arrange_cities2() {
    const cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = '';
    nowCity2.forEach(function (city, index) {
        console.log(city, orgData);
        let cityData = orgData[city];
        cardRegion.innerHTML += `<div class="card">
                <br>
                <div class="city-name">${city}</div>
                <br>
                <div class="weather">${cityData.wxCondition}</div>
                <br>
                <div class="start">${cityData.startTime}</div>
                <div>|</div>
                <div class="end">${cityData.endtime}</div>
                <br>
                <div class="min">${cityData.minT}°C</div>
                <br>
                <div class="max">${cityData.maxT}°C</div>
                <br>
                <div class="ci">${cityData.ci}</div>
                <br>
                <div class="pop">降雨機率 : ${cityData.pop}%</div>
                </div>`

    })

}

function arrange_cities3() {
    const cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = '';
    nowCity3.forEach(function (city, index) {
        console.log(city, orgData);
        let cityData = orgData[city];
        cardRegion.innerHTML += `<div class="card">
                <br>
                <div class="city-name">${city}</div>
                <br>
                <div class="weather">${cityData.wxCondition}</div>
                <br>
                <div class="start">${cityData.startTime}</div>
                <div>|</div>
                <div class="end">${cityData.endtime}</div>
                <br>
                <div class="min">${cityData.minT}°C</div>
                <br>
                <div class="max">${cityData.maxT}°C</div>
                <br>
                <div class="ci">${cityData.ci}</div>
                <br>
                <div class="pop">降雨機率 : ${cityData.pop}%</div>
                </div>`

    })

}

function arrange_cities4() {
    const cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = '';
    nowCity4.forEach(function (city, index) {
        console.log(city, orgData);
        let cityData = orgData[city];
        cardRegion.innerHTML += `<div class="card">
                <br>
                <div class="city-name">${city}</div>
                <br>
                <div class="weather">${cityData.wxCondition}</div>
                <br>
                <div class="start">${cityData.startTime}</div>
                <div>|</div>
                <div class="end">${cityData.endtime}</div>
                <br>
                <div class="min">${cityData.minT}°C</div>
                <br>
                <div class="max">${cityData.maxT}°C</div>
                <br>
                <div class="ci">${cityData.ci}</div>
                <br>
                <div class="pop">降雨機率 : ${cityData.pop}%</div>
                </div>`

    })

}

function arrange_cities5() {
    const cardRegion = document.querySelector('.card-region');
    cardRegion.innerHTML = '';
    nowCity5.forEach(function (city, index) {
        console.log(city, orgData);
        let cityData = orgData[city];
        cardRegion.innerHTML += `<div class="card">
                <br>
                <div class="city-name">${city}</div>
                <br>
                <div class="weather">${cityData.wxCondition}</div>
                <br>
                <div class="start">${cityData.startTime}</div>
                <div>|</div>
                <div class="end">${cityData.endtime}</div>
                <br>
                <div class="min">${cityData.minT}°C</div>
                <br>
                <div class="max">${cityData.maxT}°C</div>
                <br>
                <div class="ci">${cityData.ci}</div>
                <br>
                <div class="pop">降雨機率 : ${cityData.pop}%</div>
                </div>`

    })

}

tw.addEventListener('click',function(){
    arrange_cities();
})

nt.addEventListener('click',function(){
    arrange_cities1();
})

mt.addEventListener('click',function(){
    arrange_cities2();
})

st.addEventListener('click',function(){
    arrange_cities3();
})

et.addEventListener('click',function(){
    arrange_cities4();
})

island.addEventListener('click',function(){
    arrange_cities5();
})