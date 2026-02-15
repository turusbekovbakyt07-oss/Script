/*
Node Video Ultimate Fix
*/
const url = $request.url;
let body = $response.body;

if (body) {
    try {
        let obj = JSON.parse(body);

        if (url.indexOf("/user/info") !== -1) {
            obj.data = obj.data || {};
            obj.data.is_premium = true;
            obj.data.premium_type = 1;
            obj.data.premium_expired_time = 4070880000;
            obj.data.has_order = true;
            obj.data.order_id = "8888888888";
        }

        if (url.indexOf("/subscription") !== -1 || url.indexOf("/verify") !== -1) {
            obj.data = {
                "status": 1,
                "is_premium": true,
                "expire_time": 4070880000,
                "type": "lifetime"
            };
        }

        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        $done({});
    }
} else {
    $done({});
}
