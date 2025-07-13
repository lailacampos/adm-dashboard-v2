<h1>Vite + React + TypeScript + Tailwind CSS Template</h1>

<p>
  This template provides a fast starting point for projects using <strong>Vite</strong>, <strong>React</strong> (with TypeScript), and <strong>Tailwind CSS</strong>, all pre-configured for rapid development using <strong>Yarn Berry</strong> (Yarn v4+).
</p>

<hr>

<h2>🚀 Getting Started Locally</h2>
<ol>
  <li>
    <strong>Install dependencies:</strong>
    <pre><code>yarn install</code></pre>
  </li>
  <li>
    <strong>Start the development server:</strong>
    <pre><code>yarn dev</code></pre>
  </li>
  <li>
    <strong>Open your browser:</strong>
    <pre><code>http://localhost:5173</code></pre>
    <p>(or as indicated in the terminal)</p>
  </li>
</ol>

<hr>

<h2>🆕 Creating a New Project from This Template</h2>
<ol>
  <li>
    <strong>Create a new Vite project:</strong>
    <pre><code>yarn create vite my-app --template react-ts</code></pre>
    <p>Replace <code>my-app</code> with your desired project name.</p>
  </li>
  <li>
    <strong>Navigate to the project folder:</strong>
    <pre><code>cd my-app</code></pre>
  </li>
  <li>
    <strong>Add Tailwind CSS and its Vite plugin:</strong>
    <pre><code>yarn add tailwindcss @tailwindcss/vite</code></pre>
  </li>
  <li>
    <strong>Initialize Tailwind config (optional, if you want a config file):</strong>
    <pre><code>yarn dlx tailwindcss init -p</code></pre>
  </li>
  <li>
    <strong>Update <code>vite.config.ts</code> to include Tailwind:</strong>
    <pre><code>
import &#123; defineConfig &#125; from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'<br>
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
</code></pre>

  </li>
  <li>
    <strong>Install dependencies:</strong>
    <pre><code>yarn install</code></pre>
  </li>
  <li>
    <strong>Start developing!</strong>
    <pre><code>yarn dev</code></pre>
  </li>
</ol>

<hr>

<h2>📚 Useful Resources</h2>
<ul>
  <li><a href="https://vitejs.dev/">Vite Documentation</a></li>
  <li><a href="https://react.dev/">React Documentation</a></li>
  <li><a href="https://www.typescriptlang.org/">TypeScript Docs</a></li>
  <li><a href="https://tailwindcss.com/docs/">Tailwind CSS Docs</a></li>
  <li><a href="https://yarnpkg.com/">Yarn (Berry) Docs</a></li>
</ul>
<br>

---
<br>
<h1>Template Vite + React + TypeScript + Tailwind CSS</h1>

<p>
  Este template oferece um ponto de partida rápido para projetos utilizando <strong>Vite</strong>, <strong>React</strong> (com TypeScript) e <strong>Tailwind CSS</strong>, todos pré-configurados para desenvolvimento ágil usando <strong>Yarn Berry</strong> (Yarn v4+).
</p>

<hr>

<h2>🚀 Rodando o Projeto Localmente</h2>
<ol>
  <li>
    <strong>Instale as dependências:</strong>
    <pre><code>yarn install</code></pre>
  </li>
  <li>
    <strong>Inicie o servidor de desenvolvimento:</strong>
    <pre><code>yarn dev</code></pre>
  </li>
  <li>
    <strong>Abra o navegador:</strong>
    <pre><code>http://localhost:5173</code></pre>
    <p>(ou conforme indicado no terminal)</p>
  </li>
</ol>

<hr>

<h2>🆕 Criando um Novo Projeto com Esta Configuração</h2>
<ol>
  <li>
    <strong>Crie um novo projeto Vite:</strong>
    <pre><code>yarn create vite meu-app --template react-ts</code></pre>
    <p>Substitua <code>meu-app</code> pelo nome desejado para o seu projeto.</p>
  </li>
  <li>
    <strong>Entre na pasta do projeto:</strong>
    <pre><code>cd meu-app</code></pre>
  </li>
  <li>
    <strong>Adicione o Tailwind CSS e o plugin do Vite:</strong>
    <pre><code>yarn add tailwindcss @tailwindcss/vite</code></pre>
  </li>
  <li>
    <strong>Inicialize o Tailwind config (opcional, se quiser o arquivo de configuração):</strong>
    <pre><code>yarn dlx tailwindcss init -p</code></pre>
  </li>
  <li>
    <strong>Atualize o <code>vite.config.ts</code> para incluir o Tailwind:</strong>
    <pre><code>
import &#123; defineConfig &#125; from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'<br>
// https://vite.dev/config/
export default defineConfig(&#123;
  plugins: [react(), tailwindcss()],
&#125;)
    </code></pre>
  </li>
  <li>
    <strong>Instale as dependências:</strong>
    <pre><code>yarn install</code></pre>
  </li>
  <li>
    <strong>Comece a desenvolver!</strong>
    <pre><code>yarn dev</code></pre>
  </li>
</ol>

<hr>

<h2>📚 Recursos Úteis</h2>
<ul>
  <li><a href="https://vitejs.dev/">Documentação do Vite</a></li>
  <li><a href="https://react.dev/">Documentação do React</a></li>
  <li><a href="https://www.typescriptlang.org/">Documentação do TypeScript</a></li>
  <li><a href="https://tailwindcss.com/docs/">Documentação do Tailwind CSS</a></li>
  <li><a href="https://yarnpkg.com/">Documentação do Yarn (Berry)</a></li>
</ul>
