# xiaodada
一、项目创意

     人们常说“人靠衣装”，显示出了衣服搭配的重要性，衣服搭配是人们见面的第一印象，是人与人交往的前提，在生活中有着极大的作
     用。但在愈发快速发展的当代社会，人们的生活也随之变成了快生活，从而人们没有更多的时间关注自己的衣服搭配问题。我们这个
     “搭搭我自己”小程序便为大家提供了一个这样的平台，使日常生活变得更加多彩、时尚。
二、商业机会

      （1）用户群主要定位于没有时间搭配衣服或者不会穿搭技巧的所有人。消费群体足够大；
      （2）利用市场服装的流行趋势，为用户提供不同风格、适用于不同场合的穿搭；
      （3）利用我们团队的年龄优势，选择并搭配出各种衣服搭配，并对穿搭技巧给予一定讲解；
      （4）针对不同年龄阶段的用户，提供个性化设计；
三、产品构思

     我们的产品就是贴近这一大众审美需求的变化，可以为大家在快速的社会发展的时候为大家尽量贴近大众需求为大家提供穿搭方法。
     我们的产品也可以根据个人喜好，个人偏向，根据数据库的推荐，“私人订制”一样的为大家测量自身的体型，并推荐适合自己审美
     需求以及具有个性化的穿搭。
四、小组成员

    李项宇、李欣雨、刘琳琳、方誉蔓、刘佳汐、张朝会
 五、产品功能

    （1）每天推荐潮流穿搭
    （2）用户根据风格选择穿搭
    （3）用户发布自己的穿搭
    （4）用户点赞其他用户的穿搭
    （5）用户根据自己的身体维度可以得到自己的身型，从而选择合适的穿搭
六、接口文档

      1.衣服界面（女上衣）
      接口地址：'/womanjacket'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      2.衣服界面（连衣裙）      
      接口地址：'/dress'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      3.衣服界面（头饰）    
      接口地址：'/headwear'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      4.衣服界面（女外套）      
      接口地址：'/womanloosecoat'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      5.衣服界面（女鞋子）     
      接口地址：'/womanshoes'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      6.衣服界面（女裤）    
      接口地址：'/womantrousers'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      7.衣服界面（半身裙）   
      接口地址：'/skirt'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      8.衣服界面（男外套）     
      接口地址：'/mancoat'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      9.衣服界面（男上衣）      
      接口地址：'/manjacket'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      10.衣服界面（男鞋）     
      接口地址：'/manshoes'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      11.衣服界面（男裤）    
      接口地址：'/mantrousers'
      请求类型：get
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}


      12.详情页（连衣裙）     
      接口地址：'/detailspage1'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      13.详情页（头饰）      
      接口地址：'/detailspage2'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      14.详情页（女上衣）      
      接口地址：'/detailspage3'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      15.详情页（女外套）      
      接口地址：'/detailspage4'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      16.详情页（女鞋）    
      接口地址：'/detailspage5'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      17.详情页（女裤）     
      接口地址：'/detailspage6'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      18.详情页（半身裙）     
      接口地址：'/detailspage7'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      19.详情页（男外套）      
      接口地址：'/detailspage8'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      20.详情页（男上衣）     
      接口地址：'/detailspage9'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      21.详情页（男鞋）    
      接口地址：'/detailspage10'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      22.详情页（男裤）      
      接口地址：'/detailspage11'
      请求类型：get
      必选参数：{id}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}


      23.搜索框      
      接口地址：'/searchbox/:name'
      请求类型：get
      必选参数：{name}
      返回参数：{type:array,data:[{id,src,srcdetails,photo,picture,name}]}
      24.发布动态       
      接口地址：'/releasenews/:position/:text/:photo'
      请求类型：post
      必选参数：{position,text,photo}
      返回参数：msg:success
      25.渲染动态消息页面        
      接口地址：'/information'
      请求类型：get
      返回参数：{type:array,data:[{id,name,heart,comment,position,photo,title}]}
      26.自我发布的动态存储        
      接口地址：'/sharing'
      请求类型：get
      返回参数：{type:array,data:[{id,name,heart,photo,title}]}
      27.点赞内容存储         
      接口地址：'/heart/:id'
      请求类型：post
      必选参数：{id}
      返回参数：{type:array,data:[{id,name,heart,photo,title}]}
      28.渲染点赞内容       
      接口地址：'/like'
      请求类型：get
      返回参数：{type:array,data:[{id,name,heart,photo,title}]}
      29.增加       
      接口地址：'/increase/:src/:srcdetails/:photo/:picture/:text'
      请求类型：post
      必选参数：{id,src,srcdetails,photo,picture,text}
      返回参数：msg:success
      30.删除     
      接口地址：'/delete'
      请求类型：post
      必选参数：{id}
      返回参数：msg:success
      31.发布评论     
      接口地址：'/det/:id/:content'
      请求类型：post
      必选参数：{id,content}
      返回参数：msg:success

