import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { CheckCircle2, Wallet, CreditCard, Smartphone, QrCode, TrendingUp, Gift, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // IMPORTANTE: Substitua este link pelo seu link de indicação do Mercado Pago
  const referralLink = "https://mpago.li/1DJq3bh"

  const handleCTAClick = () => {
    window.open(referralLink, '_blank')
  }

  const benefits = [
    {
      icon: <Wallet className="w-8 h-8 text-blue-400" />,
      title: "Conta Digital Gratuita",
      description: "Sem taxa de manutenção, sem pegadinhas. Use seu dinheiro como quiser."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Rendimento Automático",
      description: "Seu saldo rende 100% do CDI automaticamente, mais que a poupança tradicional."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-400" />,
      title: "Cartão sem Anuidade",
      description: "Cartão de crédito e débito sem anuidade, sujeito à análise de crédito."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: "Pagamentos e Recargas",
      description: "Pague contas, boletos e faça recargas de celular direto pelo app."
    },
    {
      icon: <QrCode className="w-8 h-8 text-yellow-400" />,
      title: "Pagamento com QR Code",
      description: "Pague com QR Code em milhares de lojas físicas e online."
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Segurança Garantida",
      description: "Tecnologia de ponta para proteger seu dinheiro e seus dados."
    }
  ]

  const steps = [
    {
      number: "1",
      title: "Clique no Botão",
      description: "Clique em 'Quero Meu Desconto' e baixe o app do Mercado Pago."
    },
    {
      number: "2",
      title: "Crie sua Conta",
      description: "Cadastre-se gratuitamente e valide seus documentos no app."
    },
    {
      number: "3",
      title: "Ganhe R$ 20",
      description: "Faça sua primeira transação e receba seu desconto de R$ 20!"
    }
  ]

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Oferta Exclusiva por Tempo Limitado</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Ganhe R$ 20 de Desconto no Mercado Pago
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Abra sua conta digital <span className="text-green-400 font-semibold">100% gratuita</span> através do meu convite especial e comece com <span className="text-blue-400 font-semibold">R$ 20 de bônus</span> para usar como quiser!
            </p>

            {/* CTA Button */}
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105 group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Quero Meu Desconto de R$ 20!
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Sem taxas escondidas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Cadastro em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Mais de 80 milhões de usuários</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Por que escolher o Mercado Pago?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A conta digital completa que facilita sua vida financeira e ainda faz seu dinheiro render mais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Como funciona? É simples!
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Em apenas 3 passos você garante sua conta gratuita e seu bônus de R$ 20.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"></div>
                  )}
                  
                  <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                      {step.number}
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-slate-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105 group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-y border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Pronto para transformar sua vida financeira?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Junte-se a mais de 80 milhões de brasileiros que já confiam no Mercado Pago. Abra sua conta agora e ganhe R$ 20 de bônus!
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 group"
            >
              <Gift className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Resgatar Meu Bônus Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p className="mb-2">
            Esta é uma página de divulgação independente do programa "Convide e Ganhe" do Mercado Pago.
          </p>
          <p>
            O valor do bônus e as condições podem variar. Consulte os{' '}
            <a 
              href="https://www.mercadopago.com.br/ajuda/2895" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Termos e Condições oficiais
            </a>
            {' '}do Mercado Pago.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

