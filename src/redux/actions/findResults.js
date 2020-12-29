/*
Exporta la constante type que será igual a la cadena
findResults.

Declara la función findResults (no confundir con la
constante type que es una cadena) que recibe como
argumento text y luego retorna un objeto con la
constante type y un payload igual al argumento recibido.

Exporta la función findResults

Ésta acción es llamada desde el componente IAppBar, más
precisamente desde el componente nieto Autocomplete, donde
se llama a la acción cada vez que habiendo un texto escrito
en el input de texto se presiona la tecla enter o cuando
se hace click en una de las sugerencias. 
*/

export const type = 'findResults';

const findResults = (text) => ({
    type,
    payload: text,
});

export default findResults;
