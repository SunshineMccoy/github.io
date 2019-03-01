function telephoneCheck(str) {
  // Good luck!
  /*
  let numStr = str.match(/\d/g).join('');
  console.log(numStr);
  console.log(numStr.length);
  console.log(numStr[0])
  if (numStr.length === 11 && numStr[0] !== '1') {

    return false;
  }
  if (numStr.length > 11 || numStr.length < 10) {
    return false;

  }
  if(/[A-Za-z\*\n\!\&#\?]/.test(str) === true) {

    return false
  }
  */
  console.log(str.match(/^1?\s?[\-\((?=\d\d\d\))]?\d\d\d[\-(?<=\d*\()\)]?\s?\d\d\d\s?\-?\d\d\d\d$/));
  if (/^1?\s?[\-\((?=\d\d\d\))]?\d\d\d[\-(?<=\d*\()\)]?\s?\d\d\d\s?\-?\d\d\d\d$/.test(str) === true) {
  return true;
} else {
  return false
}
}
telephoneCheck("27576227382");
