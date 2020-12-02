let country;
let price ;
let message;
   
country = prompt(`Введите страну`)
    
if (country === null) {
    message = 'Отменено пользователем';
} else {
    country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
}
    switch (country) {
        case 'Китай':
            price = '100';
            break;
        
        case 'Чили':
            price = '250';
            break;
    
        case 'Австралия':
            price = '170';
            break;
    
        case 'Индия':
            price = '80';
            break;
    
        case 'Ямайка':
            price = '120';
            break;
    
    
        default:
            message = 'Ввашей стране доставка не доступна';
    }
if (price) {
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
alert(message);