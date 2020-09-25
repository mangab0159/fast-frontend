function makeData() {
  let etime = Math.floor(Math.random() * (240 - 1) + 1);
  let rtime = Math.floor(Math.random() * (1500 - 100) + 100);
  let cdatetime = Math.floor(Math.random() * 20200924173100);
  return {
    etime,
    rtime,
    cdatetime,
  };
}

var taskResults = [];

for (var i = 0; i < 4; i++) {
  var tmp = [];
  for (var j = 0; j < 30; j++) {
    tmp.push(makeData());
  }
  taskResults.push(tmp);
}

export default taskResults;
