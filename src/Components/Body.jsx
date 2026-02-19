import React, { useEffect, useRef, useState } from "react";
import { Images } from "../assets/Images";
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Body = () => {
  const scrollContainerRef = useRef(null);
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cards = container.querySelectorAll("[data-product-card]");
      const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 300;
      const scrollAmount = direction === "left" ? -step : step;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToProduct = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-product-card]");
    if (!cards.length) return;

    const clampedIndex = Math.max(0, Math.min(index, cards.length - 1));
    container.scrollTo({ left: cards[clampedIndex].offsetLeft, behavior: "smooth" });
    setActiveProductIndex(clampedIndex);
  };

  const products = [
    {
      name: "Johnnie Walker Black Label",
      price: "GHC 450",
      image: Images.blackLabel,
    },
    {
      name: "Clase Azul Reposado",
      price: "GHC 1200",
      image: Images.claseAzul,
    },
    {
      name: "Hennessy XO",
      price: "GHC 2800",
      image: Images.henessy,
    },
    {
      name: "Don Julio 1942",
      price: "GHC 1800",
      image: Images.donJulio,
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateActiveIndex = () => {
      if (window.innerWidth >= 768) return;

      const cards = container.querySelectorAll("[data-product-card]");
      if (!cards.length) return;

      const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : cards[0].offsetWidth;
      const nextIndex = Math.round(container.scrollLeft / Math.max(step, 1));
      const clampedIndex = Math.max(0, Math.min(nextIndex, cards.length - 1));

      setActiveProductIndex(clampedIndex);
    };

    updateActiveIndex();
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden bg-zinc-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 via-zinc-950/88 to-zinc-950" />

        <div className="relative mx-auto w-full max-w-5xl px-4 pb-8 pt-16 sm:pt-20 md:pt-20 lg:px-8 lg:pt-14">
          <motion.div
            className="relative overflow-hidden px-1 py-6 sm:px-2 sm:py-8 lg:px-2 lg:py-8"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="pointer-events-none absolute inset-0 lg:hidden">
              <img
                src={Images.bodyImg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 m-auto h-[125%] w-[125%] object-contain opacity-[0.42] blur-[0.9px] saturate-[1.22] contrast-[1.08]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_34%,rgba(251,191,36,0.22),rgba(0,0,0,0)_48%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/34 via-zinc-950/58 to-zinc-950/80" />
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[56%] lg:block">
              <img
                src={Images.bodyImg}
                alt=""
                aria-hidden="true"
                className="absolute inset-y-0 left-0 my-auto h-[92%] w-full object-contain object-left opacity-[0.35] blur-[0.6px] saturate-[1.22] contrast-[1.1]"
              />
              <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.2),rgba(0,0,0,0)_60%)]" />
              <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/20 via-zinc-950/40 to-transparent" />
            </div>

            <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.68, ease: "easeOut", delay: 0.06 }}
                viewport={{ once: false, amount: 0.35 }}
              >
                <div className="pointer-events-none absolute -left-10 top-10 h-52 w-52 rounded-full bg-amber-300/10 blur-3xl" />
                <p className="mb-3 text-[0.68rem] uppercase tracking-[0.24em] text-amber-300/78">Editorial Selection</p>
                <h2 className="text-3xl font-medium leading-tight tracking-[0.01em] text-zinc-100 sm:text-4xl lg:text-[1.9rem] xl:text-[2.05rem] drop-shadow-[0_0_30px_rgba(0,0,0,0.72)]">
                  Curated bottles for evenings with quiet confidence.
                </h2>
                <div className="mt-6 h-px w-20 bg-amber-300/55" />
              </motion.div>

              <motion.div
                className="relative z-10 max-w-xl lg:justify-self-end"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.68, ease: "easeOut", delay: 0.16 }}
                viewport={{ once: false, amount: 0.35 }}
              >
                <p className="text-base leading-relaxed text-zinc-300/95 lg:text-[0.84rem] lg:leading-6 drop-shadow-[0_0_22px_rgba(0,0,0,0.62)]">
                  From iconic labels to rare discoveries, each pour is selected for craft, character, and a finish worth lingering over.
                </p>
                <Link to="/Shop" className="btn-arcade btn-arcade-secondary mt-5 w-fit border-amber-300/45">
                  Discover Selection
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="w-full max-w-5xl mx-auto px-4 pb-12 pt-2 lg:px-8 lg:pt-12 lg:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
            <motion.div
              className="relative w-full overflow-hidden bg-gradient-to-br from-amber-950 via-amber-900 to-black text-white shadow-2xl aspect-[4/5] md:aspect-auto h-[30rem] lg:h-[22.4rem]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="relative p-8 flex h-full flex-col justify-between lg:pr-36">
                <div>
                  <h2 className="mt-3 lg:mt-1 sm:mt-4 text-3xl sm:text-4xl lg:text-[2.3rem] font-bold leading-tight">LIVE YOUR MOMENT</h2>
                  <p className="mt-6 sm:mt-6 text-md sm:text-base opacity-90 leading-relaxed w-25 lg:w-40 lg:text-[0.88rem]">
                    An exclusive discovery for every unique occasion
                  </p>
                </div>

                <Link
                  to="/Shop"
                  className="btn-arcade btn-arcade-secondary mt-8 sm:mt-10 w-fit whitespace-nowrap"
                >
                  Discover the collection
                </Link>
              </div>

              <img
                src={Images.henessy}
                alt="Hennessy bottle"
                className="absolute bottom-30 right-2 h-50 w-44 object-contain pointer-events-none drop-shadow-2xl -translate-x-1 lg:bottom-3 lg:right-4 lg:h-36 lg:w-36"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="relative w-full overflow-hidden bg-gradient-to-tr from-black via-slate-900 to-neutral-800 text-white shadow-2xl aspect-[4/5] md:aspect-auto h-[30rem] lg:h-[22.4rem]">
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-medium">Staff Pick</p>
                    <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-[2.3rem] font-bold leading-tight">
                      BLACK
                      <br />
                      LABEL
                    </h2>
                    <p className="mt-6 sm:mt-6 text-md sm:text-base opacity-90 leading-relaxed w-23 lg:w-40 lg:text-[0.88rem]">
                      The iconic blend of over 40 whiskies, aged 12 years. Rich, smoky, unforgettable.
                    </p>
                  </div>

                  <Link
                    to="/Shop"
                    className="btn-arcade mt-8 sm:mt-10 w-fit"
                  >
                    Shop now
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-200/35 bg-black/35">
                      <ArrowRight className="h-4 w-4 text-amber-100" />
                    </span>
                  </Link>
                </div>

                <img
                  src={Images.blackLabel}
                  alt="Johnnie Walker Black Label"
                  className="absolute bottom-30 right-2 h-50 w-44 object-contain pointer-events-none drop-shadow-2xl -translate-x-1 lg:bottom-3 lg:right-4 lg:w-44"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black py-10 md:py-14 lg:py-10">
          <div className="max-w-5xl lg:max-w-[52rem] mx-auto px-4 lg:px-8">
            <div className="mb-5 sm:mb-6">
              <p className="text-[0.68rem] uppercase font-medium tracking-[0.18em] text-amber-300/85 mb-2">Curated Selection</p>
              <div className="h-px w-20 bg-amber-300/45 mb-3"></div>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
                className="text-2xl sm:text-[2rem] lg:text-[1.58rem] font-medium tracking-[0.08em] text-zinc-100"
              >
                FEATURED PRODUCTS
              </motion.h2>
              <p className="mt-1 text-sm sm:text-base text-zinc-400">Popular Liquor</p>
            </div>

            <div className="rounded-[2.1rem] border border-zinc-700/80 bg-zinc-900/88 p-5 sm:p-7 md:px-8 md:pt-8 md:pb-11 lg:p-5 lg:pt-6 lg:pb-8 shadow-[0_26px_44px_-30px_rgba(0,0,0,0.85)]">
              <div className="relative">
                <button
                  onClick={() => scroll("left")}
                  className="btn-arcade-icon btn-arcade-icon-sm hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20"
                  aria-label="Previous products"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={() => scroll("right")}
                  className="btn-arcade-icon btn-arcade-icon-sm hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20"
                  aria-label="Next products"
                >
                  <ChevronRight size={16} />
                </button>

                <div
                  ref={scrollContainerRef}
                  className="overflow-x-auto scroll-smooth snap-x snap-mandatory pt-1 pb-4"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4">
                    {products.map((product) => (
                      <div key={product.name} data-product-card className="shrink-0 w-[84%] sm:w-[68%] md:w-auto snap-center">
                        <article className="flex h-full min-h-[24.25rem] md:min-h-[25rem] lg:min-h-[20.2rem] flex-col rounded-[1.35rem] border border-zinc-800 bg-zinc-950 px-5 pt-5 pb-4 lg:px-4 lg:pt-4 lg:pb-3 shadow-[0_14px_24px_-20px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_28px_-18px_rgba(0,0,0,0.74)]">
                          <div className="mb-5 flex h-56 items-center justify-center sm:h-60 lg:h-34">
                            <img src={product.image} alt={product.name} className="h-full w-full object-contain px-2" />
                          </div>

                          <h3 className="min-h-[3rem] text-sm md:text-base font-medium text-zinc-200 leading-snug">{product.name}</h3>

                          <div className="mt-4 flex items-end justify-between gap-3 border-t border-zinc-800 pt-4">
                            <p className="text-[1.45rem] leading-none font-semibold tracking-tight text-zinc-50 lg:text-[1.2rem]">{product.price}</p>
                            <button
                              className="btn-arcade-icon btn-arcade-icon-sm inline-flex shrink-0"
                              aria-label={`Add ${product.name} to cart`}
                            >
                              <ShoppingCart size={16} />
                            </button>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex md:hidden items-center justify-center gap-3 mt-6">
                <button
                  onClick={() => scroll("left")}
                  disabled={activeProductIndex === 0}
                  className="btn-arcade-icon h-8 w-8 disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-label="Previous product"
                >
                  <ChevronLeft size={14} />
                </button>

                <div className="flex items-center gap-2">
                  {products.map((product, index) => (
                    <button
                      key={product.name}
                      onClick={() => scrollToProduct(index)}
                      className={`rounded-full transition-all duration-300 ${
                        activeProductIndex === index
                          ? "h-2.5 w-8 bg-amber-200 shadow-[0_0_14px_-5px_rgba(251,191,36,0.9)]"
                          : "h-2.5 w-2.5 bg-zinc-600 hover:bg-zinc-400"
                      }`}
                      aria-label={`Go to product ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => scroll("right")}
                  disabled={activeProductIndex === products.length - 1}
                  className="btn-arcade-icon h-8 w-8 disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-label="Next product"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

