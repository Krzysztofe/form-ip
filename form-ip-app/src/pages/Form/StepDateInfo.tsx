import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const StepDateInfo = () => {
  return (
    <Card>
      <Typography variant="body1" sx={{ p: 1, fontWeight: "bold" }}>
        KONTAKT: tel.
        <br /> 736-850-536 <br />
        ipamazon@wp.pl <br />
        www.ozzip.p
      </Typography>
      <Typography variant="body2" sx={{ p: 1, fontWeight: "bold" }}>
        Facebook: <br /> OZZ Inicjatywa Pracownicza Amazon <br /> INFORMACJA O
        DACIE PRZYJĘCIA DO ZWIĄZKU
      </Typography>
      <Typography variant="body2" sx={{ p: 1 }}>
        Jeżeli nasza Komisja nie postanowi inaczej, datą przyjęcia Ciebie do
        związku będzie: <br />
        1) ostatni dzień miesiąca, w którym oświadczenie to zostało doręczone:{" "}
        <br />
        a) członkowi prezydium organizacji podstawowej Związku (również poprzed
        odebranie ze skrzynki pocztowej na tablicy związkowej) <br /> b)
        bezpośrednio osobie działającej z upoważnienia prezydium Komisji <br />
        c) na ujawniony w KRS adres Związku (aktualnie: ul. Kościelna 4/1a,
        60-538 Poznań)
        <br /> 2) dzień, w którym po otrzymaniu tego oświadczenia prezydium
        Komisji podjęło się Twojej obrony wobec podmiotu zatrudniającego (w tym
        pracodawcy). <br />
        Powyższe wynika z Uchwały nr 60/5/2018 Komisji Krajowej OZZIP z
        28.10.2018 r
      </Typography>

      <Typography variant="body2" sx={{ p: 1, fontWeight: "bold" }}>
        JEŚLI PODAŁAŚ/PODAŁEŚ E-MAIL, OTRZYMASZ DROGĄ E-MAIL POTWIERDZENIE
        ZAPISANIA DO ZWIĄZKU ORAZ DODANIA DO LISTY DYSKUSYJNEJ.
      </Typography>
    </Card>
  );
};

export default StepDateInfo;
