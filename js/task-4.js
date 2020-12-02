const credits = 23580;
const pricePerDroid = 3000;

let totalPrice;
let balansCredit;
let message;


message = prompt(`Сколько дроидов Вы хотите купить?`);


if (message === null) {
    alert(`Отменено пользователем`);
} else {
    message = Number(message); 
    totalPrice = message * pricePerDroid 
    balansCredit = credits - totalPrice
    message = balansCredit >= 0
    ? `Вы купили ${totalPrice} дроидов, на счету осталось ${balansCredit} кредитов`
        : `Недостаточно средств на счету!`
    alert(message)
}
