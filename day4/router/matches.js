const express = require("express")
const c=require("../controller/matchcontroller")
const router = express.Router();

router.get("",c.getMatches);

router.get("/:id",c.getMatch);

router.post("",c.postMatch);

router.put("/:id",c.updateMatch);

router.delete("/:id",c.deleteMatch);

module.exports = router;