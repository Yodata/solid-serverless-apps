const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const formParser = bodyParser.urlencoded();
const path = require("path");
const swig = require("swig");

const { getJWT, getACLMap, getOffices } = require("./src/functions");

const app = express();
const port = process.env.PORT || 8000;

const apiKey = "aed8Gaefeevaizeel8ohchichah1ataipee5ain4u";
const publicDir = path.join(__dirname, "public");


module.exports = async (req, res) => {
  try {
    let body = req.body;
    let jwt = await getJWT(body);
    let { UserID, CompanyID, RelationshipRole } = jwt;
    let offices = getOffices(CompanyID, RelationshipRole);
    let acl = await getACLMap(offices);
    let data = {
      apiKey,
      userId: UserID,
      companyId: CompanyID,
      offices,
      acl
    };
    if (!roleCanViewAuthorizationUI(RelationshipRole)) {
      throw new Error(`the role ${RelationshipRole} is not authorized to access this page`)
    }
    return res.render("app", { data });
  } catch (err) {
    console.error(err)
    return res.render("error", { message: err.message });
  }
}



function roleCanViewAuthorizationUI(RelationshipRole) {
  const AFFILIATE_MANAGER = "Affiliate Manager"
  const CUSTOMER_SUCCESS_TEAM = "Customer Success Team"
  return [AFFILIATE_MANAGER, CUSTOMER_SUCCESS_TEAM].includes(RelationshipRole)
}