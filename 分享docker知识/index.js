var koa = require ('koa2');
var app = new koa ();

app.use ((ctx, next) => {
  ctx.body = 'hello world';
});

app.listen (8000);