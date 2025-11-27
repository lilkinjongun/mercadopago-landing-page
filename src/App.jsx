import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { CheckCircle2, ArrowRight, Gift, Smartphone, Zap, TrendingUp, Shield } from 'lucide-react'
import './App.css'
import pointSmart2 from './assets/point-smart-2.webp'
import pointPro3 from './assets/point-pro-3.webp'
import pointAir2 from './assets/point-air-2.jpg'
import pointMiniNfc from './assets/point-mini-nfc.jpg'
import pointTap from './assets/point-tap.webp'

function App() {
  const products = [
    {
      name: "Point Pro 3",
      image: pointPro3,
      description: "Aceite vouchers e imprima comprovantes.",
      features: [
        "Imprime comprovantes",
        "Aceita vouchers",
        "Conexão 4G e Wi-Fi",
        "Bateria de longa duração"
      ],
      price: "12x R$ 11,65",
      priceVista: "R$ 139,90",
      discount: "80% OFF",
      link: "https://mpago.li/33shz27",
      badge: "MAIS COMPLETA",
      cashback: "100% de cashback na Black Friday"
    },
    {
      name: "Point Smart 2",
      image: pointSmart2,
      description: "A solução mais potente para impulsionar suas vendas.",
      features: [
        "Tela touchscreen grande",
        "Sistema Android",
        "Aceita múltiplas formas de pagamento",
        "Gestão completa de vendas"
      ],
      price: "12x R$ 19,15",
      priceVista: "R$ 229,90",
      discount: "72% OFF",
      link: "https://mpago.li/1DJq3bh",
      badge: "MAIS POTENTE",
      cashback: "100% de cashback na Black Friday"
    },
    {
      name: "Point Air 2",
      image: pointAir2,
      description: "Leve no seu bolso e venda sem celular.",
      features: [
        "Compacta e portátil",
        "Conexão 4G integrada",
        "Pagamento por aproximação (NFC)",
        "Bateria de longa duração"
      ],
      price: "12x R$ 7,49",
      priceVista: "R$ 89,90",
      discount: "74% OFF",
      link: "https://mpago.li/1Yoa8u6",
      badge: "MAIS PORTÁTIL"
    },
    {
      name: "Point Mini NFC 2",
      image: pointMiniNfc,
      description: "Aceite também pagamentos por aproximação.",
      features: [
        "Super compacta",
        "Pagamento por aproximação (NFC)",
        "Conecta via Bluetooth ao celular",
        "Preço acessível"
      ],
      price: "12x R$ 2,49",
      priceVista: "R$ 29,90",
      discount: "74% OFF",
      link: "https://mpago.li/2QWH8HC",
      badge: "MELHOR CUSTO"
    },
    {
      name: "Point",
      image: pointMiniNfc,
      description: "A maquininha clássica do Mercado Pago.",
      features: [
        "Compacta e fácil de usar",
        "Conecta via Bluetooth",
        "Aceita todas as bandeiras",
        "Ideal para começar"
      ],
      price: "Consulte condições",
      priceVista: "",
      discount: "",
      link: "https://mpago.li/2cCndkW",
      badge: "CLÁSSICA"
    },
    {
      name: "Point Tap",
      image: pointTap,
      description: "Transforme seu celular em maquininha.",
      features: [
        "Sem custo de equipamento",
        "Use seu próprio celular",
        "Aceita pagamento por aproximação",
        "Disponível para Android e iOS"
      ],
      price: "GRÁTIS",
      priceVista: "Taxas a partir de 0,89%",
      discount: "20% OFF nas taxas",
      link: "https://mpago.li/33XzpyM",
      badge: "GRÁTIS"
    }
  ]

  const handleProductClick = (link) => {
    window.open(link, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Estilo Mercado Pago */}
      <header className="bg-[#009EE3] sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-lg px-3 py-2">
                <span className="text-[#009EE3] font-bold text-xl">mercado pago</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-white font-medium">Maquininhas e Conta Digital</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Fundo Amarelo estilo Mercado Pago */}
      <section className="bg-[#FFE600] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-6 font-semibold">
              <Gift className="w-5 h-5" />
              BLACK FRIDAY COM 100% DE CASHBACK
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Maquininhas Point com até 80% OFF
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-800">
              Aceite pagamentos com cartão, Pix e muito mais. Taxas a partir de <span className="font-bold">0,74%</span> e dinheiro na hora na sua conta!
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-800 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-medium">Dinheiro cai em segundos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-medium">Sem mensalidade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-medium">Aceita todas as bandeiras</span>
              </div>
            </div>

            <Button 
              onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
              size="lg"
              className="bg-[#009EE3] hover:bg-[#0086c3] text-white font-bold text-xl px-10 py-7 rounded-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Ver Maquininhas
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Por que escolher o Mercado Pago?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A solução completa para você vender mais e receber seus pagamentos com segurança.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-[#009EE3] transition-all">
              <CardContent className="p-6 text-center">
                <div className="bg-[#FFE600] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Dinheiro na Hora</h3>
                <p className="text-gray-600">
                  Receba o dinheiro das suas vendas em segundos na sua conta Mercado Pago.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#009EE3] transition-all">
              <CardContent className="p-6 text-center">
                <div className="bg-[#FFE600] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Taxas Competitivas</h3>
                <p className="text-gray-600">
                  Taxas a partir de 0,74% no débito. Quanto mais você vende, menos você paga.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#009EE3] transition-all">
              <CardContent className="p-6 text-center">
                <div className="bg-[#FFE600] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Segurança Total</h3>
                <p className="text-gray-600">
                  Tecnologia de ponta para proteger suas vendas e os dados dos seus clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maquininhas Point Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Escolha a maquininha ideal para você
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descontos de até 80% e 100% de cashback na Black Friday. Aproveite!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="border-2 border-gray-200 hover:border-[#009EE3] transition-all duration-300 hover:shadow-xl group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Badge */}
                  {product.badge && (
                    <div className="bg-[#009EE3] text-white text-xs font-bold px-3 py-1 text-center">
                      {product.badge}
                    </div>
                  )}

                  {/* Imagem */}
                  <div className="bg-gradient-to-br from-[#FFE600] to-[#ffd700] p-6 flex items-center justify-center h-64">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    {/* Nome e Descrição */}
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                    {/* Cashback Badge */}
                    {product.cashback && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-2 mb-4">
                        <p className="text-xs font-bold text-red-600 text-center">{product.cashback}</p>
                      </div>
                    )}

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Preço */}
                    <div className="mb-4">
                      {product.discount && (
                        <div className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                          {product.discount}
                        </div>
                      )}
                      <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                      {product.priceVista && (
                        <div className="text-sm text-gray-600">ou à vista {product.priceVista}</div>
                      )}
                    </div>

                    {/* Botão */}
                    <Button 
                      onClick={() => handleProductClick(product.link)}
                      className="w-full bg-[#009EE3] hover:bg-[#0086c3] text-white font-bold py-3 rounded-lg transition-all group/btn"
                    >
                      Comprar Agora
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Mercado Pago Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Ainda não tem conta no Mercado Pago?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Abra sua conta digital gratuita e ganhe <span className="font-bold text-[#009EE3]">R$ 20 de desconto</span> na primeira transação!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-[#009EE3] shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#009EE3] rounded-full p-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">App Mercado Pago</h3>
                    <p className="text-gray-600">Conta digital completa e gratuita</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Rendimento automático a 100% do CDI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Cartão de crédito sem anuidade</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Pagamentos e transferências grátis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Pix, boletos e recargas</span>
                  </div>
                </div>

                <div className="bg-[#FFE600] rounded-lg p-4 mb-6">
                  <p className="text-center font-bold text-gray-900">
                    🎁 Ganhe <span className="text-2xl text-[#009EE3]">R$ 20 de desconto</span> na primeira transação
                  </p>
                </div>

                <Button 
                  onClick={() => handleProductClick("https://mpago.li/1DJq3bh")}
                  className="w-full bg-[#009EE3] hover:bg-[#0086c3] text-white font-bold text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all group"
                >
                  Abrir Conta Grátis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Link de Pagamento Section */}
      <section className="py-16 bg-gradient-to-br from-[#009EE3] to-[#0086c3]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Venda pela internet com Link de Pagamento
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Crie links de pagamento personalizados e receba por Pix, cartão, boleto e muito mais!
            </p>
            
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Crie links de pagamento em segundos</span>
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Aceite Pix, cartão, boleto e mais</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Compartilhe por WhatsApp, email ou redes sociais</span>
                  </div>
                </div>

                <Button 
                  onClick={() => handleProductClick("https://mpago.la/1JETUvs")}
                  className="w-full bg-[#009EE3] hover:bg-[#0086c3] text-white font-bold text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all group"
                >
                  Começar a Usar
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#FFE600]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Comece a vender hoje mesmo!
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Escolha sua maquininha Point ou abra sua conta digital gratuita e transforme a forma como você recebe pagamentos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              className="bg-[#009EE3] hover:bg-[#0086c3] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Ver Todas as Opções
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-gray-300">
            Esta é uma página de divulgação dos produtos e serviços do Mercado Pago.
          </p>
          <p className="text-gray-400 text-sm">
            Os valores, taxas e condições podem variar. Consulte o{' '}
            <a 
              href="https://www.mercadopago.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#009EE3] hover:text-[#00b8ff] underline"
            >
              site oficial do Mercado Pago
            </a>
            {' '}para mais informações.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

