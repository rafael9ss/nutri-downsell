import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const initUpsell = () => {
      // @ts-ignore
      if (window.initWiapyUpsell) {
        const container = document.getElementById("wiapy_upsell");
        if (container && container.innerHTML === "") {
          // @ts-ignore
          window.initWiapyUpsell({
            linkUrl: "https://pay.wiapy.com/checkout/69d810e093fbb1e7e714ad4d",
            linkText: "SIM, EU ACEITO ESSA OFERTA",
            styles: {
              backgroundColor: "#00d769",
              hoverBackgroundColor: "#00b85a",
              fontSize: "17px",
              borderRadius: "10px"
            },
            refusalLinkUrl: "https://wiapy.com/login",
            refusalLinkText: "Recusar está oferta",
            refusalLinkColor: "#000000"
          });
        }
      } else {
        setTimeout(initUpsell, 100);
      }
    };
    initUpsell();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden relative selection:bg-[#ccff00] selection:text-black pb-32">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..1000;1,9..40,400..1000&family=Space+Grotesk:wght@300..700&display=swap');

        .font-space {
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.05em;
        }

        .font-dm {
          font-family: 'DM Sans', sans-serif;
        }

        .brutal-border {
          border: 4px solid #0a0a0a;
        }
        
        .brutal-white-border {
          border: 4px solid #ffffff;
        }

        .brutal-shadow {
          box-shadow: 6px 6px 0px #0a0a0a;
        }
        
        .brutal-white-shadow {
          box-shadow: 6px 6px 0px #ffffff;
        }

        .bouncy-hover {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .bouncy-hover:hover {
          transform: scale(1.05) rotate(-2deg);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .animate-float-1 { animation: float 6s ease-in-out infinite; }
        .animate-float-2 { animation: float 7s ease-in-out infinite 1s; }
        .animate-float-3 { animation: float 8s ease-in-out infinite 2s; }

        @keyframes wobble {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
          75% { transform: rotate(-2deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-wobble:hover {
          animation: wobble 0.5s ease-in-out;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />

      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#7000ff] opacity-40 blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ff0099] opacity-30 blur-[120px] -z-10 pointer-events-none"></div>

      <main className="pt-16 px-4 sm:px-8 max-w-7xl mx-auto font-dm">
        
        {/* Slanted Marquee */}
        <div className="bg-white border-y-4 border-black py-4 mb-16 transform -rotate-2 w-[110%] -ml-[5%] overflow-hidden relative z-20 flex">
          <div className="flex animate-marquee shrink-0">
            {[...Array(4)].map((_, i) => (
              <div key={`m1-${i}`} className="flex items-center gap-8 px-4 font-space font-black text-2xl text-black uppercase whitespace-nowrap shrink-0">
                <span>CONDIÇÃO ÚNICA E EXCLUSIVA</span>
                <span className="text-[#ff0099]">✦</span>
                <span>NÃO FECHE A PÁGINA</span>
                <span className="text-[#7000ff]">✦</span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee shrink-0" aria-hidden="true">
            {[...Array(4)].map((_, i) => (
              <div key={`m2-${i}`} className="flex items-center gap-8 px-4 font-space font-black text-2xl text-black uppercase whitespace-nowrap shrink-0">
                <span>CONDIÇÃO ÚNICA E EXCLUSIVA</span>
                <span className="text-[#ff0099]">✦</span>
                <span>NÃO FECHE A PÁGINA</span>
                <span className="text-[#7000ff]">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Anti-Safe Harbor Header & Pricing Integrated */}
        <div className="relative mb-16 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">
          
          {/* Typographic Hero */}
          <div className="flex-1 relative z-10 w-full">
            <div className="absolute -top-10 -left-10 text-6xl animate-float-1 z-10 hidden md:block">
              <div className="bg-white p-2 border-2 border-black" style={{boxShadow: '4px 4px 0px rgba(0,0,0,1)', transform: 'rotate(-10deg)'}}>
                🫣
              </div>
            </div>

            <div className="bg-[#ccff00] border-4 border-black p-6 md:p-12 transform -rotate-1 relative overflow-hidden" style={{boxShadow: '8px 8px 0px #0a0a0a'}}>
              <h1 className="font-space text-black text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] lowercase mb-6 relative z-10">
                a gente sabe: às vezes o preço <span className="bg-[#ff0099] text-white px-2">pesa.</span>
              </h1>
              <p className="font-dm text-black font-bold text-xl md:text-2xl max-w-2xl relative z-10 mt-8 mb-4 bg-white inline-block p-4 border-2 border-black transform rotate-1">
                por isso, liberamos uma condição especial para você ter a <span className="bg-[#ccff00] text-black px-2 inline-block -rotate-1 border border-black">nutri da lancheira 24h</span> apenas agora, nesta página.
              </p>
            </div>
            
            <div className="bg-[#7000ff] text-white border-4 border-black p-6 md:p-8 mt-12 transform rotate-1 relative brutal-shadow hidden lg:block">
              <p className="text-xl md:text-2xl font-dm font-bold lowercase">
                não deixe o preço ficar no caminho do seu tempo livre.
              </p>
            </div>
          </div>

          {/* Pricing Fold integrated in Hero */}
          <div className="w-full lg:w-[45%] flex-shrink-0 relative z-20">

            <div className="bg-white text-black border-4 border-black p-8 md:p-10 transform -rotate-1 flex flex-col relative" style={{boxShadow: '8px 8px 0px #ff0099'}}>
              <div className="absolute -top-5 -right-5 bg-[#ccff00] border-2 border-black text-black font-space font-bold text-xl px-4 py-2 transform rotate-6 z-10 brutal-shadow">
                ÚLTIMA CHANCE
              </div>
              <div className="font-space font-bold text-lg mb-2 uppercase tracking-tight text-[#7000ff]">Nutri — assistente de lanches com IA</div>
              
              <div className="flex flex-col mb-8 mt-4">
                <span className="line-through text-gray-400 font-space text-2xl">de R$ 49,90</span>
                <div className="font-space font-black text-6xl text-black leading-none mt-1">
                  <span className="text-3xl relative top-[-1.5rem]">r$</span>17,90
                </div>
              </div>

              <ul className="space-y-4 mb-10 font-bold font-dm text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff0099] text-2xl mt-0.5">✓</span>
                  <span>lanches com o que tem na geladeira</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff0099] text-2xl mt-0.5">✓</span>
                  <span>cardápio semanal sob demanda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff0099] text-2xl mt-0.5">✓</span>
                  <span>adaptação para restrições alimentares</span>
                </li>
              </ul>

              <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-300">
                <div id="wiapy_upsell"></div>
              </div>
            </div>
          </div>
        </div>



        {/* Guarantee Span */}
        <div className="w-full bg-[#ff0099] brutal-border brutal-shadow p-8 flex flex-col lg:flex-row items-center justify-between transform rotate-1 mt-8 mb-20">
          <div className="font-space text-3xl sm:text-4xl text-black font-black uppercase max-w-2xl text-center lg:text-left mb-6 lg:mb-0">
            GARANTIA DE 7 DIAS. <br/><span className="text-white text-2xl">SE NÃO GOSTAR, DEVOLVEMOS TUDO.</span>
          </div>
          
          <div className="bg-black text-white p-6 brutal-white-border brutal-white-shadow transform -rotate-3 text-center">
            <div className="font-space font-black text-xs opacity-70 mb-1">PAGAMENTO ÚNICO</div>
            <div className="font-space font-bold text-xl text-[#ccff00]">ACESSO VITALÍCIO.</div>
            <div className="mt-4 font-dm text-sm underline decoration-wavy decoration-[#ff0099]">Essa condição aparece só aqui e só agora.</div>
          </div>
        </div>
      </main>

      {/* Massive Graphic Footer */}
      <footer className="mt-32 pt-20 pb-10 border-t-8 border-black bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
          <h2 className="text-[12vw] font-space font-black text-black opacity-[0.03] leading-none whitespace-nowrap">NUTRI AGORA</h2>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-black">
          <div className="font-space font-bold text-2xl mb-4 md:mb-0">
            nutri.
          </div>
          <p className="font-dm text-sm opacity-60 text-center md:text-right">
            © 2026 Super Lanchinhos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
