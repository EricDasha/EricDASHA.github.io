var posts=["post/keyboard/","post/powershell安装appx/","post/一篇没用的文章/","post/我个人认为意大利面就应该拌42号混凝土/","post/截图软件推荐/","post/瞬译/","post/部分游戏的伪局域网联机/","post/赛博超能力/","post/非常牛批のflash档案馆/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };