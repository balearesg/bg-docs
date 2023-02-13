import * as React from "react";
import { Card } from "./card";
export function Home() {
    return (
        <div className="home">
            <h1>Bienvenidos a la documentación Oficial de Baleares Group</h1>

            <p>
                En esta documentacion vas a poder encontrar informacion sobre los procesos desarrollados en Baleares
                Group, asi como la documentacion de los proyectos que usamos en el dia a dia a la hora de hacer
                aplicaciones de calidad
            </p>

            <div className="card__container">
                <Card title="Cómo públicar" href="/how-to-use">
                    Revisa la información de cómo agregar contenido a la documentación
                </Card>
                <Card title="Proceso de desarrollo" href="/development/standards">
                    Estandar de desarrollo definido para el equipo de la factory.
                </Card>
                <Card title="BG Auth" href="/auth-instalation">
                    Pasos para la implementacion de bg-auth en aplicaciones.
                </Card>
                <Card title="BG Auth" href="/auth-instalation">
                    Documentacion para la integracion del objeto session del bg-auth en aplicaciones.
                </Card>
                <Card title="BG Auth" href="/auth-instalation">
                    Documentacion del objeto para usuarios que provee bg-auth
                </Card>
                <Card title="Beyond UI" href="/how-to-use">
                    Implementacion de Beyond UI para la construccion de interfaces.
                </Card>
                <Card title="Essential IU" href="/how-to-use">
                    Implementacion de Essential-UI para la construccion de interfaces.
                </Card>

                <Card title="Entrenamiento" href="/trainee">
                    Implementacion de Essential-UI para la construccion de interfaces.
                </Card>
                
                <Card title="Jview" href="/jview">
                    Implementacion de Jview para la construccion de interfaces.
                </Card>
            </div>
        </div>
    );
}
