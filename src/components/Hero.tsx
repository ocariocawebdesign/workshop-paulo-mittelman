import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    window.location.href = "http://controle-clientes.local/checkout/?add-to-cart=12";
  };
  return (
    <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden px-6 pt-20">
      
      {/* Brand Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-6 lg:left-12 z-50"
      >
        <img 
          src="/icon-transp2.png" 
          alt="Terapeuta Conecta" 
          className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" 
        />
      </motion.div>

      {/* Abstract Background Element */}
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(107,76,154,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Massive Typography Layer (Foreground Z-index overlapping image) */}
        <div className="lg:col-span-12 lg:row-start-1 lg:col-start-1 z-40 pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10.5vw] leading-[0.85] font-black uppercase tracking-tighter text-sand"
          >
            Análise<br />
            <span className="text-stroke-light opacity-90">Transacional</span>
          </motion.h1>
        </div>

        {/* Professional Portrait Layer (Foreground Z-index overlapping text) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 lg:col-start-7 lg:row-start-1 z-20 mt-12 lg:mt-0 relative"
        >
          <div className="aspect-[3/4] bg-onyx rounded-sm overflow-hidden border border-white/5 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent z-10 pointer-events-none opacity-80" />
            <div className="absolute inset-0 bg-brand-purple mix-blend-color opacity-30 group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none" />
            <img 
              src="/psicologa-em-ambiente.webp" 
              alt="Laura Silva"
              className="w-full h-full object-cover object-top grayscale contrast-125 opacity-40 hover:opacity-90 hover:grayscale-0 transition-all duration-700 relative z-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop';
              }}
            />
          </div>
          
          <div className="absolute -bottom-6 -left-12 bg-onyx border border-brand-purple/30 p-6 shadow-2xl z-30 ml-4 lg:ml-0">
             <p className="font-serif text-brand-light text-xl italic mb-1">Workshop Online</p>
             <p className="font-sans font-bold text-sand tracking-widest uppercase text-sm">Tratamento das Dependências</p>
          </div>
        </motion.div>

        {/* Info Box (Left Bottom) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:col-span-5 lg:col-start-1 lg:row-start-1 self-end z-40 lg:pb-12 mt-32 lg:mt-0 relative"
        >
          <div>
            <div className="h-px w-12 bg-brand-purple mt-16 lg:mt-20" />
            <p className="lg:mt-20 text-sand/80 text-lg md:text-xl font-light leading-relaxed">
              Uma abordagem profunda e transformadora para profissionais de saúde mental por <strong className="text-sand font-bold">Laura Silva</strong> 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8 md:items-center">
              <button onClick={handleCheckout} disabled={loading} className="group relative inline-flex items-center justify-center px-10 py-5 bg-brand-purple text-white font-black uppercase tracking-wider text-sm transition-all hover:bg-white hover:text-brand-purple rounded-sm overflow-hidden border border-brand-purple hover:border-white shadow-[0_0_20px_rgba(107,76,154,0.3)] disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? (
                  <span className="relative z-10 text-center">Redirecionando...</span>
                ) : (
                  <>
                    <span className="relative z-10 transition-transform group-hover:-translate-y-16 text-center">Garantir Vaga</span>
                    <span className="absolute inset-0 z-10 flex flex-col items-center justify-center translate-y-16 group-hover:translate-y-0 transition-transform duration-300 leading-tight">
                      <span className="text-[10px] tracking-widest opacity-80 uppercase">Por Apenas</span>
                      <span className="tracking-widest text-lg">R$ 24,90</span>
                    </span>
                  </>
                )}
              </button>
              <p className="text-brand-purple font-bold tracking-widest uppercase text-xs pt-2 sm:pt-0">Vagas Limitadas</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
