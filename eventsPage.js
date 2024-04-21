let eventsArray = [
    {
        image: "/eventsPageImg/picture1.png",
        title: "НСР РТ на период до 2030 года        ",
        place: "Место: Молодежный центр",
        time: "Дата: 24 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture2.png",
        title: "Выставка робототехники",
        place: "Место: Молодежный центр",
        time: "Дата: 20 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture3.png",
        title: "Избранные произведения для фортепиано в Музее Скрябина",
        place: "Место: Молодежный центр",
        time: "Дата: 18 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture4.png",
        title: "Собрание клуба читателей в Исмаилитском центре",
        place: "Место: Молодежный центр",
        time: "Дата: 17 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture5.png",
        title: "Летом в кругосветку в песней!» в культурном центре",
        place: "Место: Молодежный центр",
        time: "Дата: 22 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture6.png",
        title: "«Жизель» в концертном зале «Москонцерт Холл»",
        place: "Место: Молодежный центр",
        time: "Дата: 28 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture7.png",
        title: "«Японская сказка. Меч самурая» в «Театриуме на Серпуховке»",
        place: "Место: Молодежный центр",
        time: "Дата: 21 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture8.png",
        title: "Основная экспозиция музея «Дом Бурганова»",
        place: "Место: Молодежный центр",
        time: "Дата: 16 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture9.png",
        title: "Билет в музей Николая Островского",
        place: "Место: Молодежный центр",
        time: "Дата: 15 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture10.png",
        title: "«Английская и ирландская музыка XVII века»",
        place: "Место: Молодежный центр",
        time: "Дата: 06 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture11.png",
        title: "«Посвящение Александру Скрябину» ",
        place: "Место: Молодежный центр",
        time: "Дата: 13 декабря 2023",
        start: "Начало 10:00",
    },
    {
        image: "/eventsPageImg/picture12.png",
        title: "Барокко из морского ушка. Гид по выставке «Жемчуг и перламутр»",
        place: "Место: Молодежный центр",
        time: "Дата: 1 декабря 2023",
        start: "Начало 10:00",
    },
]
let events1 = document.getElementById("eventsList")
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