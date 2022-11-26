//var firstName="Donald";
//var lastName="Akpan";

//document.write(firstName)>
//console.log(firstName)
//alert(firstName)
//var choice= confirm("do you want to shut down?")
//console.log(choice)
//var address= prompt("please where do you live?")
//console.log(address)
//var age=10
//var radiofrequence=95.2
//var ismarried=false
//console.log(ismarried)
//var food;
//console.log(food)

//var firstName=prompt("please enter your name?")
//var firstNumber=prompt("please enter your first number?")
//var secondNumber=prompt("please enter your second number if you have one?")
//var answer=firstNumber+secondNumber
//console.log(answer) 
//var zip1=parseInt(prompt("please enter your zipcode?"))
//var zip2=parseInt(prompt("please enter your second zipcode?"))
//var answer=(zip1+zip2)
//console.log(answer)

//let us declare the login details
//var username="User"
//var password="Pass"
//var user_username=prompt("please enter username?")
//var pass_password=prompt("please enter your password?")
//if(password==pass_password&& username==user_username) {
//    console.log("access granted")
//}else{
//    console.log("access denied")
//}

//var fullName=prompt("what is your full name?")
//var bestfood=prompt("what is your best food?")
//switch(bestfood) {
    //case "rice":
      //  console.log(fullName,", your best food is",bestfood)
        //break
//
  //  case "beans":
    //    console.log(fullName,", your second best food is",bestfood)
      //  break 

//
  //  case "fried egg": 
    //    console.log(fullName,", your third best food is",bestfood) 
      //  break 
//
  //  case "fried rice": 
    //    console.log(fullName,", your best food is ",bestfood) 
      //  break
//
///
   /// case "mac and cheese": 
      //  console.log(fullName,", your fifth best food is ",bestfood)
        //break

  //  default:
//        console.log("i love this food also")
//}

//var firstParagraph=document.querySelector("#para1")
//var secondParagraph=document.querySelector("#para2")

//firstParagraph.innerHTML="it was nice to meet you bye";
//secondParagraph.textContent="bye i hope i see you next time";

//firstParagraph.style.backgroundColor="red";
//secondParagraph.style.backgroundColor="green";


//var firstPara=document.querySelector("#par1")
//var secondPara=document.querySelector("#par2")

//firstPara.innerHTML="how was your day today?";
//secondPara.textContent="my day was amazing i hope yours was too";
//firstPara.style.backgroundColor="blue";
//secondPara.style.backgroundColor="grey";

//var buttonOne=document.querySelector(".b1") 
//var paragraphOne=document.querySelector(".p1")
//var fullName=prompt("what is your name?" )
//var YOB=prompt("What year were you born")
//buttonOne.addEventListener("click", calculateage);


//function calculateage() {
//  var age=new Date().getFullYear()-YOB
 // paragraphOne.textContent="Hello "+ fullName +" you were born in " +YOB+ " now you are " +age+" years old today";
//  buttonOne.style.display="none";
  
//} 

//var cars=["honda","toyota","hyundai","suzuki","Mazda" ]
//console.log(cars)
//console.log(cars[4])
//var colors=new Array("green","blue","pink","yellow","purple")
//console.log(colors)
//cars[0]="telsa"
//console.log(cars.length)
//cars.sort()
//console.log(cars)
//var carscolors=cars.concat(colors)
//console.log(carscolors)
//var selectedcars=cars.slice(2)
//console.log(selectedcars) 

//var person={
  //firstName:"John",
  //lastName:"Depp",
  //Job:"Actor",
  //favoriteFood:"KFC",
  //favoriteColor:"black",
  //phoneNumber:4737795035,
  //Cars:["honda,telsa,toyota,ford"] 
//}
//console.log(person)

//var rad={
  //firstName:"CHAD",
  //lastName:"WILLIAMS",
  //Job:"BUSINESS MAN",
  //fullName:{firstName+lastName} 
//}
//console.log(rad)

//var cars={
  //color:"blue",
  //type:"tesla",
  //year:2022,
  //parts:["wheel,brake,sterring wheel,electric engine"]
//}
//console.log(cars)

//console.log(cars.type)

//cars.color="red" 
//console.log(cars) 

//var person={
  //firstName:"John",
 // lastName:"Jackson",
//  Job:"Software developer",
 // favoriteFood:"rice",
 // favoriteColor:"black and pink",
//  cars:["honda","dodge"],
//  yob:2005,
//  yw:3,
 // retirementyearsleft:function(yw){
   // this.retirement=35-this.yw
  //},
//  cacAge:function(yob){ 
  //  this.age=2022-this.yob
  //}
//}
 //person.cacAge()
 //person.retirementyearsleft()
//console.log(person)

