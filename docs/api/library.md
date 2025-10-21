# 媒体库

默认响应为

```json
{
    // 获得的胡萝卜
    "carrot": 1
}
```

视频类型为固定值

- `movie` 电影
- `tv` 电视

## 媒体库列表

`GET` `/api/library/base`

```json
[
    {
        "id": 11,
        "name": "电视",
        "image_url": "https://emos.lol/files/base/library/11.png"
    },
    {
        "id": 21,
        "name": "电影",
        "image_url": "https://emos.lol/files/base/library/21.png"
    }
]
```

### 更新媒体库封面图

> todo: 自动删除缓存

`PUT` `/api/library/changeImage`

- `library_id` 媒体库ID
- `file_id` 文件ID 用 [`image`](./upload.md#获取上传token) 获取

## 视频列表

`GET` `/api/video/list`

### 请求参数

- `library_id` 媒体库ID
- `tmdb_id` [tmdb](https://www.themoviedb.org/) 中id
- `video_id` 视频ID
- `type` 视频类型
- `title` 视频标题 模糊搜索
- `page` 当前页数
- `page_size` 每页条数 1 - 100 默认 20
- `with_delete` 是否包含删除已的视频 `0`否 或 `1`是 默认为 `0`

### 响应内容

```json
{
    // 当前页码
    "page": 1,
    // 每页条数
    "page_size": 10,
    // 总数
    "total": 2,
    "items": [
        {
            // 存在则可以直接上传资源
            "item_id": null,
            "tmdb_id": "75778",
            "tmdb_url": "https://www.themoviedb.org/tv/75778",
            // 媒体库ID
            "library_id": 31,
            // 媒体库名称
            "library_name": "电视",
            "video_id": 2665,
            "video_type": "tv",
            "video_title": "25岁的女高中生",
            "video_origin_title": "25歳の女子高生",
            "video_description": "花（原田瞳 配音）从来都没想象过，25岁的自己依然在苦苦的寻找着工作。某日，花的亲戚找到了她，提出了一个奇怪的委托。原来，花16岁的表妹是一个家里蹲，不愿意去学校上学，而花的样貌和表妹极为相似，所以亲戚请求花隐姓埋名假扮表妹去学校上课。\n\n走投无路的花接受了委托，经过一番精心的装扮后，自认为无懈可击绝对不会暴露的花踏入了高中的校园。让花没有想到的是，自己的班主任，竟然是曾经的高中同学蟹江，不仅如此，蟹江在第一时间便识破了花的真身。花请求蟹江帮她保守秘密，然而，蟹将却提出了令花感到害臊又悸动的条件。",
            // 封面图
            "video_image_cover": "https://emos.lol/emby/Items/vl-2665/Images/Primary",
            // 上映时间
            "video_date_air": "2018-01-08",
            // 资源总数 大于0则可以获取资源列表
            "media_count": 12,
            // 点播总数
            "request_count": 1,
            // 是否已删除
            "is_delete": true
        },
        {
            "item_id": "vl-2660",
            "tmdb_id": "17578",
            "tmdb_url": "https://www.themoviedb.org/movie/17578",
            "library_id": 21,
            "library_name": "电影",
            "video_id": 2660,
            "video_type": "movie",
            "video_title": "丁丁历险记",
            "video_origin_title": "The Adventures of Tintin",
            "video_description": "电影改编自比利时漫画家埃尔热（Hergé）笔下风靡全球多年的同名作品《丁丁历险记》。故事跟随着一个充满好奇心的年轻记者丁丁（杰米贝尔 饰）和他忠心无比的狗狗白雪，他们发现一艘藏有惊爆秘密的模型船，于是丁丁受到这个流传几世纪的秘密吸引，并引起残暴恶棍萨卡林（丹尼尔克雷格 饰）的注意，因为萨卡林相信丁丁偷了跟红色拉克姆有关的无价宝藏，不过由于狗狗白雪、坏脾气的航海家阿道克船长（安迪瑟金斯 饰）及笨手笨脚的侦探搭挡杜庞与杜邦（赛门佩吉和尼克弗斯特 饰）的帮助，丁丁将会游历半个地球，智取并赶过他的敌人，热切地寻找船舰独角兽号的最后落脚处，因为那正关键着一艘失事船的庞大财富……以及一则古老的诅咒。",
            "video_image_cover": "https://emos.lol/emby/Items/vl-2660/Images/Primary",
            "video_date_air": "2011-10-24",
            "request_count": 0,
            "media_count": 0,
            "is_delete": false
        }
    ]
}
```

## 修改视频所在媒体库ID

`PUT` `/api/video/[video_id]/changeLibraryId?library_id=[library_id]`

- `video_id` 视频ID
- `library_id` 新媒体库ID

## 删除视频

`DELETE` `/api/video/[video_id]/delete`

- `video_id` 视频ID

## 恢复删除的视频

`PATCH` `/api/video/[video_id]/recover`

- `video_id` 视频ID
