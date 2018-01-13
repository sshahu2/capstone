export class Init {
  load() {
   if (localStorage.getItem('Domains') === null || localStorage.getItem('Domains') == undefined) 
    {
      console.log("Creating the initial set of Domains ...");
      var Domains = [
        {
          id: 1,
          category: "Software"
          
        },
        {
          id: 2,
          category: "MicroServices"
          
        },
         {
          id: 3,
          category: "Services"
          
        }
      ];
      localStorage.setItem('Domains', JSON.stringify(Domains));
    }
   else {
      console.log("Loaded the Books from local storage ...");
    }
  }
}
