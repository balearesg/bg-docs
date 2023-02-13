import * as React from 'react';
import { Card } from './card';
export function Home() {
	return (
		<div className="home">
			<h1>Bienvenidos a la documentación de Baleares Group</h1>

			<div className="card__container">
				<Card title="Cómo públicar" href="/how-to-use">
					Revisa la información de cómo agregar contenido a la documentación
				</Card>
				<Card title="Proceso de desarrollo" href="/how-to-use">
					Estandar de desarrollo definido para el equipo de la factory.
				</Card>
			</div>
		</div>
	);
}
