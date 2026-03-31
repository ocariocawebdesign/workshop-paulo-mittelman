import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, Monitor, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Obrigado() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-onyx flex flex-col items-center justify-center py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl bg-graphite rounded-sm border border-brand-purple/20 p-8 md:p-12 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-light to-brand-purple" />
        
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="text-brand-light w-24 h-24 mb-8" strokeWidth={1} />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-sand mb-4">
            Inscrição Confirmada!
          </h1>
          
          <p className="text-sand/70 text-lg mb-10 font-light leading-relaxed max-w-md">
            Seu pagamento foi aprovado com sucesso. Preparamos uma jornada profunda e transformadora para você.
          </p>

          <div className="w-full bg-onyx border border-white/5 rounded-sm p-8 mb-10 space-y-6 text-left relative group hover:border-brand-purple/30 transition-colors">
            <h2 className="text-brand-purple font-bold uppercase tracking-widest text-xs mb-2">Resumo do Workshop</h2>
            
            <div className="flex items-start gap-5">
              <div className="mt-1 w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center"><Calendar size={20} className="text-brand-purple" /></div>
              <div>
                <p className="text-sand font-bold uppercase tracking-wider text-sm mb-1">Datas</p>
                <p className="text-sand/50 text-sm">06 e 13 de Abril de 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="mt-1 w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center"><Clock size={20} className="text-brand-purple" /></div>
              <div>
                <p className="text-sand font-bold uppercase tracking-wider text-sm mb-1">Horário</p>
                <p className="text-sand/50 text-sm">18h00 às 19h30</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="mt-1 w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center"><Monitor size={20} className="text-brand-purple" /></div>
              <div>
                <p className="text-sand font-bold uppercase tracking-wider text-sm mb-1">Plataforma</p>
                <p className="text-sand/50 text-sm">Google Meet (Link exclusivo será enviado por e-mail)</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-8 py-5 bg-transparent border border-brand-purple text-brand-light font-bold uppercase tracking-widest text-sm hover:bg-brand-purple hover:text-white transition-all rounded-sm w-full sm:w-auto justify-center group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Voltar para a Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
