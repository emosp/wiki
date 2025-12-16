# 上传相关

- 需 带入 `authorization` 头部

> 上传分为 `视频` `字幕` `图片` 等, 分为3步 获取基本信息 -> 获取上传token -> 保存上传结果

## 获取上传token

`POST` `/api/upload/getUploadToken`

### 请求参数

```json
{
    // 资源类型 video 视频 subtitle 字幕 image 图片
    "type": "video",
    // 文件格式
    "file_type": "video/mp4",
    // 文件名称
    "file_name": "demo.mp4",
    // 文件大小 字节
    "file_size": 250817,
    // 储存位置 global 国际 internal 国内 default 默认
    "file_storage": "default"
}
```

### 响应内容

```json
{
    // 上传的存储设备 分为 onedrive r2 local 等 不同的储存设备请求方式不同
    "type": "onedrive",
    // 文件id
    "file_id": "xWDKXEMv2E",
    // 上传具体参数
    "data": {
        "upload_url": "url"
    }
}
```

#### onedrive

```js
let file = File,
    start = 0,
    end = file.size - 1,
    total = file.size

fetch(upload_url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Range': `bytes ${start}-${end}/${total}`
    },
    body: file,
})
```

#### r2

```js
let file = File

fetch(upload_url, {
    method: 'PUT',
    body: file,
})
```

## 视频相关

### 获取基本信息

`GET` `/api/upload/video/base?item_type=[item_type]&item_id=[item_id]`

#### 请求参数

- `item_type` 资源类型 电影类型的 `vl` 或 电视剧类型的 `ve`
- `item_id` 资源id

#### 响应内容

##### 电影 vl

```json
{
    "title": "阿凡达：水之道"
}
```

##### 电视集 ve

```json
{
    "video_list_name": "【我推的孩子】",
    "season_number": "S01",
    "episode_number": "E03",
    "episode_title": "漫画原作的电视剧",
    "title": "【我推的孩子】 - S01E03 - 漫画原作的电视剧"
}
```

### 保存上传结果

`POST` `/api/upload/video/save`

#### 请求参数

```json
{
    "item_type": "vl",
    "item_id": 1,
    "file_id": "xWDKXEMv2E"
}
```

- `item_type` 和 `item_id` 与获取基本信息相同
- `file_id` 从获取上传token获取到的

#### 响应内容

##### 正常

```json
{
    // 总上传的数量
    "count": 2,
    // 获得的胡萝卜数量
    "radish": 0,
    // 媒体资源UUID 删除或获取详情时用
    "media_uuid": "01997239-b91e-7324-b615-98625ac2f7ab"
}
```

##### 错误

`http code 422`

```json
{
    "message": "视频正在合并中 请等待1分钟后再保存试下"
}
```

## 字幕相关

> 字幕无须获取详细信息 直接保存即可

### 保存字幕

`POST` `/api/upload/subtitle/save`

#### 请求参数

```json
{
    "media_uuid": "a785dcf1-6999-4f9f-bd1d-74979532c86f",
    "file_id": "xWDKXEMv2E"
}
```

- `media_uuid` 媒体资源UUID
- `file_id` 从获取上传token获取到的

#### 响应内容

##### 正常

```json
{
    // 获得的胡萝卜数量
    "carrot": 0,
    // 字幕ID 删除时用
    "subtitle_id": "7lZgdJVaov"
}
```

## 挂载上传

> 需单独开通

```text
文件夹名称必须包含 [tmdbid=xxx]

电视类型 资源文件名必须包含 SxxExx
/files/pending/tv
└── [tmdbid=225171]Pluribus
    ├── Season01
    │   ├── S01E01.mkv
    │   └── S01E01.srt
    └── S02E01.mkv

电影类型
/files/pending/movie
└── [tmdbid=872585]奥本海默
    ├── video.ass
    └── video.mkv
```

### 手动同步内容

> 此接口为同步调用 可能存在超时情况

`GET` `/api/upload/cloudSync/manual`

```json
{
    // 同步成功的挂载数量
    "success": 1
}
```

### 获取同步日志

> 只会显示错误的

`GET` `/api/upload/cloudSync/log`

```json
[
    {
        "file_path": "/files/pending/movie/[tmdbid=872585]奥本海默/video.ass",
        "message": "字幕文件格式不支持",
        "created_at": "2025-11-29T16:31:39.000000Z"
    }
]
```
