import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';
import './style.css';


/*
Declara el componente Page como función.

Crea los respectivos alias para poder llamar las propiedades
que son pasadas desde el componente padre sin necesidad de
escribir props antes.

Declara la constante isEmpty. Es un booleano que entrega
verdadero o falso si results.lenght es igual a cero o no
respectivamente.

Condiciona si isEmpty es verdadero, de ser así quiere
decir que el objeto results está vacío y en consecuencia
muestra en pantalla que no hay resultados.

Si results tiene uno o más elementos entonces usando el
método map itera a través de cada elemento de dicho objeto
results para crear una vista para cada uno. Se usan diversos
componentes provenientes de material-ui y se accede a la
información contenida en el objeto usando la sintaxis
item.llave.

El componente Card posee un atributo onClick, que indica
que al hacer click al item se va a llamar la función goTo,
que redirigirá a /details y la llave id del item será parte
de la URL destino.

Exporta el componente Page.


*/
function Page(props) {
    const {
        results,
        goTo,
    } = props;

    const isEmpty = results.length === 0;

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className="results-page">
                {isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There are no results
                    </Typography>
                    :
                    results.map(item =>
                        <div
                            key={item.id}
                            className="card-container"
                        >
                            <Card
                                className="card"
                                onClick={() => goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className="card-media"
                                        image={item.image}
                                        title={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                    </div>)
                }
            </div>
        </Fragment>
    );
}

export default Page;
