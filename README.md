# API-de-Usuarios

## Funcionalidades
### - Retornar um JSON com o registro de usuários cadastrados.

`GET api-de-usuarios-nvuy.onrender.com/`

### - Cadastrar um novo usuário no banco de dados.

`POST api-de-usuarios-nvuy.onrender.com/`

Os dados devem estar no formato JSON e devem seguir o seguinte formato:

```
{
    "nome": "Paulo",
    "sobrenome": "Silva",
    "idade": 32
}
```
Um ID será automaticamente atribuido na requisição.

### - Deletar um usuário do banco de dados.

`DELETE api-de-usuarios-nvuy.onrender.com/:id`

### - Modificar um registro do banco de dados.

`PUT api-de-usuarios-nvuy.onrender.com/:id`

O Dados devem estar em um formato igual ao da requisição POST, citada acima.



## Tecnologias Usadas:
- Javascript (Node.js)
- Express.js
- MongoDB
- Render.com para hospedagem.
