//создать цикл который спрашивает пользователя ввести страну 
// если не null создать букбы не чувствительными к регистру
//после введения страны вывести сообщение о стоимости доставки 
//если null после неправильно указаной страны то выводим в alert cообщение что доставки нет в страну которую указал пользователь
const china = 'Китай';
const chile = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';

let country;
let price;
let message;

message = prompt(`Введите страну`);

if (message === null) {
    alert(`Отменено пользователем`);
} else {
    country = message.toLowerCase() === message.toLowerCase()
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
        

    
    switch (country) {
    
        case china:
            price = `100`;
            break;
    
        case chile:
            price = `250`;
            break;
    
        case australia:
            price = `170`;
            break;
    
        case india:
            price = `80`;
            break;
    
        case jamaica:
            price = `120`;
            break;
    
    
        default: 
            //  (price > 0) 
            //  message = `Доставка в ${country} будет стоить ${price} кредитов`;
         
        
    }
    
    
}