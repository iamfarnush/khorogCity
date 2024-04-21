let ucainfo = [
    {

        image: "./homepageImg/pexels-photo-267885 1.svg",
        date: "Новость | 8 января 2023",
        info: "УЦА набирает абитуриентов из числа учащихся Центральной Азии",
    },
    {
        image: "./homepageImg/pexels-photo-267885 1 (1).svg",
        date: "Новость | 8 января 2023",
        info: "Как отмечают день матери зарубежом?",
    },

];
let news = document.getElementById("uca");
for (element of ucainfo) {
    let maindiv = document.createElement("div");
    news.appendChild(maindiv);
    maindiv.className = "mainDiv";

    let imageTag = document.createElement("img")
    maindiv.appendChild(imageTag);
    imageTag.src = element.image;
    imageTag.className = "image12";
}
let ucainfo2 = [
    {
        date: "Новость | 8 января 2023",
        info: "УЦА набирает абитуриентов из числа учащихся Центральной Азии",
    },
    {
        date: "Новость | 8 января 2023",
        info: "Как отмечают день матери зарубежом?",
    },

];
let news2 = document.getElementById("uca2");
for (element of ucainfo2) {
    let maindiv2 = document.createElement("div");
    news2.appendChild(maindiv2);
    maindiv2.className = "mainDiv2";

    let dateTag = document.createElement('p');
    maindiv2.appendChild(dateTag);
    dateTag.className = "date";
    dateTag.textContent = element.date;

    let infoTag = document.createElement('h3');
    maindiv2.appendChild(infoTag);
    infoTag.textContent = element.info;
    infoTag.className = "info";
}
let novosti = [
    {
        picture: './homepageImg/news/pexels-photo-267885 1.png',
        data: 'Новость | 10 января 2023',
        inform: 'Минздрав: Таджикистан готов к ревакцинации против COVID-19.',
    },
    {
        picture: './homepageImg/news/Rectangle.png',
        data: 'Новость | 10 января 2023',
        inform: 'В Хороге провели ярмарку вакансий',
    },
    {
        picture: './homepageImg/news/Rectangle (1).png',
        data: 'Новость | 10 января 2023',
        inform: 'Влияние социальных сетей',
    },
    {
        picture: './homepageImg/news/pexels-photo-267885 1 (1).png',
        data: 'Новость | 10 января 2023',
        inform: 'Рахмон и Токаев обсудили ситуацию в Казахстане',
    },
    {
        picture: './homepageImg/news/pexels-photo-267885 1 (2).png',
        data: 'Новость | 10 января 2023',
        inform: 'День ОНН отметили в Хороге',
    },
];
let newss = document.getElementById("tajnews");
for (element of novosti) {
    let main = document.createElement('div');
    newss.appendChild(main);
    main.className = 'maindiv';

    let picTag = document.createElement('img');
    main.appendChild(picTag);
    picTag.src = element.picture;
    picTag.className = 'pictures';

    let dataTag = document.createElement('p');
    main.appendChild(dataTag);
    dataTag.textContent = element.data;
    dataTag.className = 'data';

    let informTag = document.createElement('h5');
    main.appendChild(informTag);
    informTag.textContent = element.inform;
    informTag.className = 'inform';
};

let eventsArray = [
    {
        image: "./homepageImg/events/images1QmGs9(1) 1.png",
        title: "НСР РТ на период до 2030 года",
        place: "Место: Молодежный центр",
        time: "Дата: 26 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "./homepageImg/events/picture2.png",
        title: "Выставка роботехники",
        place: "Место: Молодежный центр",
        time: "Дата: 26 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "./homepageImg/events/picture3.png",
        title: "Избранные произведения для фортепиано в Музее Скрябина",
        place: "Место: Молодежный центр",
        time: "Дата:  27 января 2023",
        start: "Начало 10:00",
    },
    {
        image: "./homepageImg/events/picture4.png",
        title: "Собрание клуба читателей в Исмаилитском центре",
        place: "Место: Молодежный центр",
        time: "Дата: 1 февраля 2023",
        start: "Начало 10:00",
    },
]
let events1 = document.getElementById("parent_div")
for (element of eventsArray) {
    let bigDiv = document.createElement("div");
    events1.appendChild(bigDiv);
    bigDiv.className = "bigDiv";

    let imageTag = document.createElement('img');
    bigDiv.appendChild(imageTag);
    imageTag.src = element.image;
    imageTag.className = "suratenTag";

    let titleTag = document.createElement("h4");
    bigDiv.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.className = "titleTag";

    let placeTag = document.createElement("p");
    let timeTag = document.createElement("p");
    let startTag = document.createElement("p");
    bigDiv.appendChild(placeTag);
    placeTag.textContent = element.place;
    placeTag.style.fontSize = "14px"
    placeTag.style.color = "#7A7A7A"
    bigDiv.appendChild(timeTag);
    timeTag.textContent = element.time;
    timeTag.style.fontSize = "14px";
    timeTag.style.color = "#7A7A7A"
    bigDiv.appendChild(startTag);
    startTag.textContent = element.start;
    startTag.style.fontSize = "14px"
    startTag.style.color = "#7A7A7A"
}


