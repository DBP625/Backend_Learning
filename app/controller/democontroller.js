export async function demo(req, res) {
  // Adding Header
  res.header("header01", "value01");
  res.header("header02", "value02");

  // Adding Cookies
  res.cookie("cookie01", "value01");
  res.cookie("cookie02", "value02");
  res.cookie("cookie03", "value03");

  return res.status(401).json({
    id: 1,
    money: 100.012,
    message: "This is a demo endpoint",
    timestamp: new Date(),
    person: {
      name: "Denesh",
      age: 30,
      city: "Chittagong",
    },
    hobbies: ["Coding", "Watching Movies", "Sports"],
    isActive: true,
    createdAt: new Date(),
  });
}

// Parameter
export async function demo1(req, res) {
  let name = req.params.name;
  let age = req.params.age;

  return res.json({
    name: name,
    age: age,
  });
}

//Query
export async function demo2(req, res) {
  let name = req.query.name;
  let age = req.query.age;

  return res.json({
    name: name,
    age: age,
  });
}

//Header-req

export async function demoh(req, res) {
  let key01 = req.headers.key01;
  let key02 = req.headers.key02;
  return res.json({
    key01: key01,
    key02: key02,
  });
}

//Request body

export const demob = async function (req, res) {
  let body = req.body;
  return res.json({
    body: body,
  });
};

//Request formdata

export const demoform = async function (req, res) {
  let body = req.body;
  return res.json({
    body: body,
  });
};
