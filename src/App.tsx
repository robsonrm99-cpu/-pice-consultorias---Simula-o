import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, Car, Tractor, Truck, TrendingUp, 
  CheckCircle2, ShieldCheck, Star, Bell, ArrowRight, Lock, Gift, Clock, User, Phone, Loader2, ArrowUp,
  MessageCircle, Mail, MapPin, Calculator, ChevronRight, X, Sparkles, ArrowLeft
} from 'lucide-react';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value);
};

const BG_IMAGE = "https://res.cloudinary.com/dsevqnhts/image/upload/v1784729585/WhatsApp_Image_2026-07-22_at_10.04.49_v2dluu.jpg";

const testimonials = [
  { name: "Carlos Silva", text: "Consegui planejar a troca da minha frota pagando parcelas justas e sem juros abusivos." },
  { name: "Mariana Costa", text: "O atendimento foi excepcional! Realizei o sonho da casa própria com um consórcio que cabe no meu bolso." },
  { name: "Roberto Almeida", text: "Comprei meu trator novo sem descapitalizar minha fazenda. Recomendo muito a Valoriza Soluções Financeiras." },
  { name: "Fernanda Lima", text: "Processo transparente e rápido. Em poucos meses fui contemplada e peguei meu carro zero." }
];

const bioReviews = [
  {
    initial: "C",
    name: "Carlos Eduardo",
    rating: 5,
    text: "Atendimento impecável! Conseguir minha carta de crédito muito mais rápido do que imaginava."
  },
  {
    initial: "A",
    name: "Ana Paula",
    rating: 5,
    text: "Transparência do início ao fim. Recomendo a Valoriza para quem quer segurança no consórcio."
  },
  {
    initial: "M",
    name: "Marcos Viana",
    rating: 5,
    text: "Comprei o caminhão para aumentar minha frota sem juros abusivos. Empresa de extrema confiança!"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const BioLinksView = ({ onStartSimulation }: { onStartSimulation: () => void }) => {
  const [showLocationModal, setShowLocationModal] = useState(false);

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center px-5 pt-8 pb-20 w-full max-w-md mx-auto"
    >
      {/* Profile Header with glowing logo badge */}
      <motion.div variants={itemVariants} className="relative mb-4">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D3AC51] via-[#FFF1C5] to-[#B8933A] blur-md opacity-70 animate-pulse"></div>
        <div className="relative w-28 h-28 rounded-full border-2 border-[#D3AC51] bg-[#050404] p-2 flex items-center justify-center shadow-2xl overflow-hidden">
          <img 
            src={BG_IMAGE} 
            alt="Valoriza Soluções Financeiras" 
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* Title & Subtitle */}
      <motion.h1 variants={itemVariants} className="text-2xl font-black text-white tracking-tight mb-1">
        Valoriza Soluções Financeiras
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xs font-bold text-[#D3AC51] uppercase tracking-widest mb-4">
        LIBERAÇÃO DE CRÉDITO & CONSÓRCIOS
      </motion.p>

      {/* Rating Social Proof Badge */}
      <motion.div variants={itemVariants} className="bg-zinc-900/80 border border-zinc-800/90 px-5 py-2.5 rounded-2xl flex items-center gap-2 mb-8 shadow-inner backdrop-blur-md">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>
        <span className="text-xs text-zinc-300 font-medium">
          Mais de <strong className="text-white font-bold">5 mil</strong> clientes satisfeitos
        </span>
      </motion.div>

      {/* LINK BUTTONS */}
      <div className="w-full space-y-3.5 mb-10">
        {/* HIGHLIGHTED IN-EVIDENCE BUTTON */}
        <motion.div variants={itemVariants} className="w-full">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartSimulation}
            className="w-full bg-gradient-to-r from-[#D3AC51] via-[#E8C673] to-[#B8933A] text-black font-extrabold text-base sm:text-lg py-4 px-5 rounded-2xl shadow-[0_0_25px_rgba(211,172,81,0.4)] hover:shadow-[0_0_35px_rgba(211,172,81,0.6)] flex items-center justify-between transition-all border border-[#FFE8A3]/60 group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="bg-black/20 p-2.5 rounded-xl text-black">
                <Calculator size={22} className="shrink-0" />
              </div>
              <span className="tracking-tight text-left">Faça sua simulação aqui</span>
            </div>
            <ArrowRight size={22} className="shrink-0 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* WhatsApp Link */}
        <motion.div variants={itemVariants} className="w-full">
          <a
            href="https://wa.me/558791975063?text=Ol%C3%A1!%20Vim%20pelo%20link%20da%20bio%20da%20Valoriza%20Solu%C3%A7%C3%B5es%20Financeiras%20e%20gostaria%20de%20falar%20com%20um%20consultor."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800/90 text-white font-semibold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md flex items-center justify-between transition-all group backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/20 text-emerald-400 p-2.5 rounded-xl border border-emerald-500/30 shrink-0">
                <MessageCircle size={20} />
              </div>
              <span className="text-left">Fale com um Consultor (WhatsApp)</span>
            </div>
            <ChevronRight size={18} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
          </a>
        </motion.div>

        {/* Email Link */}
        <motion.div variants={itemVariants} className="w-full">
          <a
            href="mailto:contato@valorizasolucoes.com.br?subject=Atendimento%20Valoriza%20Solu%C3%A7%C3%B5es%20Financeiras"
            className="w-full bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800/90 text-white font-semibold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md flex items-center justify-between transition-all group backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#D3AC51]/20 text-[#D3AC51] p-2.5 rounded-xl border border-[#D3AC51]/30 shrink-0">
                <Mail size={20} />
              </div>
              <span className="text-left">Envie um E-mail</span>
            </div>
            <ChevronRight size={18} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
          </a>
        </motion.div>

        {/* Localização Modal Trigger */}
        <motion.div variants={itemVariants} className="w-full">
          <button
            onClick={() => setShowLocationModal(true)}
            className="w-full bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800/90 text-white font-semibold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md flex items-center justify-between transition-all group backdrop-blur-md cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="bg-amber-500/20 text-amber-400 p-2.5 rounded-xl border border-amber-500/30 shrink-0">
                <MapPin size={20} />
              </div>
              <span className="text-left">Nossa Localização</span>
            </div>
            <ChevronRight size={18} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
          </button>
        </motion.div>
      </div>

      {/* AVALIAÇÕES SECTION */}
      <motion.div variants={itemVariants} className="w-full">
        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800"></div>
          </div>
          <span className="relative bg-[#050404] px-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">
            AVALIAÇÕES
          </span>
        </div>

        <div className="space-y-3.5 text-left">
          {bioReviews.map((rev, idx) => (
            <div key={idx} className="bg-zinc-900/70 border border-zinc-800/90 p-4 rounded-2xl backdrop-blur-md shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#D3AC51] text-black font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm">
                  {rev.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm leading-tight">{rev.name}</h4>
                  <div className="flex text-amber-400 mt-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-zinc-300 text-xs italic leading-relaxed pl-1">
                "{rev.text}"
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* FOOTER */}
      <motion.div variants={itemVariants} className="mt-12 text-center text-xs text-zinc-500">
        <p className="flex items-center justify-center gap-1 text-zinc-400 font-medium mb-1">
          <MapPin size={13} className="text-[#D3AC51]" /> Petrolina - PE
        </p>
        <p>&copy; {new Date().getFullYear()} Valoriza Soluções Financeiras. Todos os direitos reservados.</p>
      </motion.div>

      {/* LOCATION MODAL */}
      <AnimatePresence>
        {showLocationModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowLocationModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl max-w-sm w-full text-center relative shadow-2xl"
            >
              <button 
                onClick={() => setShowLocationModal(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full bg-zinc-800/50"
              >
                <X size={20} />
              </button>

              <div className="w-12 h-12 rounded-full bg-[#D3AC51]/20 text-[#D3AC51] flex items-center justify-center mx-auto mb-4 border border-[#D3AC51]/30">
                <MapPin size={24} />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">Atendimento Presencial e Online</h3>
              <p className="text-zinc-300 text-sm mb-4">
                Atendemos presencialmente em Petrolina e online para todo o Brasil:
              </p>

              <div className="bg-black/50 p-4 rounded-2xl border border-zinc-800 text-xs text-zinc-300 space-y-2 mb-6 text-left">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D3AC51]"></span>
                  <strong className="text-white">Petrolina - PE</strong>
                </p>
              </div>

              <a
                href="https://wa.me/558791975063?text=Ol%C3%A1!%20Gostaria%20de%20saber%20o%20endere%C3%A7o%20ou%20agendar%20uma%20visita%20na%20Valoriza."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#D3AC51] text-black font-bold py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-[#B8933A] transition-colors text-sm"
              >
                <MessageCircle size={18} /> Agendar Visita no WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Landing = ({ onNext }: { onNext: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 55);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center px-6 pt-10 pb-24"
    >
      <motion.div variants={itemVariants} className="mb-6 flex justify-center">
        <img 
          src={BG_IMAGE} 
          alt="Valoriza Soluções Financeiras" 
          className="h-20 max-w-[260px] w-auto object-contain rounded-2xl p-2 bg-black/70 border border-[#D3AC51]/30 shadow-2xl backdrop-blur-md" 
        />
      </motion.div>

      <motion.div variants={itemVariants} className="bg-black/70 text-[#D3AC51] px-6 py-3 rounded-2xl flex flex-col items-center mb-8 border border-zinc-800 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-2 font-bold text-sm mb-2 tracking-wide text-center">
          <Gift size={18} className="shrink-0" /> OFERTA EXCLUSIVA LIBERADA PARA VOCÊ
        </div>
        <div className="flex items-center gap-1.5 bg-[#D3AC51] text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
          <Clock size={16} /> {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-[1.15] tracking-tight drop-shadow-lg">
        Valorize o seu futuro com a <span className="text-[#D3AC51]">Valoriza</span> 💫
      </motion.h1>

      <motion.p 
        variants={itemVariants} 
        className="text-zinc-200 font-medium mb-10 text-[18px] leading-[30.25px] w-full max-w-xs drop-shadow-md"
      >
        Crédito inteligente sem juros abusivos.<br/>
        Descubra seu poder de compra.
      </motion.p>

      <motion.div variants={itemVariants} className="w-full max-w-md mb-12">
        <motion.button 
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="w-full bg-[#D3AC51] text-black text-xl font-bold py-4 rounded-full shadow-xl shadow-[#D3AC51]/20 hover:bg-[#B8933A] transition-colors flex items-center justify-center gap-2"
        >
          Fazer Simulação <ArrowRight size={24} />
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
        <div className="flex items-center gap-1.5 bg-black/60 border border-zinc-800 px-4 py-2 rounded-full text-sm font-semibold text-zinc-300 shadow-sm backdrop-blur-md">
          <CheckCircle2 size={18} className="text-[#D3AC51]" /> SEM JUROS
        </div>
        <div className="flex items-center gap-1.5 bg-black/60 border border-zinc-800 px-4 py-2 rounded-full text-sm font-semibold text-zinc-300 shadow-sm backdrop-blur-md">
          <ShieldCheck size={18} className="text-[#B8933A]" /> NEGATIVADOS
        </div>
        <div className="flex items-center gap-1.5 bg-black/60 border border-zinc-800 px-4 py-2 rounded-full text-sm font-semibold text-zinc-300 shadow-sm backdrop-blur-md">
          <User size={18} className="text-[#D3AC51]" /> ESPECIALISTAS
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-4 w-full max-w-md">
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Mais de 5.000 clientes satisfeitos</p>
        <div className="bg-black/60 p-6 rounded-3xl shadow-sm border border-zinc-800 text-left relative backdrop-blur-md h-[193px] flex flex-col justify-center">
          <div className="flex text-amber-400 mb-3">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </div>
          <div className="relative flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <p className="text-zinc-300 italic text-[15px] leading-relaxed mb-3">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-white font-bold text-sm">
                  - {testimonials[currentTestimonial].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <motion.button
        variants={itemVariants}
        onClick={() => {
          document.getElementById('top-of-scroll')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-16 flex items-center gap-2 text-zinc-300 font-bold hover:text-[#D3AC51] transition-colors bg-black/80 px-6 py-3 rounded-full backdrop-blur-md border border-zinc-800 shadow-sm"
      >
        <ArrowUp size={20} /> Voltar ao topo
      </motion.button>

      <motion.div variants={itemVariants} className="mt-16 text-center opacity-90">
        <p className="text-white text-base font-bold tracking-wide">Valoriza Soluções Financeiras</p>
        <p className="text-zinc-400 text-xs mt-1">Soluções financeiras inteligentes para seus projetos.</p>
        <p className="text-zinc-500 text-xs mt-1">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </motion.div>
    </motion.div>
  );
};

const targets = [
  { id: 'imovel', title: 'Imóvel', desc: 'Casa, Apto ou Terreno', icon: Home },
  { id: 'veiculo', title: 'Veículo', desc: 'Carros e Motos', icon: Car },
  { id: 'agricola', title: 'Agrícola', desc: 'Máquinas e Insumos', icon: Tractor },
  { id: 'pesados', title: 'Pesados', desc: 'Caminhões e Frotas', icon: Truck },
  { id: 'investimento', title: 'Investimento', desc: 'Aumento de Patrimônio', icon: TrendingUp },
];

const Step1 = ({ onSelect }: { onSelect: (val: string) => void }) => (
  <div className="px-6 py-8">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Qual é o seu alvo?</h2>
    <p className="text-zinc-400 mb-8 text-lg">Escolha o segmento desejado.</p>
    
    <div className="flex flex-col gap-3.5">
      {targets.map(t => (
        <motion.button 
          whileTap={{ scale: 0.95 }}
          key={t.id}
          onClick={() => onSelect(t.title)}
          className="flex items-center gap-5 p-4 bg-black/60 border border-zinc-800 rounded-3xl shadow-sm hover:border-[#D3AC51] hover:bg-black/80 transition-colors text-left group backdrop-blur-md w-full"
        >
          <div className="bg-[#D3AC51]/15 border border-[#D3AC51]/30 p-3.5 rounded-2xl text-[#D3AC51] group-hover:bg-[#D3AC51] group-hover:text-black transition-all shrink-0">
            <t.icon size={26} strokeWidth={2} />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">{t.title}</h3>
            <p className="text-zinc-500 text-sm mt-0.5">{t.desc}</p>
          </div>
        </motion.button>
      ))}
    </div>
  </div>
);

const Step2 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Valor do Crédito</h2>
    <p className="text-zinc-400 mb-10 text-lg">Quanto você precisa para realizar este objetivo?</p>
    
    <div className="bg-black/60 p-8 rounded-[2rem] shadow-sm border border-zinc-800 mb-10 backdrop-blur-md">
      <div className="text-center mb-10">
        <span className="text-[2.75rem] font-extrabold text-[#D3AC51] tracking-tight">{formatCurrency(value)}</span>
      </div>
      
      <input 
        type="range" 
        min={20000} 
        max={500000} 
        step={5000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mb-6"
      />
      <div className="flex justify-between text-sm font-semibold text-zinc-500">
        <span>R$ 20 mil</span>
        <span>R$ 500 mil</span>
      </div>
    </div>

    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      className="w-full bg-[#D3AC51] text-black text-xl font-bold py-4.5 rounded-full shadow-lg hover:bg-[#B8933A] transition-colors mt-auto"
    >
      Avançar
    </motion.button>
  </div>
);

const Step3 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Valor de Entrada</h2>
    <p className="text-zinc-400 mb-10 text-lg">Qual valor você tem disponível para investir agora?</p>
    
    <div className="bg-black/60 p-8 rounded-[2rem] shadow-sm border border-zinc-800 mb-10 backdrop-blur-md">
      <div className="text-center mb-10">
        <span className="text-[2.75rem] font-extrabold text-[#D3AC51] tracking-tight">{formatCurrency(value)}</span>
      </div>
      
      <input 
        type="range" 
        min={5000} 
        max={500000} 
        step={1000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mb-6"
      />
      <div className="flex justify-between text-sm font-semibold text-zinc-500">
        <span>R$ 5 mil</span>
        <span>R$ 500 mil</span>
      </div>
    </div>

    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      className="w-full bg-[#D3AC51] text-black text-xl font-bold py-4.5 rounded-full shadow-lg hover:bg-[#B8933A] transition-colors mt-auto"
    >
      Avançar
    </motion.button>
  </div>
);

const Step4 = ({ value, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Investimento Mensal</h2>
    <p className="text-zinc-400 mb-10 text-lg">Qual parcela cabe confortavelmente no seu bolso?</p>
    
    <div className="bg-black/60 p-8 rounded-[2rem] shadow-sm border border-zinc-800 mb-10 backdrop-blur-md">
      <div className="text-center mb-10">
        <span className="text-[2.75rem] font-extrabold text-[#D3AC51] tracking-tight">{formatCurrency(value)}</span>
      </div>
      
      <input 
        type="range" 
        min={500} 
        max={20000} 
        step={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mb-6"
      />
      <div className="flex justify-between text-sm font-semibold text-zinc-500">
        <span>R$ 500</span>
        <span>R$ 20.000</span>
      </div>
    </div>

    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      className="w-full bg-[#D3AC51] text-black text-xl font-bold py-4.5 rounded-full shadow-lg hover:bg-[#B8933A] transition-colors mt-auto"
    >
      Avançar
    </motion.button>
  </div>
);

const Step5 = ({ formData, onChange, onNext }: any) => (
  <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Último passo</h2>
    <p className="text-zinc-400 mb-10 text-lg">Para onde enviamos seu plano estratégico?</p>
    
    <div className="flex flex-col gap-5 mb-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-500">
          <User size={22} />
        </div>
        <input 
          type="text" 
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-black/60 border border-zinc-800 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#D3AC51] focus:border-transparent text-lg shadow-sm placeholder:text-zinc-500 font-medium text-white backdrop-blur-md"
        />
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-500">
          <User size={22} />
        </div>
        <input 
          type="text" 
          placeholder="Indicado por (Opcional)"
          value={formData.referredBy}
          onChange={(e) => onChange('referredBy', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-black/60 border border-zinc-800 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#D3AC51] focus:border-transparent text-lg shadow-sm placeholder:text-zinc-500 font-medium text-white backdrop-blur-md"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-500">
          <Phone size={22} />
        </div>
        <input 
          type="tel" 
          placeholder="Seu WhatsApp"
          value={formData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className="w-full pl-14 pr-5 py-4.5 bg-black/60 border border-zinc-800 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-[#D3AC51] focus:border-transparent text-lg shadow-sm placeholder:text-zinc-500 font-medium text-white backdrop-blur-md"
        />
      </div>
    </div>

    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      disabled={!formData.name || !formData.phone}
      className="w-full bg-[#D3AC51] text-black text-xl font-bold py-4.5 rounded-full shadow-sm hover:bg-[#B8933A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-auto"
    >
      Receber Plano Exclusivo <ArrowRight size={22} />
    </motion.button>
    
    <div className="flex items-center justify-center gap-2 mt-8 text-zinc-500 text-sm font-semibold tracking-wide">
      <Lock size={16} /> DADOS SEGUROS
    </div>
  </div>
);

const LoadingStep = ({ onNext }: { onNext: () => void }) => {
  const [loadingText, setLoadingText] = useState('Analisando seu perfil...');

  useEffect(() => {
    const texts = [
      'Analisando seu perfil...',
      'Buscando as melhores taxas...',
      'Calculando parcelas...',
      'Gerando plano exclusivo...'
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      setLoadingText(texts[i]);
    }, 1200);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onNext]);

  return (
    <div className="px-6 py-8 flex flex-col items-center justify-center h-full min-h-[70vh] text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="text-[#D3AC51] mb-6"
      >
        <Loader2 size={64} />
      </motion.div>
      <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Aguarde...</h2>
      <p className="text-zinc-400 text-lg">{loadingText}</p>
    </div>
  );
};

const Step6 = ({ formData }: any) => {
  const handleWhatsApp = () => {
    const text = `Olá! Fiz uma simulação no site da Valoriza Soluções Financeiras e gostaria de falar com um especialista.\n\n*Resumo da Simulação:*\nAlvo: ${formData.target}\nCrédito: ${formatCurrency(formData.credit)}\nEntrada: ${formatCurrency(formData.entry)}\nParcela: ${formatCurrency(formData.installment)}\nNome: ${formData.name}\nWhatsApp: ${formData.phone}${formData.referredBy ? `\nIndicado por: ${formData.referredBy}` : ''}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/558791975063?text=${encodedText}`, '_blank');
  };

  return (
    <div className="px-6 py-8 flex flex-col h-full min-h-[70vh]">
      <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Plano Gerado!</h2>
      <p className="text-zinc-400 mb-10 text-lg">Sua estratégia está pronta.</p>
      
      <div className="bg-black/60 p-7 rounded-[2rem] shadow-sm border border-zinc-800 mb-10 backdrop-blur-md">
        <div className="flex justify-between items-center py-4 border-b border-zinc-800">
          <span className="text-zinc-500 font-bold text-sm tracking-widest uppercase">Alvo</span>
          <span className="text-white font-bold text-lg">{formData.target}</span>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-zinc-800">
          <span className="text-zinc-500 font-bold text-sm tracking-widest uppercase">Crédito</span>
          <span className="text-[#D3AC51] font-extrabold text-xl">{formatCurrency(formData.credit)}</span>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-zinc-800">
          <span className="text-zinc-500 font-bold text-sm tracking-widest uppercase">Entrada</span>
          <span className="text-white font-bold text-lg">{formatCurrency(formData.entry)}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-zinc-500 font-bold text-sm tracking-widest uppercase">Parcela</span>
          <span className="text-white font-bold text-lg">{formatCurrency(formData.installment)}</span>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[#D3AC51] font-extrabold text-sm tracking-widest uppercase mb-4 text-center"
        >
          Sua conquista está te esperando!
        </motion.p>
        
        <motion.button 
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 10px 15px -3px rgba(37, 211, 102, 0.3)",
              "0 20px 25px -5px rgba(37, 211, 102, 0.5)",
              "0 10px 15px -3px rgba(37, 211, 102, 0.3)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          className="w-full bg-[#25D366] text-white text-xl font-bold py-4.5 rounded-full hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-3"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Falar com Especialista
        </motion.button>
      </div>
    </div>
  );
};

const notifications = [
  { name: 'Letícia M.', action: 'iniciou plano Agrícola', time: 'há 1 min' },
  { name: 'Rafael G.', action: 'iniciou plano Agrícola', time: 'há 2 min' },
  { name: 'João B.', action: 'reservou uma cota', time: 'agora mesmo' },
  { name: 'Marcos T.', action: 'reservou uma cota', time: 'há 1 min' },
  { name: 'Carlos E.', action: 'simulou Pesados', time: 'há 1 min' },
  { name: 'Ana P.', action: 'iniciou plano Imóvel', time: 'agora mesmo' },
];

const RecentActivity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const current = notifications[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-80 bg-black/80 p-3.5 rounded-2xl shadow-xl border border-zinc-800 flex items-center gap-4 z-50 backdrop-blur-md"
        >
          <div className="bg-[#050404]/10 text-[#D3AC51] p-2.5 rounded-full shrink-0">
            <Bell size={20} />
          </div>
          <div>
            <p className="text-[15px] text-white leading-tight">
              <span className="font-bold">{current.name}</span> {current.action}
            </p>
            <p className="text-xs text-zinc-500 mt-0.5 font-medium">{current.time}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [viewMode, setViewMode] = useState<'bio' | 'funnel'>('bio');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    target: '',
    credit: 100000,
    entry: 5000,
    installment: 700,
    name: '',
    referredBy: '',
    phone: ''
  });

  const nextStep = () => {
    document.getElementById('top-of-scroll')?.scrollIntoView({ behavior: 'smooth' });
    setStep(s => s + 1);
  };
  const prevStep = () => {
    document.getElementById('top-of-scroll')?.scrollIntoView({ behavior: 'smooth' });
    setStep(s => s - 1);
  };

  const startFunnel = () => {
    setViewMode('funnel');
    setStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progress = step === 0 ? 0 : Math.round((step / 7) * 100);

  return (
    <div className="min-h-screen font-sans text-white relative overflow-hidden flex justify-center selection:bg-zinc-800/30">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 bg-[#050404]">
        <img src={BG_IMAGE} alt="" className="w-full h-full object-contain object-center p-4 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#050404]"></div>
      </div>

      <div className="w-full max-w-md bg-transparent min-h-screen relative z-10 flex flex-col">
        
        {/* Navigation Header when in Funnel mode */}
        {viewMode === 'funnel' && (
          <div className="px-5 py-3.5 flex items-center justify-between sticky top-0 z-30 bg-[#050404]/90 backdrop-blur-md border-b border-zinc-800/80">
            <button 
              onClick={() => setViewMode('bio')}
              className="flex items-center gap-1.5 text-xs font-bold text-[#D3AC51] hover:text-white transition-colors py-1.5 px-3 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm"
            >
              <ArrowLeft size={14} /> Início / Bio Links
            </button>

            {step > 0 && (
              <div className="flex items-center gap-3 flex-1 ml-3">
                <button onClick={prevStep} className="text-xs font-bold text-zinc-400 hover:text-white transition-colors">
                  Voltar
                </button>
                <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#D3AC51] transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-zinc-400 w-8 text-right">{progress}%</span>
              </div>
            )}
          </div>
        )}

        {/* Content Area */}
        <div id="scroll-area" className="flex-1 overflow-y-auto pb-28">
          <div id="top-of-scroll" />
          <AnimatePresence mode="wait">
            {viewMode === 'bio' ? (
              <motion.div
                key="bio-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                <BioLinksView onStartSimulation={startFunnel} />
              </motion.div>
            ) : (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full"
              >
                {step === 0 && <Landing onNext={nextStep} />}
                {step === 1 && <Step1 onSelect={(val) => { updateFormData('target', val); nextStep(); }} />}
                {step === 2 && <Step2 value={formData.credit} onChange={(val: number) => updateFormData('credit', val)} onNext={nextStep} />}
                {step === 3 && <Step3 value={formData.entry} onChange={(val: number) => updateFormData('entry', val)} onNext={nextStep} />}
                {step === 4 && <Step4 value={formData.installment} onChange={(val: number) => updateFormData('installment', val)} onNext={nextStep} />}
                {step === 5 && <Step5 formData={formData} onChange={updateFormData} onNext={nextStep} />}
                {step === 6 && <LoadingStep onNext={nextStep} />}
                {step === 7 && <Step6 formData={formData} />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <RecentActivity />
      </div>
    </div>
  );
}
