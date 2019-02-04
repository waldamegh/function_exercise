var morse_code = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..'
  };
  
  var morse_code = {
      a: '.-',
      b: '-...',
      c: '-.-.',
      d: '-..',
      e: '.',
      f: '..-.',
      g: '--.',
      h: '....',
      i: '..',
      j: '.---',
      k: '-.-',
      l: '.-..',
      m: '--',
      n: '-.',
      o: '---',
      p: '.--.',
      q: '--.-',
      r: '.-.',
      s: '...',
      t: '-',
      u: '..-',
      v: '...-',
      w: '.--',
      x: '-..-',
      y: '-.--',
      z: '--..'
    };
  
  var result = ""
  var firstWord = "hello word";
  var secondWord = "we love javascript";
  
  firstWord= firstWord.split(" ").join("").toString();
  
  for (let i = 0 ; i < firstWord.length ; i++){
      let index = firstWord.charAt(i)
      result += morse_code[index] + " "
   }
  
   //console.log(result);
  
   var code = "... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .";
  var r = ""
   var a = code.split(" ");
   for(let i = 0; i< a.length ; i++){
      var key = Object.keys(morse_code).filter(function(key) {return morse_code[key] === a[i]})[0];
      if (key === undefined){
          r += " "
      }else{
          r += key 
      }
     
      
   }
   //var key = Object.keys(morse_code).filter(function(key) {return morse_code[key] === a[1]})[0];
   console.log(r)
  
  
   
  
  
  
  