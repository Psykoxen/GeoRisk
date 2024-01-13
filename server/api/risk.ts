import e from "cors";

export default defineEventHandler(async (event) => {
  type DangersData = {
    city?: string;
    citycode?: string;
    azi?: any;
    catnat?: any;
    cavite?: any;
    mvt?: any;
    radon?: any;
    risques?: any;
  };
  const dangerData: DangersData = {};

  const body = await readBody(event);

  try {
    let urlLocate = `https://api-adresse.data.gouv.fr/search/?q=${body.adress}`;
    const response = await fetch(urlLocate);
    const data = await response.json();
    dangerData.city = data.features[0].properties.city;
    dangerData.citycode = data.features[0].properties.citycode;

    if (dangerData.citycode !== undefined) {
      // AZI request
      let urlAZI = `https://www.georisques.gouv.fr/api/v1/gaspar/azi?code_insee=${dangerData.citycode}&page=1&page_size=10&rayon=1000`;
      const responseAZI = await fetch(urlAZI);
      if (!responseAZI.ok) {
        throw new Error(`Request failed with status ${responseAZI.status}`);
      }
      const dataAZI = await responseAZI.json();
      dangerData.azi = dataAZI.data[0];

      // CATNAT request
      let urlCATNAT = `https://www.georisques.gouv.fr/api/v1/gaspar/catnat?code_insee=${dangerData.citycode}&page=1&page_size=100&rayon=1000`;
      const responseCATNAT = await fetch(urlCATNAT);
      if (!responseCATNAT.ok) {
        throw new Error(`Request failed with status ${responseCATNAT.status}`);
      }
      const dataCATNAT = await responseCATNAT.json();
      dangerData.catnat = dataCATNAT.data.sort((a: any, b: any) => {
        const parseDate = (dateString: string) => {
          const [day, month, year] = dateString.split("/").map(Number);
          return year * 10000 + month * 100 + day;
        };

        const dateA = parseDate(a.date_debut_evt);
        const dateB = parseDate(b.date_debut_evt);

        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        } else {
          return a.libelle_risque_jo.localeCompare(b.libelle_risque_jo);
        }
      });

      // CAVITE request
      let urlCAVITE = `https://www.georisques.gouv.fr/api/v1/cavites?code_insee=${dangerData.citycode}&page=1&page_size=10`;
      const responseCAVITE = await fetch(urlCAVITE);
      if (!responseCAVITE.ok) {
        throw new Error(`Request failed with status ${responseCAVITE.status}`);
      }
      const dataCAVITE = await responseCAVITE.json();
      dangerData.cavite = dataCAVITE.data;

      // MVT request
      let urlMVT = `https://www.georisques.gouv.fr/api/v1/mvt?code_insee=${dangerData.citycode}&page=1&page_size=10`;
      const responseMVT = await fetch(urlMVT);
      if (!responseMVT.ok) {
        throw new Error(`Request failed with status ${responseMVT.status}`);
      }
      const dataMVT = await responseMVT.json();
      dangerData.mvt = dataMVT.data;

      // RADON request
      let urlRADON = `https://www.georisques.gouv.fr/api/v1/radon?code_insee=${dangerData.citycode}&page=1&page_size=10`;
      const responseRADON = await fetch(urlRADON);
      if (!responseRADON.ok) {
        throw new Error(`Request failed with status ${responseRADON.status}`);
      }
      const dataRADON = await responseRADON.json();
      dangerData.radon = dataRADON.data[0];

      // RISQUE request
      let urlRISQUE = `https://www.georisques.gouv.fr/api/v1/gaspar/risques?code_insee=${dangerData.citycode}&page=1&page_size=10`;
      const responseRISQUE = await fetch(urlRISQUE);
      if (!responseRISQUE.ok) {
        throw new Error(`Request failed with status ${responseRISQUE.status}`);
      }
      const dataRISQUE = await responseRISQUE.json();
      dangerData.risques = dataRISQUE.data[0].risques_detail;

      return dangerData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
  console.log(typeof body);
  return { body };
});
