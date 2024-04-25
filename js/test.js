/*                                               OBJECTs                                                                  */
// const book = {
//   title: "Green mile",
//   rating: "9.00",
//   genres: ["historical prose", "adventure"]
// };
// // Доступ к значению свойства title (точечная запись и скобочная запись)
// const prop1 = book.title;    // Green mile
// const prop2 = book["title"]; // Green mile
// console.log(prop1);
// console.log(prop2);

// // Якщо в об'єкті відсутня властивість з таким ім'ям (price), на місце звернення повернеться undefined
// book.price;      // undefined
// book["price"];   // undefined

/********************************************************************************************************************
 *                                 Dote notation (точечная запись)
 */
// book.year = 1988;                   // добавила новое свойство year
// delete book.rating;                 // удалила свойство rating

// // Добавила новое свойство author, со значением - "Steven King" в обьект и сохранила значение в переменную
// const authorOfBook = (book.author = "Steven King")  // Steven King

/********************************************************************************************************************
 *                                 Bracket notation (скобочная запись)
 */
// const newRatingName = "rating2";
// book[newRatingName] = "9.50";     // добавила новое свойство rating2 c помошью [] и переменной

/********************************************************************************************************************
 *                                Доступ к значение элемента массива ["historical prose", "adventure"]
 */
// const genreFirst = book.genres[0];                     // historical prose
// const genreLast = book.genres[book.genres.length - 1]; // adventure

// console.log(book);

/***************************************************************************************************************************
 * Доповни код, оновивши значення властивостей об'єкта apartment:
-ціну у властивості price на 5000;
-рейтинг квартири у властивості rating на 4.7;
-ім'я власника у вкладеній властивості name на "Henry Sibola";
-масив тегів у властивості tags, додавши в кінець рядок "trusted".
 */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
/***************************************************************************************************************************/

/**************************************************************************************************************************
 * Додай об'єкту apartment кілька нових властивостей:

area - площа в квадратних метрах, число 60;
rooms - кількість кімнат, число 3;
location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
country - країна, рядок "Jamaica";
city - місто, рядок "Kingston".
Зверніть увагу: якщо ви спробуєте додати властивості country і city до ще не створеної властивості location, ви отримаєте помилку. Спочатку ініціалізуйте location як порожній об'єкт, а потім додавайте до нього властивості.
 */
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };
// console.log(apartment);

/*************************************************************************************************************************
 *                                        Цикл for...in
 */
// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object
// for (key in apartment) {
//    console.log(key);
// }

/**************************************************************************************************************************
 * Перебери об'єкт apartment, використовуючи цикл for...in,
 * і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
 */
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);

//   console.log(`Key - ${key}, value is ${apartment.key}`); // чтоб получить значение, нужно использовать скобочную запись, иначе получаем undefined
// }

// console.log(keys);
// console.log(values);

/**************************************************************************************************************************************************
 *                                                                Цикл for...of
 * Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
 * Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.
 */
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//  values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

/**
 * Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys()
 * для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.
 * @param {Object} object
 * @returns {Number} propCount
 */
// function countProps(object) {
//   let propCount = 0;
//   const myArrOfProp = Object.keys(object);
//   propCount = myArrOfProp.length
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));

/**
 * Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень.
 * Використовуй методи Object.keys() і Object.values().
 */
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment); // ["descr", "rating", "price"]
// const values = Object.values(apartment); // ["Spacious apartment in the city center", 4, 2153]

/*******************************************************************************************************************************************
 * Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра.
 * Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.
 * Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.
 * @param {*} salaries
 * @returns
 */
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // version 1
//   const allSal = Object.values(salaries);
//   for (const el of allSal) {
//     totalSalary += el;
//   }

//   // // version 2
//   // for (const key in salaries) {
//   //   totalSalary = totalSalary + salaries[key]
//   // }

//   return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

/***********************************************************************************************************************************************
 * Масив colors містить колекцію кольорів.
 * Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.
 * Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex,
 * а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
 */
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

/***********************************************************************************************************************************
 * Функція getProductPrice(productName) приймає один параметр productName - назва продукту.
 * Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
 * Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price).
 * Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
 */
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Scanner"));

/************************************************************************************************************************
 * Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
 * Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
 * Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
 */
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const allValuesofProp = []
//   for (const product of products) {
//     if (product[propName]) {
//       allValuesofProp.push(product[propName])
//     };
//   }
//   return allValuesofProp
// }
// console.log(getAllPropValues("price"));

/***************************************************************************************************************************
 * Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару.
 * Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
 * Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
 * Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" ,
 * де <productName> — це ім'я товару.
 */
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let totalPricePerProduct = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       totalPricePerProduct = product.price * product.quantity;
//       return totalPricePerProduct;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice("Droid"));

/**
 * Об'єкт atTheOldToad має наступні властивості:
potions — масив об'єктів зілль
getPotions() — метод, який повертає значення властивості potions
updatePotionName() — метод, який приймає два параметра рядків oldName і newName
Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на 
newName в масиві зілля у властивості potions.
 */
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//      for (const potion of this.potions) {
//         if (oldName === potion.name) {
//           potion.name = newName
//        }
//     }
//   },
// };
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.potions);


/**
 * Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

Властивість best має містити найбільше число з масиву scores
Властивість worst має містити найменше число з масиву scores.
Використовуй оператор (...spread) і методи Math.max() і Math.min().
 * @param {Array} scores 
 * @returns {Object} myScores
 */
// function getExtremeScores(scores) {
//    const myScores = {
//       best: 0,
//       worst: 0
//    }

//    const maxResult = Math.max(...scores)
//    const minResult = Math.min(...scores)

//    myScores.best = maxResult;
//    myScores.worst = minResult;

//    return myScores
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));



/**************************************************************************************************************************
 * У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. 
 * Використовуючи розпилення, доповни код таким чином, щоб:
 * У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
 * У змінній bestScore - найвищий загальний бал.
 * У змінній worstScore - найнижчий загальний бал.
 */
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);