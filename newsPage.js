let news = [
    {
        image: "./newsPageImg/52846835_616049922176235_4412989011564429312_n 1.png",
        history: "ИСТОРИИ",
        title: "Национальная кухня. Гастрономический тур по Хорогу",
        date: "Новость | 8 января 2023",
    },
    {
        image: "./newsPageImg/52846835_616049922176235_4412989011564429312_n 1 (2).png",
        history: "ИСТОРИИ",
        title: "Бумажные справки стали не нужны",
        date: "Новость | 8 января 2023",
    },
    {
        image: "./newsPageImg/52846835_616049922176235_4412989011564429312_n 1 (1).png",
        history: "ИСТОРИИ",
        title: "Коронавирус не страшен: безопасные страны для путешествия этой весной",
        date: "Новость | 8 января 2023",
    },
    {
        image: "./newsPageImg/52846835_616049922176235_4412989011564429312_n 1 (3).png",
        history: "ИСТОРИИ",
        title: "Топ-7 самых недооцененных и недорогих стран для любопытных туристов",
        date: "Новость | 8 января 2023",
    },
]
let newsDiv = document.getElementById("childDiv2");
for(element of news){
    let bigDiv = document.createElement("div");
    newsDiv.appendChild(bigDiv);
    bigDiv.className = "bigDiv2";

    let imageTag = document.createElement("img");
    bigDiv.appendChild(imageTag);
    imageTag.src = element.image;
    
    let historyTag = document.createElement("h5");
    bigDiv.appendChild(historyTag);
    historyTag.textContent = element.history;
    historyTag.style.paddingTop = "10px"
    historyTag.style.paddingBottom = "10px"

    let titleTag = document.createElement("h4");
    bigDiv.appendChild(titleTag);
    titleTag.textContent = element.title;

    let dateTag = document.createElement("p");
    bigDiv.appendChild(dateTag);
    dateTag.textContent = element.date;
    dateTag.style.paddingTop = "10px"

};