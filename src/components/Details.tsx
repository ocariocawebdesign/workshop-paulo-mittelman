import { motion } from 'framer-motion';
import { Video, Wifi, Users, Calendar, Lock } from 'lucide-react';

const stats = [
  { icon: Wifi,     label: "Online ao vivo",  sub: "com sala exclusiva" },
  { icon: Users,    label: "2 encontros",      sub: "imersivos" },
  { icon: Calendar, label: "A definir",        sub: "data de lançamento" },
  { icon: Lock,     label: "Limitadas",        sub: "vagas disponíveis" },
];

export default function Details() {
  const platform = { icon: Video, label: "Plataforma", value: "Google Meet", desc: "Transmissão ao vivo com sala restrita aos inscritos." };

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
              Este workshop entrega o mapa mental pragmático que Paulo Mittelman utiliza para gerar adesão e resultados reais.
            </p>
          </div>
        </div>

        <div className="flex flex-col">

          {/* ── EM BREVE SPOILER SECTION ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="py-10 border-b border-white/5"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sand/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
              Em breve
            </span>

            <div className="inline-block bg-brand-purple/10 border border-brand-purple/30 text-brand-light text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8 ml-4">
              Workshop a caminho
            </div>

            {/* Title */}
            <h4 className="text-4xl md:text-6xl font-black text-sand uppercase leading-none mb-6">
              WORK<br/>
              <span className="text-brand-purple">SHOPS</span><br/>
              2026
            </h4>

            {/* Description */}
            <p className="text-sand/60 font-light leading-relaxed max-w-xl mb-3 text-sm">
              Uma iniciativa inédita de Terapeutas Conecta. Pela primeira vez, reunimos para dentro de plataforma um workshop com esse nível de profundidade clínica e aplicação prática.
            </p>
            <p className="text-brand-light/80 text-sm font-medium mb-10">
              A data ainda não foi definida — mas quem chegar primeiro, tem primeiras garantias.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-1 border border-white/5 rounded-lg p-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <s.icon size={18} strokeWidth={1.5} className="text-brand-purple mb-1" />
                  <span className="text-sand font-bold text-base leading-tight">{s.label}</span>
                  <span className="text-sand/40 text-xs">{s.sub}</span>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.25)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.527 5.849L.057 23.882a.5.5 0 0 0 .61.61l6.07-1.491A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.5-5.205-1.375l-.374-.217-3.873.951.974-3.81-.238-.392A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Entre no grupo do WhatsApp
            </a>

            <p className="text-sand/25 text-xs mt-6">
              Um projeto de Terapia Conecta · paulo.mittelman
            </p>
          </motion.div>

          {/* Plataforma row */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center py-10 border-b border-white/5 group hover:bg-white/[0.02] transition-colors md:px-4 md:-mx-4 rounded-sm"
          >
            <div className="md:w-1/4 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-full border border-brand-purple/30 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(107,76,154,0)] group-hover:shadow-[0_0_20px_rgba(107,76,154,0.4)]">
                <platform.icon size={24} strokeWidth={1.5} />
              </div>
            </div>
            <div className="md:w-1/4 mb-2 md:mb-0">
              <span className="text-sand/40 text-sm uppercase tracking-widest">{platform.label}</span>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-sand mb-2">{platform.value}</h4>
              <p className="text-sand/60 font-light text-sm">{platform.desc}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
