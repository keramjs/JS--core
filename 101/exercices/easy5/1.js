/* 
1 grade = 60 min
1 min = 60 sec

*/
function dms(angle) {
  let grades = String(Math.trunc(angle));
  let seconds
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"