import { motion } from 'framer-motion';
import { Calendar, Clock, Video } from 'lucide-react';

export default function Details() {
  const infos = [
    { icon: Calendar, label: "Datas", value: "06 e 13 de Abril de 2026", desc: "Dois encontros imersivos focados em teoria e manejo prático." },
    { icon: Clock, label: "Horário", value: "18h00 às 19h30", desc: "Fuso horário oficial de Brasília." },
    { icon: Video, label: "Plataforma", value: "Google Meet", desc: "Transmissão ao vivo com sala restrita aos inscritos." }
  ];

  return (
    <section className="py-24 bg-graphite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 md:flex justify-between items-end border-b border-white/10 pb-8">
          <div>
            <h2 className="text-brand-light font-bold tracking-widest uppercase text-sm mb-4">Logística</h2>
            <h3 className="text-4xl md:text-5xl font-black text-sand uppercase">Estrutura do<br/>Workshop</h3>
          </div>
          <div className="mt-8 md:mt-0 max-w-md">
             <p className="text-sand/70 font-light leading-relaxed mb-4">
               Muitos profissionais se sentem estagnados ou inseguros ao lidar com a imprevisibilidade da dependência química na clínica.
             </p>
             <p className="text-brand-light font-bold text-sm tracking-wide">
               Este workshop entrega o mapa mental pragmático que Laura Silva utiliza para gerar adesão e resultados reais.
             </p>
          </div>
        </div>

        <div className="flex flex-col">
          {infos.map((info, idx) => (
            <motion.div 
              key={info.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-center py-10 border-b border-white/5 group hover:bg-white/[0.02] transition-colors md:px-4 md:-mx-4 rounded-sm"
            >
              <div className="md:w-1/4 mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-full border border-brand-purple/30 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(107,76,154,0)] group-hover:shadow-[0_0_20px_rgba(107,76,154,0.4)]">
                  <info.icon size={24} strokeWidth={1.5} />
                </div>
              </div>
              <div className="md:w-1/4 mb-2 md:mb-0">
                <span className="text-sand/40 text-sm uppercase tracking-widest">{info.label}</span>
              </div>
              <div className="md:w-1/2">
                 <h4 className="text-2xl font-bold text-sand mb-2">{info.value}</h4>
                 <p className="text-sand/60 font-light text-sm">{info.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
