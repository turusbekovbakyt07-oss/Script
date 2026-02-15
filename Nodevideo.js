let body = $response.body;
if (body) {
    try {
        let obj = JSON.parse(body);
        if ($request.url.indexOf("/user/info") !== -1) {
            obj.data = obj.data || {};
            obj.data.is_premium = true;
            obj.data.premium_type = 1;
            obj.data.premium_expired_time = 4070880000;
            obj.data.has_order = true;
            $done({ body: JSON.stringify(obj) });
        } else {
            $done({});
        }
    } catch (e) {
        $done({});
    }
} else {
    $done({});
}
