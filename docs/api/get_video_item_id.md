# 获取视频ItemId

- 需 带入 `authorization` 头部

## 接口地址

- `GET` `/api/video/getItemId?type=[type]&title=[title]&tmdb_id=[tmdb_id]&video_id=[video_id]`

## 请求参数

> 提示：参数为均为可选

- `type` 视频类型 `movie` 电影 | `tv` 电视
- `title` 搜索的标题 模糊搜索
- `tmdb_id` [tmdb](https://www.themoviedb.org/) 中id
- `video_id` 视频id

## 返回状态

- `200` 成功请求
- `401` 认证过期
- `405` 请求方法无效

## 响应内容

```json5
[
    {
        // 电视类型
        "video_type": "tv",
        "item_type": "vl",
        "item_id": 1,
        "tmdb_id": "262928",
        "title": "入青云",
        // 上映日期
        "date_air": "2025-10-08",
        // 季信息
        "seasons": [
            {
                "item_id": 2,
                "season_title": "第 1 季",
                // Sxx S01
                "season_number": 1,
                "date_air": "2025-10-08",
                // 集信息
                "episodes": [
                    {
                        "item_type": "ve",
                        "item_id": 3,
                        "episode_title": "明意为得解药接近伯宰",
                        // Exx E01
                        "episode_number": 1,
                        "date_air": "2025-10-08",
                        // 有资源时
                        "medias": [
                            {
                                "item_id": 4,
                                "media_uuid": "a785dcf1-6999-4f9f-bd1d-74979532c86f",
                                // 资源名称
                                "media_name": "1080p",
                                "file_size": null,
                                // 有字幕时
                                "subtitles": [
                                    {
                                        "item_id": 5,
                                        // 字幕名称
                                        "title": "zh_cn",
                                        // 字幕类型
                                        "codec": "ass"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "item_type": "ve",
                        "item_id": 6,
                        "episode_title": "含风君再度送人未果",
                        "episode_number": 2,
                        "date_air": "2025-10-08",
                        // 无资源时
                        "medias": [

                        ]
                    }
                ]
            }
        ]
    },
    {
        // 电影类型
        "video_type": "movie",
        "item_type": "vl",
        "item_id": 7,
        "tmdb_id": "44115",
        "title": "127小时",
        "date_air": "2010-11-12",
        // 媒体信息 与 电视类型相同
        "medias": [
            {
                "item_id": 8,
                "media_uuid": "ed271489-e2d0-4069-929b-492b844f9b5f",
                "media_name": "2160p",
                "file_size": null,
                "subtitles": [

                ]
            }
        ]
    }
]
```
