const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class ProgramSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "program", truncate: true, dependencies: [CategorySeeder] });
  }

  run() {
    const programs = [
      {
        title: "The Good Place",
        synopsis:
          "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
        poster:
          "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
        country: "USA",
        year: 2016,
        category_id: this.getRef("category_Comédie").insertId,
      },
      {
        title: "Dark",
        synopsis:
          "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
        poster:
          "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
        country: "Allemagne",
        year: 2017,
        category_id: this.getRef("category_Science-Fiction").insertId,
      },
      {
        title: "Ozark",
        synopsis:
          "Un conseiller financier quitte soudainement la banlieue de Chicago pour s'installer dans une station de villégiature estivale des monts Ozarks, au Missouri. Il doit y blanchir 500 millions de dollars en cinq ans pour calmer la fureur d'un baron de la drogue.",
        poster:
          "https://img.betaseries.com/kHLCWnVEoBebu3ABPuVhzckS6Xs=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F271c2bd20a62327c6cf00744d4449a3c.jpg",
        country: "USA",
        year: 2017,
        category_id: this.getRef("category_Thriller").insertId,
      },
      {
        title: "Silicon Valley",
        synopsis:
          "Dans la Silicon Valley d'aujourd'hui, les personnes les plus qualifiées pour réussir ne sont pas forcément celles les plus qualifiées pour savoir comment le gérer...",
        poster:
          "https://img.betaseries.com/zgIdb4A7-Pd_guLdEs2YHUi-jBg=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fafb0f6a3f5deec19ddc8dac16069b5ee.jpg",
        country: "USA",
        year: 2014,
        category_id: this.getRef("category_Comédie").insertId,
      },
      {
        title: "Polar Park",
        synopsis:
          "Suite à la réception d'un message énigmatique, David Rousseau, écrivain de romans policiers en manque d'idées nouvelles, se dirige vers Mouthe, la commune la plus glaciale de France. Le même jour, un homicide se produit... Voyant une chance inattendue pour un nouveau livre, Rousseau lance une investigation qui interfère avec celle du sergent Louvetot.",
        poster:
          "https://img.betaseries.com/kjeRUP0PabMXe4oWAvLpz-MX_Zg=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fforce-35232-65392eee9adc2.jpg",
        country: "France",
        year: 2023,
        category_id: this.getRef("category_Thriller").insertId,
      },
      {
        title: "Master of the Air",
        synopsis:
          "Située pendant la période tumultueuse de la Seconde Guerre mondiale, cette série met en scène des pilotes de chasse audacieux qui mettent leur vie en jeu au sein du 100e groupe de bombardement. Cette fraternité, liée par le courage, les revers et les triomphes, incarne l'esprit de résilience et de camaraderie.",
        poster:
          "https://img.betaseries.com/776pEk3EYBEMXoB7Zd4Y7XoS_wg=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F310d86f1686b368da8f322ee5fcb6a34.jpg",
        country: "USA",
        year: 2024,
        category_id: this.getRef("category_Histoire").insertId,
      },
    ];

    programs.forEach((program) => {
      this.insert(program); // insert into program(title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)
    });
  }
}

// Export the ProgramSeeder class
module.exports = ProgramSeeder;
