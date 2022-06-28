# Acompanhamento

## Como instalar
### Subir o banco com Docker
É necessário acessar o diretório `db` e rodar o seguinte comando para poder subir uma imagem do banco com [Docker]():
```
docker-compose up
```
### Rodar as queries
Identificando o `id` do container, é necessário abrir o banco e rodar as queries, que estão presentes dentro do arquivo `queries.sql`:
```
docker ps
docker exec -ti {docker_id} psql -d {db_name} -U {user}
```

### Instalar bibliotecas
```
npm install
```

## Como rodar
```
npm run dev
```

## Lista de Rotas

### GET /requerimentos
Endpoint retorna um conjunto de requerimentos salvos no banco.

**Response**

```
{
   "message":"Requerimentos retornados com sucesso!",
   "metadata":[
      {
         "id":"1",
         "dnome":"aproveitamento_de_estudos",
         "datacadastro":"2022-04-05T03:00:00.000Z",
         "dataatualizacao":"2022-05-05T03:00:00.000Z",
         "status":"ativo",
         "fnome":"João"
      },
      {
         "id":"2",
         "dnome":"trancamento_parcial_de_disciplinas",
         "datacadastro":"2021-11-25T03:00:00.000Z",
         "dataatualizacao":"2022-01-25T03:00:00.000Z",
         "status":"cancelado",
         "fnome":"João"
      },
      {
         "id":"3",
         "dnome":"adicionar_atividades_complementares",
         "datacadastro":"2021-05-03T03:00:00.000Z",
         "dataatualizacao":"2021-09-03T03:00:00.000Z",
         "status":"ativo",
         "fnome":"Alicia"
      },
      {
         "id":"4",
         "dnome":"mudanca_de_curso",
         "datacadastro":"2022-02-06T03:00:00.000Z",
         "dataatualizacao":"2022-05-06T03:00:00.000Z",
         "status":"finalizado",
         "fnome":"Alicia"
      },
      {
         "id":"5",
         "dnome":"trancamento_total_de_disciplinas",
         "datacadastro":"2022-01-04T03:00:00.000Z",
         "dataatualizacao":"2022-05-04T03:00:00.000Z",
         "status":"finalizado",
         "fnome":"Alicia"
      }
   ]
}
```

### GET /requerimentos/:id
Endpoint retorna apenas um requerimento, passando o identificador pelos parâmetros da `uri`.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `id` | required | string  | Index do requerimento, que se trata de uma número inteiro, mas como todos os parâmetos vêm no formato de texto.


**Response**

```
{
   "message":"Requerimento retornado com sucesso!",
   "metadata":{
      "id":"4",
      "dnome":"mudanca_de_curso",
      "datacadastro":"2022-02-06T03:00:00.000Z",
      "dataatualizacao":"2022-05-06T03:00:00.000Z",
      "status":"finalizado",
      "fnome":"Alicia"
   }
}
```

### POST /requerimentos
Endpoint salva um requerimento, acessando as informações contidas no corpo da requisição.

**Parameters**


|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `idProtocolo` | required | number  | O identificador do requerimento.                                                                     |
|        `nomeProtocolo` | required | string  | O nome do requerimento. |
| `stProtocolo` | required | string | O status do andamento do requerimento.                    |
|       `funcionarioNome` | optional | string  | O nome do funcionário que está trabalhando com o requerimento do estudante.  


**Response**

```
{
   "message":"Requerimento criado com sucesso!",
   "metadata":{
      "id":"6",
      "dnome":"mudanca_de_curso",
      "datacadastro":"2022-02-06T03:00:00.000Z",
      "dataatualizacao":"2022-05-06T03:00:00.000Z",
      "status":"finalizado",
      "fnome":"Alicia"
   }
}
```

### PUT /requerimentos/:id
Endpoint atualiza um requerimento, passando o identificador pelos parâmetros da `uri` e acessando as informações contidas no corpo da requisição.

**Parameters**


|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `id` | required | string  | Index do requerimento, que se trata de uma número inteiro, mas como todos os parâmetos vêm no formato de texto.                                                                    |
|        `nomeProtocolo` | optional | string  | O nome do requerimento. |
| `stProtocolo` | optional | string | O status do andamento do requerimento.                    |
|       `funcionarioNome` | optional | string  | O nome do funcionário que está trabalhando com o requerimento do estudante.  


**Response**

```
{
   "message":"Requerimento atualizado com sucesso!",
   "metadata":{
      "id":"4",
      "dnome":"mudanca_de_curso",
      "datacadastro":"2022-02-06T03:00:00.000Z",
      "dataatualizacao":"2022-05-06T03:00:00.000Z",
      "status":"finalizado",
      "fnome":"Maria"
   }
}
```

### DELETE /requerimentos/:id
Endpoint remove um requerimento, passando o identificador pelos parâmetros da `uri`.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `id` | required | string  | Index do requerimento, que se trata de uma número inteiro, mas como todos os parâmetos vêm no formato de texto.


**Response**

```
{
   "message":"Requerimento removido com sucesso!",
}
```