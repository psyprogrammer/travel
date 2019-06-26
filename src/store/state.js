let defaultCity = '上海'
try {
  if (localStorage.city) { // 若用户关闭了本地存储，localStorage会抛出错误，这样避免因此错误终止程序
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
