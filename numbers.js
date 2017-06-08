function generateNumbers(){
 myArr = [];
  parseInt(myArr.push(1));
  parseInt(myArr.push(2));

  for (var i = 20; i > 0; i--) {
    myArr.push(myArr[0] + myArr[1]);
    myArr.shift();
    document.write(myArr[1] + "<br>");
    console.log(myArr[1]);
  }
 }

generateNumbers();
