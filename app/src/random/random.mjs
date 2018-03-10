const getSomeText = () => {
  let some = 'aaa';
  let num = 123;

  if (num > 156) {
    some = 'bbb';
  } else {
    some += 'asdf124';
  }

  return some;
};

export {
  getSomeText
};