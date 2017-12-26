<h3># webpack3x</h3>
<h3>webpack   webpack3 webpack3.x</h3>
<h2>快速上手一个Demo</h2>
<p>![image](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514015024770&di=1284b3d94aa00cd54e37bcc33f7efce5&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg)</p>
<h3>安装WebPack</h3>
<h3>具体安装方法：</h3>
<p>用win+R打开运行对话框，输入cmd进入命令行模式。然后找到想开始项目的地方，输入下方代码：</p>
<p>mkdir webpack3x</p>
<p>cd webpack3x</p>
<p>mkdir webpack3x</p>
<p>cd webpack3x</p>
<p>第一句是建立一个文件夹，第二句是进入这个文件夹。这个文件夹就是我们的项目文件目录了，文件夹建立好后，可以通过下面命令安装WebPack。</p>
<p>需要注意的是,你在执行下一步时必须安装node，可以通过 node -v来查看node安装情况和版本，如果没有安装，要先安装node才可以继续进行。</p>
<p>npm install -g webpack</p>
<p>对项目目录进行安装</p>
<p>全局安装完成后，我们还要进行一个项目目录的安装。在用npm安装前，我们先要进行一下初始化，初始化的主要目的是生成package.json文件（这是一个标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等）。</p>
<p>在命令行输入：</p>
<p>npm init</p>
<p>输入下面命令进行项目目录的安装：</p>
<p>npm install --save-dev webpack</p>
<p>这里的参数–save是要保存到package.json中，dev是在开发时使用这个包，而生产环境中不使用。</p>
<p>开发环境and生产环境：</p>
<p>webpack -v</p>
