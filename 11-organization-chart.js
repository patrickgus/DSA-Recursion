// Write a recursive function that prints the following organization chart.
// Your output should be as shown below with proper indentation to show the hierarchy.
// You may store the org chart in an object and send that as an input to your program.

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?

let org = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {}
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {}
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
};

const organization = (obj, depth = 0) => {
  let tab = " ".repeat(depth * 4);
  Object.keys(obj).forEach(key => {
    console.log(tab + key);
    organization(obj[key], depth + 1);
  });
};

organization(org);
