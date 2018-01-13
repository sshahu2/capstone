export class Init {
  load() {
 if (localStorage.getItem('Books') === null || localStorage.getItem('Books') == undefined) 
    {
      console.log("Creating the initial set of Books ...");
      var Books = [
        {
          id: 1,
          ISBN:"7905914730",
          title: "A",
          genre: "fiction",
          author: "Amish Tripathy",
          price: "98",
          publicationdate:"",
          publisher:"Westland",
          format:"HardCover",
          score:0,
          subdomain:[
            {
              id_id: 1,
            title:"ABC",
            sub_score:0,
            question:[
              "kjsnlksdlvk",
            "snvlksvmls",
            "ksjndlskvksl",
            "bdjvldfvk"]
          },
          {
            id_id: 2,
            title:"BCD",
            sub_score:0,
            question:[
            "kjsnlksdlvk2",
            "snvlksvmls2",
            "ksjndlskvksl2",
            "bdjvldfvk2"]
          },
          {
            id_id: 3,
            title:"CDE",
            sub_score:0,
            question:[
            "kjsnlksdlvk3",
            "snvlksvmls3",
            "ksjndlskvksl3",
            "bdjvldfvk3"]
          }
          ]
          
        },
        {
          id: 2,
          ISBN:"7986543210",
          title: "B",
          genre: "fiction",
          author: "Amish Tripathy",
          price: "98",
          publicationdate:"",
          publisher:"Westland",
          format:"Hardbound",
          score:0,
          subdomain:[
            {
            id_id: 1,
            title:"ABC2",
            sub_score:0,
           question:["kjsnlksdlvk4",
            "snvlksvmls4",
            "ksjndlskvksl4",
            "bdjvldfvk4"]
          },
          {
            id_id: 2,
            title:"BCD2",
            sub_score:0,
            question:["kjsnlksdlvk",
            "snvlksvmls4",
            "ksjndlskvksl4",
            "bdjvldfvk4"]
          },
          {
            id_id: 3,
            title:"CDE3",
            sub_score:0,
            question:["kjsnlksdlvk",
            "snvlksvmls5",
            "ksjndlskvksl5",
            "bdjvldfvk5"]
          }
          ]
        },
        {
          id: 3,
          ISBN:"817992162X",
          title: "C",
          genre: "biography",
          author: "Robin Sharma",
          price: "100",
          publicationdate:"",
          publisher:"Jaico Publishing House",
          score:0,
          subdomain:[
            {
              id_id: 1,
            title:"ABC4",
            sub_score:0,
            question:["kjsnlksdlvk6",
            "snvlksvmls6",
            "ksjndlskvksl6",
            "bdjvldfvk6"]
          },
          {
            id_id: 2,
            title:"BCD5",
            sub_score:0,
            question:["kjsnlksdlvk8",
            "snvlksvmls8",
            "ksjndlskvksl8",
            "bdjvldfvk8"]
          },
          {
            id_id: 3,
            title:"CDE6",
            sub_score:0,
            question:["kjsnlksdlvk7",
            "snvlksvmls7",
            "ksjndlskvksl7",
            "bdjvldfvk7"]
          }
          ]
        },
        {
          id: 4,
          ISBN:"817992162X",
          title: "D",
          genre: "biography",
          author: "Robin Sharma",
          price: "100",
          publicationdate:"",
          publisher:"Jaico Publishing House",
          score:0,
          subdomain:[
            {
              id_id: 1,
            title:"XYZ",
            sub_score:0,
            question:["kjsnlksdlvk6",
            "snvlksvmls6",
            "ksjndlskvksl6",
            "bdjvldfvk6"]
          },
          {
            id_id: 2,
            title:"XYZ2",
            sub_score:0,
            question:["kjsnlksdlvk8",
            "snvlksvmls8",
            "ksjndlskvksl8",
            "bdjvldfvk8"]
          },
          {
            id_id: 3,
            title:"XYZ3",
            sub_score:0,
            question:["kjsnlksdlvk7",
            "snvlksvmls7",
            "ksjndlskvksl7",
            "bdjvldfvk7"]
          }
          ]
        },
        
      ];
      localStorage.setItem('Books', JSON.stringify(Books));
    }
 else {
      console.log("Loaded the Books from local storage ...");
    }
  }
}