let vacancies = [
    {
        title: "Специалист по рискам в Службу управления рисками",
        company: "Работодатель: Филиал Attolabs",
        salary: "Зарплата:  Договорная",
        explain: "Описание:",
        text: "Аттолабс филиал немецкой ИТ компании в Таджикистане, занимается разработкой больших корпоративных систем для рынка Европы и Германии...",
    },
    {
        title: "Front-end разработчик",
        company: "Работодатель: Ливо",
        salary: "Зарплата:  Договорная",
        explain: "Описание:",
        text: "Привет. Мы ведущая IT-компания Таджикистана Ливо (были Колибри). Занимаемся разработкой сайтов, приложений, предоставляем услуги по...",
    },
    {
        title: "Аналитик в Отдел Исследований",
        company: "Работодатель: M-Vector        ",
        salary: "Зарплата:  Договорная",
        explain: "Описание:",
        text: "Ведущее исследовательское и консалтинговое агентство «М-Вектор» с 24-летним опытом успешной работы в социологических и...",
    },
    {
        title: "Графический дизайнер",
        company: "Работодатель: МБТ        ",
        salary: "Зарплата:  Договорная",
        explain: "Описание:",
        text: "Международный банк Таджикистана объявляет конкурс на позицию графического дизайнера в г. Душанбе.",
    },
]
let secButton = document.getElementById("vacancy");
for(element of vacancies){
    let bigDiv2 = document.createElement("div");
    secButton.appendChild(bigDiv2);
    bigDiv2.className = "bigDiv2";

    let titleTag = document.createElement("h4");
    bigDiv2.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.style.paddingBottom = "10px"

    let companyTag = document.createElement("p");
    bigDiv2.appendChild(companyTag);
    companyTag.textContent = element.company;

    let salaryTag = document.createElement("p");
    bigDiv2.appendChild(salaryTag);
    salaryTag.textContent = element.salary;
    salaryTag.style.fontSize = "14px"
    salaryTag.style.paddingBottom = "10px"

    let explainTag = document.createElement("p");
    bigDiv2.appendChild(explainTag);
    explainTag.textContent = element.explain;
    explainTag.style.fontSize = "14px"

    let textTag = document.createElement("p");
    bigDiv2.appendChild(textTag);
    textTag.textContent = element.text;
    textTag.style.fontSize = "14px"
}
let tenderArray = [
    {
        image: "./homepageImg/news/picture.png",
        title: "Supply of Cargo/Passenger Pick-up to OSCE",
        time: "Крайний срок: 21.02.2023",
        date: "Дата публикации: 27.01.2023",
    },
    {
        image: "./homepageImg/news/picture (1).png",
        title: "Provision of translation services",
        time: "Крайний срок: 21.02.2023",
        date: "Дата публикации: 27.01.2023",
    },
    {
        image: "./homepageImg/news/picture (2).png",
        title: "Transport company for freight and passenger transportation",
        time: "Крайний срок: 21.02.2022",
        date: "Дата публикации: 27.01.2023",
    },
    {
        image: "./homepageImg/news/picture (3).png",
        title: "Journalist Trainer/Mentor",
        time: "Крайний срок: 21.02.2022",
        date: "Дата публикации: 27.01.2023",
    },
]
let events3 = document.getElementById("tenderId")
for (element of tenderArray) {
    let bigDiv3 = document.createElement("div");
    events3.appendChild(bigDiv3);
    bigDiv3.className = "bigDiv3";

    let imageTag = document.createElement("img");
    bigDiv3.appendChild(imageTag);
    imageTag.src = element.image;
    imageTag.style.width = "250px"

    let titleTag = document.createElement("a");
    bigDiv3.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.style.color = "#4791EB";
    titleTag.style.paddingTop = "15px"
    titleTag.style.paddingBottom = "10px"


    let timeTag = document.createElement("p");
    bigDiv3.appendChild(timeTag);
    timeTag.textContent = element.time;
    timeTag.style.fontSize = "14px"
    timeTag.style.paddingTop = "10px"

    let dateTag = document.createElement("p");
    bigDiv3.appendChild(dateTag);
    dateTag.textContent = element.date;
    dateTag.style.fontSize = "13px"
}

