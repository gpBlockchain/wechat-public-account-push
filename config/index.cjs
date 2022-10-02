/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
    "APP_ID": "wx0e8be8141e0446f7",
    "APP_SECRET": "10a2a1c60effd6f59524696db85a12e7",
    "IS_SHOW_COLOR": true,
    "CALLBACK_TEMPLATE_ID": "3zTV4O3C6TgD1mS7E17FtsPosXOxokKQYKGHH-o1ZcY",
    "CALLBACK_USERS": [{"name": "自己", "id": "o8XXm5imGxaOD5a6jVlooPzLDqtc"}],
    "USERS": [
        {
        "name": "宝宝",
        "id": "o8XXm5vCaJjThWZLSWWZYmY9Waa0",
        "useTemplateId": "3zTV4O3C6TgD1mS7E17FtsPosXOxokKQYKGHH-o1ZcY",
        "province": "四川省",
        "city": "成都",
        "horoscopeDate": "09-22",
        "horoscopeDateType": "今日",
        "openUrl": "",
        "festivals": [{"type": "节日", "name": "生日", "date": "09-22", "year": "2022"}],
        "customizedDateList": [
            { keyword: 'love_day', date: '2022-04-22' },
        ]
    },
        {
            "name": "自己",
            "id": "o8XXm5imGxaOD5a6jVlooPzLDqtc",
            "useTemplateId": "3zTV4O3C6TgD1mS7E17FtsPosXOxokKQYKGHH-o1ZcY",
            "province": "四川省",
            "city": "成都",
            "horoscopeDate": "09-22",
            "horoscopeDateType": "今日",
            "openUrl": "",
            "festivals": [{"type": "节日", "name": "生日", "date": "09-22", "year": "2022"}],
            "customizedDateList": [
                { keyword: 'love_day', date: '2022-04-22' },
            ]
        }

    ],
    "SWITCH": {
        "weather": true,
        "holidaytts": false,
        "CIBA": false,
        "oneTalk": false,
        "earthyLoveWords": true,
        "momentCopyrighting": false,
        "poisonChickenSoup": false,
        "poetry": false,
        "horoscope": true,
        "birthdayMessage": true
    }
}
module.exports = USER_CONFIG

