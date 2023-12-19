
# Projeto Qtanda - Site Web

Qtanda é o sistema web desenvolvido para controle de pedidos e entregas locais no ramo da alimentação. Foi desenvolvido usando React + Vite + Typescript com Babel e SWC.


## Autores

- [@rScherpel](https://github.com/rScherpel)
- [@victorfjansen](https://github.com/victorfjansen)


## Como rodar o projeto?

Instale as dependências com o npm

```bash
  npm i
```

Para rodar localmente:

```bash
  npm run dev
```

Gerando o build:

```bash
  npm run build
```

Rodar o lint no projeto:

```bash
  npm run lint:fix
```

Para commitar com [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/):§

```bash
  npm run commit
```
    
## Deploy

O deploy do projeto é automático! A branch main é protegida e todo merge feito nela vai para o ambiente produtivo.
Caso queira testar uma feature em dev, basta abrir a PR para a branch main e ter autorização na vercel para os deploys - será gerado um link provisório com o ambiente de dev referente àquela feature.