//var person={
  //firstName:"Ava",
  //lastName:"Addison",
  //Job:"fashion designer",
  //favoriteFood:"pizza",
  //favoriteColor:"green",
  //cars:["Jeep"],
  //YOB:2000,
  //yw:6,
  //RYL:function(yw){this.RYL=42-this.yw},
//
  //cacAge:function(YOB){this.age=new Date().getFullYear()-this.YOB}
//
//}
//person.cacAge()
//person.RYL()
//console.log(person)

//var currentDate=new Date() 
//console.log(currentDate)
//
//var chosenDate=new Date("april 15, 2022 15:45:56 ")
//console.log(chosenDate)
//
//var currentYear=new Date().getFullYear()
//
//console.log(currentYear)
//
//var currentMonth=new Date().getMonth()
//
//console.log(currentMonth)

////var currentDate=new Date().getDate()
//
///console.log(currentDate)
//
//var currentDay=new Date().getDay()
//
//console.log(currentDay)
//
//var currentHour=new Date().getHours()
//
//console.log(currentHour)

//var currentMinute=new Date().getMinutes()
//console.log(currentMinute)
//
//var sentence="Today, the "+new Date().getDate()+"th, of "+new Date().getMonth()+","+new Date().getFullYear()+" I learnt JavaScript date constructor."
//console.log(sentence)  
//
//for (var x=0; x<102; x=x+2){
 // console.log(x)
//} 

//var cars=["ford","nissan","Range Rover","Jeep","Honda","land rover","lamborghini","BMW","Porsche","SUV"] 
//
//for (var car=0; car<cars.length; car++){
  //console.log(cars[car]) 
//}
//var names=["Peter","Mary","James","Ela","Robert","Jason","Mason","Bella","Matthew","Oliver","Emma","Noah","Olivia","Megan","Ace"] 

//for (var X=0; X<names.length; X++){
  //console.log(names[X])
//} 

//var countries=["Canada","United States","Japan","Germany","United Kingdom","China","South Korea","Russia","India","France","Brazil",]

//for (var D = 0; D< countries.length; D++) {
//  console.log (countries[D])
//} 

//var M=0 
//while(M<countries.length){
//  console.log(countries[M])
//  M++/
//}

//var Continents=["North America","South America","Asia","Afirca","Europe","Australia","Antarcitica" ] 
//var e=0 
//while (e<Continents.length){
//  console.log(Continents[e])
//  e++
//} 

var firstName=document.querySelector("#FirstName")
var lastName=document.querySelector("#LastName") 
var Height=document.querySelector("#Height") 
var Mass=document.querySelector("#Mass")
var BTM=document.querySelector("button.BTM")
var Result=document.querySelector("p.Result")

BTM.addEventListener("click",BMICal);

function BMICal(){
  var firstName=document.querySelector("#FirstName")
  var lastName=document.querySelector("#LastName") 
  var Height=document.querySelector("#Height") 
  var Mass=document.querySelector("#Mass")
  var Result=document.querySelector("p.Result")

  var BMI=Mass.value/(Height.value**2);
  BMI=BMI.toFixed(2)

  if(firstName.value=="" || lastName.value=="" || Height.value=="" || Mass.value=="" ) {
    setTimeout(()=>{
      Result.textContent="please fill all fields correctly "
      Result.style.color="red"
      setTimeout(()=>{
        Result.textContent=""
      }, 2500)
    }, 100 )
  } else {
    if (BMI<18.5) {
      Result.textContent=firstName.value + lastName.value +" Your BMI value is "+BMI+" kilogram/msquare.You are underweight.You may want to see a doctor as soon as possible. Thank you for using Donald's BMI Calculator.";
      Result.style.color="orange";
      clear()
    } else if (BMI>18.49 && BMI<24.5 ) {
        Result.textContent=firstName.value  +  lastName.value +" Your BMI value is  "+BMI+" kilogram/msquare.You are normal.You do not need to see a doctor about this. Thank you for using Donald's BMI Calculator.";
        Result.style.color="green"
        clear()
      } else if (BMI>24.9 && BMI<30) {
          Result.textContent=firstName.value  +  lastName.value +" Your BMI value is "+BMI+" kilogran/msquare. You are overweight.You need to visit a doctor about this. Thank you for using my BMI Calculator. ";
          Result.style.color="orange"
          clear()
        } else  {
          Result.textContent=firstName.value + lastName.value +" Your BMI value is "+BMI+" kilogram/msquare. You are obese.You really need to see a doctor about this immediately. Thank you for using this BMI Calculator. ";
          Result.style.color="red"
          clear()
          }
        }
}


function clear(){
  firstName.value="" 
  lastName.value=""
  Height.value=""
  Mass.value=""
}