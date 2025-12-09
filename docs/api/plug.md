# 插件类

> 需单独申请权限

所有接口都需带入 `Authorization`

统一响应内容

- `200` 请求成功
- `403` 无权限
- `422` 那里验证错误了

## 给 `tg` 群组发送消息

`POST` `/api/plug/sendTelegramMessage`

### 请求参数

- `to` `string|int` 发送对象
    - `group` 群组
    - `notify` 通知频道
    - `int` 类型时则为具体的用户
- `text` `string` 发送内容
- `parse_mode` `string` 发送格式 与 [`tg`](https://core.telegram.org/bots/api#formatting-options) 相同
    - `HTML`
    - `Markdown`
    - `MarkdownV2`
- `destroy_second` `int` 消息销毁时间(秒) 最大不可超过 `86400`

测试时可以将 `to` 传为自己的 `tg id`

### 示例

```bash
curl --location 'http://127.0.0.1:8000/api/plug/sendTelegramMessage' --header 'Authorization: ••••••' --form 'to="group"' --form 'text="发送内容"' --form 'parse_mode="HTML"' --form 'destroy_second="10"'
```
