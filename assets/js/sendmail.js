'use strict';

function sendMail() {
    sendMailToMe();
    sendEmailInternal(document.getElementById('email').value);
}

function sendMailToMe() {
    let name = document.getElementById("name");
    let message = document.getElementById("message");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");	
    let SecureToken = "6fb13a8c-3e46-451b-b4d0-48a82345671a";    
    let From = "moskvichev_e@bk.ru";
    let To = "moskvichev_e@bk.ru";
    let Subject = "ЗАЯВКА! ЗАЯВКА! ЗАЯВКА!";
    let Body = name.value + " Сделал заявку! Его почта: " + email.value + 
    ". Его телефон: " + phone.value + ". Его сообщение: "
    + "<br> <br>" + "_________________________" + "<br> <br>" + message.value;
    Email.send({ SecureToken, To, From, Subject, Body}).then();
}

function sendEmailInternal(To) {
    let name = document.getElementById("name");    
    let message = document.getElementById("message");
    let SecureToken = "6fb13a8c-3e46-451b-b4d0-48a82345671a";
    let From = "moskvichev_e@bk.ru";
    let Subject = name.value + ", Ваша заявка принята";
    let Body = name.value + ", спасибо за обращение! В кратчайшие сроки мы ответим на вашу заявку! "
    + "<br> <br>" + "_________________________" + "<br> <br>" + message.value;
    Email.send({ SecureToken, To, From, Subject, Body}).then();
}
