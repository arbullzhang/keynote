docker build -t {containerName}:{tagName} .
生成对应的image
然后我们通过
docker run -itd -p 8000:8000 {containerName}:{tagName}