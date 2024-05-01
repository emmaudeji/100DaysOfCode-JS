// Maske the digits in a collection and return the masked version
// the first and last 4 index should not be masked
// only didgits are masked
// if the input length is less than 6, then reurn it.
// mask only the digits and return a string the way it is
// if does not contain digits or strings ...



const masked = (input) => {
  let typof = typeof input;
  if(typof !== "number" && typof !== "string")  return '';

  let cc = String(input)
  if (cc.length < 6) return cc;

  let first = cc.slice(0,1)
  let lastFour = cc.slice(-4)
  // let maskedV = cc.slice(1,cc.length - 4).replace(`/\d/g`, '#')
  let mask = ''
  for(let i=1;i<cc.length-4;i++){
    let current = cc[i];

    // cur = 6, #
    // cur = '', ''
    // cur = 'd', 'c'
    // parseInt(cur,10), #
    mask += isNaN(parseInt(current,10)) ? current : '#'
  }

  return `${first}${maskedV}${lastFour}`
  
}

console.log('result', masked(4567890435675454))