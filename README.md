
# API AUTH / CRUD

* Autenticação Admin
* Adicionar Produto
* Remover Produto
* Listar todos os Produtos
* Deletar Produto




## Documentação da API

#### Retorna todos os Produtos

```http
  POST /auth
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório.** |
| `password` | `string` | **Obrigatório.** |


#### Retorna o token jwt

```http
  GET /products
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Bearer token |

```javascript
    [
      {
        _id: "",
        _refererId: "",
        name: "",
        description: "",
        price: 0
      }
    ]
```

#### Adiciona um produto

```http 
  POST /product
```
| Header   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório**. Bearer token |

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. |
| `description`      | `string` | **Obrigatório**. |
| `price`      | `string` | **Obrigatório**. |


Recebe o produto criado.


#### Modifica um produto

```http 
  PUT /product
```
| Header   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório**. Bearer token |

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**.|
| `description`      | `string` | **Obrigatório**.|
| `price`      | `string` | **Obrigatório**.|


Recebe mensagem de sucesso.


#### Deleta um produto

```http 
  Delete /product/:id
```
| Header   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório**. Bearer token |

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**.|

**exemplo: https://seu_ip/product/seu_id**

Recebe mensagem de sucesso.
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`

`JWT_HASH`

`DATABASE`



## Instalação

Instale as dependencias com npm

```bash
  npm install 
```
### Para usar o projeto é necessario ter instalado:

- Mongodb
- Nodejs


## Uso/Exemplos

- Edite o arquivo localizado em: **/src/app/utils/createAdmin.js** para criar o usuário administrador.
- execute o comando **npm run createAdmin** e seu usuário admin será criado.

