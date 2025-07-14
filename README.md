<h1>🚀 Painel Administrativo</h1>

<p>Este projeto é um painel administrativo para gerenciar usuários, produtos, categorias e visualizar gráficos dinâmicos. Ele utiliza <strong>React.js</strong> com <strong>Tailwind CSS</strong> e <strong>Redux Toolkit</strong>.</p>

<h2>📦 Tecnologias Utilizadas</h2>
<ul>
  <li>React.js</li>
  <li>Tailwind CSS</li>
  <li>Redux Toolkit</li>
  <li>Firebase Authentication</li>
  <li>OAuth</li>
  <li>React Router</li>
  <li>Axios</li>
  <li>Lucide React Icons</li>
  <li>Recharts</li>
  <li>Formik + Yup</li>
  <li>Framer Motion</li>
  <li>Vercel (para deploy)</li>
  <li>Flowbite (componentes prontos para React)</li>
  <li>daisyUI (componentes prontos para Tailwind)</li>
  <li>Headless UI (componentes acessíveis para React + Tailwind)</li>
  <li>JSON Server (para API fake)</li>
</ul>

<h2>📥 Como Baixar e Rodar o Projeto Localmente</h2>

<h3>1️⃣ Clonar o Repositório</h3>
<pre>
git clone https://github.com/lailacampos/adm-dashboard.git
</pre>

<h3>2️⃣ Acessar o Diretório do Projeto</h3>
<pre>
cd adm-dashboard
</pre>

<h3>3️⃣ Instalar as Dependências</h3>
<pre>
yarn install
</pre>

<h3>4️⃣ Rodar o Servidor de Desenvolvimento</h3>
<pre>
yarn dev
</pre>
<p>O projeto estará disponível em <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a> (ou em uma porta alternativa).</p>


<h3>5️⃣ Verifique se o Tailwind CSS Está Funcionando</h3>
<p>Se quiser testar se o Tailwind está funcionando corretamente, edite o arquivo <code>src/App.tsx</code> e substitua o conteúdo por:</p>

<pre>
export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind CSS está funcionando! 🎉</h1>
    </div>
  );
}
</pre>

<h3>6️⃣ Possíveis Problemas</h3>
<ul>
  <li>Se o Tailwind não funcionar, verifique se o <code>vite.config.ts</code> contém a configuração correta:</li>
</ul>

<pre>
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
</pre>

<ul>
  <li>Verifique também se o <code>tailwind.config.js</code> está correto:</li>
</ul>

<pre>
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
</pre>

<h2>🛠️ Como Testar os Endpoints com JSON Server</h2>

<h3>1️⃣ Instalar o JSON Server</h3>
Se ainda não tiver instalado, rode o seguinte comando:
<pre>
yarn add json-server --dev
</pre>

<h3>2️⃣ Criar um Arquivo <code>db.json</code></h3>
Crie um arquivo na raiz do projeto chamado <code>db.json</code> com os seguintes dados:
<pre>
{
  "products": [
    { "id": 1, "name": "Ração para Cachorro", "price": 50, "category": "Alimentos" },
    { "id": 2, "name": "Brinquedo para Gato", "price": 20, "category": "Brinquedos" }
  ],
  "users": [
    { "id": 1, "name": "João", "email": "joao@email.com" },
    { "id": 2, "name": "Maria", "email": "maria@email.com" }
  ],
  "orders": [
    { "id": 1, "userId": 1, "productId": 2, "quantity": 3 }
  ],
  "sales": [
    { "year": 2025, "month": 1, "total": 44801 }
  ]
}
</pre>

<h3>3️⃣ Rodar o JSON Server</h3>
Execute o seguinte comando para iniciar o servidor:
<pre>
yarn json-server --watch db.json --port 5000
</pre>
Agora, o JSON Server estará rodando em <a href="http://localhost:5000/" target="_blank">http://localhost:5000/</a>.

<h3>4️⃣ Testar os Endpoints</h3>
Você pode testar os endpoints no navegador, Insomnia ou Postman. Aqui estão alguns exemplos:

- **Listar todos os produtos**:  
  <pre>GET http://localhost:5000/products</pre>

- **Buscar produto por ID**:  
  <pre>GET http://localhost:5000/products/1</pre>

- **Filtrar produtos por nome**:  
  <pre>GET http://localhost:5000/products?name=Ração para Cachorro</pre>

- **Criar um novo produto**:  
  <pre>POST http://localhost:5000/products</pre>
  Corpo da requisição:
  <pre>
  {
    "name": "Coleira",
    "price": 35,
    "category": "Acessórios"
  }
  </pre>

- **Atualizar um produto**:  
  <pre>PUT http://localhost:5000/products/1</pre>
  Corpo da requisição:
  <pre>
  {
    "name": "Ração Premium para Cachorro",
    "price": 60
  }
  </pre>

- **Deletar um produto**:  
  <pre>DELETE http://localhost:5000/products/1</pre>

<h2>⚙️ Configuração do ESLint</h2>
<p>O projeto já possui um arquivo <code>eslint.config.js</code> gerado automaticamente.</p>

<h3>1️⃣ Rodar o ESLint Para Verificar Erros</h3>
<pre>
yarn lint
</pre>

<h3>2️⃣ Corrigir Problemas Automaticamente</h3>
<pre>
yarn lint:fix
</pre>

<h3>3️⃣ Personalizar Regras do ESLint</h3>
<p>Se desejar modificar as regras do ESLint, edite o arquivo <code>eslint.config.js</code> na raiz do projeto.</p>
<pre>
export default {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
};
</pre>

---
 <!--Utilidades: gerar árvore do projeto, etc:  -->
<h2>🌳 Estrutura do Projeto</h2
<p>Comando para gerar a árvore do projeto:</p>
<pre>
tree -I 'node_modules|\.yarn' -L 4 --dirsfirst > project_tree.txt
</pre>
