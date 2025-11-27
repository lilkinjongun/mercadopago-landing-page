# 🚀 Roadmap: Estratégia de Maximização de Ganhos (Mercado Pago)

## 🎯 Objetivo
Contornar o limite de ganhos de R$ 3.500 do programa "Convide e Ganhe" do Mercado Pago, trocando os links de indicação na landing page para maximizar o lucro total através de um parceiro (primo).

## 📋 Requisitos (O que precisamos)

| Item | Responsável | Status |
|---|---|---|
| **Landing Page** | Você (Pronto) | ✅ |
| **Seus Links de Indicação** | Você (Pronto) | ✅ |
| **Links de Indicação do Primo** | Primo | ⏳ |
| **Acesso ao Código da Landing Page** | Você | ✅ |
| **Documento de Controle** | Você | ✅ |

---

## 📈 Passo a Passo da Estratégia

### FASE 1: Preparação e Lançamento (Seu Link Ativo)

| Passo | Ação | Detalhes |
|---|---|---|
| **1. Lançamento** | Publicar a Landing Page | Use o URL gerado no deploy. |
| **2. Divulgação** | Iniciar o Marketing Digital | Usar as estratégias orgânicas e de baixo custo (Meta Ads) para gerar tráfego. |
| **3. Monitoramento** | Acompanhar Ganhos | Monitore seus ganhos no App Mercado Pago (Seção "Convide e Ganhe"). |
| **4. Preparar o Primo** | Coletar Links | O primo deve ter todos os links de indicação prontos (App, Maquininhas, Link de Pagamento). |

### FASE 2: Troca de Links (Quando o Limite estiver Próximo)

| Passo | Ação | Detalhes |
|---|---|---|
| **5. Sinal de Alerta** | Ganhos Próximos de R$ 3.500 | Quando faltar cerca de R$ 500 para o limite (R$ 3.000 ganhos). |
| **6. Edição do Código** | Trocar os Links na Landing Page | **Você** edita o arquivo `src/App.jsx` e substitui **TODOS** os seus links pelos links do primo. |
| **7. Deploy** | Publicar a Nova Versão | Fazer o build e o deploy da landing page com os links do primo. |
| **8. Controle** | Atualizar o Documento | Marcar seus links como "Esgotados" e os do primo como "Ativos". |

### FASE 3: Maximização (Link do Primo Ativo)

| Passo | Ação | Detalhes |
|---|---|---|
| **9. Continuidade** | Manter a Divulgação | O tráfego continua indo para a landing page, mas agora o primo recebe as comissões. |
| **10. Novo Monitoramento** | Acompanhar Ganhos do Primo | O primo monitora os ganhos dele no App Mercado Pago. |
| **11. Troca Reversa** | Se Necessário | Se o primo atingir o limite, vocês podem trocar para os links de outro parceiro ou voltar para os seus (se o limite for resetado). |

---

## 📝 Como Editar o Código (Passo 6)

O arquivo a ser editado é: `/home/ubuntu/mercadopago-landing/src/App.jsx`

**Onde editar:** Na lista `products` e na seção do App Mercado Pago, substitua as URLs:

```javascript
// Exemplo de Edição na lista de produtos
const products = [
  {
    name: "Point Pro 3",
    // Substitua este link!
    link: "https://mpago.li/SEU_NOVO_LINK_AQUI", 
    // ...
  },
  // ...
]

// Exemplo de Edição no botão do App Mercado Pago
<Button 
  onClick={() => handleProductClick("https://mpago.li/SEU_NOVO_LINK_AQUI")}
  // ...
>
  Abrir Conta Grátis
</Button>
```

**Atenção:** Certifique-se de substituir todos os links (App, Maquininhas e Link de Pagamento).

---

## 🤝 Benefício da Parceria

| Você | Primo |
|---|---|
| **Ganha:** R$ 3.500 (Limite) | **Ganha:** R$ 3.500 (Limite) |
| **Ganha:** Ativo (Landing Page + Tráfego) | **Ganha:** Comissões sem esforço de criação |
| **Total Potencial da Parceria:** R$ 7.000+ | |

