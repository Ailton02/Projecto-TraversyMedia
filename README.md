# Projecto-TraversyMedia
Este projeto foi construído com Vue.js no front-end e JSON Server como backend simulado. Ele tem como finalidade o gerenciamento de publicações, permitindo operações como criação, visualização, edição e exclusão de registros por meio de métodos HTTP (GET, POST, PUT, DELETE).

# Como Rodar O Projecto
clone o projecto:
https://github.com/Ailton02/Projecto-TraversyMedia.git

faça:1º npm install no terminal dentro do projecto
2º: abra o  terminal  e faça npm run dev
3°: abra um outro terminal e faça nom run server( para rodar o servidor)

# Como configurei o tailwind
instalação da bibliotca tailwindcss: npm install tailwindcss @tailwindcss/vite,
configaracao do plugin do vite, sua exportação:import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
}), juntamente com sua importação no style.css do projecto.


 # A cor #11e33 foi aplicada: 
 1º navbar da pagína, 
 2ºnos buttons read more em add job,edit job,
 3º nos subtitulos com h2(Salary, description etc)

