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
