# 💈 Barbershop - Sistema de Agendamento

Este projeto é uma plataforma de agendamento para barbearias, permitindo que os clientes escolham o serviço desejado, selecionem horários disponíveis e façam reservas de forma simples e eficiente.

## 📸 Visão Geral

![image](https://github.com/user-attachments/assets/c959b44e-14cf-42c3-a4ac-693d393486c8)


O sistema permite que os usuários:

- Agendem horários em barbearias.
- Escolham entre diferentes serviços oferecidos.
- Visualizem os horários disponíveis em tempo real.
- Autentiquem-se para um melhor gerenciamento de agendamentos.

![image](https://github.com/user-attachments/assets/4826a88b-7c29-411b-9cb5-3f3e0fa5a9d0)

![image](https://github.com/user-attachments/assets/54a74b21-7279-4bd1-b3e3-0c92020e7b95)


## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework React para construção da interface.
- **Tailwind CSS** - Estilização e responsividade do design.
- **TypeScript** - Tipagem estática para maior segurança e escalabilidade.
- **Prisma ORM** - Manipulação do banco de dados.
- **PostgreSQL** - Banco de dados utilizado.
- **Vercel** - Hospedagem da aplicação.
- **Auth.js** - Autenticação segura de usuários.

## 📦 Instalação e Execução

### 🔧 Configuração do Backend

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/barbershop.git
   cd barbershop

2. Instale as dependências:
   ```sh
   npm install

3. Configure as variáveis de ambiente (.env):
   ```sh
   DATABASE_URL=postgres://seu_usuario:senha@localhost:5432/barbershop
   NEXTAUTH_SECRET=sua_chave_secreta

4. Execute as migrações do banco de dados:
   ```sh
   npx prisma migrate dev

5. Inicie o servidor:
   ```sh
   npm run dev

### 🖥️ Executando o Frontend

1. Navegue até a pasta do frontend:
   ```sh
   cd frontend

2. Instale as dependências:
   ```sh
   npm install

3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev

## ✅ Funcionalidades

- ✔️ **Cadastro e autenticação de usuários** 🔐  
- ✔️ **Agendamento de serviços** 🗓️  
- ✔️ **Integração com banco de dados PostgreSQL** 📊  
- ✔️ **Interface moderna e responsiva** 🎨  
- ✔️ **Gerenciamento de horários disponíveis** 📅  
