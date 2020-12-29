/*
Importa type (la cadena) y crea el alias findSuggestionsType
desde la acción findSuggestions.

Importa el objeto items, que es donde están guardados todos
los datos que se mostrarán en la aplicación.

Declara la constante defaultState como un arreglo vacío.

Declara la función reducer, ésta recibe el estado declarado
antes en defaultState y el objeto que eventualmente recibirá
de la acción usando type para el tipo de evento y payload
para los datos que deben ser digeridos por el reducer para
luego cambiar el estado o no.

Declara un switch que recibe el atributo type.

Discrimina si type es igual a findSuggestionType.

Condiciona si el payload existe para retornar un arreglo
vacío al estado.

Declara la constante regex, ésta tiene como argumentos un
elemento que significa "todo lo que tenga al principio las
mismas letras del payload" y una 'i', que dice que será
insensible a mayúsculas y minúsculas.

Retorna el arreglo items luego de utilizar en él el método
filter, que pasará por cada elemento buscando coincidencias
entre la expresión regular regex y las llaves title de cada
uno de los objetos que están en el arreglo.

Si hubo alguna coincidencia entonces el estado global ahora
contendrá un arreglo con tantos objetos como hayan
coincidencias con la expresión regular, si no las hay
entonces retorna un arreglo vacío.

El comportamiento predeterminado del switch es retornar state.

Exporta el reducer.
*/
import { type as findSuggestionsType } from "../actions/findSuggestions";
import items from "../../data/items";

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findSuggestionsType: {
            if (!payload) {
                return [];
            }

            const regex = new RegExp(`^${payload}`, "i");

            return items.filter((n) => regex.test(n.title));
        }

        default:
            return state;
    }
}

export default reducer;
