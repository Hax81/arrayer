// //#######################################################################################
// //1. "Maradona" skrivs ut pga index räknas från 0 (Zlatan)*/

// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
// console.log(names[3]);

// //#######################################################################################
// //2. Arrayen utökas med ett namn (Drogba), returvärdet är därför 7 eftersom det tidigare var 6.

// names.push("Drogba");

// console.log(names);

// //#######################################################################################
// //3. Lägger till "Figo" med metoden ".unshift". Returvärdet är 8, arrayen har utökats med 1.

// names.unshift("Figo");
// console.log(names);

// //#######################################################################################
// //4. Tar bort "Drogba" från array. Returvärdet är elementet som togs bort från array.

// names.pop("Drogba");
// console.log(names);

// //#######################################################################################
// //5. Använder först pop() för att ta bort sista värdet i array. Använder sedan unshift() för att sätta in det borttagna värdet först i array.

// names.pop("Ronaldo");
// names.unshift("Ronaldo");
// console.log(names);

// //#######################################################################################

// //6. Anledningen är att const refererar till arrayen men inte innehållet i arrayen. Innehållet kan därför ändras men inte arrayen själv.

// //#######################################################################################
// //7. Resultatet blir "false" eftersom metoden includes() kontrollerar om "Messi" finns i array. Det gör han inte så därför returneras "false".

// const players = [
//   "Zlatan",
//   "Beckham",
//   "Zidane",
//   "Ronaldo",
//   "Romario",
//   "Maradona",
// ];
// console.log(players.includes("Messi"));

// //#######################################################################################
// //8.

// console.log(players.includes("Zlatan"));

// if (players.includes("Zlatan")) {
//   console.log("Zlatan finns med i listan!");
// } else {
//   console.log("Zlatan finns inte med i listan.");
// }

// //#######################################################################################
// //9. Resultatet som skrivs ut blir 5. Detta pga att "Maradona" har indexplats nr 5 i array. Första platsen i array har indexplats nr 0.

// console.log(players.indexOf("Maradona"));

// //#######################################################################################
// //10. Värdet som returneras är -1. Detta är användbart eftersom det indikerar att det inte är en giltig plats i array eftersom negativa värden är ogiltiga. Det blir då lätt att se att elementet ifråga INTE finns i array.

// console.log(players.indexOf("Messi"));

// //#######################################################################################
// //11. Array omvandlad till sträng. Separatorer är komma och mellanslag. Metoden som använts är join().

// console.log(players.join(", "));

// //#######################################################################################
// //12. Resultatet blir att separatorn är "-".

// console.log(players.join("-")); //12. Resultatet blir att separatorn är "-".

// //#######################################################################################
// //13. Metoden splice() tar bort element i array. Här börjar bortagandet på indexplats 1 vilket anges av "1" i parentesen. Vi vill också ta bort elementet på indexplats 2, varför nästa siffra ska vara "2" parentesen. Detta betyder inte indexplats "2" utan istället att antal element som ska tas bort är två st. Det börjar på indexplats 1 och går åt höger i array.

// players.splice(1, 2);
// console.log(players);

// //#######################################################################################
// //14. "Ronaldinho" hamnar på indexplats 2, array utökas med 1 indexplats och elementen efter indexplats 2 förskjuts 1 steg.

// players.splice(2, 0, "Ronaldinho");
// console.log(players);

// //#######################################################################################
// //15. Tar först reda på vilken indexplats Ronaldo har. Skapar sen en variabel (index) och tilldelar den hittade indexplatsen för "Ronaldo". Om indexplatsen INTE är "-1" (vilket skulle indikera att "Ronaldo" inte finns i array) så tas han bort från array.

// players.indexOf("Ronaldo");
// const index = players.indexOf("Ronaldo");
// if (index !== -1) {
//   players.splice(index, 1);
// }

// console.log(players);

// //16.

// //#######################################################################################

// //17.

// //#######################################################################################

// //18.

// //#######################################################################################
// //19.

