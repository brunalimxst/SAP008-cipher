const cipher = {
  encode: function encode (desloc, str) {
    if (typeof desloc !== "number" || typeof str !== "string"){
      throw TypeError ("Mensagem ou número em formato inválido"); 
    }
  
    let result = '';
    
    for( let i = 0; i < str.length; i++) {
      let deslocamento = (desloc - (parseInt(desloc / 26)) * 26);
      
      if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
  
        let charCode = ((((str.charCodeAt(i) - 65) + deslocamento) % 26) + 65);
        result += String.fromCharCode(charCode);
      } else {
        throw TypeError('Somente letras maiúsculas são aceitas!');
      }
    }
      return result;
  },

  decode: function decode (desloc, str) {
    if (typeof desloc !== "number" || typeof str !== "string"){
      throw TypeError("Mensagem ou número em formato inválido"); 
    }
    
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let deslocamento = (desloc - (parseInt(desloc / 26)) * 26);

      if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        let charCode = ((((str.charCodeAt(i) - 90) - deslocamento) % 26) + 90);
        result += String.fromCharCode(charCode);
      } else {
        throw TypeError('Somente letras maiúsculas são aceitas!');
      }
    }
      return result;
  }
}
  
export default cipher;