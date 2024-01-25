"use strict"
// ? homework - izah
let username = prompt("Enter your username");
let password = prompt("Enter your password");
let age = parseInt(prompt("Enter your age"));

//Username = "Admin"
//Password = "admin123"
//Age>18
if (username=="Admin" && password=="admin123" && age>18) {
   console.log("Siz sisteme daxil oldunuz...")
}else if(username !="Admin") {
   console.log(`${username} duzgun username deyil...`)
}else if(password !="admin123"){
   console.log(`${password} bu password duzgun deyil ...`)
}
else{
   console.log("sisteme daxil olmadiniz ...")
}

// 2. username ,parol ve yashi yoxlayaraq düzgün olub olmadığını müəyyən edin.
// istifadəci prompt vasitəsi ilə username ,parol ve yashi  daxil edəcək.
// username ="Admin"
// parol="admin123"
// age >18
// bu şərtlər ödənildiyi halda sistemə daxil ola bilsin əks halda isə daxil olmasin.

// ! 
// && 
// ||

// alert()
// prompt

// if()
// {

// }else if(){

// }
// else{

// }