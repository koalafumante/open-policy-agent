import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const whatsappUrl =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20vim%20pela%20vitrine%20e%20quero%20saber%20mais!";

const products = [
  {
    name: "Kit Ritual do Café",
    price: "R$ 189,00",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    label: "Mais vendido",
  },
  {
    name: "Vela Brisa de Casa",
    price: "R$ 79,00",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85",
    label: "Edição limitada",
  },
  {
    name: "Cesta Bom Dia",
    price: "R$ 249,00",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85",
    label: "Para presentear",
  },
];

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#1b6b51] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_22px_rgba(27,107,81,0.22)] transition hover:-translate-y-0.5 hover:bg-[#14543f] ${className}`}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={19} fill="currentColor" />
      Falar no WhatsApp
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffdf9] font-sans text-[#17382f] selection:bg-[#d5e7d8]">
      <div className="bg-[#17382f] px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-[#f8f1e6]">
        FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 180
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#inicio" className="font-serif text-2xl font-bold tracking-tight text-[#17382f]">
          casa <span className="italic text-[#bb6847]">nativa</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#496056] md:flex">
          <a className="hover:text-[#bb6847]" href="#colecao">
            Coleção
          </a>
          <a className="hover:text-[#bb6847]" href="#como-funciona">
            Como funciona
          </a>
          <a className="hover:text-[#bb6847]" href="#depoimentos">
            Clientes
          </a>
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar no WhatsApp"
          className="rounded-full bg-[#e9f1e9] p-2.5 text-[#1b6b51] transition hover:bg-[#d5e7d8]"
        >
          <MessageCircle size={20} fill="currentColor" />
        </a>
      </header>

      <section
        id="inicio"
        className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 md:grid-cols-2 md:pb-24 md:pt-12"
      >
        <div className="order-2 md:order-1">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-[#bb6847] uppercase">
            <span className="h-px w-8 bg-[#bb6847]" /> Feito para sentir em casa
          </p>
          <h1 className="max-w-xl font-serif text-5xl leading-[0.98] font-bold tracking-tight text-[#17382f] sm:text-6xl">
            Pequenos rituais, <em className="font-normal text-[#bb6847]">grandes</em> afetos.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#587066]">
            Curadoria de presentes e objetos que transformam os momentos simples em memórias
            especiais.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton />
            <a
              href="#colecao"
              className="inline-flex items-center justify-center gap-1 rounded-full border border-[#cddbd0] px-5 py-3.5 text-sm font-bold text-[#285044] transition hover:border-[#17382f]"
            >
              Ver a coleção <ArrowRight size={17} />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3 text-xs font-medium text-[#587066]">
            <div className="flex -space-x-2">
              {[
                "https://i.pravatar.cc/80?img=32",
                "https://i.pravatar.cc/80?img=47",
                "https://i.pravatar.cc/80?img=44",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Cliente Casa Nativa"
                  className="h-8 w-8 rounded-full border-2 border-[#fffdf9]"
                />
              ))}
            </div>
            <span>
              <strong className="text-[#17382f]">+2.000 clientes</strong> encantados
            </span>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#e9d7bf]" />
          <img
            className="relative h-[420px] w-full rounded-[2rem] object-cover shadow-[0_24px_50px_rgba(39,64,52,0.16)] sm:h-[520px]"
            src="https://images.unsplash.com/photo-1602874801006-e26c721d36b9?auto=format&fit=crop&w=1200&q=90"
            alt="Mesa posta com flores e cerâmicas artesanais"
          />
          <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-lg sm:left-5">
            <span className="rounded-full bg-[#e9f1e9] p-2 text-[#1b6b51]">
              <PackageCheck size={19} />
            </span>
            <span className="text-xs leading-4 font-semibold text-[#315448]">
              Embalagem especial
              <br />
              para presente
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e5dc] bg-[#f8f5ed] px-5 py-5">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3 text-center text-[#456056]">
          <div>
            <ShieldCheck className="mx-auto mb-1 text-[#bb6847]" size={20} />
            <p className="text-[10px] font-bold sm:text-xs">COMPRA SEGURA</p>
          </div>
          <div>
            <Clock3 className="mx-auto mb-1 text-[#bb6847]" size={20} />
            <p className="text-[10px] font-bold sm:text-xs">ENVIO RÁPIDO</p>
          </div>
          <div>
            <MessageCircle className="mx-auto mb-1 text-[#bb6847]" size={20} />
            <p className="text-[10px] font-bold sm:text-xs">ATENDIMENTO HUMANO</p>
          </div>
        </div>
      </section>

      <section id="colecao" className="mx-auto max-w-6xl px-5 py-18 sm:px-8 sm:py-24">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-[#bb6847] uppercase">
              Escolhas da semana
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              Para você ou para alguém.
            </h2>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 text-sm font-bold text-[#1b6b51] sm:flex"
          >
            Ver todos <ChevronRight size={17} />
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_18px_rgba(39,64,52,0.07)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#fffdf9] px-3 py-1 text-[10px] font-bold text-[#315448]">
                  {product.label}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl font-bold">{product.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-[#bb6847]">{product.price}</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#e9f1e9] p-2 text-[#1b6b51]"
                    aria-label={`Pedir ${product.name} no WhatsApp`}
                  >
                    <MessageCircle size={18} fill="currentColor" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center justify-center gap-1 text-sm font-bold text-[#1b6b51] sm:hidden"
        >
          Ver todos os produtos <ChevronRight size={17} />
        </a>
      </section>

      <section
        id="como-funciona"
        className="bg-[#17382f] px-5 py-16 text-[#f8f1e6] sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold tracking-[0.16em] text-[#dca080] uppercase">
            Simples assim
          </p>
          <h2 className="mt-2 max-w-lg font-serif text-3xl font-bold sm:text-4xl">
            Seu presente pronto em poucos passos.
          </h2>
          <div className="mt-10 grid gap-7 sm:grid-cols-3">
            {[
              [
                "01",
                "Escolha seus favoritos",
                "Navegue pela vitrine e encontre uma combinação que tem a sua cara.",
              ],
              [
                "02",
                "Chame a gente",
                "Conte o que imaginou. Nosso atendimento é leve, rápido e atencioso.",
              ],
              [
                "03",
                "Receba ou presenteie",
                "Preparamos cada detalhe e enviamos para onde você quiser.",
              ],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-[#507567] pt-4">
                <span className="font-serif text-3xl text-[#dca080]">{number}</span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#c9d8ce]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="mx-auto max-w-6xl px-5 py-18 sm:px-8 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-[#bb6847] uppercase">
              Quem já recebeu, amou
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Detalhes que ficam na memória.
            </h2>
            <div className="mt-5 flex gap-1 text-[#d28b3e]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="mt-2 text-sm text-[#587066]">4,9 de 5 em avaliações de clientes.</p>
          </div>
          <figure className="rounded-2xl bg-[#f3ede2] p-7 sm:p-10">
            <blockquote className="font-serif text-2xl leading-snug text-[#27483d] sm:text-3xl">
              “A cesta chegou linda, com um cuidado que emocionou minha mãe. Foi mais que um
              presente.”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/80?img=49"
                alt="Marina A."
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="text-sm font-bold">Marina A.</p>
                <p className="text-xs text-[#587066]">São Paulo, SP</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-5 mb-24 overflow-hidden rounded-[2rem] bg-[#d9a586] px-6 py-12 text-center sm:mx-8 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-xl">
          <MapPin className="mx-auto text-[#794633]" size={24} />
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#17382f] sm:text-4xl">
            Vamos criar algo especial?
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#563d31]">
            Fale com a nossa equipe e monte um presente do seu jeito.
          </p>
          <WhatsAppButton className="mt-7 bg-[#17382f] hover:bg-[#0e2d25]" />
        </div>
      </section>

      <footer className="border-t border-[#e8e5dc] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-serif text-xl font-bold">
              casa <span className="italic text-[#bb6847]">nativa</span>
            </p>
            <p className="mt-1 text-xs text-[#587066]">Presentes para celebrar o cotidiano.</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#587066]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#17382f]"
            >
              <Instagram size={19} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[#17382f]">
              <MessageCircle size={19} />
            </a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-10 rounded-full bg-[#25d366] p-4 text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition hover:scale-105 md:hidden"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
      </a>
    </main>
  );
}
