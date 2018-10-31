/*! @preserve
 * Calculator.js
 * version : 1.0.0
 * author : Symsey Cruz
 * license :
 *
 */

var calc = {
  currentValue: null,
  currentHistory: null,
  newInput: null,
  isUna: true,
  lastOperator: null,
  trigger: 0,
  size: 0,
  canPress: true
};

var keys = {
  PLUS: '+',
  MINUS: '-',
  MULTI: '*',
  DIVIDE: '/',
  EQUALS: '='
};

function insert( num, clicked ) {
  if ( calc.newInput == null ) document.form.textview.value = "";
  document.form.textview.value = update( document.form.textview.value + num );
  calc.newInput = document.form.textview.value;
  if ( clicked ) $("#textview").keyup();
}

function clearAll() {
  calc.newInput = null;
  document.form.textview.value = 0;
  calc.currentValue = null;
  calc.isUna = true;
  calc.currentHistory = null;
  document.getElementById( 'lbl' ).innerText = "";
}

function solve( operator, clicked ) {
  if ( calc.isUna == true ) {
    calc.lastOperator = operator;
    calc.isUna = false;
  }
  calc.canPress = true;
  var number = document.form.textview.value.replace( /,/g, "" );
  calc.newInput = number;
  if ( calc.currentValue !== null ) {
    switch ( calc.lastOperator ) {
      case keys.PLUS:
        calc.currentValue = parseFloat( calc.currentValue ) + parseFloat( number );
        calc.lastOperator = operator;
        break;
      case keys.MINUS:
        calc.currentValue = parseFloat( calc.currentValue ) - parseFloat( number );
        calc.lastOperator = operator;
        break;
      case keys.DIVIDE:
        calc.currentValue = parseFloat( calc.currentValue ) / parseFloat( number );
        calc.lastOperator = operator;
        break;
      case keys.MULTI:
        calc.currentValue = parseFloat( calc.currentValue ) * parseFloat( number );
        calc.lastOperator = operator;
        break;
    }
    var newvalue = calc.currentValue;
    document.form.textview.value = update( newvalue.toString() );
    if ( operator == keys.EQUALS ) calc.isUna = true;
  } else {
    calc.currentValue = document.form.textview.value.replace( /,/g, "" );
  }
  var newInput = update( calc.newInput );
  calc.currentHistory = calc.currentHistory == null ? " " + newInput + " " + calc.lastOperator : " " + calc.currentHistory + " " + newInput + " " + calc.lastOperator;
  document.getElementById( 'lbl' ).innerText = calc.currentHistory;
  calc.newInput = null;
  if ( clicked ) $("#textview").keyup();
}

function total( clicked ) {
  if ( calc.canPress ) {
    solve( keys.EQUALS, clicked );
    calc.canPress = false;
    calc.currentValue = null;
  }
}

function listen() {
  calc.size = document.form.textview.value.length;
  var value = parseFloat( document.form.textview.value );
  if ( event.key == keys.PLUS || event.key == keys.MINUS || event.key == keys.DIVIDE || event.key == keys.MULTI ) {
    solve( event.key, false );
  } else if ( event.key <= 9 || event.key == '.' ) {
    insert( event.key, false );
  } else if ( event.key == "Enter" && calc.canPress) {
    solve( keys.EQUALS, false );
    calc.canPress = false;
    calc.currentValue = null;
  } else if ( event.key == "Backspace" ) {
    backspace( false );
  }
  trigger();
}

function disableEnter() {
  if ( event.keyCode == 13 ) {
    event.preventDefault();
  }
}

function backspace( clicked ) {
  if ( clicked ) $("#textview").keyup();
  calc.size = document.form.textview.value.length;
  if ( calc.size > 1 ) {
    document.form.textview.value = update( document.form.textview.value.substr( 0, calc.size - 1 ) );
  } else {
    document.form.textview.value = "0";
    calc.trigger += 1;
  }
  trigger();
}

function trigger() {
  if ( calc.trigger >= 3 ) {
    clearAll();
    calc.trigger = 0;
    calc.newInput = null;
    alert( 'Reset Calculator' );
  }
}

function update( str ) {
  if ( str.includes( '.' ) ) {
    var chop = str.split( '.' );
    var hundreds = numeral( chop[ 0 ] ).format();
    return hundreds + "." + chop[ 1 ];
  } else {
    return numeral( str ).format();
  }
}
