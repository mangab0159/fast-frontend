function makeData() {
  let etime = Math.floor(Math.random() * (240 - 1) + 1);
  let rtime = Math.floor(Math.random() * (1500 - 100) + 100);
  let lThumbFirst1 = Math.floor(Math.random() * 180);
  let lThumbFirst2 = Math.floor(Math.random() * 180);
  let lThumbSecond1 = Math.floor(Math.random() * 180);
  let lThumbSecond2 = Math.floor(Math.random() * 180);
  let lIndexFirst1 = Math.floor(Math.random() * 180);
  let lIndexFirst2 = Math.floor(Math.random() * 180);
  let lIndexSecond1 = Math.floor(Math.random() * 180);
  let lIndexSecond2 = Math.floor(Math.random() * 180);
  let lMiddleFirst1 = Math.floor(Math.random() * 180);
  let lMiddleFirst2 = Math.floor(Math.random() * 180);
  let lMiddleSecond1 = Math.floor(Math.random() * 180);
  let lMiddleSecond2 = Math.floor(Math.random() * 180);
  let lRingFirst1 = Math.floor(Math.random() * 180);
  let lRingFirst2 = Math.floor(Math.random() * 180);
  let lRingSecond1 = Math.floor(Math.random() * 180);
  let lRingSecond2 = Math.floor(Math.random() * 180);
  let lPinkyFirst1 = Math.floor(Math.random() * 180);
  let lPinkyFirst2 = Math.floor(Math.random() * 180);
  let lPinkySecond1 = Math.floor(Math.random() * 180);
  let lPinkySecond2 = Math.floor(Math.random() * 180);
  let rThumbFirst1 = Math.floor(Math.random() * 180);
  let rThumbFirst2 = Math.floor(Math.random() * 180);
  let rThumbSecond1 = Math.floor(Math.random() * 180);
  let rThumbSecond2 = Math.floor(Math.random() * 180);
  let rIndexFirst1 = Math.floor(Math.random() * 180);
  let rIndexFirst2 = Math.floor(Math.random() * 180);
  let rIndexSecond1 = Math.floor(Math.random() * 180);
  let rIndexSecond2 = Math.floor(Math.random() * 180);
  let rMiddleFirst1 = Math.floor(Math.random() * 180);
  let rMiddleFirst2 = Math.floor(Math.random() * 180);
  let rMiddleSecond1 = Math.floor(Math.random() * 180);
  let rMiddleSecond2 = Math.floor(Math.random() * 180);
  let rRingFirst1 = Math.floor(Math.random() * 180);
  let rRingFirst2 = Math.floor(Math.random() * 180);
  let rRingSecond1 = Math.floor(Math.random() * 180);
  let rRingSecond2 = Math.floor(Math.random() * 180);
  let rPinkyFirst1 = Math.floor(Math.random() * 180);
  let rPinkyFirst2 = Math.floor(Math.random() * 180);
  let rPinkySecond1 = Math.floor(Math.random() * 180);
  let rPinkySecond2 = Math.floor(Math.random() * 180);
  return {
    etime,
    rtime,
    lThumbFirstMin: lThumbFirst1 < lThumbFirst2 ? lThumbFirst1 : lThumbFirst2,
    lThumbFirstMax: lThumbFirst1 > lThumbFirst2 ? lThumbFirst1 : lThumbFirst2,
    lThumbSecondMin:
      lThumbSecond1 < lThumbSecond2 ? lThumbSecond1 : lThumbSecond2,
    lThumbSecondMax:
      lThumbSecond1 > lThumbSecond2 ? lThumbSecond1 : lThumbSecond2,
    lIndexFirstMin: lIndexFirst1 < lIndexFirst2 ? lIndexFirst1 : lIndexFirst2,
    lIndexFirstMax: lIndexFirst1 > lIndexFirst2 ? lIndexFirst1 : lIndexFirst2,
    lIndexSecondMin:
      lIndexSecond1 < lIndexSecond2 ? lIndexSecond1 : lIndexSecond2,
    lIndexSecondMax:
      lIndexSecond1 > lIndexSecond2 ? lIndexSecond1 : lIndexSecond2,
    lMiddleFirstMin:
      lMiddleFirst1 < lMiddleFirst2 ? lMiddleFirst1 : lMiddleFirst2,
    lMiddleFirstMax:
      lMiddleFirst1 > lMiddleFirst2 ? lMiddleFirst1 : lMiddleFirst2,
    lMiddleSecondMin:
      lMiddleSecond1 < lMiddleSecond2 ? lMiddleSecond1 : lMiddleSecond2,
    lMiddleSecondMax:
      lMiddleSecond1 > lMiddleSecond2 ? lMiddleSecond1 : lMiddleSecond2,
    lRingFirstMin: lRingFirst1 < lRingFirst2 ? lRingFirst1 : lRingFirst2,
    lRingFirstMax: lRingFirst1 > lRingFirst2 ? lRingFirst1 : lRingFirst2,
    lRingSecondMin: lRingSecond1 < lRingSecond2 ? lRingSecond1 : lRingSecond2,
    lRingSecondMax: lRingSecond1 > lRingSecond2 ? lRingSecond1 : lRingSecond2,
    lPinkyFirstMin: lPinkyFirst1 < lPinkyFirst2 ? lPinkyFirst1 : lPinkyFirst2,
    lPinkyFirstMax: lPinkyFirst1 > lPinkyFirst2 ? lPinkyFirst1 : lPinkyFirst2,
    lPinkySecondMin:
      lPinkySecond1 < lPinkySecond2 ? lPinkySecond1 : lPinkySecond2,
    lPinkySecondMax:
      lPinkySecond1 > lPinkySecond2 ? lPinkySecond1 : lPinkySecond2,

    rThumbFirstMin: rThumbFirst1 < rThumbFirst2 ? rThumbFirst1 : rThumbFirst2,
    rThumbFirstMax: rThumbFirst1 > rThumbFirst2 ? rThumbFirst1 : rThumbFirst2,
    rThumbSecondMin:
      rThumbSecond1 < rThumbSecond2 ? rThumbSecond1 : rThumbSecond2,
    rThumbSecondMax:
      rThumbSecond1 > rThumbSecond2 ? rThumbSecond1 : rThumbSecond2,
    rIndexFirstMin: rIndexFirst1 < rIndexFirst2 ? rIndexFirst1 : rIndexFirst2,
    rIndexFirstMax: rIndexFirst1 > rIndexFirst2 ? rIndexFirst1 : rIndexFirst2,
    rIndexSecondMin:
      rIndexSecond1 < rIndexSecond2 ? rIndexSecond1 : rIndexSecond2,
    rIndexSecondMax:
      rIndexSecond1 > rIndexSecond2 ? rIndexSecond1 : rIndexSecond2,
    rMiddleFirstMin:
      rMiddleFirst1 < rMiddleFirst2 ? rMiddleFirst1 : rMiddleFirst2,
    rMiddleFirstMax:
      rMiddleFirst1 > rMiddleFirst2 ? rMiddleFirst1 : rMiddleFirst2,
    rMiddleSecondMin:
      rMiddleSecond1 < rMiddleSecond2 ? rMiddleSecond1 : rMiddleSecond2,
    rMiddleSecondMax:
      rMiddleSecond1 > rMiddleSecond2 ? rMiddleSecond1 : rMiddleSecond2,
    rRingFirstMin: rRingFirst1 < rRingFirst2 ? rRingFirst1 : rRingFirst2,
    rRingFirstMax: rRingFirst1 > rRingFirst2 ? rRingFirst1 : rRingFirst2,
    rRingSecondMin: rRingSecond1 < rRingSecond2 ? rRingSecond1 : rRingSecond2,
    rRingSecondMax: rRingSecond1 > rRingSecond2 ? rRingSecond1 : rRingSecond2,
    rPinkyFirstMin: rPinkyFirst1 < rPinkyFirst2 ? rPinkyFirst1 : rPinkyFirst2,
    rPinkyFirstMax: rPinkyFirst1 > rPinkyFirst2 ? rPinkyFirst1 : rPinkyFirst2,
    rPinkySecondMin:
      rPinkySecond1 < rPinkySecond2 ? rPinkySecond1 : rPinkySecond2,
    rPinkySecondMax:
      rPinkySecond1 > rPinkySecond2 ? rPinkySecond1 : rPinkySecond2,
  };
}

var taskResults = [];
var ptid = 1;
var ctid = 1;

for (var tkcd = 1; tkcd <= 6; tkcd++) {
  for (var pcid = 1; pcid <= 12; pcid++) {
    let obj = makeData();
    var item = {
      ptid,
      ctid,
      pcid,
      tkcd,
      ...obj,
    };

    taskResults.push(item);
  }
}

export default taskResults;