//////////////////

// let parent_div = document.getElementById("parent_div");
// let second_button = document.getElementById("pills-vacancy-tab")
// let third_button = document.getElementById("pills-tender-tab")
// let first_button = document.getElementById("pills-events-tab")

// first_button.addEventListener("click", function (e) {
//     parent_div.style.opacity = 0;
//     parent_div.innerHTML = "";
//     setTimeout(() => {
//         parent_div.style.opacity = 0;
//         parent_div.style.opacity = 1;

//         let events1 = document.getElementById("pills-events")
//         for (element of eventsArray) {
//             let bigDiv = document.createElement("div");
//             events1.appendChild(bigDiv);
//             bigDiv.className = "bigDiv";

//             let imageTag = document.createElement('img');
//             bigDiv.appendChild(imageTag);
//             imageTag.src = element.image;
//             imageTag.className = "suratenTag";

//             let titleTag = document.createElement("h4");
//             bigDiv.appendChild(titleTag);
//             titleTag.textContent = element.title;
//             titleTag.className = "titleTag";

//             let placeTag = document.createElement("p");
//             let timeTag = document.createElement("p");
//             let startTag = document.createElement("p");
//             bigDiv.appendChild(placeTag);
//             placeTag.textContent = element.place;
//             placeTag.style.fontSize = "14px"
//             placeTag.style.color = "#7A7A7A"
//             bigDiv.appendChild(timeTag);
//             timeTag.textContent = element.time;
//             timeTag.style.fontSize = "14px";
//             timeTag.style.color = "#7A7A7A"
//             bigDiv.appendChild(startTag);
//             startTag.textContent = element.start;
//             startTag.style.fontSize = "14px"
//             startTag.style.color = "#7A7A7A"
//         }
//     })
// });
// second_button.addEventListener("click", function (e) {
//     parent_div.style.opacity = 0;
//     parent_div.innerHTML = "";
//     setTimeout(() => {
//         parent_div.style.opacity = 0;
//         parent_div.style.opacity = 1;

//         let secButton = document.getElementById("pills-profile");
//         for(element of vacancies){
//             let bigDiv2 = document.createElement("div");
//             secButton.appendChild(bigDiv2);
//             bigDiv2.className = "bigDiv2";

//             let companyTag = document.createElement("h5");
//             bigDiv2.appendChild(companyTag);
//             companyTag.textContent = element.company;

//             let salaryTag = document.createElement("p");
//             bigDiv2.appendChild(salaryTag);
//             salaryTag.textContent = element.salary;
//             salaryTag.style.fontSize = "14px"

//             let explainTag = document.createElement("p");
//             bigDiv2.appendChild(explainTag);
//             explainTag.textContent = element.explain;
//             explainTag.style.fontSize = "14px"

//             let textTag = document.createElement("p");
//             bigDiv2.appendChild(textTag);
//             textTag.textContent = element.text;
//             textTag.style.fontSize = "14px"
//         }
    
//     })
// });

// third_button.addEventListener("click", function (e) {
//     parent_div.style.opacity = 0;
//     parent_div.innerHTML = "";
//     setTimeout(() => {
//         parent_div.style.opacity = 0;
//         parent_div.style.opacity = 1;

//         let events3 = document.getElementById("pills-contact")
//         for (element of tenderArray) {
//             let bigDiv3 = document.createElement("div");
//             events3.appendChild(bigDiv3);
//             bigDiv3.className = "bigDiv3";

//             let imageTag = document.createElement("img");
//             bigDiv3.appendChild(imageTag);
//             imageTag.src = element.image;
//             imageTag.style.width = "250px"

//             let titleTag = document.createElement("h6");
//             bigDiv3.appendChild(titleTag);
//             titleTag.textContent = element.title;
//             titleTag.style.color = "#4791EB";
//             titleTag.style.paddingTop = "15px"
//             titleTag.style.paddingBottom = "10px"


//             let timeTag = document.createElement("p");
//             bigDiv3.appendChild(timeTag);
//             timeTag.textContent = element.time;
//             timeTag.style.fontSize = "14px"

//             let dateTag = document.createElement("p");
//             bigDiv3.appendChild(dateTag);
//             dateTag.textContent = element.date;
//             dateTag.style.fontSize = "13px"
            
//         }
//     })
// });