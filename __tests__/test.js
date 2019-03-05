const functions = require("../src/functions");

test("getJWT", async () => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjYzNjQ5NjY2OTM2OTk2Njk4OCwiZXhwIjo2MzY0OTY2NzUzNjk5NjY5ODgsIlVzZXJJRCI6IjEwMzU2MCIsIkNvbXBhbnlJRCI6IkNUMzAxIiwiQWRtaW5VSSI6Imh0dHBzOi8vZHMuYmhoc3Jlc291cmNlLmNvbSJ9.d0KVhWAk1nc8KdNIZ4tYq7xVrplq9vRzgfmMSgEP1xo";
  let jwt = await functions.getJWT({ token });
  expect(jwt).toMatchObject({
    iat: 636496669369967000,
    exp: 636496675369967000,
    UserID: "103560",
    CompanyID: "CT301",
    AdminUI: "https://ds.bhhsresource.com",
    RelationshipRole: ""
  });
});

test("aclDefaults", () => {
  expect(functions.aclDefaults()).toMatchObject({
    "real-estate-digital": true,
    "smarter-agent": true,
    "moxiworks": false
  });
});

test("getOffices", () => {
  expect(functions.getOffices("A,B, C,D , E")).toEqual([
    "A",
    "B",
    "C",
    "D",
    "E"
  ]);
});

test("getACLs", async () => {
  const id = "SL170";
  const expected = [
    {
      agent: "https://yodata.io/app/real-estate-digital",
      accessTo: "https://sl170.ds.bhhsresource.com/inbox/",
      mode: []
    },
    {
      agent: "https://yodata.io/app/smarter-agent",
      accessTo: "https://sl170.ds.bhhsresource.com/inbox/",
      mode: ["Read", "Append"]
    }
  ];

  expect.assertions(1);
  let acls = await functions.getACLs(id);
  expect(acls).toEqual(expected);
});

test("aclIndex", () => {
  const acls = [
    {
      agent: "https://yodata.io/app/real-estate-digital",
      accessTo: "https://sl170.ds.bhhsresource.com/inbox/",
      mode: []
    },
    {
      agent: "https://yodata.io/app/smarter-agent",
      accessTo: "https://sl170.ds.bhhsresource.com/inbox/",
      mode: ["Read", "Append"]
    }
  ];
  expect(functions.aclIndex(acls)).toEqual({
    "real-estate-digital": false,
    "smarter-agent": true,
    "moxiworks": false
  });
});

test("getACLMap", async () => {
  expect.assertions(1);
  let offices = ["A", "SL170"];
  let aclMap = await functions.getACLMap(offices);
  let defaultValue = functions.aclDefaults();
  expect(aclMap).toMatchObject({
    A: { "real-estate-digital": true, "smarter-agent": true },
    SL170: { "real-estate-digital": false, "smarter-agent": true }
  });
});
