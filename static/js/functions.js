const fetch = require("node-fetch");
const xApiKey = "aed8Gaefeevaizeel8ohchichah1ataipee5ain4u";
const jwt = require("jsonwebtoken");
const debug = require("debug")("acl");
const ALL_COMPANIES = "AL301,AL302,AL303,AL304,AL305,AR301,AR302,AR303,AZ301,AZ302,CA301,CA302,CA303,CA304,CA305,CA306,CA307,CA308,CA309,CA310,CA311,CA312,CA313,CA314,CA315,CA316,CA320,CA321,CA322,CA323,CA324,CA325,CA326,CA327,CA328,CA329,CA330,CA331,CA332,CA333,CA334,CA335,CA336,CA703,CA705,CA706,CO301,CO302,CO303,CO304,CO305,CO306,CO307,CO308,CO309,CO310,CT301,CT702,DE301,DE801,FL301,FL302,FL303,FL304,FL305,FL306,FL307,FL308,FL309,FL311,FL312,FL314,FL315,FL710,FL711,GA301,GA302,GA303,GA304,GA305,GA306,GA307,HI301,HI302,IA301,IA302,ID301,ID302,ID303,IL301,IL302,IL303,IL304,IL305,IL306,IL307,IL308,IL309,IL310,IL311,IL312,IL313,IL314,IN301,IN302,IN303,IN304,KS301,KS302,KS303,KY301,KY302,KY303,KY304,LA301,LA302,LA303,LA304,LA305,MA301,MA302,MA303,MA304,MA305,MA306,MA307,MA309,MA310,MA311,MA313,MD302,MD303,ME301,MI301,MI302,MI303,MI304,MI305,MI306,MI307,MI308,MN301,MN302,MO302,MO303,MO304,MO305,MO306,MO307,MO308,MO309,MS301,MS302,MT301,MT302,NC301,NC302,NC303,NC304,NC305,NC306,NC307,NC308,NC309,NC310,NC703,ND301,NE301,NE302,NH301,NH303,NJ301,NJ302,NJ303,NJ304,NJ305,NJ307,NJ308,NJ309,NJ310,NJ311,NJ312,NJ313,NJ314,NJ701,NM301,NM302,NM303,NM304,NV301,NY301,NY302,NY303,NY304,NY305,NY306,NY307,NY308,NY309,NY310,NY311,OH301,OH302,OH303,OH304,OH305,OH306,OH307,OH308,OH309,OH310,OH311,OH312,OH701,OK301,OK302,OK701,OR301,OR302,PA301,PA302,PA304,PA305,PA306,PA307,PA308,PA309,PA310,PA311,PA312,PA313,PA314,PA315,PA701,RI301,RI302,SC301,SC302,SC303,SC304,SC305,SC306,SC307,SC308,SC309,SC310,TN301,TN302,TN303,TN304,TN305,TN306,TN307,TX301,TX302,TX303,TX304,TX305,TX306,TX307,TX309,TX310,TX311,TX312,TX313,TX314,TX315,TX316,TX317,TX318,TX701,UT301,UT302,VA301,VA302,VA303,VA305,VA306,VA307,VA308,VA701,WA301,WA302,WA303,WA304,WA305,WA306,WA307,WA308,WA703,WA704,WI301,WI302,WI303,WV301,WV303,WY301,WY302,WY303"
const AFFILIATE_MANAGER = "Affiliate Manager"
const CUSTOMER_SUCCESS_TEAM = "Customer Success Team"

const aclDefaults = () => ({
  "real-estate-digital": false,
  "smarter-agent": false,
  "moxiworks": false,
});

function aclIndex(acls) {
  const defaultResult = aclDefaults();
  return acls.reduce(function(result, acl) {
    let { agent = "", mode = ["Read", "Append"] } = acl;
    let agentName = agent.replace("https://yodata.io/app/", "");
    result[agentName] = mode.includes("Read") && mode.includes("Append");
    return result;
  }, defaultResult);
}

async function getJWT({ token }) {
  debug({ token });
  const secret = process.env.HSF_REFLEX_JWT_SECRET;
  return jwt.verify(token, secret);
}

async function getACLs(id) {
  let name = id.toLowerCase();
  let url = `https://${name}.ds.bhhsresource.com/inbox/.acl`;
  debug(`getACLs for ${url}`);
  let options = {
    headers: {
      "x-api-key": xApiKey,
      Accept: "application/json"
    }
  };
  return fetch(url, options)
    .then(res => res.json())
    .then(json => json["acls"]);
}

function hasAdminAccess(role){
  return [CUSTOMER_SUCCESS_TEAM].includes(role)
}

function getOffices(idList = "", RelationshipRole) {
  return hasAdminAccess(RelationshipRole)
  ? ALL_COMPANIES.split(',')
  : idList.replace(/ /g, "").split(",")
}

async function getACLMap(idList = []) {
  let result = {};
  let promises = idList.map(async function(key) {
    let acls = await getACLs(key);
    let value = aclIndex(acls);
    return { [key]: value };
  });
  return Promise.all(promises).then(values => {
    return values.reduce(function(result, value) {
      return Object.assign(result, value);
    }, {});
  });
}

module.exports = {
  getOffices,
  getACLs,
  getJWT,
  aclIndex,
  aclDefaults,
  getACLMap
};
