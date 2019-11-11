# apiRest-filmVote
Api Rest para FilmVote App

[![logo-proyecto](https://i.imgur.com/bbISOvdm.png)](https://i.imgur.com/bbISOvdm.png)

# Proyecto: Application MEAN Full-stack: Back-End | FilmVote
Por Toni Reis & Angela Turizo

### Objetivo

- Crear una aplicación funcional en la que se presenta una selección de películas con la posibilidad de ver el detalle de cada una con información como:
• Título

• Año de estreno

• Cartel

• Y sobretodo con la clasificación que tienen las películas en la imdb

- Usando la clasificación de la imdb hacer un sistema propio de votos para que las 5 más votadas sean proyectadas en una sala de cine. La votación se podrá realizar una vez el usuario este logueado.

- Desde el modelo anterior en el Back-End de la aplicación con el objetivo de incluir unos end-points que se usarán en el front-end para la interacción con el cliente.
Para el desarrollo del back-end hemos utilizando Node.js, Express, MongoDB y Mongoose. 
- Las consultas que se han implementado están separadas en tres controladores :
    • Films 
    
    • Usuarios 
    
    • Votos

         Proyecto Film Vote
            |_api
                |_controllers
                    |_films
                        |_create.js
                        |_index.js
                        |_list.js
                        |_listOne.js
                        |_remove.js
                        |_update.js
                    |_usuarios
                        |_index.js
                        |_login.js
                        |_register.js
                    |_votos
                        |_create.js
                        |_index.js
                        |_list.js
                        |_listOne.js
                        |_remove.js
                        |_update.js
                |_middleware
                    |_auth.js
                    |_error-handler.js
                |_models
                    |_films
                        |_dao.js
                        |_model.js
                    |_usuarios
                        |_dao.js
                        |_model.js
                    |_votos
                        |_dao.js
                        |_model.js
                    |_user
                        |_dao.js
                        |_model.js
                        |_register.js
                |_Mongo Connection Module
                    |_mongoManager.js
                |_services
                    |_index.js
                |_.env
                |_app.js
                |_server.js


Podemos encontrar la API en :

## API Host : https://filmvote-api.herokuapp.com/film

## Repositorio GitHub : https://github.com/kifka81/api


### Endpoints por apartados:

#### Usuario :

  endpoint: Obtener un token
        Método: POST
        uri: /user/model
                body parameters:
                    email
                        string (required) Example: email@myemail.com
                        Un email válido

          password
          string (required) Example: mypassword
          Una contraseña válida
                        
                        
Usuario | #Register | El usuario se registra desde la aplicación cliente
[![logo-proyecto](https://i.imgur.com/RvYkG5B.jpg)](https://i.imgur.com/RvYkG5B.jpg)

Usuario | #Login | El usuario se autentica desde la aplicación cliente
[![logo-proyecto](https://i.imgur.com/5XpSuXG.jpg)](https://i.imgur.com/5XpSuXG.jpg)

    Films :

Films | List | El usuario, autenticado, accede a una lista completa de elementos |
[![logo-proyecto](https://i.imgur.com/HaO5wzt.jpg)](https://i.imgur.com/HaO5wzt.jpg)

Films | List One | El usuario, autenticado, obtiene un elemento |
[![logo-proyecto](https://i.imgur.com/avrpsF7.jpg)](https://i.imgur.com/avrpsF7.jpg)

Films | Create One | El usuario, autenticado, crea un elemento |
[![logo-proyecto](https://i.imgur.com/avrpsF7.jpg)](https://i.imgur.com/avrpsF7.jpg)

Films | Update One | El usuario, autenticado, actualiza un elemento |
[![logo-proyecto](https://i.imgur.com/avrpsF7.jpg)](https://i.imgur.com/avrpsF7.jpg)
Films | Remove One | El usuario, autenticado, elimina un elemento |

    Votos

    Films | Create One | El usuario, autenticado, crea un elemento |
[![logo-proyecto](https://i.imgur.com/avrpsF7.jpg)](https://i.imgur.com/avrpsF7.jpg)

Films | Update One | El usuario, autenticado, actualiza un elemento |
[![logo-proyecto](https://i.imgur.com/avrpsF7.jpg)](https://i.imgur.com/avrpsF7.jpg)


                
                
                
