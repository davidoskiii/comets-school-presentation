import Button from "./Button";
import Planet from "./Planet";

const Header = () => {
  return (
    <section className="flex items-center justify-between gap-[10vw] h-screen">
      <div>
        {/* <img src="https://www.freeiconspng.com/uploads/comet-transparent-background-image-11.png" height={500}/> */}
        <Planet />
      </div>
      <div className="flex items-center gap-[4rem] flex-col">
        <div className="flex items-center gap-[1.5rem] flex-col w-[420px]">
          <h1 className="font-sans text-normal text-6xl text-center">
            <span className="font-bold">Marte</span> e i suoi <span className="font-bold"> misteri</span>
          </h1>
          <span className="uppercase text-normal text-[20px] font-sans tracking-[0.25rem]">ricerca scolastica</span>
          <p className="text-normal text-[18px] text-center w-[400px]">Esplora Marte con i nostri esperti! Approfondisci la conoscenza del pianeta rosso attraverso una guida autorevole e preparati per un'esperienza unica nel suo genere.</p>
        </div>
        <Button>leggi di più</Button>
      </div>
    </section>
  );
};

export default Header;
