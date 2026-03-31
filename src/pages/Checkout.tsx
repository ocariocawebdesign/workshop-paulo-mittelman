import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, CreditCard, ShieldCheck, Ticket, MessageCircle, ArrowLeft, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-onyx flex flex-col items-center py-12 px-4 md:px-8">
      {/* Header */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-white/5 pb-8 gap-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-sand/60 hover:text-sand font-bold uppercase tracking-widest text-xs transition-colors">
          <ArrowLeft size={16} /> Voltar ao workshop
        </button>
        <img src="/logo-teraputa-conecta_v3.png" alt="Terapeuta Conecta" className="h-10 opacity-80" />
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Flow */}
        <div className="lg:col-span-8 space-y-4">
           {/* Step 1 */}
           <div className={`bg-graphite rounded-sm overflow-hidden border ${activeStep === 1 ? 'border-brand-purple shadow-[0_0_30px_rgba(107,76,154,0.15)]' : 'border-white/5'} transition-all duration-500`}>
             <div className="p-6 flex items-center gap-4 cursor-pointer" onClick={() => setActiveStep(1)}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${activeStep > 1 ? 'bg-brand-purple text-white' : activeStep === 1 ? 'bg-brand-purple/20 text-brand-purple' : 'bg-white/5 text-sand/40'}`}>
                  {activeStep > 1 ? <Check size={16} /> : 1}
                </div>
                <h2 className={`text-xl font-black uppercase tracking-widest transition-colors ${activeStep === 1 ? 'text-sand' : 'text-sand/50'}`}>Recebimento do ingresso</h2>
                {activeStep > 1 && <span className="ml-auto text-brand-purple text-xs font-bold uppercase tracking-widest">Editar</span>}
             </div>
             <AnimatePresence>
               {activeStep === 1 && (
                 <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 pt-2 border-t border-white/5">
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setActiveStep(2); }}>
                       {/* Floating Labels Inputs */}
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2 md:col-span-2">
                           <label className="text-xs uppercase tracking-widest text-brand-light font-bold">Nome Completo *</label>
                           <input type="text" className="w-full bg-onyx border border-white/10 p-4 rounded-sm text-sand focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple transition-all" placeholder="Nome Sobrenome" required />
                         </div>
                         <div className="space-y-2 md:col-span-2">
                           <label className="text-xs uppercase tracking-widest text-brand-light font-bold flex items-center gap-2">Telefone WhatsApp *</label>
                           <div className="relative">
                             <MessageCircle size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 opacity-80" />
                             <input type="tel" className="w-full bg-onyx border border-white/10 p-4 pl-12 rounded-sm text-sand focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple transition-all" placeholder="(00) 00000-0000" required />
                           </div>
                         </div>
                         <div className="space-y-2">
                           <label className="text-xs uppercase tracking-widest text-brand-light font-bold">E-mail *</label>
                           <input type="email" className="w-full bg-onyx border border-white/10 p-4 rounded-sm text-sand focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple transition-all" placeholder="exemplo@email.com.br" required />
                         </div>
                         <div className="space-y-2">
                           <label className="text-xs uppercase tracking-widest text-brand-light font-bold">Confirmação de e-mail *</label>
                           <input type="email" className="w-full bg-onyx border border-white/10 p-4 rounded-sm text-sand focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple transition-all" placeholder="Confirme seu e-mail" required />
                         </div>
                       </div>
                       
                       <div className="p-4 bg-white/5 border border-white/10 rounded-sm text-sm text-sand/60 font-light flex items-start gap-4">
                         <div className="mt-1"><Mail size={16} className="text-brand-purple" /></div>
                         <p>Os ingressos e o link de acesso serão enviados para o e-mail e WhatsApp informados acima assim que recebermos a confirmação do pagamento.</p>
                       </div>

                       <div className="flex justify-end pt-4">
                         <button type="submit" className="px-8 py-4 bg-brand-purple text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-purple transition-colors rounded-sm shadow-lg">
                           Próximo <ChevronDown size={18} className="inline ml-2 rotate-[-90deg] -mt-1" />
                         </button>
                       </div>
                    </form>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

           {/* Step 2 */}
           <div className={`bg-graphite rounded-sm overflow-hidden border ${activeStep === 2 ? 'border-brand-purple shadow-[0_0_30px_rgba(107,76,154,0.15)]' : 'border-white/5'} transition-all duration-500`}>
             <div className="p-6 flex items-center gap-4 cursor-pointer" onClick={() => activeStep > 1 && setActiveStep(2)}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${activeStep > 2 ? 'bg-brand-purple text-white' : activeStep === 2 ? 'bg-brand-purple/20 text-brand-purple' : 'bg-white/5 text-sand/40'}`}>
                  {activeStep > 2 ? <Check size={16} /> : 2}
                </div>
                <h2 className={`text-xl font-black uppercase tracking-widest transition-colors ${activeStep === 2 ? 'text-sand' : 'text-sand/50'}`}>Informações dos ingressos</h2>
                {activeStep > 2 && <span className="ml-auto text-brand-purple text-xs font-bold uppercase tracking-widest">Editar</span>}
             </div>
             <AnimatePresence>
               {activeStep === 2 && (
                 <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 pt-2 border-t border-white/5">
                   <div className="p-6 bg-onyx border border-white/5 rounded-sm flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                     <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-purple">
                         <Ticket size={20} />
                       </div>
                       <div>
                         <p className="font-bold text-sand uppercase tracking-wider text-sm mb-1">Inteira Solidária | Lote 03</p>
                         <p className="text-sand/50 text-xs uppercase tracking-widest">Ingresso Único - 06 e 13 de Abril</p>
                       </div>
                     </div>
                   </div>
                   <div className="flex justify-end">
                     <button onClick={() => setActiveStep(3)} className="px-8 py-4 bg-brand-purple text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-purple transition-colors rounded-sm">
                       Próximo
                     </button>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

           {/* Step 3 */}
           <div className={`bg-graphite rounded-sm overflow-hidden border ${activeStep === 3 ? 'border-brand-purple shadow-[0_0_30px_rgba(107,76,154,0.15)]' : 'border-white/5'} transition-all duration-500`}>
             <div className="p-6 flex items-center gap-4 cursor-pointer" onClick={() => activeStep > 2 && setActiveStep(3)}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${activeStep > 3 ? 'bg-brand-purple text-white' : activeStep === 3 ? 'bg-brand-purple/20 text-brand-purple' : 'bg-white/5 text-sand/40'}`}>
                  {activeStep > 3 ? <Check size={16} /> : 3}
                </div>
                <h2 className={`text-xl font-black uppercase tracking-widest transition-colors ${activeStep === 3 ? 'text-sand' : 'text-sand/50'}`}>Proteção para imprevistos</h2>
                {activeStep > 3 && <span className="ml-auto text-brand-purple text-xs font-bold uppercase tracking-widest">Editar</span>}
             </div>
             <AnimatePresence>
               {activeStep === 3 && (
                 <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 pt-2 border-t border-white/5">
                   <div className="flex gap-4 p-6 border border-brand-purple/30 bg-brand-purple/5 rounded-sm items-start md:items-center mb-6">
                     <ShieldCheck className="text-green-500 shrink-0" size={32} />
                     <div>
                       <p className="text-green-400 font-bold text-sm uppercase mb-1">Proteção Garantida!</p>
                       <p className="text-sand/70 text-sm font-light">Você receberá a confirmação da cobertura por e-mail.</p>
                     </div>
                   </div>
                   <div className="flex justify-end">
                     <button onClick={() => setActiveStep(4)} className="px-8 py-4 bg-brand-purple text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-purple transition-colors rounded-sm">
                       Próximo
                     </button>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

           {/* Step 4 */}
           <div className={`bg-graphite rounded-sm overflow-hidden border ${activeStep === 4 ? 'border-brand-purple shadow-[0_0_30px_rgba(107,76,154,0.15)]' : 'border-white/5'} transition-all duration-500`}>
             <div className="p-6 flex items-center gap-4 cursor-pointer" onClick={() => activeStep > 3 && setActiveStep(4)}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 4 ? 'bg-brand-purple/20 text-brand-purple' : 'bg-white/5 text-sand/40'}`}>
                  4
                </div>
                <h2 className={`text-xl font-black uppercase tracking-widest transition-colors ${activeStep === 4 ? 'text-sand' : 'text-sand/50'}`}>Pagamento e Dados do Comprador</h2>
             </div>
             <AnimatePresence>
               {activeStep === 4 && (
                 <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 pt-2 border-t border-white/5">
                   <div className="py-16 flex flex-col items-center justify-center text-center opacity-80">
                      <CreditCard size={48} className="mb-6 text-brand-light" strokeWidth={1} />
                      <p className="font-bold text-lg uppercase tracking-widest mb-2 text-sand">Dados para confirmar a contratação</p>
                      <p className="text-sm text-sand/50 font-light max-w-sm mx-auto">Ambiente de demonstração. Integração com gateway pendente para finalizar a transação.</p>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>
        </div>

        {/* Right Column: Summary */}
        <div className="lg:col-span-4">
          <div className="bg-graphite rounded-sm overflow-hidden border border-white/5 sticky top-8 drop-shadow-2xl">
            <div className="p-6 lg:p-8 border-b border-white/5">
              <h3 className="text-xl font-black uppercase tracking-widest text-sand mb-6">Resumo do Pedido</h3>
              <p className="text-xs text-brand-light font-bold uppercase tracking-widest mb-3">06 e 13 de Abril de 2026</p>
              
              <div className="space-y-4 pt-2">
                <div>
                  <p className="font-bold text-sand uppercase tracking-wider text-sm mb-1">PISTA</p>
                  <p className="font-medium text-sand text-sm">1 Inteira Solidária | Lote 03 <span className="float-right">R$ 105,00</span></p>
                  <p className="text-sand/40 text-xs mt-1">(R$ 105,00 cada)</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 lg:p-8 border-b border-white/5 space-y-5">
               <div>
                 <p className="text-xs uppercase tracking-widest text-brand-light font-bold mb-2">Forma de entrega</p>
                 <div className="flex justify-between text-sm items-start">
                   <p className="text-sand/70 max-w-[150px]">Disponível no celular e para impressão</p>
                   <p className="text-sand font-bold">R$ 0,00</p>
                 </div>
               </div>
               
               {activeStep > 2 && (
                 <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex justify-between text-sm overflow-hidden">
                   <p className="text-sand/70">Pedido Protegido</p>
                   <p className="text-sand font-bold">R$ 10,87</p>
                 </motion.div>
               )}

               <div className="flex justify-between text-sm pt-2">
                 <p className="text-sand/70">Taxas</p>
                 <p className="text-sand font-bold">R$ 21,00</p>
               </div>
            </div>

            <div className="p-6 lg:p-8 bg-brand-purple/5">
               <div className="flex justify-between items-center mb-6">
                 <div>
                   <p className="font-black text-2xl uppercase tracking-widest text-sand">Total</p>
                   <p className="text-sand/40 text-xs">(1 item)</p>
                 </div>
                 <p className="font-black text-3xl text-brand-light">R$ {activeStep > 2 ? '136,87' : '126,00'}</p>
               </div>

               <p className="text-xs text-sand/30 font-light text-center flex items-center justify-center gap-2">
                 (selecione a forma de pagamento)
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
