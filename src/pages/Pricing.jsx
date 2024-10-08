import CtaSection from "../components/CtaSection"
import "./Pricing.css"

const PricingPage = () => {
  const services = [
    { name: 'Čištění + plnění klimatizace chladivem R134A', 
      price: 'Odsátí starého chladiva a oleje, vakuování, základní test těsnosti systému, naplnění novým olejem a chladivem 500,- Kč. cena za 1gr. chladiva R134a.....3 Kč.' },
    { name: 'Čištění + plnění klimatizace chladivem 1234yf', 
      price: 'Odsátí starého chladiva a oleje, vakuování, základní test těsnosti systému, naplnění novým olejem a chladivem 500,- Kč, cena za 1gr. chladiva R1234yf.....4,50 Kč.' },
    { name: 'Detekce úniku chladiva dusíkem', 
      price: '400,- Kč, při následné opravě v našem servisu 200,- Kč.' },
    { name: 'Dezinfekce ozónem', 
      price: 'osobní automobil 350,- Kč. dodávka, mikrobus 450,- Kč.' },
    { name: 'Výměna oleje + filtru motoru', 
      price: '300,- Kč. při zakoupení materiálu v našem servisu, 500,- Kč. při dodaném materiálu' },
    { name: 'Diagnostika', 
      price: '250,- Kč.' },
    { name: 'Výměna brzdových destiček + kotoučů', 
      price: '500,- Kč. při zakoupení materiálu v našem servisu' },
    { name: 'Výměna rozvodového řemene', 
      price: '1000,- Kč. až 2000,- Kč. dle typu automobilu (např. Škoda Octávia 1,9Tdi 1500,- Kč)' },
    { name: 'Leštění předních světlometů automobilů', 
      price: '500,- Kč. a výše za 1 světlomet dle velikosti světlometu (např. Škoda Fábia 500,- Kč za jeden světlomet)' },
    { name: 'Zajištění STK + emisí - benzín', 
      price: '3300,- Kč.' },
    { name: 'Zajištění STK + emisí - nafta', 
      price: '3500,- Kč.' },
    { name: 'Ceny jsou s včetně DPH.', 
      price: '* Uvedené ceny jsou pouze orientační' },
  ];

  return (
    <div className="pricing-container">
      <h1 className='pricing-heading'>Ceník služeb</h1>
      <p>Podívejte se na náš aktuální ceník a zjistěte, jak můžeme pomoci s údržbou a opravami vašeho vozu.</p>

      <section className="services-section">
    
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Služba</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <CtaSection/>
    </div>
  );
};

export default PricingPage