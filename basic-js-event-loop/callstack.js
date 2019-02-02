const foo = (x, y) => {
  console.log("second log");
  console.log(x + y);
  console.log("call stack end");
};

const bar = () => {
  console.log("first log");
  foo(1, 2);
};

const init = () => {
  console.log("call stack start");
  bar();
};

init();

//stack [ init, bar, foo ]
//first in last out
