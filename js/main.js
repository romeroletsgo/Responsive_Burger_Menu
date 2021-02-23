$(document).ready(function () {
    //Вешаем на бургер событие клика
    $('.header__burger').click(function (event) {
        //При клике добавляется/Убирается класс 
        $('.header__burger, .header__menu').toggleClass('__active');
    });
});