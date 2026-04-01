import { motion } from 'framer-motion';

export default function Bio() {
  return (
    <section className="py-32 px-6 relative bg-onyx border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative">
        
        {/* Decorative giant quote */}
        <div className="absolute top-0 right-0 text-[10rem] md:text-[20vw] font-serif text-white/[0.02] leading-none pointer-events-none select-none">
          "
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="md:w-1/3 pt-4 relative"
        >
          <h2 className="text-6xl md:text-7xl font-black uppercase text-brand-purple leading-none tracking-tighter mb-6 relative Z-10">
            A<br/>Facili<br/>tadora
          </h2>
          <div className="h-full w-px bg-brand-purple/20 absolute left-8 top-0 z-0 hidden md:block" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px", amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3 space-y-12 relative z-10"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-sand mb-4">Laura Silva</h3>
            <p className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-light font-bold tracking-widest uppercase text-xs rounded-sm mb-8 border border-brand-purple/20">
              @laurasilva
            </p>
            
            <div className="prose prose-invert prose-lg max-w-none text-sand/70 font-light leading-relaxed">
              <p>
                É Psicóloga Clínica (CRP 06/54321), formada pela Universidade de São Paulo (USP) em 2005. Com uma trajetória clínica dedicada à excelência no atendimento à saúde mental e no acolhimento de casos complexos.
              </p>
              <p>
                Especialista em Análise Transacional e Terapias Contextuais desde 2010. Sua abordagem clínica une metodologias pragmáticas baseadas em evidências com uma escuta empática e focada na evolução do paciente.
              </p>
              <p>
                Membro da Associação Brasileira de Terapias Cognitivas. Atualmente exerce a psicoterapia em consultório privado, aplicando sua vasta experiência na reestruturação comportamental e tratamento de dependências.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 p-px rounded-sm overflow-hidden">
             <div className="bg-onyx p-8 flex flex-col justify-center transition-colors hover:bg-white/[0.02]">
                <span className="text-5xl font-black text-brand-purple">2005</span>
                <span className="text-xs text-sand/50 uppercase tracking-widest mt-2">Formação USP</span>
             </div>
             <div className="bg-onyx p-8 flex flex-col justify-center transition-colors hover:bg-white/[0.02]">
                <span className="text-5xl font-black text-brand-purple">2010</span>
                <span className="text-xs text-sand/50 uppercase tracking-widest mt-2">Especialista</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
