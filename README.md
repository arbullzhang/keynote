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

## 2018.08.09 分享docker(一)
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


## 2018.08.16 分享docker(二)
1. npm 有registry、java有maven的registry，python有pip的registry，所以docker也有registry。dockerhub的官网: https://hub.docker.com/， 网易云镜像：https://c.163yun.com/hub#/m/home/
2. docker 里面的几种网络讲解，docker network ls, 分为bridge、none、container、host，host相当于我用的就是主机的host，容器可以访问主机上所有的网络信息，启动的时候——-net=host参数即可。 none是不做配置， bridge（是默认的，所以需要用通过桥接，相当于我需要通过一座桥，然后就需要端口映射）

2. docker login -u hzjinbing@163.com hub.c.163.com
3. docker push hub.c.163.com/jinbing/my-nginx:1.0.0 (docker tag my-nginx:1.0.0 hub.c.163.com/jinbing/my-nginx:1.0.0 )
4. 然后严选云的docker的registry中，默认推上来是私有的，其他人下载不到，如果https://c.163yun.com/dashboard#/m/mirrorRepo/ 这边可以设置
5. 搭建一个docker的registry, docker pull registry， docker run -itd -p 5000:5000 registry
6. 然后推送一个试一下，docker tag {imageName}:{imageTag} {registry的地址}/{imageName}:{imageTag}和docker push 127.0.0.1:5000/my-nginx:1.0.0, 然后我们推一个，然后再下载一个。
这边我们搭建的是官方提供的这个registry，然后我跟千万，搭建的是harbor（vmware团队开发的）（前同事干docker工作去了，类似sa这样的工作，每天给大家做一下镜像），harbor有很多比registry的好处
7. dockerfile 讲解、为什么要使用dockerfile、通过dockerfile我们能干什么
    - 关键字：
    - 7.1 FROM 以那个为基础镜像
    - 7.2 RUN 安装软件用
    - 7.3 MAINTAINER 镜像image的创建者信息
    - 7.4 COPY <src> <dest> 复制本地主机的<src>到容器中的<dest>中,src可以是相对路径，但是记住src如果要放在Dockerfile同一层或者子目录，不要写../这种
    - 7.6 CMD，container运行起来的时候执行的命令，但是一个Dockerfile只有一条CMD命令，写了多条则只会执行最后一条。docker run ubuntu echo "hello docker",也就是最后面的echo "hello docker",这个命令相当于如果不写，则我就执行Dockerfile里面定义的CMD，如果再跑镜像的时候，末尾指定了则会把Dockerfile里面的给覆盖，让Dockerfile定义的不执行。
    - 7.7 ENTRYPOINT container启动时执行的命令，他跟CMD很像，也是只能有一条ENTRYPOINT，如果定义了多条，则只执行最后一条。但是他没有CMD那边的可替换的属性。
    - 7.8 USER ，使用哪一个用户去跑， USER daemon，相当于用daemon去跑CMD和ENTRYPOINT命令。
    - 7.9 EXPOSE, container内部服务开启的端口。写不写不影响，但是写了有两个好处，一个是你这个镜像对外提供了什么端口让大家能了解。第二是-P，默认会将这个EXPOSE的给暴露出来。
    - 7.10 ENV 用来设置环境变量，比如: ENV PATH /usr/local/bin:$PATH， 相当于我们写的~/.bash_profile文件里面的PATH=/usr/local/bin:$PATH
    - 7.11 ADD <src> <dest> 复制指定路径，拷贝到container内的文件和文件夹权限为755，这个只会在创建这个build image的时候去执行。
    - 7.12 VOLUME 可以将本地文件夹或其他container的文件夹挂载到container中。
    - 7.13 WORKDIR 切换目录，可以多次切换，相当于cd 命令，对RUN, CMD, ENTRYPOINT生效
8. 通过dockerfile，我们来创建一个image
    - 上次我们演示的node，koa的项目，做成的镜像，我们用手动敲代码的方式，然后docker cp进去，然后commit的，现在我们用dockerfile来搞
6. dockerfile、项目、gitlab-ci的结合，通过代码提交能让代码生成一个image
    - docker build -t **** .
    - docker push
    - 然后定期打一下tag，平常提交
7. docker-compose 讲解、docker-compose和dockerfile的区别
    dockerfile主要是创建一个image用，他包含里面运行的环境、代码等。这个创建过程是用dockerfile在定义。
    那么定义出来的image，我们为了达到对应的应用级别，我们就需要进行服务的编排，那么我们用什么来进行服务的编排呢？就是docker-compose.yml来实现，它可以轻松地将多个容器作为service来运行（当然也可以只运行一个image）
    而docker-compose则是container的一些应用级别的，相当于一个应用，里面有多个service，比如mysql做冷数据，redis做热数据，后端代码，还有其他的api等service
    所以我们把image理解为镜像，把dockerfile理解为用来构建镜像的一个文件，而container是一个容器，那么docker-compose则启动的是一个服务。

8. 构建一个项目，应用docker-compose、代码包含mangodb、express，然后我们将项目最终分成多个service，然后用docker-compose进行部署

9. 然后搭建rancher 1.x版本，2.x感觉还是不好用
    docker run -d --restart=unless-stopped -p 8089:8080 rancher/server 
    然后访问我们的网页,然后我们把网页打开
    然后打开网页后，我们来把自己这个电脑，当成一个docker的集群的主机。
    然后我们部署一个项目

如果有机会再讲解
1. docker swarm
2. k8s、这个能搭建出来，到时对项目部署等都有好处