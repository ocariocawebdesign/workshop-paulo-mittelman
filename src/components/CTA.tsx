import { motion } from 'framer-motion';
import { CreditCard, MessageCircle } from 'lucide-react';

export default function CTA() {
  const email = "terapeutaconecta@gmail.com";

  return (
    <section id="inscrever" className="py-32 px-6 bg-onyx relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      
      {/* Abstract radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,76,154,0.15)_0%,rgba(10,10,12,1)_70%)] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto w-full text-center relative z-10"
      >
        <span className="inline-block py-1 px-4 border border-brand-purple/50 rounded-full text-brand-light text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(107,76,154,0.2)]">
          Vagas Limitadas / Seleção Rigorosa
        </span>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">Investimento Único: R$ 24,90</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-sand leading-[0.9] tracking-tight mb-6">
            Domine o manejo<br />
            da dependência
          </h2>
          <p className="text-sand/70 max-w-xl mx-auto font-light text-base md:text-lg">
            Avance na sua carreira clínica. Domine a Análise Transacional e conquiste segurança absoluta no tratamento dos seus pacientes.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Main MP Checkout Button */}
          <a 
            href="https://ocariocawebdesign.com.br/sprj/pagamento/index.php/produto/workshop-laura-silva/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 sm:px-10 sm:py-5 bg-brand-purple text-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-brand-purple transition-all hover:-translate-y-1 rounded-sm w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(107,76,154,0.4)]"
          >
            <CreditCard size={18} />
            Quero Me Inscrever Agora
          </a>

          {/* Contact Button */}
          <a 
            href={`mailto:${email}?subject=Dúvidas:%20Workshop%20Paulo%20Mittelman`}
            className="flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-5 border border-brand-purple/30 text-sand hover:bg-brand-purple/10 font-bold uppercase tracking-widest text-sm transition-colors rounded-sm w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} /> Dúvidas? Fale conosco
          </a>

        </div>
        
        {/* Brand Logo Centered Below Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-16 flex justify-center w-full"
        >
          <img 
            src="/logo-teraputa-conecta_v3.png" 
            alt="Terapeuta Conecta" 
            className="h-10 sm:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" 
          />
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sand/40 text-xs uppercase tracking-widest">
           <div>Organização: Terapeuta Conecta</div>
           <div className="mt-4 md:mt-0">{email}</div>
        </div>

      </motion.div>
    </section>
  );
}
