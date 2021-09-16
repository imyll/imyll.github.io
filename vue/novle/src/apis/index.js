const getHomeMale = () => {
  return Promise.all([
    // 获取男生热门榜单
    window.axios.get("http://novel.kele8.cn/rank/564d8494fe996c25652644d2"),
    // 获取男生完结榜
    window.axios.get("http://novel.kele8.cn/rank/564eea0b731ade4d6c509493"),
    // 获取男生大神榜
    window.axios.get("http://novel.kele8.cn/rank/564eeeabed24953671f2a577"),
  ]);
};
  
  
const getHomeFemale = () => {
  return Promise.all([
    // 获取女生热门榜单
    window.axios.get("http://novel.kele8.cn/rank/564d85b6dd2bd1ec660ea8e2"),
    // 获取女生完结榜单
    window.axios.get("http://novel.kele8.cn/rank/564eeae6c3345baa6bf06e38"),
    // 获取女生潜力榜单
    window.axios.get("http://novel.kele8.cn/rank/564eeeca5e6ba6ae074f10ec"),
  
  ]);
}
const getDetail = (id) => {
 
    return window.axios.get("http://novel.kele8.cn/book-info/" + id );
};


export { getHomeMale, getHomeFemale, getDetail };