var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');

var decimal = document.getElementById('decimal');
var clear = document.getElementById('clear');
var backspace = document.getElementById('backspace');
var display = document.getElementById('display');

var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');

var value = 0;
var pending;
var evalStringArray = [];

var updateDisplay = (click) => {
  var text = click.target.innerText;

  if(value == 0){
    value = '';
  }

  value += text;
  display.innerText = value;
}

var operation = (click) => {
  var operator =  click.target.innerText;

  switch(operator) {
    case '+':
      pending = value;
      value = '0';
      display.innerText = value;
      evalStringArray.push(pending);
      evalStringArray.push('+');
      break;

    case '-':
      pending = value;
      value = '0';
      display.innerText = value;
      evalStringArray.push(pending);
      evalStringArray.push('-');
      break;

    case 'x':
      pending = value;
      value = '0';
      display.innerText = value;
      evalStringArray.push(pending);
      evalStringArray.push('*');
      break;

    case '÷':
      pending = value;
      value = '0';
      display.innerText = value;
      evalStringArray.push(pending);
      evalStringArray.push('/');
      break;

    case '=':
      evalStringArray.push(value);
      var equals = eval(evalStringArray.join(' '));
      value = equals + '';
      display.innerText = value;
      evalStringArray = [];
      break;
    default:
      break;
  }
}


for(var i=0;i<numbers.length;i++){
  numbers[i].addEventListener('click', updateDisplay, false);
}
for(var i=0;i<operators.length;i++){
  operators[i].addEventListener('click', operation, false);
}

clear.onclick = () => {
  value = '0';
  pending = undefined;
  evalStringArray = [];
  display.innerHTML = value;
}

backspace.onclick = () => {
  let length = value.length;
  value = value.slice(0, length-1);

  if(value == ''){
    value = '0';
  }
  display.innerText = value;
}

decimal.onclick = () => {
  if(!value.includes('.')){
    value += '.';
  }
  display.innerText = value;
}
