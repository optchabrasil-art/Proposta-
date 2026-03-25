"use client";

import { Check, MapPin, CreditCard, Smartphone, Camera, IceCream, Download, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

export default function ProposalPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const generatePDF = async () => {
    if (!contentRef.current) return;
    setIsGeneratingPDF(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: 1200,
        scrollY: 0,
        onclone: (document) => {
          const style = document.createElement('style');
          style.innerHTML = `
            * {
              opacity: 1 !important;
              transform: none !important;
              animation: none !important;
              transition: none !important;
            }
          `;
          document.head.appendChild(style);
        }
      });
      
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdfWidth = canvas.width / 2;
      const pdfHeight = canvas.height / 2;
      
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [pdfWidth, pdfHeight],
      });
      
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("proposta-google-meu-negocio-gui-delicias-25.03.pdf");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#3c4043] selection:bg-[#e8f0fe]">
      <div ref={contentRef} className="bg-[#f8f9fa]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#dadce0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1a73e8] rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#3c4043]">Google Perfil Empresa</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e8f0fe,_transparent)] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-sm font-semibold mb-6"
          >
            <IceCream className="w-4 h-4" />
            <span>Proposta Comercial Exclusiva Gui Delícias</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#3c4043] mb-6 max-w-4xl mx-auto leading-tight"
          >
            Destaque sua <span className="text-[#1a73e8]">Sorveteria e Açaiteria</span> no Google
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#5f6368] mb-10 max-w-2xl mx-auto"
          >
            Apareça no topo das buscas locais e no Google Maps. Atraia mais clientes para o seu self-service, venda de litros e taças de açaí.
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#f8f9fa]" id="pacotes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3c4043] mb-4">Escolha o pacote ideal para o seu negócio</h2>
            <p className="text-[#5f6368]">Pacotes desenvolvidos especialmente para sorveterias e açaiterias.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pacote Essencial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-[#dadce0] shadow-sm overflow-hidden flex flex-col relative"
            >
              <div className="p-8 pb-6">
                <h3 className="text-2xl font-bold text-[#3c4043] mb-2">Pacote Essencial</h3>
                <p className="text-[#1a73e8] font-medium mb-4">Presença Profissional no Google</p>
                <p className="text-sm text-[#5f6368] leading-relaxed">Ideal para empresas que desejam aparecer no Google de forma profissional e otimizada, aumentando as chances de serem encontradas por novos clientes na região.</p>
              </div>
              <div className="px-8 pb-8 flex-1 flex flex-col">
                <p className="font-semibold text-[#3c4043] mb-4">O que está incluso:</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    "Criação ou otimização completa do perfil no Google Business Profile",
                    "Configuração da categoria correta do negócio (ex: sorveteria, açaiteria, etc.)",
                    "Criação de descrição estratégica, focada em buscas locais",
                    "Cadastro dos principais produtos (Self-service, Litros, Taças, etc.)",
                    "Ajuste e padronização de horário de funcionamento, endereço e contatos",
                    "Inclusão de até 10 fotos do ambiente e produtos",
                    "1 post por semana no perfil do Google (promoções, novidades ou conteúdos estratégicos)"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#5f6368]">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="mb-6">
                    <p className="text-sm text-[#5f6368] mb-1">Prazo de implementação</p>
                    <p className="font-medium text-[#3c4043] flex items-center gap-2">⏱ Até 7 dias úteis</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#5f6368] mb-1">Investimento</p>
                    <p className="font-bold text-xl text-[#3c4043]">R$ 397,00</p>
                    <p className="text-sm text-[#5f6368] mt-1">Pagamento único</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pacote Avançado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl border-2 border-[#1a73e8] shadow-xl overflow-hidden flex flex-col relative transform md:-translate-y-4"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#e8f0fe] to-transparent w-32 h-32 rounded-bl-full pointer-events-none"></div>
              <div className="p-8 pb-6">
                <div className="inline-block bg-[#1a73e8] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Mais Recomendado
                </div>
                <h3 className="text-2xl font-bold text-[#3c4043] mb-2">Pacote Avançado</h3>
                <p className="text-[#1a73e8] font-medium mb-4">Gestão e Crescimento no Google</p>
                <p className="text-sm text-[#5f6368] leading-relaxed">Ideal para empresas que querem manter o perfil ativo, bem avaliado e com maior destaque nas buscas, aumentando a confiança e a conversão de clientes.</p>
              </div>
              <div className="px-8 pb-8 flex-1 flex flex-col">
                <p className="font-semibold text-[#3c4043] mb-4">O que está incluso:</p>
                <ul className="space-y-3 flex-1 mb-8">
                  <li className="flex items-start gap-3 text-sm font-medium text-[#3c4043]">
                    <Check className="w-5 h-5 text-[#1a73e8] shrink-0 mt-0.5" />
                    <span>Tudo do Pacote Essencial</span>
                  </li>
                  <li className="text-sm font-semibold text-[#1a73e8] pt-2 pb-1">
                    + Gestão contínua do perfil
                  </li>
                  {[
                    "3 posts por semana no perfil do Google (promoções, novidades, produtos ou serviços)",
                    "Atualização frequente de fotos do negócio",
                    "Monitoramento e resposta estratégica às avaliações dos clientes",
                    "Estratégia simples para incentivar mais avaliações positivas",
                    "Relatório mensal detalhado de desempenho do perfil"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#5f6368]">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <div className="mb-6">
                    <p className="text-sm text-[#5f6368] mb-1">Prazo de implementação inicial</p>
                    <p className="font-medium text-[#3c4043] flex items-center gap-2">⏱ Até 7 dias úteis</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#5f6368] mb-1">Investimento</p>
                    <p className="font-bold text-xl text-[#1a73e8]">R$ 259,90</p>
                    <p className="text-sm text-[#5f6368] mt-1">Pagamento via Link de Pagamento</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Service: Photography */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#3c4043] text-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#5f6368] text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#1a73e8]/30 to-transparent w-64 h-64 rounded-bl-full pointer-events-none"></div>
            
            <div className="w-16 h-16 bg-[#1a73e8]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-[#8ab4f8]" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Serviço Adicional: Fotografia Profissional</h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              As fotos inclusas nos pacotes acima devem ser fornecidas pelo cliente. Quer imagens de alta qualidade que realmente vendem? Oferecemos serviço de fotografia profissional para o seu negócio.
            </p>
            
            <div className="inline-flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 backdrop-blur-sm">
              <span className="block text-4xl font-extrabold text-white mb-1">R$ 449,00</span>
              <span className="text-[#8ab4f8] font-medium text-lg">30 Fotos</span>
            </div>
            
            <p className="text-sm text-gray-400 italic">
              * Valores a consultar de acordo com a sua necessidade e localização.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#dadce0]"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3c4043] mb-4">Formas de Pagamento</h2>
              <p className="text-[#5f6368]">Facilitamos o investimento no crescimento do seu negócio.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#dadce0] shadow-sm">
                <div className="w-12 h-12 bg-[#e8f0fe] text-[#1a73e8] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3c4043] text-lg mb-1">Pix</h4>
                  <p className="text-[#5f6368] text-sm">Pagamento rápido, seguro e sem taxas adicionais.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#dadce0] shadow-sm">
                <div className="w-12 h-12 bg-[#e8f0fe] text-[#1a73e8] rounded-xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#3c4043] text-lg mb-1">Cartão de Crédito</h4>
                  <p className="text-[#5f6368] text-sm">À vista ou parcelado em até <strong className="text-[#3c4043]">2x com juros do cartão</strong>.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-white py-8 text-center text-[#5f6368] text-sm border-t border-[#dadce0]">
        <p>© 2026 Google Perfil Empresa. Todos os direitos reservados.</p>
      </footer>
      </div>

      {/* Floating PDF Download Button */}
      <button
        onClick={generatePDF}
        disabled={isGeneratingPDF}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white px-6 py-3 rounded-full shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed font-medium"
      >
        {isGeneratingPDF ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Gerando PDF...
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            Baixar PDF
          </>
        )}
      </button>
    </div>
  );
}
