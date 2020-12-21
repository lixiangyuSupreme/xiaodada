'use strict';

process.chdir(__dirname)

const titbit = require('titbit'),
    pg = require('pg');

const {resource, tofile} = require('titbit-toolkit')

const app = new titbit({
    debug:true,
    https:true,
    key:'/usr/local/cert/www.youlewazi.top.key',
    cert:'/usr/local/cert/www.youlewazi.top.crt'
});

let pdb = new pg.Pool({
    database :'wearstyle',
    user:'lixiangyu',
    password:'lixiangyu2000',
    host:'127.0.0.1',
    port:5432
})

let rest = new resource({
    staticPath : './public',
    routePath : '/static/*'
})

rest.init(app)

app.use( (new tofile()).mid() )

app.post('/image', async c => {
    let f = c.getFile('image')
    
    if (f === null) {
        c.send('image not found', 400)
        return
    }

    let filename = await f.toFile('./public/images')

    //还有数据库操作，写入文件名。

    c.send(filename)
})


app.use(async(c, next) => {
    c.setHeader("Access-Control-Allow-Origin", "*");
    c.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    c.setHeader("Access-Control-Allow-Methods", "*");
    c.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    await next(c);
})


//衣服界面（女上衣）
app.get('/womanjacket',async c => {
    try{
        let sql ='SELECT * FROM womanjacket'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send((result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//衣服界面（连衣裙）
app.get('/dress',async c => {
    try{
        let sql ='SELECT * FROM dress'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//衣服界面（头饰）
app.get('/headwear',async c => {
    try{
        let sql ='SELECT * FROM headwear'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//衣服界面（女外套）
app.get('/womanloosecoat',async c => {
    try{
        let sql ='SELECT * FROM womanloosecoat'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//衣服界面（女鞋子）
app.get('/womanshoes',async c => {
    try{
        let sql ='SELECT * FROM womanshoes'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//衣服界面（女裤）
app.get('/womantrousers',async c => {
    try{
        let sql ='SELECT * FROM womantrousers'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//衣服界面（半身裙）
app.get('/skirt',async c => {
    try{
        let sql ='SELECT * FROM skirt'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//衣服界面（男外套）
app.get('/mancoat',async c => {
    try{
        let sql ='SELECT * FROM mancoat'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//衣服界面（男上衣）
app.get('/manjacket',async c => {
    try{
        let sql ='SELECT * FROM manjacket'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//衣服界面（男鞋）
app.get('/manshoes',async c => {
    try{
        let sql ='SELECT * FROM manshoes'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//衣服界面（男裤）
app.get('/mantrousers',async c => {
    try{
        let sql ='SELECT * FROM mantrousers'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//详情页
//详情页(连衣裙)
app.get('/detailspage1/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM dress where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//详情页(头饰)
app.get('/detailspage2/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM headwear where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//详情页(女上衣)
app.get('/detailspage3/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM womanjacket where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//详情页(女外套)
app.get('/detailspage4/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM womanloosecoat where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//详情页(女鞋)
app.get('/detailspage5/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM womanshoes where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//详情页(女裤)
app.get('/detailspage6/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM womantrousers where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//详情页(半身裙)
app.get('/detailspage7/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM shirt where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//详情页(男外套)
app.get('/detailspage8/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM mancoat where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

//详情页(男上衣)
app.get('/detailspage9/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM manjacket where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

//详情页(男鞋)
app.get('/detailspage10/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM manshoes where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

//详情页(男裤)
app.get('/detailspage11/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM mantrousers where id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

//搜索框
app.get('/searchbox/:name',async c => {
    try{
        let name = c.param.name;
        console.log(name)
        let namei = decodeURI(name)
        let sql =`SELECT * FROM wearstyle where name = '${namei}'`
        console.log(sql)
        let result = await pdb.query(sql)
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

//发布动态
app.post('/releasenews/:style/:title/:src/:position1/:position2/:position3',async c => {
    try{
        let title = c.param.title;
        let title1 = decodeURI(title);
        let position1 = c.param.position1;
        let position11 = decodeURI(position1);
        let position2 = c.param.position2;
        let position22 = decodeURI(position2);
        let position3 = c.param.position3;
        let position33 = decodeURI(position3);
        let style = c.param.style;
        let style1 = decodeURI(style);
        let src = c.param.src;
        console.log(title)
        let maxid = `select max(id) from dynamicpictures`;
        let result1 = await pdb.query(maxid)
        let id = parseInt(result1.rows[0].max) +1;
        let sql =`insert into dynamicpictures values(${id},'张',0,0,'${position11}','${title1}','${src}','${position22}','${position33}','${style1}')`
        await pdb.query(sql) 
    }catch(err){                                                
        c.send('查询操作failed' + err.message,400)
    }
});

//渲染动态消息页面
app.get('/information',async c => {
    try{
        let sql ='SELECT * FROM dynamicpictures order by id desc'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

//自我发布的动态存储(我的页面)
app.get('/sharing',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM dynamicpictures where id >8`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

//点赞内容存储
app.post('/heart/:id',async c => {
    try{
        let id = c.param.id;
        let sql1 = `select likes from likebook where id = ${id}`
        let sqll = `select * from likebook where id  = ${id}`
        let result = await pdb.query(sqll)
        c.send(JSON.stringify(result.rows))
        let likes = await pdb.query(sql1)
        console.log(parseInt(likes.rows[0].likes))
        if(parseInt(likes.rows[0].likes) == 1){//判断的必须是number类型的
            await pdb.query(`update likebook set likes = 0 where id = ${id}`)
            console.log(`update likebook set likes = 0 where id = ${id}`)
            await pdb.query(`update likebook set heart = heart +  1 where id = ${id}`)
        }
        else if(parseInt(likes.rows[0].likes) == 0){
            await pdb.query(`update likebook set likes = 1 where id = ${id}`)
            await pdb.query(`update likebook set heart = heart -  1 where id = ${id}`)
        }
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

if (process.argv.indexOf('--test') > 0) {
    app.config.https = false;
}

//渲染点赞内容
app.get('/like',async c => {
    try{
        let sql ='SELECT * FROM likebook where likes = 0'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});


//增加
app.post('/increase/:src/:srcdetails/:photo/:picture/:text',async c => {
    try{
        let srcdetails = c.param.srcdetails;
        let text1 = decodeURI(text);
        let src = c.param.src;
        let photo = c.param.photo;
        let picture = c.param.picture;
        console.log(text)
        let maxid = `select max(id) from womanjacket`;
        let result1 = await pdb.query(maxid)
        let id = result1.rows.id +1;
        let sql =`insert into womanjacket values('${id}','${src}','${srcdetails}','${photo}','${picture}','${text1}')`
        await pdb.query(sql) 
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});
//删除
app.post('/delete/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`delete from shiyan where id = ${id}`
        console.log(sql)
        await pdb.query(sql)
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

app.get('/shiyan',async c => {
    try{
        let sql ='SELECT * FROM shiyan'
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

//改


//查
app.get('/search/:name',async c => {
    try{
        let name = c.param.name;
        console.log(name)
        let namei = decodeURI(name)
        let sql =`SELECT * FROM wearstyle where name = '${namei}'`
        console.log(sql)
        let result = await pdb.query(sql)
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});


//发布评论
app.get('/det/:id',async c => {
    try{
        let id = c.param.id;
        console.log(id)
        let sql =`SELECT  * FROM mantrousers where 482853524.0id = ${id}`
        console.log(sql)
        let result = await pdb.query(sql)
        if(result.rowCount<=0){
            c.send('failed register',400)
            return
        }
    c.send(JSON.stringify(result.rows))
    }catch(err){
        c.send('查询操作failed' + err.message,400)
    }
});

if (process.argv.indexOf('--test') > 0) {
    app.config.https = false;
}


app.run(1234);