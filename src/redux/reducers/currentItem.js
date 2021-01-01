/*
Importa type (la cadena) y crea el alias findCurrentItemType
desde la acción findCurrentItem.

Importa el objeto items, que es donde están guardados todos
los datos que se mostrarán en la aplicación.

Declara la constante defaultState como un arreglo vacío.

Declara la función reducer, ésta recibe el estado declarado
antes en defaultState y el objeto que eventualmente recibirá
de la acción usando type para el tipo de evento y payload
para los datos que deben ser digeridos por el reducer para
luego cambiar el estado o no.

Declara un switch que recibe el atributo type, en éste caso
es una cadena proveniente de findCurrentItemType, una acción.

Condiciona si existe o no un payload. Si no existe, el case
retorna null.

Si existe un payload entonces al objeto items que importamos
al principio se le pasa el método .find(). Dicho método itera
a través de los elementos del objeto (n) y si el atributo id
de alguno de los objetos es igual al payload se retorna dicho
elemento.

Declara el comportamiento predeterminado del switch, en éste
caso retornar el estado declarado en defaultState, que es un
arreglo vacío sin modificación alguna.

Exporta la función reducer para que el store pueda acceder a 
ella cuando éste reducer sea importado desde allá.

*/

import { type as findCurrentItemType } from '../actions/findCurrentItem';
import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findCurrentItemType: {
            if (!payload) {
                return null;
            }
            
            return items.find(n => n.id === payload);
        }

        default:
            return state;
    }
}

export default reducer;
