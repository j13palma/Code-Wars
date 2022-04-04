// write the function isAnagram
var isAnagram = function (test, original) {
  const testLow = test.toLowerCase();
  const originalLow = original.toLowerCase();
  const testObj = {};
  const originalObj = {};

  if (testLow.length !== originalLow.length) {
    return false;
  }

  for (let i = 0; i < testLow.length; i++) {
    if (testObj[testLow[i]]) {
      testObj[testLow[i]] += 1;
    } else {
      testObj[testLow[i]] = 1;
    }
  }

  for (let i = 0; i < originalLow.length; i++) {
    if (originalObj[originalLow[i]]) {
      originalObj[originalLow[i]] += 1;
    } else {
      originalObj[originalLow[i]] = 1;
    }
  }

  console.log(originalObj, '<>', testObj);

  for (key in originalObj) {
    console.log(originalObj[key], '<>', testObj[key]);
    if (originalObj[key] !== testObj[key]) {
      return false;
    }
  }
  return true;
};
