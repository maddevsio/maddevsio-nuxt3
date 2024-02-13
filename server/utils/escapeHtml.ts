interface Chars {
  [key: string]: string; // Сигнатура индекса для определения типа ключей и их значений
  '<': string;
  '>': string;
  '"': string;
  '`': string;
  '=': string;
}

export const escapeHtml = (str: any) => {
  if (typeof str === 'string') {
    return str.replace(/[<>"'=`]/g, tag => {
      const chars: Chars = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '`': '&#x60;',
        '=': '&#x3D;',
      }
      return chars[tag] || tag
    })
  }
  return str
}
