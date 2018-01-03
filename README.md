<p></p>
<p>webpack.config.js</p>
<p></p>
<p></p>
<p>module.exports={</p>
<p>    //入口文件的配置项</p>
<p>    entry:{},</p>
<p>    //出口文件的配置项</p>
<p>    output:{},</p>
<p>    //模块：例如解读CSS,图片如何转换，压缩</p>
<p>    module:{},</p>
<p>    //插件，用于生产模版和各项功能</p>
<p>    plugins:[],</p>
<p>    //配置webpack开发服务功能</p>
<p>    devServer:{}</p>
<p>}</p>
<p></p>
<p>module.exports={</p>
<p>    //入口文件的配置项</p>
<p>    entry:{},</p>
<p>    //出口文件的配置项</p>
<p>    output:{},</p>
<p>    //模块：例如解读CSS,图片如何转换，压缩</p>
<p>    module:{},</p>
<p>    //插件，用于生产模版和各项功能</p>
<p>    plugins:[],</p>
<p>    //配置webpack开发服务功能</p>
<p>    devServer:{}</p>
<p>}</p>
<p>entry：配置入口文件的地址，可以是单一入口，也可以是多入口。</p>
<p>output：配置出口文件的地址，在webpack2.X版本后，支持多出口配置。</p>
<p>module：配置模块，主要是解析CSS和图片转换压缩等功能。</p>
<p>plugins：配置插件，根据你的需要配置不同功能的插件。</p>
<p>devServer：配置开发服务功能，后期我们会详细讲解。</p>
<p>entry选项（入口配置）</p>
<p>这个选项就是配置我们要压缩的文件一般是JavaScript文件（当然也可以是CSS…..）。</p>
<p></p>
<p>wepback.config.js中的entry选项</p>
<p></p>
<p></p>
<p>//入口文件的配置项</p>
<p>entry:{</p>
<p>    //里面的entery是可以随便写的</p>
<p>    entry:'./src/entry.js'</p>
<p>},</p>
<p>//入口文件的配置项</p>
<p>entry:{</p>
<p>    //里面的entery是可以随便写的</p>
<p>    entry:'./src/entry.js'</p>
<p>},</p>
<p>output选项（出口配置）</p>
<p>出口配置是用来告诉webpack最后打包文件的地址和文件名称的。</p>
<p></p>
<p></p>
<p>//出口文件的配置项</p>
<p>output:{</p>
<p>    //打包的路径文职</p>
<p>    path:path.resolve(__dirname,'dist'),</p>
<p>    //打包的文件名称</p>
<p>    filename:'bundle.js'</p>
<p>    </p>
<p>},</p>
<p></p>
<p>//出口文件的配置项</p>
<p>output:{</p>
<p>    //打包的路径文职</p>
<p>    path:path.resolve(__dirname,'dist'),</p>
<p>    //打包的文件名称</p>
<p>    filename:'bundle.js'</p>
<p>    </p>
<p>},</p>
<p>如果你只这样写，是会报错的：找不到path这个东西。所以我们要在webpack.config.js的头部引入path，代码如下：</p>
<p></p>
<p></p>
<p>const path = require('path');</p>
<p>1</p>
<p>const path = require('path');</p>

<p>其实path.resolve(__dirname,’dist’)就是获取了项目的绝对路径。</p>
<p></p>
<p>filename:是打包后的文件名称，这里我们起名为bundle.js。</p>
<p></p>
<p>现在webpack.config.js的代码：</p>
<p></p>
<p></p>
<p>const path = require('path');</p>
<p>module.exports={</p>
<p>    //入口文件的配置项</p>
<p>    entry:{</p>
<p>        entry:'./src/entry.js'</p>
<p>    },</p>
<p>    //出口文件的配置项</p>
<p>    output:{</p>
<p>        //输出的路径，用了Node语法</p>
<p>        path:path.resolve(__dirname,'dist'),</p>
<p>        //输出的文件名称</p>
<p>        filename:'bundle.js'</p>
<p>    },</p>
<p>    //模块：例如解读CSS,图片如何转换，压缩</p>
<p>    module:{},</p>
<p>    //插件，用于生产模版和各项功能</p>
<p>    plugins:[],</p>
<p>    //配置webpack开发服务功能</p>
<p>    devServer:{}</p>
<p>}</p>
<p></p>
<p>const path = require('path');</p>
<p>module.exports={</p>
<p>    //入口文件的配置项</p>
<p>    entry:{</p>
<p>        entry:'./src/entry.js'</p>
<p>    },</p>
<p>    //出口文件的配置项</p>
<p>    output:{</p>
<p>        //输出的路径，用了Node语法</p>
<p>        path:path.resolve(__dirname,'dist'),</p>
<p>        //输出的文件名称</p>
<p>        filename:'bundle.js'</p>
<p>    },</p>
<p>    //模块：例如解读CSS,图片如何转换，压缩</p>
<p>    module:{},</p>
<p>    //插件，用于生产模版和各项功能</p>
<p>    plugins:[],</p>
<p>    //配置webpack开发服务功能</p>
<p>    devServer:{}</p>
<p>}</p>
<p>代码写完后，可以在终端中直接输入webpack就会进行打包。</p>
<p></p>
<p>在实际开发中我们都是通过配置文件进行打包的，所以必须要掌握好。</p>
<p></p>
<p>多入口、多出口配置</p>
<p></p>
<p></p>
<p>const path = require('path');</p>
<p>module.exports={</p>
<p>    //入口文件的配置项</p>
<p>    entry:{</p>
<p>        entry:'./src/entry.js',</p>
<p>        //这里我们又引入了一个入口文件</p>
<p>        entry2:'./src/entry2.js'</p>
<p>    },</p>
<p>    //出口文件的配置项</p>
<p>    output:{</p>
<p>        //输出的路径，用了Node语法</p>
<p>        path:path.resolve(__dirname,'dist'),</p>
<p>        //输出的文件名称</p>
<p>        filename:'[name].js'</p>
<p>    },</p>
<p>    //模块：例如解读CSS,图片如何转换，压缩</p>
<p>    module:{},</p>
<p>    //插件，用于生产模版和各项功能</p>
<p>    plugins:[],</p>
<p>    //配置webpack开发服务功能</p>
<p>    devServer:{}</p>
<p>}</p>
<p></p>
<p>const path = require('path');</p>
<p>module.exports={</p>
<p>    //入口文件的配置项</p>
<p>    entry:{</p>
<p>        entry:'./src/entry.js',</p>
<p>        //这里我们又引入了一个入口文件</p>
<p>        entry2:'./src/entry2.js'</p>
<p>    },</p>
<p>    //出口文件的配置项</p>
<p>    output:{</p>
<p>        //输出的路径，用了Node语法</p>
<p>        path:path.resolve(__dirname,'dist'),</p>
<p>        //输出的文件名称</p>
<p>        filename:'[name].js'</p>
<p>    },</p>
<p>    //模块：例如解读CSS,图片如何转换，压缩</p>
<p>    module:{},</p>
<p>    //插件，用于生产模版和各项功能</p>
<p>    plugins:[],</p>
<p>    //配置webpack开发服务功能</p>
<p>    devServer:{}</p>
<p>}</p>
<p>可以看到代码的第7和14行进行了增加和修改，在入口文件配置中，增加了一个entry2.js的入口文件（这个文件你需要自己手动建立），这时候要打包的就有了两个入口文件。在代码14行我们把原来的bundle.js修改成了[name].js。</p>
<p></p>
<p>[name]的意思是根据入口文件的名称，打包成相同的名称，有几个入口文件，就可以打包出几个文件。</p>
