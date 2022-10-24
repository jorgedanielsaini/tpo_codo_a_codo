Descripción del proyecto

Link: https://aroha-ar.netlify.app/

* Para este proyecto se diseñó un Sitio Web estilo One Page, el mismo consta de 5 secciones:
	1.	Inicio
	2.	Tratamientos
	3.	Conócenos
	4.	Locales
	5.	Contacto

* Se utilizaron etiquetas semánticas para estructurar el sitio.

* En la sección “Contacto” se incorporó un formulario que contiene validaciones realizada mediante expresiones regulares. Las validaciones se realizan al escribir en cada uno de los inputs. Al enviar el formulario se corrobora que los datos sean los correctos (previamente validado) y que se hayan completados los campos obligatorios.
Si el envío no puede realizarse, se mostrará los mensajes correspondientes debajo de cada campo. Si el envío es satisfactorio se mostrará un modal de confirmación y se reseteará el formulario.

* Se utilizó un Iframe en la sección “Contacto” para incorporar el mapa de google maps. 

*Se utilizaron fuentes de google fonts para todo el proyecto.

* Todo el sitio es totalmente responsive.  Las cards que se encuentran en las secciones “Tratamientos” y “Locales” se adapta a distintos dispositivos. Las demás secciones tienen un breakpoint en 768px.

* Las animaciones se encuentran:
	•	Al pasar el mouse sobre los botones “Contactar” (en el inicio) y “Enviar” (en el formulario). 
	•	En el icono de abrir y cerrar el menú hamburguesa.
	•	Al hacer click en las secciones (no hace un salto sino que se desliza por el sitio hasta llegar a la sección)
	•	Al pasar el mouse sobre las fotos de las cards en “Locales”.
	•	Al pasar el mouse sobre las cards de “Conócenos”.

* La maquetación del sitio fue realizada tanto con flexbox como con grid.

* Se utilizó la API https://randomuser.me/, solo a los efectos de cumplir con la consigna del TPO. Los datos devueltos por la API modifica la primera card de “Conocenos”. Si la api no responde o da error, muestra la foto original con el nombre original, además se muestra el error por consola.

* No se utilizó Bootstrap
