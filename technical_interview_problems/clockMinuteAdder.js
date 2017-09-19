const convertToMin = function(str){
  const split = str.split(':')
  const hr = split[0]
  const min = split[1]
  const totalMin = +hr * 60 + +min
  return totalMin
}

const convertToTime = function(min){
  const hrs = Math.floor(min / 60) || '12'
  const minutes = min % 60
  return hrs + ':' + (minutes >= 10 ? minutes : '0' + minutes)
}

const addMinutes = function(str, min){//brute force
  const cutoff = 12 * 60
  const minutes = convertToMin(str)
  const totalMinutes = minutes + min
  return convertToTime(totalMinutes % cutoff)
}

const r1 = addMinutes('1:30', 30);     // 2:00
const r2 = addMinutes('12:30', 40);    // 1:10
const r3 = addMinutes('11:59', 1);     // 12:00
const r4 = addMinutes('1:59', 240);    // 5:59
const r5 = addMinutes('1:23', 456789); // 6:32

console.log(r1, r2, r3, r4, r5)
