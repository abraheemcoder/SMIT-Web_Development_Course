/* Create a business name generator by combining list of adjectives and shop name and another word.

Adjectives:
1. Crazy
2. Amazing
3. Fire

Shop name:
1. Engine
2. Foods
3. Garments

Another word:
1. Bros
2. Limited
3. Hub 

Solve this challege without using array. */

const adjective1 = "Crazy";
const adjective2 = "Amazing";
const adjective3 = "Fire";
const shopName1 = "Engine";
const shopName2 = "Foods";
const shopName3 = "Garments";
const anotherWord1 = "Bros";
const anotherWord2 = "Limited";
const anotherWord3 = "Hub";
const randomNum1 = Math.random();
const randomNum2 = Math.random();
const randomNum3 = Math.random();
let adjective;
let shopName;
let anotherWord;

if (randomNum1 <= 1 / 3) {
  adjective = adjective1;
} else if (randomNum1 <= 2 / 3) {
  adjective = adjective2;
} else {
  adjective = adjective3;
}
if (randomNum2 <= 1 / 3) {
  shopName = shopName1;
} else if (randomNum2 <= 2 / 3) {
  shopName = shopName2;
} else {
  shopName = shopName3;
}
if (randomNum3 <= 1 / 3) {
  anotherWord = anotherWord1;
} else if (randomNum3 <= 2 / 3) {
  anotherWord = anotherWord2;
} else {
  anotherWord = anotherWord3;
}

const businessName = `${adjective} ${shopName} ${anotherWord}`;
console.log(businessName);