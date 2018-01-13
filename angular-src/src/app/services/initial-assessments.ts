export class Init {
  load() {
    if (localStorage.getItem('assessments') === null || localStorage.getItem('assessments') == undefined) {
      console.log("Creating the initial set of assessments ...");
      var assessments = [
        {
    "subject_name":"Microservices",
    "sub_domain":[
    
        {
     "name":"DevOps",
     "parameters":["A","B"],
      "scoring_model":[95,5]
        },

         {
     "name":"Service Design",
     "parameters":["C","D"],
      "scoring_model":[90,10]
        }
    
    ]
    
    

}
           
      ];
      localStorage.setItem('assessments', JSON.stringify(assessments));
    }
    else {
      console.log("Loaded the assessments from local storage ...");
    }
  }
}
