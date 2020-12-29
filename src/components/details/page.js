import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";
import AppBar from "../appBar";
import Button from "@material-ui/core/Button";
import "./style.css";


/*
Declara el componente Page como función.

Crea los respectivos alias para poder llamar las propiedades
que son pasadas desde el componente padre sin necesidad de
escribir props antes.

Retorna el código JSX de la vista.

Condiciona si currentItem existe y procede a crear la vista
con los datos obtenidos del objeto que proviene desde el
reducer currentItem. Los valores del objeto son utilizadas
en diversas partes de la vista usando objeto.llave para
llamarlos.

Si el objeto currentItem está vacío entonces muestra una
rueda de carga.

Crea un botón con un atributo onClick que llama a la función
goTo procedente del componente padre a través de las
propiedades.

Exporta el componente Page.
*/

function Page(props) {
    const { goTo, currentItem } = props;

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className="details-page">
                <Paper elevation={1} className="paper-container">
                    {currentItem ? (
                        <Fragment>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                {currentItem.title}
                            </Typography>

                            <div
                                className="item-image"
                                style={{
                                    backgroundImage: `url(${currentItem.image})`,
                                }}
                            />

                            <Typography
                                gutterBottom
                                component="p"
                                className="content"
                            >
                                {currentItem.content}
                            </Typography>
                        </Fragment>
                    ) : (
                        <CircularProgress className="item-loader" />
                    )}

                    <Button color="primary" onClick={() => goTo("/results")}>
                        Back
                    </Button>
                </Paper>
            </div>
        </Fragment>
    );
}

export default Page;
