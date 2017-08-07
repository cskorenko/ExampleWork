

//execution context
/*
similar to scope disscussion
browser-demo in class exercise

this: keyword that refers to the execution context we are currently in or is called
rules: based on when a fn is exectued not declared
call a fn and try and access this property:
default binding; rule that states if you envoke a fn that''s not a property of an obj this refers to global
implicit binding; envoke a fn as a property of an obj- this refers to the obj you envoked the product of
new keyword or construct binding:
explicit binding: force a fn call to use a particular object with this;
*/
function foo() {
  this.bar = 'baz';
}
foo();
console.log(window.bar); //baz

//execute a fn that is a property of an objects

function foo() {
  console.log(this.bar);
}

var baz = {
  bar: 'howdy',
  foo: foo
};

baz.foo();
console.log(window.bar); //baz

//explicit binding: force a fn call to use a particular object with this;
  //call:
  //apply: only 2 arg: uses an array as the 2nd argument
  //calling this on the specific function below

var a = 5;
var b = 6;

function add(c, d) {
  return this.a + this.b + c + d;
}

console.log(add.call(this, 3, 4));
console.log(add.apply(this, [7, 8]));

// change the way the this refers to is bind:
//has same syntax as call & apply
//returns a fn bond to it's this item

function foo (arg) {
  console.log(this.a, arg);
  return this.a + arg;
}

var obj = {
  a:2
}

var bar= foo.bind(obj);
var b= foo(9);
console.log(b);

//new keyword this
function foo(bar, otherArg) {
  this.bar= bar;
  this.eggs = otherArg;
}

var baz= new foo('howdy');
console.log(baz.bar);
console.log(baz.eggs);
