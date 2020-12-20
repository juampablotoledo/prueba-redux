/*
Se importa createStore y combineReducers desde redux
y luego los diferentes reducers.

Declara la constante reducer igualándola a la función
combineReducers() y como atributos se pasa un objeto
que contiene los diferentes reducers que importamos
previamente.

Declara la constante store y se iguala a la función
createStore que a su vez recibe el conjunto de reducers
ya combinados en la constante reducer.

Esporta el store que se creó para cuando sea llamado
desde src/index.js
*/
import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';

const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
});

const store = createStore(reducer);

export default store;
