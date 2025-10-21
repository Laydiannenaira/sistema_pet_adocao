# 🐾 Sistema de Adoção de Pets

---

## 🏫 Curso

**Desenvolvimento Full Stack Básico**  
**Projeto DFS-2025.3**

---

## 📖 Contexto

Um abrigo de animais deseja modernizar seu processo de adoção. Atualmente, todas as informações dos pets e adotantes são controladas manualmente, resultando em atrasos e desorganização.  

O objetivo deste projeto é criar uma aplicação web que permita ao abrigo:  

- Gerenciar pets disponíveis para adoção  
- Registrar adotantes  
- Acompanhar o processo de adoção  
- Visualizar pets disponíveis com filtros básicos

---

## ⚙ Funcionalidades do Backend

1. **Cadastro de Pets**
   - Nome, espécie, idade, descrição, status (disponível/adotado)
2. **Gerenciamento de Adotantes**
   - Nome, e-mail, telefone, endereço
3. **Processo de Adoção**
   - Escolha do pet pelo adotante
   - Registro da data de adoção
   - Atualização automática do status do pet para "adotado"
4. **Visualização de Dados**
   - Listagem de pets, adotantes e histórico de adoções

---

## 🗄 Estrutura do Banco de Dados

- **Pets**
  - `id`, `name`, `species`, `age`, `description`, `status`
- **Adopters**
  - `id`, `name`, `email`, `phone`, `address`
- **Adoptions**
  - `id`, `petId`, `adopterId`, `adoptionDate`

---

## 💻 Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)  
- ReactJS (frontend a ser desenvolvido)

---

## 🚀 Como rodar o backend


1. Clone o repositório:

```bash
git clone <link-do-repo>
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo `.env` na raiz do backend:

```env
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/pet_adoption"
```

Substitua `<user>` e `<password>` pelo usuário e senha do PostgreSQL.

4. Execute as migrations e crie o banco de dados:

```bash
npx prisma migrate dev --name init
```

5. Inicie o servidor:

```bash
npm run dev
# ou
node index.js
```

6. Teste os endpoints (usando Postman, Insomnia ou navegador):

- `GET /pets` → lista todos os pets  
- `POST /pets` → cria novo pet  
- `GET /adopters` → lista todos os adotantes  
- `POST /adopters` → cria novo adotante  
- `POST /adoptions` → registra uma adoção  

---

### 📝 Observações

- O frontend ainda será desenvolvido com ReactJS  
- O backend está pronto para receber dados via API  
- O `.env` está no `.gitignore` para não ser enviado ao GitHub  

---

### 👥 Contribuição

Projeto desenvolvido como parte do curso **Desenvolvimento Full Stack Básico – Atlântico Avanti**.  
Cada membro deve detalhar sua contribuição no GitHub antes da entrega.

---

### 📅 Datas de Entrega

- **Backend:** 05/10/2025  
- **Frontend:** 25/10/2025

>>>>>>> equipe/feature/front-end-Sérgio
