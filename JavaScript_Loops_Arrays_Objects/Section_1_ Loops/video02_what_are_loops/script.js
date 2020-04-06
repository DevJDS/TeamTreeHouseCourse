function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;

}
let counter = 0 ;
while (counter < 10000 ){
  let randNUm = randomNumber(6);
  document.write(randNUm + ' ');
  counter += 1;
}

