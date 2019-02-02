const foo = () => {
  console.log("second log");
};

const bar = () => {
  setTimeout(() => {
    console.log("second call but third log");
    console.log("task Queue example end");
  }, 0);
  foo();
};

const init = () => {
  console.log("task Queue example start");
  console.log("first log");
  bar();
};

init();

//callstack [init, bar, foo]
//task Queue [setTimeout]
