# Protein Store
Projeto desenvolido com NextJS, Framer Motion, ReactJS,  NodeJS, python, flask, docker, utilizando arquitetura de microsserviços. Desenvolvido como MVP para sprint de arquitetura de sistemas da PUC-Rio 2023.2.

## Estrutura de pastas

MVP2
|____ frontend
|____ cupom
|____ frete

Obs: Docker compose está na pasta de frontend.

## Iniciando
Para rodar o projeto sem docker

```bash
npm install
npm run dev
# ou
yarn install
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000).


## Usando docker

Usando docker run:

Entre no diretorio dos 3 projetos: frontend, cupom e frete.

```bash
cd frontend
docker build -t frontend .
docker run -d  -p 3000:3000 frontend

cd cupom
docker build -t cupom .
docker run -d  -p 8000:8000 cupom

cd frete
docker build -t frete
docker run -d  -p 8001:8001 frete
```


Usando docker-compose:
Acesse o diretorio do frontend, e rode o comando abaixo.

```bash
docker-compose up -d
```


## API Routes

- /api/products - Lista todos os produtos
- /api/product/id - Lista de produtos usando id
- /api/categories/ - Lista de todas as categorias


Remote Endpoints: (usado no projeto)

- https://apicatalog.mycodewave.com/products - Lista todos os produtos
- https://apicatalog.mycodewave.com/products/id - Retorna o produto pelo id
- https://apicatalog.mycodewave.com/categories -  Lista todas as categorias

## Serviços

A - Frontend - 

B - API REMOTA (livre acesso) - https://github.com/ticomarques/apicatalog | https://apicatalog.mycodewave.com/products

C - Microsservicos Frete e Cupom - https://github.com/ticomarques/cupom_microservice | https://github.com/ticomarques/frete_microservice

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


