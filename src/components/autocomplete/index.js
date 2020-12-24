/*
Declara el componente Autocomplete como una clase.

Crea el constructor para guardar el estado del componente

El estado es un objeto que tiene una única llave llamada
isOpen con valor falso.

Declara la función render.

Crea varios alias para el objeto this.props.suggestions,
las funciones this.props.onChangeText y
this.props.onChangeSelection y la cadena text para poder
llamarlas dentro de la clase sin escribir this.props.

Crea un alias para que el elemento isOpen del objeto 
this.state pueda ser llamado usando sólo isOpen.

Abre el return de la clase.

El componente InputBase proveniente de material-ui es
declarado, el atributo placeholder corresponde al texto
predeterminado que tendrá el input apenas inicie, el
atributo value es igual a this.props.text y es recibido
desde el state global, el atributo style contiene una
línea que define el ancho del input y onChange es igual
a una función que recibe el evento correspondiente al
cambio hecho.

Crea una constante newText que va a ser igual al valor 
actual del input.

Llama la función onChangeText y le pasa la constante 
newText. Dicha función está declarada en el index.js de
la clase IAppBar y llega hasta acá taladrada a través de
las propiedades (AppBar index.js > AppBar page.js > 
autocomplete index.js) y cambiará el state global de la
aplicación al ser la responsable de llamar a la acción
redux findSuggestions, haciendo que se pueda buscar
coincidencias con los parciales de texto introducido.

Condiciona si isOpen es falso y newText tiene una longitud
mayor a cero para cambiar isopen a verdadero. De otra forma,
si isOpen es verdadero pero newText tiene longitud cero
entonces isOpen será conmutado a falso.

Declara el comportamiento onBlur, es decir, cuando se hace
click fuera del input de texto. Éste dice que al cabo de
200 milisegundos luego de hacer click fuera del input el
estado de isOpen pasará a falso. Ese retraso cobrará
sentido más adelante.

Declara el comportamiento onFocus, es decir, cuando se hace
click dentro del input de texto. Éste condiciona si existe
texto o no para cambiar el valor de isOpen a verdadero o
falso respectivamente.

Declara onKeyPress, es decir, cuando se presione una tecla.

Coniciona si la tecla presionada es igual a "enter" y si
existe al menos un caracter en el input de texto. Si se
cumple la condición ésta llama la función onChangeSelection,
que al igual que onChangeText proviene de el index.js de
AppBar, donde se llama a la acción de redux findResults,
cambiando así el estado global de la aplicación.

Cierra la declaración del componente InputBase.

Se condiciona si isOpen es verdadero y se retorna un pedazo
de código JSX para mostrar una lista de sugerencias debajo
del input de texto. 

Dichas sugerencias no vienen del aire, provienen del estate
global de la aplicación y son llamados a través de la acción 
findSuggestions.js y el reducer suggestions.js. Y también
llega al autocomplete a través del taladrado de propiedades
desde el index.js de AppBar.

Usando suggestions.map se revisa el objeto suggestions
para crear un componente MenuItem (proveniente de 
material-ui) con un atributo key que será igual al id
de la sugerencia, un atributo component igual a div y el
más importante, el evento onClick, que llamará también a
la función onChengeSelection que nos llega a través de las
propiedades desde el index.js de AppBar y como se dijo
antes, cambia el estado global y redirige la aplicación
a la página de /results.

Seguidamente se cambia el estado de la clase Autocomplete,
isOpen a falso. 

En éste momento es que el atributo onBlur del componente
InputBase podría interferir, ya que al hacer click afuera
del input isOpen pasa a ser falso y como es requisito
para siquiera mostrar las sugerencias, entonces necesitamos
un pequeño restraso en el onBlur (fijado en 200ms) para que
isOpen siga siendo verdadero mientras hacemos click en la
sugerencia deseada y se pueda ejecutar rápidamente el
onChangeSelection que cambiará el contenido del input de
texto y lo igualará al título de la sugerencia a la que
hemos hecho click.

El contenido del componente MenuItem será simplemente el
nombre de la sugerencia.

Vale acotar que .map hace un recorrido por todo el objeto
suggestions y las sigerencias podrían ser múltiples o vacío
si no hay coincidencias, .map hará una iteración a través
del objeto y creará un componente MenuItem para cada una
de las sugerencias.

Exporta el componente Autocomplete


*/
import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import "./style.css";

class Autocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text,
        } = this.props;
        const { isOpen } = this.state;

        return (
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    value={text}
                    style={{ width: "100%" }}
                    onChange={(event) => {
                        const newText = event.target.value;
                        onChangeText(newText);

                        if (!isOpen && newText) {
                            this.setState({ isOpen: true });
                        } else if (isOpen && !newText) {
                            this.setState({ isOpen: false });
                        }
                    }}
                    onBlur={() => {
                        setTimeout(() => this.setState({ isOpen: false, }) , 200);
                    }}
                    onFocus={() => {
                        text? this.setState({ isOpen: true }):this.setState({ isOpen: false });
                    }}
                    onKeyPress={(event) => {
                        if (event.key === "Enter" && text) {
                            onChangeSelection(text);
                        }
                    }}
                />
                {isOpen && (
                    <Paper className="container-results" square>
                        {suggestions.map((suggestion) => (

                            <MenuItem
                                key={suggestion.id}
                                component="div"
                                onClick={() => {
                                    onChangeSelection(suggestion.title);
                                    this.setState({ isOpen: false });
                                }}
                            >
                                {suggestion.title}
                            </MenuItem>
                        ))}
                    </Paper>
                )}
            </div>
        );
    }
}

export default Autocomplete;
