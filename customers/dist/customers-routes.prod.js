"use strict";function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,r){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,a=!1,s=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var express=require("express"),db=require("../data/dbConfig"),router=express.Router();router.get("/",function(e,r,t){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(db.select("*").from("customers").limit(10));case 3:n=e.sent,r.json(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(e.t0);case 10:case"end":return e.stop()}},null,null,[[0,7]])}),router.get("/:id",function(r,t,n){var a;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(db("customers").where("id",r.params.id).first());case 3:a=e.sent,t.json(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(e.t0);case 10:case"end":return e.stop()}},null,null,[[0,7]])}),router.post("/",function(r,t,n){var a,s,u,o,c;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={name:r.body.name,budget:r.body.budget},e.next=4,regeneratorRuntime.awrap(db("customers").insert(a));case 4:return s=e.sent,u=_slicedToArray(s,1),o=u[0],e.next=9,regeneratorRuntime.awrap(db("customers").where("id",o).first());case 9:c=e.sent,t.json(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n(e.t0);case 16:case"end":return e.stop()}},null,null,[[0,13]])}),router.put("/:id",function(r,t,n){var a,s;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={name:r.body.name,budget:r.body.budget},e.next=4,regeneratorRuntime.awrap(db("customers").where("id",r.params.id).update(a));case 4:return e.next=6,regeneratorRuntime.awrap(db("customers").where("id",r.params.id).first());case 6:s=e.sent,t.json(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n(e.t0);case 13:case"end":return e.stop()}},null,null,[[0,10]])}),router.delete("/:id",function(r,t,n){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(db("customers").where("id",r.params.id).del());case 3:t.status(204).end(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n(e.t0);case 9:case"end":return e.stop()}},null,null,[[0,6]])}),module.exports=router;