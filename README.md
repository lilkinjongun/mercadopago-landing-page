# Landing Page - Mercado Pago

Landing page profissional para divulgação do programa "Convide e Ganhe" do Mercado Pago.

## 🎯 Sobre o Projeto

Esta landing page foi desenvolvida para divulgar as maquininhas Point e a conta digital do Mercado Pago, permitindo que você ganhe comissões através do programa de indicação oficial.

## 🚀 Funcionalidades

- ✅ Design responsivo com identidade visual do Mercado Pago
- ✅ Apresentação de todas as maquininhas Point (Pro 3, Smart 2, Air 2, Mini NFC 2, Point, Tap)
- ✅ Seção da conta digital do Mercado Pago
- ✅ Links de afiliado integrados
- ✅ CTAs otimizados para conversão
- ✅ Interface moderna e profissional

## 🛠️ Tecnologias Utilizadas

- **React** - Framework JavaScript
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## 📦 Como Executar Localmente

### Pré-requisitos

- Node.js 22.x ou superior
- pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lilkinjongun/mercadopago-landing-page.git

# Entre no diretório
cd mercadopago-landing-page

# Instale as dependências
pnpm install

# Execute o servidor de desenvolvimento
pnpm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
# Gerar build de produção
pnpm run build

# Os arquivos estarão na pasta /dist
```

## 📝 Personalização

Para personalizar os links de afiliado, edite o arquivo `src/App.jsx` e altere as URLs nos objetos de produtos:

```javascript
const products = [
  {
    name: "Point Pro 3",
    link: "https://mpago.li/SEU_LINK_AQUI",
    // ...
  },
  // ...
]
```

## 🌐 Deploy

Esta landing page pode ser hospedada em qualquer serviço de hospedagem estática:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📄 Licença

Este projeto é de uso pessoal para divulgação do programa "Convide e Ganhe" do Mercado Pago.

## 🤝 Contribuições

Este é um projeto pessoal, mas sugestões são bem-vindas!

---

Desenvolvido com ❤️ para maximizar ganhos no programa de indicação do Mercado Pago
