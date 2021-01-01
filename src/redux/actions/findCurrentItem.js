/*
Exporta la constante type que será igual a la cadena
findCurrentItems, ésto para poder usarla como tipo de
acción y poder ser encaminada mejor por el reducer.

Declara la función findCurrentItem (no confundir con la
constante type que es una cadena) que recibe como
argumento itemId y luego retorna un objeto con la
constante type y un payload igual al argumento recibido,
con la particularidad de que tiene un operador unario (+)
delante, ésto sirve para convertir a número una cadena de
texto.

Ésta acción es llamada por el componente Details y el
argumento que recibe de ella proviene de la URL, que a su
vez es determinada por el componente Results, más
precisamente desde su hijo Page.
*/

export const type = 'findCurrentItem';
const findCurrentItem = (itemId) => (
	{
    type,
    payload: +itemId,
});

export default findCurrentItem;
