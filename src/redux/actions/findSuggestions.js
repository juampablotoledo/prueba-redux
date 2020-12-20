/*
Exporta la constante type que es igual a la cadema
findSuggestions.

Declara la constante findSuggestions (no confundir con
la constante type igualada a la cadena findsuggestions)
y será igual a una función que recibe como propiedad
a text, para luego retornar un objeto que contiene a
type (que en éste caso sí corresponde a la constante
declarada anteriormente con la cadena findSuggestions)
y un payload que es igual al texto recibido.

Exporta la función findSuggestions.
*/
export const type = 'findSuggestions';

const findSuggestions = (text) => ({
    type,
    payload: text,
});

export default findSuggestions;
