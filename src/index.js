module.exports = function check(str, bracketsConfig) {
   
    let stack = bracketsConfig.map(x => x.join(''));

    for (let i = 0; i < stack.length; i++) {
  
      if( str.includes(stack[i]) ) {
        str = str.replace(stack[i], '');
        i = -1;
      }
    }
  
    return str.length == 0 ? true : false
  }