// const numbers = [5, 8, 12, 20, 3];

// for (let i = 0; i = numbers.length; i++) {
//   console.log(numbers[i]);
// }

// //#######################################################################################
// //20.

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   //"0" betyder här "indexplats 0", det vill säga första item i array. Vi börjar på indexplats 0.

//   sum += numbers[i];
// }

// console.log(sum);

// //#######################################################################################
// //21.

// let largest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }
// console.log("The biggest number is" + " " + largest);

// //#######################################################################################
// //22.

// const doubledNumbers = [];

// for (const n of numbers) {
//   doubledNumbers.push(n * 2);
// }
// console.log(doubledNumbers);

// //#######################################################################################

// //23. Medelvärdet ska vara 9.6

// let summa = 0;

// for (const x of numbers) {
//   summa += x;
// }
// const mean = summa / numbers.length;

// console.log("Medelvärdet är" + " " + mean);

// //#######################################################################################

// //24.

// let smallest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// }

// console.log("The smallest number is" + " " + smallest);

// //#######################################################################################

// //25. [3, -5, 12, -1, 8, -6]

// let positiveNumbers = [];
// const randomNumbers = [3, -5, 12, -1, 8, -6];
// let negativeNumbers = [];

// for (const n of randomNumbers) {
//   if (n > 0) {
//     positiveNumbers.push(n);
//   } else if (n < 0) {
//     negativeNumbers.push(n);
//   }
// }
// console.log(positiveNumbers, negativeNumbers);

// //#######################################################################################

// //26.

// //const mixedNumbers = [3, -5, 12, -1, 8, -6];

// for (let i = 0; i < mixedNumbers.length; i++) {

//   if (mixedNumbers[i] > 0) {
//     console.log(mixedNumbers[i]);

//   }

// }

//        //EJ FÄRDIG! (Förstår den ej)
// //#######################################################################################
// //27. [5, 8, 12, 20, 3];

// let i = 0;
// while (i < numbers.length) {

//   if (numbers[i] > 10) {break;}

//   console.log(numbers[i]);
//   i++
// }

// EJ FÄRDIG! (Förstår den ej)
// #######################################################################################

// 28. [3, -5, 12, -1, 8, -6]
// Utgå från arrayen mixedNumbers ovan.
// Använd en while-loop för att räkna hur många negativa tal det finns i arrayen. Logga antalet.

// const mixedNumbers = [3, -5, 12, -1, 8, -6];

// let count = mixedNumbers.length;

// let amount = 0;
// let i = 0;

// while (i != count) {
//   if (mixedNumbers[i] < 0) {
//     amount++;
//   }
//   i++;
// }

// console.log("Amount of negative numbers: " + amount);

// #######################################################################################
// 29. Skapa en array words med några ord i den, (exempel nedan). 
// Använd en for-loop för att logga varje ord tillsammans med dess längd (antal bokstäver).

// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];


// for(i=0;i<words.length; i++){


//   console.log(words[i] + " has" + " " + words[i].length + " letters");

// }

// #######################################################################################
// //30. Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som 
// //består av de första bokstäverna i varje ord. 
// //Logga ut den nya strängen.

// const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
// let newArr =""; 

// for(let fruit of words) {

//   newArr += fruit[0]; //OBS! En string har i sig indexplatser för alla bokstäver! 
//   //Så "b" i banana har indexplats 0 osv!
  

//   //console.log(newArr);
//   // Om man väljer att logga till konsollen INNE i loopen så kommer 
//   //loggningen att INGÅ o därmed skrivas ut i varje iteration  

// }

// console.log(newArr);  

// #######################################################################################


//31. Skriv en while-loop som itererar genom arrayen numbers [5, 8, 12, 20, 3]
//och loggar varje tal tills summan av de loggade talen överstiger 25.


const numbers = [5,8,12,20,3];
let sum=0;
let index=0; //börjar på index 0.

while(sum < 25 ) {
const number=numbers[index];
console.log(number);
sum+=number;
index++;

}
