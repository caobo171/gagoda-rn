export const formatMoney = (money:number)=>{
    return money.toLocaleString('vi-VN',{
        style:'currency',
        currency: 'VND'
    })
}


export function fromPairs(pairs) {
    var index = -1,
        length = pairs == null ? 0 : pairs.length,
        result = {};
  
    while (++index < length) {
      var pair = pairs[index];
      result[pair[0]] = pair[1];
    }
    return result;
  }