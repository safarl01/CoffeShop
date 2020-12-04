$(function () {
    let plus = $(".detail #plus");
    let addToCard = $(".shop-side .add-to-card");

    let obj, Json, txt, StoreObj;

    obj = {
        "firstName": "Pasha",
        "lastName": "Safarli",
        "total": 1,
        "birthDay": 2001
    };

    Json = JSON.stringify(obj);
    localStorage.setItem("plusSide", Json);
    txt = localStorage.getItem("plusSide");
    StoreObj = JSON.parse(txt);

    for (let i = 0; i < addToCard.length; i++) {
        addToCard[i].addEventListener('click', jsonData);
    };

    function jsonData() {
        plus.html(StoreObj.total++);
        console.log("toplama");
    };
});