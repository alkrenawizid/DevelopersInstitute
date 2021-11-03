let gameOn = async () => {
    let [name1, name2] = await isString();
    let noun = await isNoun();
    let city = await isCapital();
    let verb = await isVerb();
    return `${name1} is ${verb} ${noun} with ${name2} in ${city}`;
  };
  
  let isString = async () => {
    let name1 = prompt("give me a famous person name");
    let name2 = prompt("give me a 2nd name of a famous person");
    if (typeof name1 === "string" && typeof name2 === "string") {
      return [name1, name2];
    } else {
      throw new Error("they are not a string");
    }
  };
  
  let isNoun = async () => {
    let noun = prompt("give me a  noun");
    if (noun.length >= 3) {
      return noun;
    } else {
      throw new Error("the noun is too short");
    }
  };
  
  let isCapital = async () => {
    let city = prompt("give me a city");
    if (city[0] === city[0].toUpperCase()) {
      return city;
    } else {
      throw new Error("the city is not correct");
    }
  };
  
  let isVerb = async () => {
    let verb = prompt("give me a verb ending with ing");
    verb = verb.toLowerCase();
    let endV = verb.length - 3;
    if (verb.includes("ing", endV)) {
      return verb;
    } else {
      throw new Error("the verb is not good");
    }
  };
  
  gameOn()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));