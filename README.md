# keynote

分享我的培训 ppt 资料

## 2018.07.19 用 Gitlab CI 进行持续集成

[用 Gitlab-CI 进行持续集成](./用Gitlab%20CI进行持续集成/用Gitlab%20CI进行持续集成.key)

![](./用Gitlab%20CI进行持续集成/PPT截图.png)

## 2018.08.02 负债均衡介绍以及常用配置

[负债均衡介绍以及常用配置](./负债均衡介绍以及常用配置/负债均衡介绍以及常用配置.key)

![](./负债均衡介绍以及常用配置/负债均衡介绍以及常用配置.png)

## 2018.08.02 用 hexo 搭建技术博客

[用 hexo 搭建技术博客](./用hexo搭建技术博客/用hexo搭建技术博客.key)
![](./用hexo搭建技术博客/用hexo搭建技术博客.png)

## 2018.08.09 分享docker
1. docker images 查看当前的镜像，同时可以查看到每个镜像的大小
2. docker ps 查看当前本地运行的容器
3. docker ps -a 查看当前本地所有的容器（包括没有运行的容器和运行的容器）
4. docker pull 拉取一个images
5. docker run ubuntu echo "hello docker" 使用ubuntu运行一个shell命令
6. docker run -itd -p 10090:80 --name "my-nginx" nginx
7. docker commit -m "add: 修改了nginx首页的效果" {container的id} imageName:tag
8. docker exec -it 02fae8302d7f bash 跑到容器里面去
9. docker diff {container的id} 这次容器变动了什么，可以用这个命令查看
10. docker history stone-jin-blog:1.0.0 查看镜像每次变动的history记录
11. docker search node 然后尽量下载官方的node版本
12. docker cp 本地文件 {container的id}:目录    拷贝文件到服务器中
13. 写了一个koa2或者express的程序，然后通过docker cp拷贝到container中，然后安装pm2进行安装
14. 讲解了pm2如果在服务器重启的时候，会清空列表，应用也全部停了，所以讲解了pm2 save和pm2 startup来保证重启应用是有用的
15. 然后我们将跑着koa2程序的应用，然后打成了一个image，然后运行后发现，有点问题，没有运行在那边。

