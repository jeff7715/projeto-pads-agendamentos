## Database

Primeiro passo é rodar o script `scriptAgendaConsulta.sql`

Feito isso, para deixar padrão e não ficar mudando o arquivo de banco de dados, vamos criar um user para o projeto, abra seu mysql e rode os seguintes comandos.

```mysql
CREATE USER 'pads'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON * . * TO 'pads'@'localhost';
```