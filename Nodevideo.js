/*
Node Video Premium Fix 2026
*/

let obj = JSON.parse($response.body);

obj.data = {
  "is_premium": true,
  "premium_type": 1,
  "premium_expired_time": 4070880000,
  "has_order": true,
  "is_free_trial": false,
  "order_id": "888888888888888"
};
obj.status = 1;
obj.msg = "success";

$done({ body: JSON.stringify(obj) });
