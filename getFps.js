    // 视频播放js
    /**
        url@ （为.MP4的视频链接）
        调用方式 videoPlaying(url).then(res=>{
                    // 这里就可以获取到你想要的视频帧图片
                    console.log(res)
                })
    */
   export const videoPlaying = function (url) {
    // 第一步先创建video标签
    let video = document.createElement("VIDEO");
    // 设置缩略图的缩放比例
    let slide = 0.5;
    // 有的同学可能会出现跨域现象，这里设置
    video.crossorigin = "";
    // 设置video标签的src属性 src为视频的播放地址
    video.setAttribute("src", url);
    // 截取自定义帧数（这里可以不设置，如果不设置有可能会截取白屏，建议设置为1或者自定的帧数）
    video.currentTime = 89
    // 这里使用 promise 原因是：因为canvas绘图需要时间，程序需要时间执行，采用异步返回
    return new Promise((resolve, reject) => {
        // 这里是video的监听函数，不懂的同学去w3c 或者 菜鸟教程 查看 （监听video就绪之后就开始使用canvas绘图）
        video.addEventListener('loadeddata', function () {
            // 绘图就不用我多说了吧，创建画板
            let canvas = document.createElement("canvas");

            let img = document.createElement('img')
            img.src = './ddd.gif'
            // 设置画板宽高 比例
            canvas.width = video.videoWidth * slide;
            canvas.height = video.videoHeight * slide;
            // 获取画板上下文执行绘图 直接把video 丢进去 就可以了
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
 
            // 这里可以自行扩展，我这里是直接返回base64的串
            // let img = document.createElement("img");
            // img.src = canvas.toDataURL("image/png");
            console.log('url', canvas.toDataURL("image/png"))
            
            // 返回
            resolve(canvas.toDataURL("image/png"))
        });
    })
}
 