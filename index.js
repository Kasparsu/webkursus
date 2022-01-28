for(let i = 0;i<10;i++){
    console.log(i);
}

for(let i = 10;i>0;i--){
    console.log(i);
}

for(let i = 0;i<100;i+=2){
    console.log(i);
}

i = 1;
while (i < 1000000) {
    console.log(i);
    i*=2;
}

i = 1000000;
while (i < 1000000) {
    console.log(i);
    i*=2;
}


i = 1000000;
do {
    console.log(i);
    i*=2;
} while(i < 1000000);

let array = ['kalle', 'malle', 'mati', 'kati'];

for(let i = 0; i<array.length; i++){
    console.log(array[i]);
}

array.forEach(element => {
    console.log(element);
});