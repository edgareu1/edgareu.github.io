class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.academicPath = [];
    this.professionalPath = [];
    this.skills = [];
    this.academicAwards = [];
    this.professionalAchievements = [];
    this.status = 'living';
  }

  skipAge(years) {
    this.age += years
  }

  addToAcademicPath(level, field) {
    this.academicPath.push( { level: level, field: field } );
  }

  addToProfessionalPath(field) {
    this.professionalPath.push( { field: field } );
  }

  setStatus(status) {
    this.status = status
  }
}


let edgar = new Person(name = "Edgar", country = "Portugal");

edgar.greeting();
// Hi, I'm Edgar and this is my life!

edgar.skipAge(18);
// Edgar is now 18 years old!

edgar.beginBachelorDegree(field = "Management", insitution = "Coimbra University");
// Edgar wants to understand the rules of the 'game'...

edgar.addToSkills("Economics", "Finance", "Mathematics", "Business Law", ... );
edgar.addExperience(type = "Erasmus", city = "Prage, Czech Republic");
edgar.addAcademicAward("3% Best Student Award");
edgar.finishBachelorDegree();
// Edgar finished his bachelor's degree in management with a 3% best student award degree

edgar.beginMasterDegree(field = "Finance", insitution = "Coimbra University");
edgar.addToSkills("Finance", "Accounting", "Tax Law", "Analysis", ... );
edgar.beginWorking(title = "Accountant");
edgar.addProfessionalAchievement(description = "Automated accounting process", results = "Improved productivity metrics up to 4 times");
edgar.stopWorking();
// Edgar worked during a year and a half in accounting

edgar.addAcademicAward("Best Master's Student");
edgar.endMasterDegree();
// Edgar finished his master's degree in Finance being recognized as the best student

edgar.beginTravel(destiny = "Europe");
// Edgar began traviling by Europe...

edgar.stopTravel(reason = "Covid-19");
// Traveling stopped because of a global pademic!

edgar.analyseLifeChoices();
// Edgar is deciding what he want to do with his life
// ...
// Edgar decided to change his life!
// Time to learn how to code!

edgar.beginCoodingBootcamp(institution = "Le Wagon", field = "Web Developer");

edgar.addToSkilss();

edgar.addToSkilss();

edgar.endCoodingBootcamp();


edgar.deepenKnowledge();

edgar.getStatus();
// Edgar is now looking for a job...

edgar.fareweell();
// This was Edgar's life
