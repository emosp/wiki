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
    "file_size": 250817
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
    "radish": 0
}
```

##### 错误

`http code 422`

```json
{
    "message": "视频正在合并中 请等待1分钟后再保存试下"
}
```
