<template><h1 id="数据库相关概念" tabindex="-1"><a class="header-anchor" href="#数据库相关概念" aria-hidden="true">#</a> 数据库相关概念</h1>
<table>
<thead>
<tr>
<th>名称</th>
<th>全称</th>
<th>简称</th>
</tr>
</thead>
<tbody>
<tr>
<td>数据库</td>
<td>存储数据的仓库，数据是有组织的进行存储</td>
<td>DataBase(DB)</td>
</tr>
<tr>
<td>数据库管理系统</td>
<td>操作和管理数据库的大型软件</td>
<td>DataBase Management System(DBMS)</td>
</tr>
<tr>
<td>SQL</td>
<td>操作关系型数据库的编程语言，定义一套操作型数据库统一标准</td>
<td>Structured Query Language(SQL)</td>
</tr>
</tbody>
</table>
<blockquote>
<p>总结：程序员通过编写SQL语句操作数据库管理系统来管理数据库</p>
</blockquote>
<p>关系型数据库排名：https://db-engines.com/en/</p>
<p>MySQL是关系型数据库，那么什么是关系型数据库呢？</p>
<p>关系型数据库（RDBNS）：</p>
<p>注意：二维是指长、宽</p>
<blockquote>
<p>概念：建立在关系模型基础上，由多张相互连接的二维表组成的数据库。</p>
<p>特点：</p>
<p>​		●	使用表储存数据，格式统一，便于维护</p>
<p>​		●	使用SQL语言操作，标准统一，使用方便</p>
</blockquote>
<p>扩展：有关系型数据库，自然也会有非关系型数据库。而NoSQL数据库（非关系型数据库）是用于存储和检索数据的非关系数据库系统。</p>
<h1 id="mysql安装、卸载和启动" tabindex="-1"><a class="header-anchor" href="#mysql安装、卸载和启动" aria-hidden="true">#</a> MySQL安装、卸载和启动</h1>
<h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2>
<blockquote>
<p>MySQL官方提供了两种不同的的版本：</p>
<p>●	社区版（MySQL Community Server）</p>
<p>​		免费，MySQL不提供任何技术支持</p>
<p>●	商业版（MySQL Enterprise Edition）</p>
<p>​	    收费，可以试用30天，官方提供技术支持</p>
</blockquote>
<p>命令行查看MySQL的版本号<code>mysql -V</code></p>
<p>MySQL官网：https://www.mysql.com/cn/</p>
<h2 id="mysql安装-windows版" tabindex="-1"><a class="header-anchor" href="#mysql安装-windows版" aria-hidden="true">#</a> MySQL安装-Windows版</h2>
<h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h3>
<p><strong>1). 双击官方下来的安装包文件</strong></p>
<p><img src="/imgs/intro/image-20210916184347938.png" alt="image-20210916184347938"></p>
<p><strong>2). 根据安装提示进行安装</strong></p>
<img src="\imgs\intro\image-20210916184532212.png" alt="image-20210916184532212" style="zoom:67%;" /> 
<img src="\imgs\intro\image-20210916184603712.png" alt="image-20210916184603712" style="zoom: 74%;" /> 
<img src="\imgs\intro\image-20210916184634094.png" alt="image-20210916184634094" style="zoom:70%;" /> 
<p>安装MySQL的相关组件，这个过程可能需要耗时几分钟，耐心等待。</p>
<p><img src="/imgs/intro/image-20210916184700031.png" alt="image-20210916184700031"></p>
<img src="\imgs\intro\image-20210916184709776.png" alt="image-20210916184709776" style="zoom:96%;" /> 
<img src="\imgs\intro\image-20210916184743524.png" alt="image-20210916184743524" style="zoom:80%;" /> 
<img src="\imgs\intro\image-20210916184759021.png" alt="image-20210916184759021" style="zoom:80%;" /> 
<p>输入MySQL中root用户的密码,一定记得记住该密码</p>
<img src="\imgs\intro\image-20210916184814656.png" alt="image-20210916184814656" style="zoom:85%;" /> 
<img src="\imgs\intro\image-20210916184832159.png" alt="image-20210916184832159" style="zoom:85%;" /> 
<img src="\imgs\intro\image-20210916184851013.png" alt="image-20210916184851013" style="zoom:87%;" /> 
<h3 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h3>
<p>安装好MySQL之后，还需要配置环境变量，这样才可以在任何目录下连接MySQL。</p>
<p>1). 在此电脑上，右键选择属性</p>
<p><img src="/imgs/intro/image-20210918161550977.png" alt="image-20210918161550977"></p>
<p>2). 点击左侧的 &quot;高级系统设置&quot;，选择环境变量</p>
<img src="\imgs\intro\image-20210918161646433.png" alt="image-20210918161646433" style="zoom:80%;" /> 
<p>3). 找到 Path 系统变量, 点击 &quot;编辑&quot;</p>
<img src="\imgs\intro\image-20210918161803544.png" alt="image-20210918161803544" style="zoom:80%;" /> 
<p>4). 选择 &quot;新建&quot; , 将MySQL Server的安装目录下的bin目录添加到环境变量</p>
<img src="\imgs\intro\image-20210918161954696.png" alt="image-20210918161954696" style="zoom:80%;" /> 
<h2 id="mysql卸载文档-windows版" tabindex="-1"><a class="header-anchor" href="#mysql卸载文档-windows版" aria-hidden="true">#</a> MySQL卸载文档-Windows版</h2>
<h3 id="_1-停止mysql服务" tabindex="-1"><a class="header-anchor" href="#_1-停止mysql服务" aria-hidden="true">#</a> 1. 停止MySQL服务</h3>
<p>win+R 打开运行，输入 services.msc 点击 &quot;确定&quot; 调出系统服务。</p>
<p><img src="/imgs/intro/image-20220209203115052.png" alt="image-20220209203115052"></p>
<p><img src="/imgs/intro/image-20220209203253220.png" alt="image-20220209203253220"></p>
<h3 id="_2-卸载mysql相关组件" tabindex="-1"><a class="header-anchor" href="#_2-卸载mysql相关组件" aria-hidden="true">#</a> 2. 卸载MySQL相关组件</h3>
<p>打开控制面板 ---&gt; 卸载程序 ---&gt; 卸载MySQL相关所有组件</p>
<p><img src="/imgs/intro/image-20220209203345746.png" alt="image-20220209203345746"></p>
<p><img src="/imgs/intro/image-20220209203431405.png" alt="image-20220209203431405"></p>
<h3 id="_3-删除mysql安装目录" tabindex="-1"><a class="header-anchor" href="#_3-删除mysql安装目录" aria-hidden="true">#</a> 3. 删除MySQL安装目录</h3>
<p><img src="/imgs/intro/image-20220209205157019.png" alt="image-20220209205157019"></p>
<h3 id="_4-删除mysql数据目录" tabindex="-1"><a class="header-anchor" href="#_4-删除mysql数据目录" aria-hidden="true">#</a> 4. 删除MySQL数据目录</h3>
<p>数据存放目录是在 C:\ProgramData\MySQL，直接将该文件夹删除。</p>
<p><img src="/imgs/intro/image-20220209205401563.png" alt="image-20220209205401563"></p>
<h3 id="_5-再次打开服务-查看是否有mysql卸载残留" tabindex="-1"><a class="header-anchor" href="#_5-再次打开服务-查看是否有mysql卸载残留" aria-hidden="true">#</a> 5. 再次打开服务，查看是否有MySQL卸载残留</h3>
<p>如果已将MySQL卸载，但是通过任务管理器---&gt;服务，查看到MySQL服务仍然残留在系统服务里。</p>
<p>解决办法：</p>
<p>​	以管理员方式运行cmd命令行，输入以下命令：</p>
<p>​	sc delete 服务名称（如MySQL80）</p>
<p>这样可以实现删除服务。</p>
<h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2>
<p>方法1：</p>
<blockquote>
<p>命令行启动 services.msc</p>
<p>找到MySQL手动处理</p>
</blockquote>
<p>方法2：</p>
<blockquote>
<p>命令行启动：net start mysql80</p>
<p>命令行停止：net stop mysql80</p>
<p>注意：要以管理员身份运行</p>
</blockquote>
<h1 id="mysql连接" tabindex="-1"><a class="header-anchor" href="#mysql连接" aria-hidden="true">#</a> MySQL连接</h1>
<p>方法1：</p>
<blockquote>
<p>MySQL自带的：MySQL 8.0 Command Client -Unicode</p>
</blockquote>
<p>方法2：</p>
<p>127.0.0.1:	是ip，127.0.0.1是主机环回地址。主机环回指的是，地址为127.0.0.1的数据包不离开计算机（主机）发送，不发送到本地网络或internet，它只是在自身上“环回”，发送数据包的计算机成为收件人。</p>
<p>3306：是MySQL默认端口号</p>
<p>root:	MySQL默认的超级管理员账户</p>
<blockquote>
<p>命令行启动：mysql [-h 127.0.0.1] [-P 3306] -u root -p</p>
<p>注意：[]代表可以省略，使用这种方式时，需要配置PATH环境变量</p>
</blockquote>
<p>MySQL的PATH路径：C:\Program Files\MySQL\MySQL Server 8.0\bin</p>
<h1 id="sql通用语法和分类" tabindex="-1"><a class="header-anchor" href="#sql通用语法和分类" aria-hidden="true">#</a> SQL通用语法和分类</h1>
<h2 id="sql通用语法" tabindex="-1"><a class="header-anchor" href="#sql通用语法" aria-hidden="true">#</a> SQL通用语法</h2>
<blockquote>
<p>●	SQL语句可以单行注释或多行注释，以分号结尾。</p>
<p>●	SQL语句可以使用空格/缩进来增强语句的可读性</p>
<p>●	MySQL数据库的SQL语句不区分大小写，关键字建议使用大小写</p>
<p>●	注释：</p>
<p>​				1.单行注释：-- 注释内容 或 # 注释内容</p>
<p>​				2.多行注释: /**/</p>
</blockquote>
<h2 id="sql分类" tabindex="-1"><a class="header-anchor" href="#sql分类" aria-hidden="true">#</a> SQL分类</h2>
<table>
<thead>
<tr>
<th>分类</th>
<th>全称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>DDL</td>
<td>Data Definition Language</td>
<td>数据库定义语言，用来定义数据库对象（数据库、表、字段）</td>
</tr>
<tr>
<td>DML</td>
<td>Data Manipulation Language</td>
<td>数据库操作语言，用来对数据库表中的数据进行<code>增删改查</code></td>
</tr>
<tr>
<td>DQL</td>
<td>Data Query Language</td>
<td>数据库查询语言，用来查询数据库中表中的记录</td>
</tr>
<tr>
<td>DCL</td>
<td>Data Control Language</td>
<td>数据库控制语言，用来创建数据库用户、控制数据库的访问权限</td>
</tr>
</tbody>
</table>
<p>总结：</p>
<blockquote>
<p>DDL:	是用来定义数据库对象的。</p>
<p>DML:	是用来操作数据库中的数据进行增删改查。</p>
<p>DQL:	是用来查询数据库中存储的数据。</p>
<p>DCL：  是用来创建数据库的用户、和用户访问数据库的权限</p>
</blockquote>
<h1 id="mysql数据类型" tabindex="-1"><a class="header-anchor" href="#mysql数据类型" aria-hidden="true">#</a> MySQL数据类型</h1>
<h2 id="数值类型" tabindex="-1"><a class="header-anchor" href="#数值类型" aria-hidden="true">#</a> 数值类型</h2>
<table>
<thead>
<tr>
<th style="text-align:left">类型</th>
<th style="text-align:left">大小</th>
<th style="text-align:left">范围（有符号）signed</th>
<th style="text-align:left">范围（无符号）unsigned</th>
<th style="text-align:left">用途</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">TINYINT</td>
<td style="text-align:left">1 Bytes</td>
<td style="text-align:left">(-128，127)</td>
<td style="text-align:left">(0，255)</td>
<td style="text-align:left">小整数值</td>
</tr>
<tr>
<td style="text-align:left">SMALLINT</td>
<td style="text-align:left">2 Bytes</td>
<td style="text-align:left">(-32 768，32 767)</td>
<td style="text-align:left">(0，65 535)</td>
<td style="text-align:left">大整数值</td>
</tr>
<tr>
<td style="text-align:left">MEDIUMINT</td>
<td style="text-align:left">3 Bytes</td>
<td style="text-align:left">(-8 388 608，8 388 607)</td>
<td style="text-align:left">(0，16 777 215)</td>
<td style="text-align:left">大整数值</td>
</tr>
<tr>
<td style="text-align:left">INT或INTEGER</td>
<td style="text-align:left">4 Bytes</td>
<td style="text-align:left">(-2 147 483 648，2 147 483 647)</td>
<td style="text-align:left">(0，4 294 967 295)</td>
<td style="text-align:left">大整数值</td>
</tr>
<tr>
<td style="text-align:left">BIGINT</td>
<td style="text-align:left">8 Bytes</td>
<td style="text-align:left">(-9,223,372,036,854,775,808，9 223 372 036 854 775 807)</td>
<td style="text-align:left">(0，18 446 744 073 709 551 615)</td>
<td style="text-align:left">极大整数值</td>
</tr>
<tr>
<td style="text-align:left">FLOAT</td>
<td style="text-align:left">4 Bytes</td>
<td style="text-align:left">(-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38)</td>
<td style="text-align:left">0，(1.175 494 351 E-38，3.402 823 466 E+38)</td>
<td style="text-align:left">单精度 浮点数值</td>
</tr>
<tr>
<td style="text-align:left">DOUBLE</td>
<td style="text-align:left">8 Bytes</td>
<td style="text-align:left">(-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)</td>
<td style="text-align:left">0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)</td>
<td style="text-align:left">双精度 浮点数值</td>
</tr>
<tr>
<td style="text-align:left">DECIMAL</td>
<td style="text-align:left">对DECIMAL(M,D) ，如果M&gt;D，为M+2否则为D+2</td>
<td style="text-align:left">依赖于M和D的值</td>
<td style="text-align:left">依赖于M和D的值</td>
<td style="text-align:left">小数值</td>
</tr>
</tbody>
</table>
<h2 id="日期和时间类型" tabindex="-1"><a class="header-anchor" href="#日期和时间类型" aria-hidden="true">#</a> 日期和时间类型</h2>
<table>
<thead>
<tr>
<th style="text-align:left">类型</th>
<th style="text-align:left">大小 ( bytes)</th>
<th style="text-align:left">范围</th>
<th style="text-align:left">格式</th>
<th style="text-align:left">用途</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">DATE</td>
<td style="text-align:left">3</td>
<td style="text-align:left">1000-01-01/9999-12-31</td>
<td style="text-align:left">YYYY-MM-DD</td>
<td style="text-align:left">日期值</td>
</tr>
<tr>
<td style="text-align:left">TIME</td>
<td style="text-align:left">3</td>
<td style="text-align:left">'-838:59:59'/'838:59:59'</td>
<td style="text-align:left">HH:MM:SS</td>
<td style="text-align:left">时间值或持续时间</td>
</tr>
<tr>
<td style="text-align:left">YEAR</td>
<td style="text-align:left">1</td>
<td style="text-align:left">1901/2155</td>
<td style="text-align:left">YYYY</td>
<td style="text-align:left">年份值</td>
</tr>
<tr>
<td style="text-align:left">DATETIME</td>
<td style="text-align:left">8</td>
<td style="text-align:left">'1000-01-01 00:00:00' 到 '9999-12-31 23:59:59'</td>
<td style="text-align:left">YYYY-MM-DD hh:mm:ss</td>
<td style="text-align:left">混合日期和时间值</td>
</tr>
<tr>
<td style="text-align:left">TIMESTAMP</td>
<td style="text-align:left">4</td>
<td style="text-align:left">'1970-01-01 00:00:01' UTC 到 '2038-01-19 03:14:07' UTC结束时间是第 <strong>2147483647</strong> 秒，北京时间 <strong>2038-1-19 11:14:07</strong>，格林尼治时间 2038年1月19日 凌晨 03:14:07</td>
<td style="text-align:left">YYYY-MM-DD hh:mm:ss</td>
<td style="text-align:left">混合日期和时间值，时间戳</td>
</tr>
</tbody>
</table>
<h2 id="字符串类型" tabindex="-1"><a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a> 字符串类型</h2>
<table>
<thead>
<tr>
<th style="text-align:left">类型</th>
<th style="text-align:left">大小</th>
<th style="text-align:left">用途</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">CHAR</td>
<td style="text-align:left">0-255 bytes</td>
<td style="text-align:left">定长字符串</td>
</tr>
<tr>
<td style="text-align:left">VARCHAR</td>
<td style="text-align:left">0-65535 bytes</td>
<td style="text-align:left">变长字符串</td>
</tr>
<tr>
<td style="text-align:left">TINYBLOB</td>
<td style="text-align:left">0-255 bytes</td>
<td style="text-align:left">不超过 255 个字符的二进制字符串</td>
</tr>
<tr>
<td style="text-align:left">TINYTEXT</td>
<td style="text-align:left">0-255 bytes</td>
<td style="text-align:left">短文本字符串</td>
</tr>
<tr>
<td style="text-align:left">BLOB</td>
<td style="text-align:left">0-65 535 bytes</td>
<td style="text-align:left">二进制形式的长文本数据</td>
</tr>
<tr>
<td style="text-align:left">TEXT</td>
<td style="text-align:left">0-65 535 bytes</td>
<td style="text-align:left">长文本数据</td>
</tr>
<tr>
<td style="text-align:left">MEDIUMBLOB</td>
<td style="text-align:left">0-16 777 215 bytes</td>
<td style="text-align:left">二进制形式的中等长度文本数据</td>
</tr>
<tr>
<td style="text-align:left">MEDIUMTEXT</td>
<td style="text-align:left">0-16 777 215 bytes</td>
<td style="text-align:left">中等长度文本数据</td>
</tr>
<tr>
<td style="text-align:left">LONGBLOB</td>
<td style="text-align:left">0-4 294 967 295 bytes</td>
<td style="text-align:left">二进制形式的极大文本数据</td>
</tr>
<tr>
<td style="text-align:left">LONGTEXT</td>
<td style="text-align:left">0-4 294 967 295 bytes</td>
<td style="text-align:left">极大文本数据</td>
</tr>
</tbody>
</table>
<blockquote>
<p>注意：</p>
<p>​		定长字符串和变长字符串的区别</p>
<p>​		定长字符串：char(10),当指定储存的长度为10时，你存入的数据如果长度为10则刚好占满，你存入的数据如果长度是1，也就是		说你只存入了一个数据，虽然你只存入了一个数据，但是也会占满10个内存空间，1个位存入的数据，剩下的9个为空。</p>
<p>​		变长字符串：varchar(10)当指定储存的长度为10时，你存入的数据如果长度为10则刚好占满，你存入的数据如果长度是1，也		就是说你只存入了一个数据，这时候你存入的数据只占1个内存长度，还可以剩9个内存长度。</p>
<p>​		char 比较于 varchar,	性能比varchar要好</p>
</blockquote>
<h1 id="ddl-是用来定义数据库对象的" tabindex="-1"><a class="header-anchor" href="#ddl-是用来定义数据库对象的" aria-hidden="true">#</a> DDL：是用来定义数据库对象的</h1>
<h2 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h2>
<h3 id="查询数据库" tabindex="-1"><a class="header-anchor" href="#查询数据库" aria-hidden="true">#</a> <code>查询数据库</code></h3>
<p>注意：[]	里的内容是可选的</p>
<p><code>查询所有数据库</code></p>
<blockquote>
<p>show databases;</p>
</blockquote>
<p><code>查询当前数据库</code></p>
<blockquote>
<p>select database();</p>
</blockquote>
<h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> <code>创建数据库</code></h3>
<blockquote>
<p>create database [if not exists] 数据库名 [default charset 字符集] [collate 排序规则];</p>
</blockquote>
<h3 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库" aria-hidden="true">#</a> <code>删除数据库</code></h3>
<blockquote>
<p>drop database[if exists]数据库名;</p>
</blockquote>
<h3 id="使用数据库" tabindex="-1"><a class="header-anchor" href="#使用数据库" aria-hidden="true">#</a> <code>使用数据库</code></h3>
<blockquote>
<p>use 数据库名；</p>
</blockquote>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<table>
<thead>
<tr>
<th>分类</th>
<th>语法</th>
</tr>
</thead>
<tbody>
<tr>
<td>创建数据库</td>
<td>create database [if not exists] 数据库名 [default charset 字符集] [collate 排序规则];</td>
</tr>
<tr>
<td>使用数据库</td>
<td>use 数据库名；</td>
</tr>
<tr>
<td>查询数据库</td>
<td>show databases;（查询所有数据库）</td>
</tr>
<tr>
<td></td>
<td>select database(); （查询当前数据库）</td>
</tr>
<tr>
<td>删除数据库</td>
<td>drop database[if exists]数据库名;</td>
</tr>
</tbody>
</table>
<h2 id="数据库中表的操作" tabindex="-1"><a class="header-anchor" href="#数据库中表的操作" aria-hidden="true">#</a> 数据库中表的操作</h2>
<h3 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> <code>创建表</code></h3>
<blockquote>
<p>create table 表名(</p>
<p>​		字段1 字段1数据类型[comment 字段1的注释],</p>
<p>​		字段2 字段2数据类型[comment 字段2的注释],</p>
<p>​		字段3 字段3数据类型[comment 字段3的注释]</p>
<p>)[comment 表注释];</p>
</blockquote>
<h3 id="查询表" tabindex="-1"><a class="header-anchor" href="#查询表" aria-hidden="true">#</a> <code>查询表</code></h3>
<blockquote>
<p>查询当前数据库所有表</p>
<p>show tables;</p>
<p>查询表结构</p>
<p>desc 表名;</p>
<p>查询指定表的建表语句</p>
<p>show create table 表名;</p>
</blockquote>
<h3 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> <code>修改表</code></h3>
<blockquote>
<p>添加字段</p>
<p>alter table 表名 add 字段名 数据类型(长度) [comment 注释] [约束];</p>
<p>修改数据类型</p>
<p>alter table 表名 modify 字段名 新数据类型(长度);</p>
<p>修改字段名和字段类型</p>
<p>alter table 表名 change 旧字段名 新字段名 数据类型(长度)[comment 注释] [约束];</p>
<p>修改表名</p>
<p>alter table 表名 rename to 新表名;</p>
</blockquote>
<h3 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> <code>删除表</code></h3>
<blockquote>
<p>删除字段</p>
<p>alter table 表名 drop 字段名;</p>
<p>删除表</p>
<p>drop table[if exists] 表名;</p>
<p>删除指定表，并重写创建该表</p>
<p>truncate table 表名;</p>
</blockquote>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h3>
<table>
<thead>
<tr>
<th>分类</th>
<th>语法</th>
</tr>
</thead>
<tbody>
<tr>
<td>创建表</td>
<td>create table 表名(字段1 字段1数据类型[comment 字段1的注释],字段2 字段2数据类型[comment 字段2的注释])[comment 表注释];</td>
</tr>
<tr>
<td>查询表</td>
<td>show tables;（查询当前数据库所有表）</td>
</tr>
<tr>
<td></td>
<td>desc 表名;（查询表结构）</td>
</tr>
<tr>
<td></td>
<td>show create table 表名;（查询指定表的建表语句）</td>
</tr>
<tr>
<td>修改表</td>
<td>alter table 表名 modify 字段名 新数据类型(长度);（修改数据类型）</td>
</tr>
<tr>
<td></td>
<td>alter table 表名 change 旧字段名 新字段名 数据类型(长度)[comment 注释] [约束];（修改字段名和字段类型）</td>
</tr>
<tr>
<td></td>
<td>alter table 表名 rename to 新表名;（修改表名）</td>
</tr>
<tr>
<td>删除表</td>
<td>drop table[if exists] 表名;（删除表）</td>
</tr>
<tr>
<td></td>
<td>truncate table 表名;（删除指定表，并重写创建该表）</td>
</tr>
<tr>
<td>添加</td>
<td>alter table 表名 add 字段名 数据类型(长度) [comment 注释] [约束];(添加字段)</td>
</tr>
</tbody>
</table>
<h1 id="dml-是用来操作数据库中的数据进行增删改查" tabindex="-1"><a class="header-anchor" href="#dml-是用来操作数据库中的数据进行增删改查" aria-hidden="true">#</a> DML：是用来操作数据库中的数据进行增删改查</h1>
<h2 id="添加数据" tabindex="-1"><a class="header-anchor" href="#添加数据" aria-hidden="true">#</a> <code>添加数据</code></h2>
<blockquote>
<p>给指定字段添加数据</p>
<p>insert into 表名 (字段名1,字段名2,...) values(值1，值2,...);</p>
<p>给全部字段添加数据</p>
<p>insert into 表格 values(值1，值2,...);</p>
<p>批量添加数据</p>
<p>insert into 表名 (字段名1,字段名2,...) values(值1，值2,...),(值1，值2,...);</p>
<p>insert into 表名 values(值1，值2,...),(值1，值2,...),(值1，值2,...);</p>
</blockquote>
<p>注意：</p>
<p>​			●	插入数据时，指定的字段顺序需要与值的顺序是一一对应的。</p>
<p>​			●	字符串和日期型数据应该包含在引号中。</p>
<p>​			●	插入的数据大小，应该在字段的规定范围内。</p>
<h2 id="修改数据" tabindex="-1"><a class="header-anchor" href="#修改数据" aria-hidden="true">#</a> <code>修改数据</code></h2>
<blockquote>
<p>update 表名 set 字段名1=值1,字段名2=值2,...[where 条件];</p>
</blockquote>
<h2 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> <code>删除数据</code></h2>
<blockquote>
<p>delete from 表名 [where 条件]</p>
</blockquote>
<h2 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2" aria-hidden="true">#</a> 总结</h2>
<table>
<thead>
<tr>
<th>分类</th>
<th>语法</th>
</tr>
</thead>
<tbody>
<tr>
<td>添加数据</td>
<td>insert into 表名 (字段名1,字段名2,...) values(值1，值2,...);（给指定字段添加数据）</td>
</tr>
<tr>
<td></td>
<td>insert into 表格 values(值1，值2,...);（给全部字段添加数据）</td>
</tr>
<tr>
<td></td>
<td>insert into 表名 (字段名1,字段名2,...) values(值1，值2,...),(值1，值2,...);（批量添加数据）</td>
</tr>
<tr>
<td></td>
<td>insert into 表名 values(值1，值2,...),(值1，值2,...),(值1，值2,...);（批量添加数据）</td>
</tr>
<tr>
<td>修改数据</td>
<td>update 表名 set 字段名1=值1,字段名2=值2,...[where 条件];</td>
</tr>
<tr>
<td>删除数据</td>
<td>delete from 表名 [where 条件]</td>
</tr>
</tbody>
</table>
<h1 id="dql-是用来查询数据库中存储的数据。" tabindex="-1"><a class="header-anchor" href="#dql-是用来查询数据库中存储的数据。" aria-hidden="true">#</a> DQL：是用来查询数据库中存储的数据。</h1>
<p>查询关键字:	<code>select</code></p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> <code>语法：</code></h2>
<p>编写顺序																												执行顺序</p>
<blockquote>
<p>select																												from</p>
<p>​			字段列表																											表名列表</p>
<p>from																												  where</p>
<p>​			表名列表																											 条件列表</p>
<p>where																												group by</p>
<p>​			条件列表																											  分组字段列表</p>
<p>group by																										   having</p>
<p>​			分组字段列表																										分组后条件列表</p>
<p>having																												select</p>
<p>​			分组后条件列表																								    字段列表</p>
<p>order by																											 order by</p>
<p>​			排序字段列表																										排序字段列表</p>
<p>limit																													limit</p>
<p>​			分页参数																												分页参数</p>
</blockquote>
<p>where与having的区别</p>
<p>●	执行时间不同：where是分组之前进行过滤，不满足where条件，不参与分组；而having是分组之后对结果进行过滤。</p>
<p>●	判断条件不同：where不能对聚合函数进行判断，而having可以。</p>
<p>注意：</p>
<p>​			执行顺序：where&gt;聚合函数&gt;having。</p>
<p>​			分组之后，查询的字段一般为聚合函数和分组字段，查询其他字段无任何意义。</p>
<h2 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询" aria-hidden="true">#</a> <code>基本查询</code></h2>
<p>●	查询多个字段</p>
<blockquote>
<p>select 字段1，字段2，字段3,...from 表名;</p>
<p>select * from 表名;</p>
</blockquote>
<p>●	设置别名</p>
<p>select 字段1 [as 别名1],  字段2 [as 别名2]...from 表名；</p>
<p>●	去除重复记录</p>
<blockquote>
<p>select distinct 字段列表 from 表名;</p>
</blockquote>
<h2 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> <code>条件查询</code></h2>
<h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> <code>语法：</code></h3>
<blockquote>
<p>select 字段列表 from 表名 where 条件列表;</p>
</blockquote>
<h3 id="条件" tabindex="-1"><a class="header-anchor" href="#条件" aria-hidden="true">#</a> <code>条件：</code></h3>
<table>
<thead>
<tr>
<th>比较运算符</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>&gt;</td>
<td>大于</td>
</tr>
<tr>
<td>&gt;=</td>
<td>大于等于</td>
</tr>
<tr>
<td>&lt;</td>
<td>小于</td>
</tr>
<tr>
<td>&lt;=</td>
<td>小于等于</td>
</tr>
<tr>
<td>=</td>
<td>等于</td>
</tr>
<tr>
<td>&lt;&gt; 或 !=</td>
<td>不等于</td>
</tr>
<tr>
<td>between...and...</td>
<td>在某个范围之内(含最小，最大值)</td>
</tr>
<tr>
<td>in(...)</td>
<td>在in之后的列表中的值，多选一</td>
</tr>
<tr>
<td>like 占位符</td>
<td>模糊匹配(_匹配单个字符，%匹配任意个字符)</td>
</tr>
<tr>
<td>is null</td>
<td>是null</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>逻辑运算符</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>and 或 &amp;&amp;</td>
<td>并且(多个条件同时成立)</td>
</tr>
<tr>
<td>or 或 ||</td>
<td>或者(多个条件任意一个成立)</td>
</tr>
<tr>
<td>not 或 ！</td>
<td>非，不是</td>
</tr>
</tbody>
</table>
<h2 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> <code>聚合函数</code></h2>
<p>什么是聚合函数？</p>
<blockquote>
<p>将一列数据作为一个整体，进行纵向计算。</p>
</blockquote>
<p>常见的聚合函数</p>
<table>
<thead>
<tr>
<th>函数</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>count</td>
<td>统计数量</td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
</tr>
<tr>
<td>min</td>
<td>最小值</td>
</tr>
<tr>
<td>avg</td>
<td>平均值</td>
</tr>
<tr>
<td>sum</td>
<td>求和</td>
</tr>
</tbody>
</table>
<p>语法：</p>
<blockquote>
<p>select 聚合函数(字段列表) from 表名；</p>
</blockquote>
<p>注意：null值不参与所有聚合函数运算。</p>
<h2 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询" aria-hidden="true">#</a> <code>分组查询</code></h2>
<p>语法：</p>
<blockquote>
<p>select 字段列表 from 表名 [where 条件] group by 分组字段名 [having 分组后过滤条件];</p>
</blockquote>
<h2 id="排序查询" tabindex="-1"><a class="header-anchor" href="#排序查询" aria-hidden="true">#</a> <code>排序查询</code></h2>
<p>语法：</p>
<blockquote>
<p>select 字段列表 from 表名 order by 字段1 排序方式1，字段2 排序方法2;</p>
</blockquote>
<p>排序方法</p>
<p>●	asc:	升序(默认值)</p>
<p>●	desc:	降序</p>
<p>注意：如果是多字段排序，当第一个字段值相同时，才会根据第二个字段进行排序。</p>
<h2 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> <code>分页查询</code></h2>
<p>语法：</p>
<blockquote>
<p>select 字段列表 from 表名 limit 起始索引,查询记录数;</p>
</blockquote>
<p>注意：</p>
<p>​			●	起始索引从0开始，起始索引=（查询列表-1)*每页显示记录数。</p>
<p>​		    ●	分页查询是数据库的方言，不同的数据库有不同的实现，MySQL中是limit。</p>
<p>​			●	如果查询的是等一页数据，起始索引可以省略，直接简写为 limit 10。</p>
<h1 id="dql-是用来创建数据库的用户、和用户访问数据库的权限" tabindex="-1"><a class="header-anchor" href="#dql-是用来创建数据库的用户、和用户访问数据库的权限" aria-hidden="true">#</a> DQL：是用来创建数据库的用户、和用户访问数据库的权限</h1>
<h2 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> <code>用户管理</code></h2>
<p>查询用户</p>
<blockquote>
<p>use mysql;</p>
<p>select * from user;</p>
</blockquote>
<p>创建用户</p>
<blockquote>
<p>create user '用户名'@'主机名' identified by '密码';</p>
</blockquote>
<p>修改用户密码</p>
<blockquote>
<p>alter user '用户名'@'主机名' identified with mysql_native_password by '新密码';</p>
</blockquote>
<p>删除用户</p>
<blockquote>
<p>drop user '用户名'@'主机名';</p>
</blockquote>
<p>注意：</p>
<p>​			●	主机名可以使用%通配。</p>
<p>​			●	这类SQL开发人员操作的比较少，主要是DBA（Database Administrator 数据管理员）使用。</p>
<h2 id="权限控制" tabindex="-1"><a class="header-anchor" href="#权限控制" aria-hidden="true">#</a> <code>权限控制</code></h2>
<p>MySQL常用的权限</p>
<table>
<thead>
<tr>
<th>权限</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ALL,ALL PRIVILEGES</td>
<td>所有权限</td>
</tr>
<tr>
<td>SELECT</td>
<td>查询数据权限</td>
</tr>
<tr>
<td>INSERT</td>
<td>插入数据权限</td>
</tr>
<tr>
<td>UPDATE</td>
<td>修改数据权限</td>
</tr>
<tr>
<td>DELETE</td>
<td>删除数据权限</td>
</tr>
<tr>
<td>ALTER</td>
<td>修改表权限</td>
</tr>
<tr>
<td>DROP</td>
<td>删除数据库/表/视图</td>
</tr>
<tr>
<td>CREATE</td>
<td>创建数据库/表</td>
</tr>
</tbody>
</table>
<p>查询权限</p>
<blockquote>
<p>show grants for '用户名'@'主机名';</p>
</blockquote>
<p>授予权限</p>
<blockquote>
<p>grant 权限列表 on 数据库名.表名 to '用户名'@'主机名';</p>
</blockquote>
<p>撤销权限</p>
<blockquote>
<p>revoke 权限列表 on 数据库名.表名 from '用户名'@'主机名';</p>
</blockquote>
<p>注意：</p>
<p>​			●	多个权限之间，使用逗号分隔</p>
<p>​		    ●	授权时，数据库名和表名可以使用*进行通配，代表所有。</p>
<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1>
<p>什么是函数：</p>
<blockquote>
<p>函数是指一段可以直接被另一段程序调用的程序或代码。</p>
</blockquote>
<h2 id="字符串函数" tabindex="-1"><a class="header-anchor" href="#字符串函数" aria-hidden="true">#</a> <code>字符串函数</code></h2>
<table>
<thead>
<tr>
<th style="text-align:left">函数</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">实例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ASCII(s)</td>
<td style="text-align:left">返回字符串 s 的第一个字符的 ASCII 码。</td>
<td style="text-align:left">返回 CustomerName 字段第一个字母的 ASCII 码：<code>SELECT ASCII(CustomerName) AS NumCodeOfFirstChar FROM Customers;</code></td>
</tr>
<tr>
<td style="text-align:left">CHAR_LENGTH(s)</td>
<td style="text-align:left">返回字符串 s 的字符数</td>
<td style="text-align:left">返回字符串 RUNOOB 的字符数<code>SELECT CHAR_LENGTH(&quot;RUNOOB&quot;) AS LengthOfString;</code></td>
</tr>
<tr>
<td style="text-align:left">CHARACTER_LENGTH(s)</td>
<td style="text-align:left">返回字符串 s 的字符数，等同于 CHAR_LENGTH(s)</td>
<td style="text-align:left">返回字符串 RUNOOB 的字符数<code>SELECT CHARACTER_LENGTH(&quot;RUNOOB&quot;) AS LengthOfString;</code></td>
</tr>
<tr>
<td style="text-align:left">CONCAT(s1,s2...sn)</td>
<td style="text-align:left">字符串 s1,s2 等多个字符串合并为一个字符串</td>
<td style="text-align:left">合并多个字符串<code>SELECT CONCAT(&quot;SQL &quot;, &quot;Runoob &quot;, &quot;Gooogle &quot;, &quot;Facebook&quot;) AS ConcatenatedString;</code></td>
</tr>
<tr>
<td style="text-align:left">CONCAT_WS(x, s1,s2...sn)</td>
<td style="text-align:left">同 CONCAT(s1,s2,...) 函数，但是每个字符串之间要加上 x，x 可以是分隔符</td>
<td style="text-align:left">合并多个字符串，并添加分隔符：<code>SELECT CONCAT_WS(&quot;-&quot;, &quot;SQL&quot;, &quot;Tutorial&quot;, &quot;is&quot;, &quot;fun!&quot;)AS ConcatenatedString;</code></td>
</tr>
<tr>
<td style="text-align:left">FIELD(s,s1,s2...)</td>
<td style="text-align:left">返回第一个字符串 s 在字符串列表(s1,s2...)中的位置</td>
<td style="text-align:left">返回字符串 c 在列表值中的位置：<code>SELECT FIELD(&quot;c&quot;, &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;);</code></td>
</tr>
<tr>
<td style="text-align:left">FIND_IN_SET(s1,s2)</td>
<td style="text-align:left">返回在字符串s2中与s1匹配的字符串的位置</td>
<td style="text-align:left">返回字符串 c 在指定字符串中的位置：<code>SELECT FIND_IN_SET(&quot;c&quot;, &quot;a,b,c,d,e&quot;);</code></td>
</tr>
<tr>
<td style="text-align:left">FORMAT(x,n)</td>
<td style="text-align:left">函数可以将数字 x 进行格式化 &quot;#,###.##&quot;, 将 x 保留到小数点后 n 位，最后一位四舍五入。</td>
<td style="text-align:left">格式化数字 &quot;#,###.##&quot; 形式：<code>SELECT FORMAT(250500.5634, 2);     -- 输出 250,500.56</code></td>
</tr>
<tr>
<td style="text-align:left">INSERT(s1,x,len,s2)</td>
<td style="text-align:left">字符串 s2 替换 s1 的 x 位置开始长度为 len 的字符串</td>
<td style="text-align:left">从字符串第一个位置开始的 6 个字符替换为 runoob：<code>SELECT INSERT(&quot;google.com&quot;, 1, 6, &quot;runoob&quot;);  -- 输出：runoob.com</code></td>
</tr>
<tr>
<td style="text-align:left">LOCATE(s1,s)</td>
<td style="text-align:left">从字符串 s 中获取 s1 的开始位置</td>
<td style="text-align:left">获取 b 在字符串 abc 中的位置：<code>SELECT LOCATE('st','myteststring');  -- 5</code>返回字符串 abc 中 b 的位置：<code>SELECT LOCATE('b', 'abc') -- 2</code></td>
</tr>
<tr>
<td style="text-align:left">LCASE(s)</td>
<td style="text-align:left">将字符串 s 的所有字母变成小写字母</td>
<td style="text-align:left">字符串 RUNOOB 转换为小写：<code>SELECT LCASE('RUNOOB') -- runoob</code></td>
</tr>
<tr>
<td style="text-align:left">LEFT(s,n)</td>
<td style="text-align:left">返回字符串 s 的前 n 个字符</td>
<td style="text-align:left">返回字符串 runoob 中的前两个字符：<code>SELECT LEFT('runoob',2) -- ru</code></td>
</tr>
<tr>
<td style="text-align:left">LOWER(s)</td>
<td style="text-align:left">将字符串 s 的所有字母变成小写字母</td>
<td style="text-align:left">字符串 RUNOOB 转换为小写：<code>SELECT LOWER('RUNOOB') -- runoob</code></td>
</tr>
<tr>
<td style="text-align:left">LPAD(s1,len,s2)</td>
<td style="text-align:left">在字符串 s1 的开始处填充字符串 s2，使字符串长度达到 len</td>
<td style="text-align:left">将字符串 xx 填充到 abc 字符串的开始处：<code>SELECT LPAD('abc',5,'xx') -- xxabc</code></td>
</tr>
<tr>
<td style="text-align:left">LTRIM(s)</td>
<td style="text-align:left">去掉字符串 s 开始处的空格</td>
<td style="text-align:left">去掉字符串 RUNOOB开始处的空格：<code>SELECT LTRIM(&quot;    RUNOOB&quot;) AS LeftTrimmedString;-- RUNOOB</code></td>
</tr>
<tr>
<td style="text-align:left">MID(s,n,len)</td>
<td style="text-align:left">从字符串 s 的 n 位置截取长度为 len 的子字符串，同 SUBSTRING(s,n,len)</td>
<td style="text-align:left">从字符串 RUNOOB 中的第 2 个位置截取 3个 字符：<code>SELECT MID(&quot;RUNOOB&quot;, 2, 3) AS ExtractString; -- UNO</code></td>
</tr>
<tr>
<td style="text-align:left">POSITION(s1 IN s)</td>
<td style="text-align:left">从字符串 s 中获取 s1 的开始位置</td>
<td style="text-align:left">返回字符串 abc 中 b 的位置：<code>SELECT POSITION('b' in 'abc') -- 2</code></td>
</tr>
<tr>
<td style="text-align:left">REPEAT(s,n)</td>
<td style="text-align:left">将字符串 s 重复 n 次</td>
<td style="text-align:left">将字符串 runoob 重复三次：<code>SELECT REPEAT('runoob',3) -- runoobrunoobrunoob</code></td>
</tr>
<tr>
<td style="text-align:left">REPLACE(s,s1,s2)</td>
<td style="text-align:left">将字符串 s2 替代字符串 s 中的字符串 s1</td>
<td style="text-align:left">将字符串 abc 中的字符 a 替换为字符 x：<code>SELECT REPLACE('abc','a','x') --xbc</code></td>
</tr>
<tr>
<td style="text-align:left">REVERSE(s)</td>
<td style="text-align:left">将字符串s的顺序反过来</td>
<td style="text-align:left">将字符串 abc 的顺序反过来：<code>SELECT REVERSE('abc') -- cba</code></td>
</tr>
<tr>
<td style="text-align:left">RIGHT(s,n)</td>
<td style="text-align:left">返回字符串 s 的后 n 个字符</td>
<td style="text-align:left">返回字符串 runoob 的后两个字符：<code>SELECT RIGHT('runoob',2) -- ob</code></td>
</tr>
<tr>
<td style="text-align:left">RPAD(s1,len,s2)</td>
<td style="text-align:left">在字符串 s1 的结尾处添加字符串 s2，使字符串的长度达到 len</td>
<td style="text-align:left">将字符串 xx 填充到 abc 字符串的结尾处：<code>SELECT RPAD('abc',5,'xx') -- abcxx</code></td>
</tr>
<tr>
<td style="text-align:left">RTRIM(s)</td>
<td style="text-align:left">去掉字符串 s 结尾处的空格</td>
<td style="text-align:left">去掉字符串 RUNOOB 的末尾空格：<code>SELECT RTRIM(&quot;RUNOOB     &quot;) AS RightTrimmedString;   -- RUNOOB</code></td>
</tr>
<tr>
<td style="text-align:left">SPACE(n)</td>
<td style="text-align:left">返回 n 个空格</td>
<td style="text-align:left">返回 10 个空格：<code>SELECT SPACE(10);</code></td>
</tr>
<tr>
<td style="text-align:left">STRCMP(s1,s2)</td>
<td style="text-align:left">比较字符串 s1 和 s2，如果 s1 与 s2 相等返回 0 ，如果 s1&gt;s2 返回 1，如果 s1&lt;s2 返回 -1</td>
<td style="text-align:left">比较字符串：<code>SELECT STRCMP(&quot;runoob&quot;, &quot;runoob&quot;);  -- 0</code></td>
</tr>
<tr>
<td style="text-align:left">SUBSTR(s, start, length)</td>
<td style="text-align:left">从字符串 s 的 start 位置截取长度为 length 的子字符串</td>
<td style="text-align:left">从字符串 RUNOOB 中的第 2 个位置截取 3个 字符：<code>SELECT SUBSTR(&quot;RUNOOB&quot;, 2, 3) AS ExtractString; -- UNO</code></td>
</tr>
<tr>
<td style="text-align:left">SUBSTRING(s, start, length)</td>
<td style="text-align:left">从字符串 s 的 start 位置截取长度为 length 的子字符串，等同于 SUBSTR(s, start, length)</td>
<td style="text-align:left">从字符串 RUNOOB 中的第 2 个位置截取 3个 字符：<code>SELECT SUBSTRING(&quot;RUNOOB&quot;, 2, 3) AS ExtractString; -- UNO</code></td>
</tr>
<tr>
<td style="text-align:left">SUBSTRING_INDEX(s, delimiter, number)</td>
<td style="text-align:left">返回从字符串 s 的第 number 个出现的分隔符 delimiter 之后的子串。 如果 number 是正数，返回第 number 个字符左边的字符串。 如果 number 是负数，返回第(number 的绝对值(从右边数))个字符右边的字符串。</td>
<td style="text-align:left"><code>SELECT SUBSTRING_INDEX('a*b','*',1) -- a SELECT SUBSTRING_INDEX('a*b','*',-1)  -- b SELECT SUBSTRING_INDEX(SUBSTRING_INDEX('a*b*c*d*e','*',3),'*',-1)  -- c</code></td>
</tr>
<tr>
<td style="text-align:left">TRIM(s)</td>
<td style="text-align:left">去掉字符串 s 开始和结尾处的空格</td>
<td style="text-align:left">去掉字符串 RUNOOB 的首尾空格：<code>SELECT TRIM('    RUNOOB    ') AS TrimmedString;</code></td>
</tr>
<tr>
<td style="text-align:left">UCASE(s)</td>
<td style="text-align:left">将字符串转换为大写</td>
<td style="text-align:left">将字符串 runoob 转换为大写：<code>SELECT UCASE(&quot;runoob&quot;); -- RUNOOB</code></td>
</tr>
<tr>
<td style="text-align:left">UPPER(s)</td>
<td style="text-align:left">将字符串转换为大写</td>
<td style="text-align:left">将字符串 runoob 转换为大写：<code>SELECT UPPER(&quot;runoob&quot;); -- RUNOOB</code></td>
</tr>
</tbody>
</table>
<h2 id="数值函数" tabindex="-1"><a class="header-anchor" href="#数值函数" aria-hidden="true">#</a> <code>数值函数</code></h2>
<table>
<thead>
<tr>
<th style="text-align:left">函数名</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">实例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ABS(x)</td>
<td style="text-align:left">返回 x 的绝对值</td>
<td style="text-align:left">返回 -1 的绝对值：<code>SELECT ABS(-1) -- 返回1</code></td>
</tr>
<tr>
<td style="text-align:left">ACOS(x)</td>
<td style="text-align:left">求 x 的反余弦值（单位为弧度），x 为一个数值</td>
<td style="text-align:left"><code>SELECT ACOS(0.25);</code></td>
</tr>
<tr>
<td style="text-align:left">ASIN(x)</td>
<td style="text-align:left">求反正弦值（单位为弧度），x 为一个数值</td>
<td style="text-align:left"><code>SELECT ASIN(0.25);</code></td>
</tr>
<tr>
<td style="text-align:left">ATAN(x)</td>
<td style="text-align:left">求反正切值（单位为弧度），x 为一个数值</td>
<td style="text-align:left"><code>SELECT ATAN(2.5);</code></td>
</tr>
<tr>
<td style="text-align:left">ATAN2(n, m)</td>
<td style="text-align:left">求反正切值（单位为弧度）</td>
<td style="text-align:left"><code>SELECT ATAN2(-0.8, 2);</code></td>
</tr>
<tr>
<td style="text-align:left">AVG(expression)</td>
<td style="text-align:left">返回一个表达式的平均值，expression 是一个字段</td>
<td style="text-align:left">返回 Products 表中Price 字段的平均值：<code>SELECT AVG(Price) AS AveragePrice FROM Products;</code></td>
</tr>
<tr>
<td style="text-align:left">CEIL(x)</td>
<td style="text-align:left">返回大于或等于 x 的最小整数</td>
<td style="text-align:left"><code>SELECT CEIL(1.5) -- 返回2</code></td>
</tr>
<tr>
<td style="text-align:left">CEILING(x)</td>
<td style="text-align:left">返回大于或等于 x 的最小整数</td>
<td style="text-align:left"><code>SELECT CEILING(1.5); -- 返回2</code></td>
</tr>
<tr>
<td style="text-align:left">COS(x)</td>
<td style="text-align:left">求余弦值(参数是弧度)</td>
<td style="text-align:left"><code>SELECT COS(2);</code></td>
</tr>
<tr>
<td style="text-align:left">COT(x)</td>
<td style="text-align:left">求余切值(参数是弧度)</td>
<td style="text-align:left"><code>SELECT COT(6);</code></td>
</tr>
<tr>
<td style="text-align:left">COUNT(expression)</td>
<td style="text-align:left">返回查询的记录总数，expression 参数是一个字段或者 * 号</td>
<td style="text-align:left">返回 Products 表中 products 字段总共有多少条记录：<code>SELECT COUNT(ProductID) AS NumberOfProducts FROM Products;</code></td>
</tr>
<tr>
<td style="text-align:left">DEGREES(x)</td>
<td style="text-align:left">将弧度转换为角度</td>
<td style="text-align:left"><code>SELECT DEGREES(3.1415926535898) -- 180</code></td>
</tr>
<tr>
<td style="text-align:left">n DIV m</td>
<td style="text-align:left">整除，n 为被除数，m 为除数</td>
<td style="text-align:left">计算 10 除于 5：<code>SELECT 10 DIV 5;  -- 2</code></td>
</tr>
<tr>
<td style="text-align:left">EXP(x)</td>
<td style="text-align:left">返回 e 的 x 次方</td>
<td style="text-align:left">计算 e 的三次方：<code>SELECT EXP(3) -- 20.085536923188</code></td>
</tr>
<tr>
<td style="text-align:left">FLOOR(x)</td>
<td style="text-align:left">返回小于或等于 x 的最大整数</td>
<td style="text-align:left">小于或等于 1.5 的整数：<code>SELECT FLOOR(1.5) -- 返回1</code></td>
</tr>
<tr>
<td style="text-align:left">GREATEST(expr1, expr2, expr3, ...)</td>
<td style="text-align:left">返回列表中的最大值</td>
<td style="text-align:left">返回以下数字列表中的最大值：<code>SELECT GREATEST(3, 12, 34, 8, 25); -- 34</code>返回以下字符串列表中的最大值：<code>SELECT GREATEST(&quot;Google&quot;, &quot;Runoob&quot;, &quot;Apple&quot;);   -- Runoob</code></td>
</tr>
<tr>
<td style="text-align:left">LEAST(expr1, expr2, expr3, ...)</td>
<td style="text-align:left">返回列表中的最小值</td>
<td style="text-align:left">返回以下数字列表中的最小值：<code>SELECT LEAST(3, 12, 34, 8, 25); -- 3</code>返回以下字符串列表中的最小值：<code>SELECT LEAST(&quot;Google&quot;, &quot;Runoob&quot;, &quot;Apple&quot;);   -- Apple</code></td>
</tr>
<tr>
<td style="text-align:left">LN</td>
<td style="text-align:left">返回数字的自然对数，以 e 为底。</td>
<td style="text-align:left">返回 2 的自然对数：<code>SELECT LN(2);  -- 0.6931471805599453</code></td>
</tr>
<tr>
<td style="text-align:left">LOG(x) 或 LOG(base, x)</td>
<td style="text-align:left">返回自然对数(以 e 为底的对数)，如果带有 base 参数，则 base 为指定带底数。</td>
<td style="text-align:left"><code>SELECT LOG(20.085536923188) -- 3 SELECT LOG(2, 4); -- 2</code></td>
</tr>
<tr>
<td style="text-align:left">LOG10(x)</td>
<td style="text-align:left">返回以 10 为底的对数</td>
<td style="text-align:left"><code>SELECT LOG10(100) -- 2</code></td>
</tr>
<tr>
<td style="text-align:left">LOG2(x)</td>
<td style="text-align:left">返回以 2 为底的对数</td>
<td style="text-align:left">返回以 2 为底 6 的对数：<code>SELECT LOG2(6);  -- 2.584962500721156</code></td>
</tr>
<tr>
<td style="text-align:left">MAX(expression)</td>
<td style="text-align:left">返回字段 expression 中的最大值</td>
<td style="text-align:left">返回数据表 Products 中字段 Price 的最大值：<code>SELECT MAX(Price) AS LargestPrice FROM Products;</code></td>
</tr>
<tr>
<td style="text-align:left">MIN(expression)</td>
<td style="text-align:left">返回字段 expression 中的最小值</td>
<td style="text-align:left">返回数据表 Products 中字段 Price 的最小值：<code>SELECT MIN(Price) AS MinPrice FROM Products;</code></td>
</tr>
<tr>
<td style="text-align:left">MOD(x,y)</td>
<td style="text-align:left">返回 x 除以 y 以后的余数</td>
<td style="text-align:left">5 除于 2 的余数：<code>SELECT MOD(5,2) -- 1</code></td>
</tr>
<tr>
<td style="text-align:left">PI()</td>
<td style="text-align:left">返回圆周率(3.141593）</td>
<td style="text-align:left"><code>SELECT PI() --3.141593</code></td>
</tr>
<tr>
<td style="text-align:left">POW(x,y)</td>
<td style="text-align:left">返回 x 的 y 次方</td>
<td style="text-align:left">2 的 3 次方：<code>SELECT POW(2,3) -- 8</code></td>
</tr>
<tr>
<td style="text-align:left">POWER(x,y)</td>
<td style="text-align:left">返回 x 的 y 次方</td>
<td style="text-align:left">2 的 3 次方：<code>SELECT POWER(2,3) -- 8</code></td>
</tr>
<tr>
<td style="text-align:left">RADIANS(x)</td>
<td style="text-align:left">将角度转换为弧度</td>
<td style="text-align:left">180 度转换为弧度：<code>SELECT RADIANS(180) -- 3.1415926535898</code></td>
</tr>
<tr>
<td style="text-align:left">RAND()</td>
<td style="text-align:left">返回 0 到 1 的随机数</td>
<td style="text-align:left"><code>SELECT RAND() --0.93099315644334</code></td>
</tr>
<tr>
<td style="text-align:left">ROUND(x [,y])</td>
<td style="text-align:left">返回离 x 最近的整数，可选参数 y 表示要四舍五入的小数位数，如果省略，则返回整数。</td>
<td style="text-align:left"><code>SELECT ROUND(1.23456) --1 SELECT ROUND(345.156, 2) -- 345.16</code></td>
</tr>
<tr>
<td style="text-align:left">SIGN(x)</td>
<td style="text-align:left">返回 x 的符号，x 是负数、0、正数分别返回 -1、0 和 1</td>
<td style="text-align:left"><code>SELECT SIGN(-10) -- (-1)</code></td>
</tr>
<tr>
<td style="text-align:left">SIN(x)</td>
<td style="text-align:left">求正弦值(参数是弧度)</td>
<td style="text-align:left"><code>SELECT SIN(RADIANS(30)) -- 0.5</code></td>
</tr>
<tr>
<td style="text-align:left">SQRT(x)</td>
<td style="text-align:left">返回x的平方根</td>
<td style="text-align:left">25 的平方根：<code>SELECT SQRT(25) -- 5</code></td>
</tr>
<tr>
<td style="text-align:left">SUM(expression)</td>
<td style="text-align:left">返回指定字段的总和</td>
<td style="text-align:left">计算 OrderDetails 表中字段 Quantity 的总和：<code>SELECT SUM(Quantity) AS TotalItemsOrdered FROM OrderDetails;</code></td>
</tr>
<tr>
<td style="text-align:left">TAN(x)</td>
<td style="text-align:left">求正切值(参数是弧度)</td>
<td style="text-align:left"><code>SELECT TAN(1.75);  -- -5.52037992250933</code></td>
</tr>
<tr>
<td style="text-align:left">TRUNCATE(x,y)</td>
<td style="text-align:left">返回数值 x 保留到小数点后 y 位的值（与 ROUND 最大的区别是不会进行四舍五入）</td>
<td style="text-align:left"><code>SELECT TRUNCATE(1.23456,3) -- 1.234</code></td>
</tr>
</tbody>
</table>
<h2 id="日期函数" tabindex="-1"><a class="header-anchor" href="#日期函数" aria-hidden="true">#</a> <code>日期函数</code></h2>
<table>
<thead>
<tr>
<th>函数</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>curdate()</td>
<td>返回当前日期</td>
</tr>
<tr>
<td>curtime()</td>
<td>返回当前时间</td>
</tr>
<tr>
<td>now()</td>
<td>返回当前日期和时间</td>
</tr>
<tr>
<td>year(date)</td>
<td>获取指定date的年份</td>
</tr>
<tr>
<td>month(date)</td>
<td>获取指定date的月份</td>
</tr>
<tr>
<td>day(date)</td>
<td>获取指定date的日期</td>
</tr>
<tr>
<td>date_add(date,interval expr type)</td>
<td>返回一个日期/时间值加上一个时间间隔expr后的时间值</td>
</tr>
<tr>
<td>datediff(date1,date2)</td>
<td>返回起始时间date1和结束时间date2之间的天数</td>
</tr>
</tbody>
</table>
<h2 id="流程函数" tabindex="-1"><a class="header-anchor" href="#流程函数" aria-hidden="true">#</a> <code>流程函数</code></h2>
<table>
<thead>
<tr>
<th style="text-align:left">函数名</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">实例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">BIN(x)</td>
<td style="text-align:left">返回 x 的二进制编码</td>
<td style="text-align:left">15 的 2 进制编码:<code>SELECT BIN(15); -- 1111</code></td>
</tr>
<tr>
<td style="text-align:left">BINARY(s)</td>
<td style="text-align:left">将字符串 s 转换为二进制字符串</td>
<td style="text-align:left"><code>SELECT BINARY &quot;RUNOOB&quot;; -&gt; RUNOOB</code></td>
</tr>
<tr>
<td style="text-align:left"><code>CASE expression    WHEN condition1 THEN result1    WHEN condition2 THEN result2   ...    WHEN conditionN THEN resultN    ELSE result END</code></td>
<td style="text-align:left">CASE 表示函数开始，END 表示函数结束。如果 condition1 成立，则返回 result1, 如果 condition2 成立，则返回 result2，当全部不成立则返回 result，而当有一个成立之后，后面的就不执行了。</td>
<td style="text-align:left"><code>SELECT CASE  　WHEN 1 &gt; 0 　THEN '1 &gt; 0' 　WHEN 2 &gt; 0 　THEN '2 &gt; 0' 　ELSE '3 &gt; 0' 　END -&gt;1 &gt; 0</code></td>
</tr>
<tr>
<td style="text-align:left">CAST(x AS type)</td>
<td style="text-align:left">转换数据类型</td>
<td style="text-align:left">字符串日期转换为日期：<code>SELECT CAST(&quot;2017-08-29&quot; AS DATE); -&gt; 2017-08-29</code></td>
</tr>
<tr>
<td style="text-align:left">COALESCE(expr1, expr2, ...., expr_n)</td>
<td style="text-align:left">返回参数中的第一个非空表达式（从左向右）</td>
<td style="text-align:left"><code>SELECT COALESCE(NULL, NULL, NULL, 'runoob.com', NULL, 'google.com'); -&gt; runoob.com</code></td>
</tr>
<tr>
<td style="text-align:left">CONNECTION_ID()</td>
<td style="text-align:left">返回唯一的连接 ID</td>
<td style="text-align:left"><code>SELECT CONNECTION_ID(); -&gt; 4292835</code></td>
</tr>
<tr>
<td style="text-align:left">CONV(x,f1,f2)</td>
<td style="text-align:left">返回 f1 进制数变成 f2 进制数</td>
<td style="text-align:left"><code>SELECT CONV(15, 10, 2); -&gt; 1111</code></td>
</tr>
<tr>
<td style="text-align:left">CONVERT(s USING cs)</td>
<td style="text-align:left">函数将字符串 s 的字符集变成 cs</td>
<td style="text-align:left"><code>SELECT CHARSET('ABC') -&gt;utf-8     SELECT CHARSET(CONVERT('ABC' USING gbk)) -&gt;gbk</code></td>
</tr>
<tr>
<td style="text-align:left">CURRENT_USER()</td>
<td style="text-align:left">返回当前用户</td>
<td style="text-align:left"><code>SELECT CURRENT_USER(); -&gt; guest@%</code></td>
</tr>
<tr>
<td style="text-align:left">DATABASE()</td>
<td style="text-align:left">返回当前数据库名</td>
<td style="text-align:left"><code>SELECT DATABASE();    -&gt; runoob</code></td>
</tr>
<tr>
<td style="text-align:left">IF(expr,v1,v2)</td>
<td style="text-align:left">如果表达式 expr 成立，返回结果 v1；否则，返回结果 v2。</td>
<td style="text-align:left"><code>SELECT IF(1 &gt; 0,'正确','错误')     -&gt;正确</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/mysql/mysql-func-ifnull.html" target="_blank" rel="noopener noreferrer">IFNULL(v1,v2)<ExternalLinkIcon/></a></td>
<td style="text-align:left">如果 v1 的值不为 NULL，则返回 v1，否则返回 v2。</td>
<td style="text-align:left"><code>SELECT IFNULL(null,'Hello Word') -&gt;Hello Word</code></td>
</tr>
<tr>
<td style="text-align:left">ISNULL(expression)</td>
<td style="text-align:left">判断表达式是否为 NULL</td>
<td style="text-align:left"><code>SELECT ISNULL(NULL); -&gt;1</code></td>
</tr>
<tr>
<td style="text-align:left">LAST_INSERT_ID()</td>
<td style="text-align:left">返回最近生成的 AUTO_INCREMENT 值</td>
<td style="text-align:left"><code>SELECT LAST_INSERT_ID(); -&gt;6</code></td>
</tr>
<tr>
<td style="text-align:left">NULLIF(expr1, expr2)</td>
<td style="text-align:left">比较两个字符串，如果字符串 expr1 与 expr2 相等 返回 NULL，否则返回 expr1</td>
<td style="text-align:left"><code>SELECT NULLIF(25, 25); -&gt;</code></td>
</tr>
<tr>
<td style="text-align:left">SESSION_USER()</td>
<td style="text-align:left">返回当前用户</td>
<td style="text-align:left"><code>SELECT SESSION_USER(); -&gt; guest@%</code></td>
</tr>
<tr>
<td style="text-align:left">SYSTEM_USER()</td>
<td style="text-align:left">返回当前用户</td>
<td style="text-align:left"><code>SELECT SYSTEM_USER(); -&gt; guest@%</code></td>
</tr>
<tr>
<td style="text-align:left">USER()</td>
<td style="text-align:left">返回当前用户</td>
<td style="text-align:left"><code>SELECT USER(); -&gt; guest@%</code></td>
</tr>
<tr>
<td style="text-align:left">VERSION()</td>
<td style="text-align:left">返回数据库的版本号</td>
<td style="text-align:left"><code>SELECT VERSION() -&gt; 5.6.34</code></td>
</tr>
</tbody>
</table>
<h1 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束</h1>
<p>概念：</p>
<blockquote>
<p>约束是作用于表中字段上的规则，用于限制存储在表中的数据。</p>
</blockquote>
<p>目的：</p>
<blockquote>
<p>保证数据库中的数据正确、有效性和完整性。</p>
</blockquote>
<p>分类：</p>
<table>
<thead>
<tr>
<th>约束</th>
<th>描述</th>
<th>关键字</th>
</tr>
</thead>
<tbody>
<tr>
<td>非空约束</td>
<td>限制该字段的数据不能为null</td>
<td>not null</td>
</tr>
<tr>
<td>唯一约束</td>
<td>保证该字段的所有数据都是唯一、不重复的</td>
<td>unique</td>
</tr>
<tr>
<td>主键约束</td>
<td>主键是一行数据的唯一标识，要求非空且唯一</td>
<td>primary key， <strong>AUTO_INCREMENT</strong></td>
</tr>
<tr>
<td>默认约束</td>
<td>保存数据时，如果未指定该字段的值，则采用默认值</td>
<td>default</td>
</tr>
<tr>
<td>检查约束（8.0.16版本之后）</td>
<td>保证字段值满足某一条件</td>
<td>check</td>
</tr>
<tr>
<td>外键约束</td>
<td>用来让两张表的数据之间建立连接，保证数据的一致性和完整性</td>
<td>foreign key</td>
</tr>
</tbody>
</table>
<p><strong>AUTO_INCREMENT</strong> (主键自增)</p>
<p>注意：</p>
<p>​			约束是作用于表中字段上的，可以在创建表/修改表的时候添加约束。</p>
<h2 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束" aria-hidden="true">#</a> <code>外键约束</code></h2>
<h3 id="添加外键" tabindex="-1"><a class="header-anchor" href="#添加外键" aria-hidden="true">#</a> <code>添加外键</code></h3>
<p>语法1：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>create table 表名(
	字段名 数据类型,
    ...
    [constraint] [外键名称] foreign key(外键字段名) references 主表(主表列名)
);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>添加外键语法2:</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>alter table 表名 add constraint 外键名称  foreign key(外键字段名) references 主表(主表列名);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>constraint:	限制</p>
<p>实例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>alter table emp add constraint fk_emp_dept_id  foreign key(dept_id) references dept(id);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="删除外键" tabindex="-1"><a class="header-anchor" href="#删除外键" aria-hidden="true">#</a> <code>删除外键</code></h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>alter table 表名 drop foreign key 外键名称;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="删除-更新行为" tabindex="-1"><a class="header-anchor" href="#删除-更新行为" aria-hidden="true">#</a> <code>删除/更新行为</code></h3>
<table>
<thead>
<tr>
<th style="text-align:center">行为</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">NO ACTION</td>
<td style="text-align:center">当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新。(与RESTRICT一致)</td>
</tr>
<tr>
<td style="text-align:center">RESTRICT</td>
<td style="text-align:center">当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新。(与NO ACTION一致)</td>
</tr>
<tr>
<td style="text-align:center">CASCADE</td>
<td style="text-align:center">当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有，则也删除/更新外键在子表中的记录。</td>
</tr>
<tr>
<td style="text-align:center">SET NULL</td>
<td style="text-align:center">当在父表中删除对应记录时，首先检查该记录是否有对应外键，如果有则设置子表中该外键值为null(这就要求该外键允许取null)。</td>
</tr>
<tr>
<td style="text-align:center">SET DEFAULT</td>
<td style="text-align:center">父表有变更时，子表将外键列设置成一个默认的值(Innodb不支持)</td>
</tr>
</tbody>
</table>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER TABLE表名ADDCONSTRAINT外键名称FOREIGN KEY(外键字段)REFERENCES主表名(主表字段名） ONUPDATE CASCADE ONDELETE CASCADE;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h1>
<h2 id="多表关系" tabindex="-1"><a class="header-anchor" href="#多表关系" aria-hidden="true">#</a> 多表关系</h2>
<p>概述：</p>
<p>项目开发中，在进行数据库表结构设计时，会根据业务需求及业务模块之间的关系，分析并设计表结构，由于业务之间相互关联，所以各个表结构之间也存在着各种联系，基本上分为三种:</p>
<p>●	一对多(多对一)</p>
<p>​	在多的一方建立外键，指向一的一方的主键</p>
<p>●	多对多</p>
<p>​	建立第三张中间表，中间表至少包含两个外键，分别关联两方主键</p>
<p>●	一对一</p>
<p>关系:一对一关系，多用于单表拆分，将一张表的基础字段放在一张表中，其他详情字段放在另一张表中，以提升操作效率</p>
<p>实现:在任意一方加入外键，关联另外一方的主键，<code>并且设置外键为唯一的(UNIQUE)</code></p>
<h2 id="多表查询-1" tabindex="-1"><a class="header-anchor" href="#多表查询-1" aria-hidden="true">#</a> 多表查询</h2>
<p>概述:指从多张表中查询数据</p>
<p>笛卡尔积:笛卡尔乘积是指在数学中，两个集合A集合和B集合的所有组合情况。(在多表查询时，需要消除无效的笛卡尔积)</p>
<h2 id="多表查询分类" tabindex="-1"><a class="header-anchor" href="#多表查询分类" aria-hidden="true">#</a> 多表查询分类</h2>
<p><code>连接查询</code>:</p>
<p>​				<code>内连接</code>:相当于查询A、B交集部分数据</p>
<p>​				<code>外连接</code>:</p>
<p>​							<code>左外连接</code>:查询左表所有数据，以及两张表交集部分数据</p>
<p>​							<code>右外连接</code>:查询右表所有数据，以及两张表交集部分数据</p>
<p>​				<code>自连接</code>:当前表与自身的连接查询，自连接必须使用表别名</p>
<p><code>子查询</code></p>
<h2 id="连接查询" tabindex="-1"><a class="header-anchor" href="#连接查询" aria-hidden="true">#</a> 连接查询</h2>
<h3 id="内连接" tabindex="-1"><a class="header-anchor" href="#内连接" aria-hidden="true">#</a> <code>内连接</code></h3>
<p>内连接查询语法:</p>
<blockquote>
<p>隐式内连接:</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT  字段列表   FROM 表1,表2 WHERE 条件...;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>显式内连接:</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 字段列表   FROM 表1 [INNER]  JOIN 表2 ON  连接条件...;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>内连接查询的是两张表交集的部分</p>
<h3 id="外连接" tabindex="-1"><a class="header-anchor" href="#外连接" aria-hidden="true">#</a> <code>外连接</code></h3>
<p>外连接查询语法:</p>
<blockquote>
<p>左外连接:相当于查询表1(左表)的所有数据包含表1和表2交集部分的数据</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 字段列表 FROM表1 LEFT [OUTER] JOIN 表2 ON 条件...;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>右外连接:相当于查询表2(右表)的所有数据包含表1和表2交集部分的数据</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 字段列表 FROM表1 RIGHT [OUTER] JOIN 表2 ON 条件....;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="自连接" tabindex="-1"><a class="header-anchor" href="#自连接" aria-hidden="true">#</a> <code>自连接</code></h3>
<blockquote>
<p>自连接查询语法:</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 字段列表 FROM 表A 别名A JOIN 表A 别名B ON 条件...;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>自连接查询，可以是内连接查询，也可以是外连接查询。</p>
<h2 id="联合查询-union-union-all" tabindex="-1"><a class="header-anchor" href="#联合查询-union-union-all" aria-hidden="true">#</a> 联合查询-union , union all</h2>
<blockquote>
<p>对于union查询，就是把多次查询的结果合并起来，形成一个新的查询结果集。</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 字段列表 FROM 表A ....
UNION [ALL]
SELECT 字段列表 FROM 表B.....;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>注意：</code></p>
<blockquote>
<p>对于联合查询的多张表的列数必须保持一致，字段类型也需要保持一致。</p>
<p>union all 会将全部的数据直接合并在一起，union会对合并之后的数据去重。</p>
</blockquote>
<h2 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h2>
<blockquote>
<p>概念:	SQL语句中嵌套SELECT语句，称为嵌套查询，又称子查询。</p>
<p>子查询外部的语句可以是<code>INSERT / UPDATE /DELETE/SELECT</code>的任何一个。</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT * FROM t1 WHERE column1 = (SELECT column1 FROM t2);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>根据子查询结果不同，分为:</p>
<p>●	标量子查询（子查询结果为单个值)</p>
<p>●	列子查询(子查询结果为一列)</p>
<p>●	行子查询(子查询结果为一行)</p>
<p>●	表子查询(子查询结果为多行多列)</p>
</blockquote>
<blockquote>
<p>根据子查询位置，分为: WHERE之后、FROM之后、SELECT之后。l</p>
</blockquote>
<h3 id="标量子查询" tabindex="-1"><a class="header-anchor" href="#标量子查询" aria-hidden="true">#</a> <code>标量子查询</code></h3>
<blockquote>
<p>子查询返回的结果是单个值（数字、字符串、日期等），最简单的形式，这种子查询称为<code>标量子查询</code>。</p>
<p>常用的操作符:	<code>= &lt;&gt; &gt; &gt;= &lt; &lt;=</code></p>
</blockquote>
<h3 id="列子查询" tabindex="-1"><a class="header-anchor" href="#列子查询" aria-hidden="true">#</a> <code>列子查询</code></h3>
<blockquote>
<p>子查询返回的结果是一列（可以是多行)，这种子查询称为列子查询。</p>
<p>常用的操作符:IN 、NOT IN 、ANY 、SOME 、ALL</p>
</blockquote>
<table>
<thead>
<tr>
<th>操作符</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>IN</td>
<td>在指定的集合范围之内，多选一</td>
</tr>
<tr>
<td>NOT IN</td>
<td>不在指定的集合范围之内</td>
</tr>
<tr>
<td>ANY</td>
<td>子查询返回列表中，有任意一个满足即可</td>
</tr>
<tr>
<td>SOME</td>
<td>与ANY等同，使用SOME的地方都可以使用ANY</td>
</tr>
<tr>
<td>ALL</td>
<td>子查询返回列表的所有值都必须满足</td>
</tr>
</tbody>
</table>
<h3 id="行子查询" tabindex="-1"><a class="header-anchor" href="#行子查询" aria-hidden="true">#</a> <code>行子查询</code></h3>
<blockquote>
<p>子查询返回的结果是一行（可以是多列)，这种子查询称为行子查询。</p>
<p>常用的操作符:= 、&lt;、IN、NOT IN</p>
</blockquote>
<h3 id="表子查询" tabindex="-1"><a class="header-anchor" href="#表子查询" aria-hidden="true">#</a> <code>表子查询</code></h3>
<blockquote>
<p>子查询返回的结果是多行多列，这种子查询称为表子查询。</p>
<p>常用的操作符:IN</p>
</blockquote>
<h1 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h1>
<h2 id="事务简介" tabindex="-1"><a class="header-anchor" href="#事务简介" aria-hidden="true">#</a> 事务简介</h2>
<blockquote>
<p>事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。</p>
</blockquote>
<h2 id="事务步骤" tabindex="-1"><a class="header-anchor" href="#事务步骤" aria-hidden="true">#</a> 事务步骤</h2>
<blockquote>
<p>1.开启事务</p>
<p>2.如果抛出异常，回滚事务</p>
<p>3.提交事务</p>
</blockquote>
<p>默认MySQL的事务是自动提交的。也就是说，当执行一条DML语句，MySQL会立即隐式的提交事务。</p>
<h2 id="事务操作" tabindex="-1"><a class="header-anchor" href="#事务操作" aria-hidden="true">#</a> 事务操作</h2>
<h3 id="开启事务" tabindex="-1"><a class="header-anchor" href="#开启事务" aria-hidden="true">#</a> <code>开启事务</code></h3>
<p>方法1：</p>
<blockquote>
<p><code>查看事务提交方式</code>。1为自动提交，0为手动提交，默认是自动提交</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT @@autocommit;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>设置事务提交方式</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SET @@autocommit = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>方法2：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>START TRANSACTION或 BEGIN;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="提交事务" tabindex="-1"><a class="header-anchor" href="#提交事务" aria-hidden="true">#</a> <code>提交事务</code></h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>COMMIT;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="回滚事务" tabindex="-1"><a class="header-anchor" href="#回滚事务" aria-hidden="true">#</a> <code>回滚事务</code></h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ROLLBACK;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="事务的四大特性-acid" tabindex="-1"><a class="header-anchor" href="#事务的四大特性-acid" aria-hidden="true">#</a> 事务的四大特性(ACID)</h2>
<blockquote>
<p>●	原子性（<code>A</code>tomicity)∶事务是不可分割的最小操作单元，要么全部成功，要么全部失败。</p>
<p>●	一致性（<code>C</code>onsistency)∶事务完成时，必须使所有的数据都保持一致状态。</p>
<p>●	隔离性（<code>I</code>solation):数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行。</p>
<p>●	持久性（<code>D</code>urability):事务一旦提交或回滚，它对数据库中的数据的改变就是永久的。</p>
</blockquote>
<h2 id="并发事务问题" tabindex="-1"><a class="header-anchor" href="#并发事务问题" aria-hidden="true">#</a> 并发事务问题</h2>
<table>
<thead>
<tr>
<th>问题</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>脏读</td>
<td>一个事务读到另外一个事务还没有提交的数据。</td>
</tr>
<tr>
<td>不可重复读</td>
<td>一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读。</td>
</tr>
<tr>
<td>幻读</td>
<td>一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了&quot;幻影&quot;。</td>
</tr>
</tbody>
</table>
<h2 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h2>
<table>
<thead>
<tr>
<th style="text-align:center">隔离级别</th>
<th style="text-align:center">赃读</th>
<th style="text-align:center">不可重复读</th>
<th style="text-align:center">幻读</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Read uncommitted</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">Read committed</td>
<td style="text-align:center">x</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">Repeatable Read(默认)</td>
<td style="text-align:center">x</td>
<td style="text-align:center">x</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">Serializable</td>
<td style="text-align:center">x</td>
<td style="text-align:center">x</td>
<td style="text-align:center">x</td>
</tr>
</tbody>
</table>
<blockquote>
<p>查看事务隔离级别</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT @@TRANSACTION_ISOLATION;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>设置事务隔离级别</p>
<p>SESSION:	会话级别，针对当前客户端窗口有效</p>
<p>GLOBAL:	 针对所有的客户端会话窗口有效</p>
</blockquote>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SET [SESSION|GLOBAL] TRANSACTION ISOLATION LEVEL {READ UNCOMMITTED |READ COMMITTED |REPEATABLE READ | SERIALIZABLE}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr>
<hr>
<hr>
<h1 id="mysql进阶" tabindex="-1"><a class="header-anchor" href="#mysql进阶" aria-hidden="true">#</a> MySQL进阶</h1>
<h1 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎" aria-hidden="true">#</a> 存储引擎</h1>
<h2 id="mysql体系结构" tabindex="-1"><a class="header-anchor" href="#mysql体系结构" aria-hidden="true">#</a> MySQL体系结构</h2>
<p><img src="C:\Users\86158\AppData\Roaming\Typora\typora-user-images\image-20230321103514562.png" alt="image-20230321103514562"></p>
<blockquote>
<p>连接层:	最上层是一些客户端和链接服务，主要完成一些类似于连接处理、授权认证、及相关的安全方案。服务器也会为安全接入的每个客户端验证它所具有的操作权限。</p>
<p>服务层:	第二层架构主要完成大多数的核心服务功能，如SQL接口，并完成缓存的查询，SQL的分析和优化，部分内置函数的执行。所有跨存储引擎的功能也在这一层实现，如过程、函数等。</p>
<p>引擎层:	存储引擎真正的负责了MySQL中数据的存储和提取，服务器通过API和存储引擎进行通信。不同的存储引擎具有不同的功能，这样我们可以根据自己的需要，来选取合适的存储引擎。</p>
<p>存储层:	主要是将数据存储在文件系统之上，并完成与存储引擎的交互。</p>
</blockquote>
<h2 id="存储引擎简介" tabindex="-1"><a class="header-anchor" href="#存储引擎简介" aria-hidden="true">#</a> 存储引擎简介</h2>
<blockquote>
<p>存储引擎就是存储数据、建立索引、更新/查询数据等技术的实现方式。存储引擎是基于表的，而不是基于库的，所以存储引擎也可被称为表类型。</p>
</blockquote>
<h2 id="指定存储引擎" tabindex="-1"><a class="header-anchor" href="#指定存储引擎" aria-hidden="true">#</a> 指定存储引擎</h2>
<p><code>1.在创建表时，指定存储引擎</code></p>
<p>注意:	如果没有指定存储引擎，默认指定innodb引擎</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE TABLE表名(
		字段1 字段1类型[ COMMENT 字段1注释]，
		...
		字段n 字段n类型[COMMENT 字段n注释]
		)ENGINE= ININODB [COMMENT 表注释];
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>2.查看当前数据库支持的存储引擎</code></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW ENGINES;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="存储引擎特点" tabindex="-1"><a class="header-anchor" href="#存储引擎特点" aria-hidden="true">#</a> 存储引擎特点</h2>
<table>
<thead>
<tr>
<th>特点</th>
<th>lnnoDB</th>
<th>MyISAM</th>
<th>Memory</th>
</tr>
</thead>
<tbody>
<tr>
<td>存储限制</td>
<td>64TB</td>
<td>有</td>
<td>有</td>
</tr>
<tr>
<td>事务安全</td>
<td>支持</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>锁机制</td>
<td>行锁</td>
<td>表锁</td>
<td>表锁</td>
</tr>
<tr>
<td>B+tree索引</td>
<td>支持</td>
<td>支持</td>
<td>支持</td>
</tr>
<tr>
<td>Hash索引</td>
<td>-</td>
<td>-</td>
<td>支持</td>
</tr>
<tr>
<td>全文索引</td>
<td>支持(5.6版本之后)</td>
<td>支持</td>
<td>-</td>
</tr>
<tr>
<td>空间使用</td>
<td>高</td>
<td>低</td>
<td>N/A</td>
</tr>
<tr>
<td>内存使用</td>
<td>高</td>
<td>低</td>
<td>中等</td>
</tr>
<tr>
<td>批量插入速度</td>
<td>低</td>
<td>高</td>
<td>高</td>
</tr>
<tr>
<td>支持外键</td>
<td>支持</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="●lnnodb" tabindex="-1"><a class="header-anchor" href="#●lnnodb" aria-hidden="true">#</a> <code>●	lnnoDB</code></h3>
<blockquote>
<p>介绍:	InnoDB是一种兼顾高可靠性和高性能的通用存储引擎，在MySQL 5.5之后，InnoDB是默认的MySQL存储引擎。</p>
<p>特点:</p>
<p>​			●	DML操作遵循ACID模型，支持<code>事务</code>;</p>
<p>​			●	<code>行级锁</code>，提高并发访问性能;</p>
<p>​			●	支持<code>外键</code>FOREIGN KEY约束，保证数据的完整性和正确性;</p>
</blockquote>
<p>文件</p>
<blockquote>
<p>xxx.ibd: xxx代表的是表名，innoDB引擎的每张表都会对应这样一个表空间文件，存储该表的表结构(frm、sdi)、数据和索引。参数: innodb_file_per_table</p>
</blockquote>
<p>注意:	最小单位是Page,它的大小是16k，extent的大小是1M，它等于64个Page</p>
<p><img src="C:\Users\86158\AppData\Roaming\Typora\typora-user-images\image-20230321110325686.png" alt="image-20230321110325686"></p>
<h3 id="●myisam" tabindex="-1"><a class="header-anchor" href="#●myisam" aria-hidden="true">#</a> <code>●	MyISAM</code></h3>
<blockquote>
<p>介绍:	MylSAM是MySQL早期的默认存储引擎。</p>
<p>特点:</p>
<p>​			●	不支持事务，不支持外键</p>
<p>​			●	支持表锁，不支持行锁</p>
<p>​			●	访问速度快</p>
<p>文件:</p>
<p>​			●	xxx.sdi:存储表结构信息</p>
<p>​			●	xxx.MYD:存储数据</p>
<p>​			●	xxx.MYI:存储索引</p>
</blockquote>
<h3 id="●memory" tabindex="-1"><a class="header-anchor" href="#●memory" aria-hidden="true">#</a> <code>●	Memory</code></h3>
<blockquote>
<p>介绍:	Memory引擎的表数据时存储在内存中的，由于受到硬件问题、或断电问题的影响，只能将这些表作为临时表或缓存使用。</p>
<p>特点:</p>
<p>​			●	内存存放</p>
<p>​			●	hash索引（默认)</p>
<p>文件:</p>
<p>​			●	xxx.sdi:存储表结构信息</p>
</blockquote>
<h2 id="存储引擎选择" tabindex="-1"><a class="header-anchor" href="#存储引擎选择" aria-hidden="true">#</a> 存储引擎选择</h2>
<p><code>在选择存储引擎时，应该根据应用系统的特点选择合适的存储引擎。对于复杂的应用系统,还可以根据实际情况选择多种存储引擎进行组</code></p>
<blockquote>
<p>InnoDB:是MySQL的默认存储引擎，支持事务、外键。如果应用对事务的完整性有比较高的要求，在并发条件下要求数据的一致性，数据操作除了插入和查询之外，还包含很多的更新、删除操作，那么InnoDB存储引擎是比较合适的选择。</p>
<p>MyISAM:如果应用是以读操作和插入操作为主，只有很少的更新和删除操作，并且对事务的完整性、并发性要求不是很高，那么选择这个存储引擎是非常合适的。</p>
<p>MEMORY:将所有数据保存在内存中，访问速度快，通常用于临时表及缓存。MEMORY的缺陷就是对表的大小有限制，太大的表无法缓存在内存中,而且无法保障数据的安全性。</p>
</blockquote>
<h1 id="mysql8-0-26-linux版下载和配置" tabindex="-1"><a class="header-anchor" href="#mysql8-0-26-linux版下载和配置" aria-hidden="true">#</a> MySQL8.0.26-Linux版下载和配置</h1>
<h2 id="_1-准备一台linux服务器" tabindex="-1"><a class="header-anchor" href="#_1-准备一台linux服务器" aria-hidden="true">#</a> 1. 准备一台Linux服务器</h2>
<p>云服务器或者虚拟机都可以;</p>
<p>Linux的版本为 CentOS7;</p>
<h2 id="_2-下载linux版mysql安装包" tabindex="-1"><a class="header-anchor" href="#_2-下载linux版mysql安装包" aria-hidden="true">#</a> 2. 下载Linux版MySQL安装包</h2>
<p>https://downloads.mysql.com/archives/community/</p>
<p><img src="/imgs/intro/image-20211031230239760.png" alt="image-20211031230239760"></p>
<h2 id="_3-上传mysql安装包" tabindex="-1"><a class="header-anchor" href="#_3-上传mysql安装包" aria-hidden="true">#</a> 3. 上传MySQL安装包</h2>
<p><img src="/imgs/intro/image-20211031231930205.png" alt="image-20211031231930205"></p>
<h2 id="_4-解压压缩包" tabindex="-1"><a class="header-anchor" href="#_4-解压压缩包" aria-hidden="true">#</a> 4. 解压压缩包</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -xvf mysql-8.0.26-1.el7.x86_64.rpm-bundle.tar -C mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5-创建mysql目录并进入目录" tabindex="-1"><a class="header-anchor" href="#_5-创建mysql目录并进入目录" aria-hidden="true">#</a> 5.创建mysql目录并进入目录</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir mysql

cd mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_6-安装mysql的配置包" tabindex="-1"><a class="header-anchor" href="#_6-安装mysql的配置包" aria-hidden="true">#</a> 6.安装mysql的配置包</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rpm -ivh mysql-community-common-8.0.26-1.el7.x86_64.rpm 

rpm -ivh mysql-community-client-plugins-8.0.26-1.el7.x86_64.rpm 

rpm -ivh mysql-community-libs-8.0.26-1.el7.x86_64.rpm 

rpm -ivh mysql-community-libs-compat-8.0.26-1.el7.x86_64.rpm

rpm -ivh  mysql-community-devel-8.0.26-1.el7.x86_64.rpm

rpm -ivh mysql-community-client-8.0.26-1.el7.x86_64.rpm

rpm -ivh  mysql-community-server-8.0.26-1.el7.x86_64.rpm

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>注意可能出现的错误</code>：</p>
<p>错误1：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>错误：can't create 事务 lock on /var/lib/rpm/.rpm.lock (权限不够)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>解决办法:进入root(超级管理员)
su root
输入超级管理员密码
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>错误2：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>错误：mariadb-libs 被 mysql-community-libs-8.0.26-1.el7.x86_64 取代
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>解决办法：rpm -e mariadb-libs --nodeps
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>错误3：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>错误：pkgconfig(openssl) 被 mysql-community-devel-8.0.26-1.el7.x86_64 需要
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>解决办法：yum install openssl-devel
一直输入y回车
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_7-启动mysql服务" tabindex="-1"><a class="header-anchor" href="#_7-启动mysql服务" aria-hidden="true">#</a> 7. 启动MySQL服务</h2>
<p>启动</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>停止</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_8-查询自动生成的root用户密码" tabindex="-1"><a class="header-anchor" href="#_8-查询自动生成的root用户密码" aria-hidden="true">#</a> 8. 查询自动生成的root用户密码</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>grep 'temporary password' /var/log/mysqld.log

注意：密码是随机生成的
root@localhost:后面的就是随机生成的密码

A temporary password is generated for root@localhost: dw+pBs/Jf5:#
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>命令行执行指令 :</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后输入上述查询到的自动生成的密码, 完成登录 .</p>
<p>注意:	这里如果登录不成功可以重启MySQL然后再登录</p>
<h2 id="_9-修改root用户密码" tabindex="-1"><a class="header-anchor" href="#_9-修改root用户密码" aria-hidden="true">#</a> 9. 修改root用户密码</h2>
<p>登录到MySQL之后，需要将自动生成的不便记忆的密码修改了，修改成自己熟悉的便于记忆的密码。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ALTER  USER  'root'@'localhost'  IDENTIFIED BY '1234';
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行上述的SQL会报错，原因是因为设置的密码太简单，密码复杂度不够。我们可以设置密码的复杂度为简单类型，密码长度为4。</p>
<p>注意：</p>
<p>set global validate_password.policy = 0;	指的是密码复杂类型，0是最低等级</p>
<p>set global validate_password.length = 4;	指的是密码的长度</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>set global validate_password.policy = 0;
set global validate_password.length = 4;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>降低密码的校验规则之后，再次执行上述修改密码的指令。</p>
<h2 id="_10-创建用户" tabindex="-1"><a class="header-anchor" href="#_10-创建用户" aria-hidden="true">#</a> 10. 创建用户</h2>
<p>默认的root用户只能当前节点localhost访问，是无法远程访问的，我们还需要创建一个root账户，用户远程访问</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>create user 'root'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_11-并给root用户分配权限" tabindex="-1"><a class="header-anchor" href="#_11-并给root用户分配权限" aria-hidden="true">#</a> 11. 并给root用户分配权限</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>grant all on *.* to 'root'@'%';
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_12-重新连接mysql" tabindex="-1"><a class="header-anchor" href="#_12-重新连接mysql" aria-hidden="true">#</a> 12. 重新连接MySQL</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后输入密码</p>
<h2 id="_13-通过datagrip远程连接linux系统的mysql" tabindex="-1"><a class="header-anchor" href="#_13-通过datagrip远程连接linux系统的mysql" aria-hidden="true">#</a> 13.通过DataGrip远程连接Linux系统的MySQL</h2>
<p><code>注意如果没有开发Linux的3306端口是连接不上的</code></p>
<h3 id="步骤如下" tabindex="-1"><a class="header-anchor" href="#步骤如下" aria-hidden="true">#</a> <strong>步骤如下：</strong></h3>
<p>1、在VMware Workstation启动linux系统；</p>
<p>2、打开linux系统的防火墙：应用程序-&gt;杂项-&gt;防火墙；</p>
<p>3、在<a href="https://so.csdn.net/so/search?q=%E9%98%B2%E7%81%AB%E5%A2%99%E9%85%8D%E7%BD%AE&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">防火墙配置<ExternalLinkIcon/></a>中：选择public-&gt;端口-&gt;添加-&gt;端口/端口范围输入3306；协议选择tcp-&gt;确定；</p>
<p><img src="/imgs/intro/3243.png" alt="img"></p>
<p>4、在linux终端中输入: ifconfig -a，找到linux的IP地址，复制该IP地址；</p>
<p><img src="/imgs/intro/3244.png" alt="img"></p>
<p>5、打开DataGrip，按图片中依次点击：</p>
<p><img src="/imgs/intro/3245.png" alt="img"></p>
<p>6、将下图中红框部分换成第4步中找到的IP地址，并且在User和Password中分别输入linux中MySQL的用户名和密码；</p>
<p><img src="/imgs/intro/3246.png" alt="img"></p>
<p><img src="/imgs/intro/3247.png" alt="img"></p>
<p>7、填写完毕后，点击Test Connection，如果出现绿色的对勾，说明连接成功了。</p>
<p><img src="/imgs/intro/3248.png" alt="img"></p>
<h1 id="mysql8-0-26-linux版卸载" tabindex="-1"><a class="header-anchor" href="#mysql8-0-26-linux版卸载" aria-hidden="true">#</a> MySQL8.0.26-Linux版卸载</h1>
<p>停止MySQL服务</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查询MySQL的安装文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rpm -qa | grep -i mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="/imgs/intro/image-20211031233522877.png" alt="image-20211031233522877"></p>
<p>卸载上述查询出来的所有的MySQL安装包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rpm -e mysql-community-client-plugins-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-server-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-common-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-libs-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-client-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-libs-compat-8.0.26-1.el7.x86_64 --nodeps
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>删除MySQL的数据存放目录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rm -rf /var/lib/mysql/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>删除MySQL的配置文件备份</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rm -rf /etc/my.cnf.rpmsave
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h1>
<p>介绍:</p>
<blockquote>
<p>索引(index)是帮助MySQL<code>高效获取数据的数据结构(有序)</code>。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。</p>
</blockquote>
<p>优缺点:</p>
<table>
<thead>
<tr>
<th>优势</th>
<th>劣势</th>
</tr>
</thead>
<tbody>
<tr>
<td>提高数据检索的效率，降低数据库的IO成本</td>
<td>索引列也是要占用空间的。</td>
</tr>
<tr>
<td>通过索引列对数据进行排序，降低数据排序的成本，降低CPU的消耗。</td>
<td>索引大大提高了查询效率，同时却也降低更新表的速度，如对表进行INSERT、UPDATE、DELETE时，效率降低。</td>
</tr>
</tbody>
</table>
<h2 id="索引结构" tabindex="-1"><a class="header-anchor" href="#索引结构" aria-hidden="true">#</a> 索引结构</h2>
<blockquote>
<p>MySQL的索引是在存储引擎层实现的，不同的存储引擎有不同的结构，主要包含以下几种:</p>
</blockquote>
<table>
<thead>
<tr>
<th>索引结构</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>B+Tree索引</td>
<td><code>最常见的索引类型，大部分引擎都支持B+树索引</code></td>
</tr>
<tr>
<td>Hash索引</td>
<td>底层数据结构是用哈希表实现的,只有精确匹配索引列的查询才有效,不支持范围查询</td>
</tr>
<tr>
<td>R-tree(空间索引)</td>
<td>空间索引是MylSAM引擎的一个特殊索引类型，主要用于地理空间数据类型，通常使用较少</td>
</tr>
<tr>
<td>Full-text(全文索引)</td>
<td>是一种通过建立倒排索引,快速匹配文档的方式。类似于Lucene,Solr,ES</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>索引</th>
<th>lnnoDB</th>
<th>MylSAM</th>
<th>Memory</th>
</tr>
</thead>
<tbody>
<tr>
<td>B+tree索引</td>
<td>支持</td>
<td>支持</td>
<td>支持</td>
</tr>
<tr>
<td>Hash 索引</td>
<td>不支持</td>
<td>不支持</td>
<td>支持</td>
</tr>
<tr>
<td>R-tree索引</td>
<td>不支持</td>
<td>支持</td>
<td>不支持</td>
</tr>
<tr>
<td>Full-text</td>
<td>5.6版本之后支持</td>
<td>支持</td>
<td>不支持</td>
</tr>
</tbody>
</table>
<p><code>我们平常所说的索引，如果没有特别指明，都是指B+树结构组织的索引。</code></p>
<h2 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h2>
<p><code>二叉树缺点∶顺序插入时，会形成一个链表，查询性能大大降低。大数据量情况下，层级较深，检索速度慢。</code></p>
<h3 id="b-tree" tabindex="-1"><a class="header-anchor" href="#b-tree" aria-hidden="true">#</a> B-Tree</h3>
<p><img src="/imgs/intro/image-20230322110017634.png" alt="image-20230322110017634"></p>
<p><code>一个父节点两个子节点，左边子节点的比父节点小，右边的子节点比父节点大</code></p>
<p><code>注意：每个节点最多存储4个key，5个指针。以一颗max-degree(最大度数)为5阶的b-tree为例，它最多有5个子节点，5个子节点就有5个指针，有5个子节点就有4个key</code>。</p>
<blockquote>
<p>这里的key(20,30,,62,89)</p>
<p>超过5阶会发生裂变，叫中间元素向上分裂</p>
<p>数据图形显示网站:	http://www.rmboot.com/</p>
</blockquote>
<h3 id="b-tree-1" tabindex="-1"><a class="header-anchor" href="#b-tree-1" aria-hidden="true">#</a> B+Tree</h3>
<p><img src="/imgs/intro/image-20230322113122442.png" alt="image-20230322113122442"></p>
<blockquote>
<p>特点：</p>
<p>​			●	存储数据的是叶子节点</p>
<p>​			●	所有的数据都会出现在叶子节点</p>
<p>​			●	存储数据的叶子节点是一个单向链表结构</p>
</blockquote>
<blockquote>
<p>MySQL索引数据结构对经典的B+Tree进行了优化。在原B+Tree的基础上，增加一个指向相邻叶子节点的链表指针，就形成了带有顺序指针的B+Tree，提高区间访问的性能。</p>
</blockquote>
<h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> Hash</h2>
<p>简介：</p>
<blockquote>
<p>哈希索引就是采用一定的hash算法，将键值换算成新的hash值，映射到对应的槽位上，然后存储在hash表中。</p>
<p>如果两个(或多个)键值，映射到一个相同的槽位上，他们就产生了hash冲突（也称为hash碰撞〉，可以通过链表来解决。</p>
</blockquote>
<h3 id="hash索引的特点" tabindex="-1"><a class="header-anchor" href="#hash索引的特点" aria-hidden="true">#</a> Hash索引的特点</h3>
<blockquote>
<ol>
<li>
<p>Hash索引只能用于对等比较(=，in)，不支持范围查询（between， &gt;,&lt;,...)</p>
</li>
<li>
<p>无法利用索引完成排序操作</p>
</li>
<li>
<p>查询效率高，通常只需要一次检索就可以了，效率通常要高于B+tree索引</p>
<p>●	存储引擎支持</p>
<p>在MySQL中，支持hash索引的是Memory引擎，而InnoDB中具有自适应hash功能，hash索引是存储引擎根据B+ Tree索引在指定条件下自动构建的。</p>
</li>
</ol>
</blockquote>
<h2 id="为什么innodb存储引擎选择使用b-tree索引结构" tabindex="-1"><a class="header-anchor" href="#为什么innodb存储引擎选择使用b-tree索引结构" aria-hidden="true">#</a> 为什么InnoDB存储引擎选择使用B+tree索引结构?</h2>
<blockquote>
<p>相对于二叉树，层级更少，搜索效率高;</p>
<p>对于B-tree，无论是叶子节点还是非叶子节点，都会保存数据，这样导致一页中存储的键值减少，指针跟着减少，要同样保存大量数据，只能增加树的高度，导致性能降低;</p>
<p>相对Hash索引，B+tree支持范围匹配及排序操作;</p>
</blockquote>
<h2 id="索引分类" tabindex="-1"><a class="header-anchor" href="#索引分类" aria-hidden="true">#</a> 索引分类</h2>
<table>
<thead>
<tr>
<th>分类</th>
<th>含义</th>
<th>特点</th>
<th>关键字</th>
</tr>
</thead>
<tbody>
<tr>
<td>主键索引</td>
<td>针对于表中主键创建的索引</td>
<td>默认自动创建,只能有一个</td>
<td>PRIMARY</td>
</tr>
<tr>
<td>唯一索引</td>
<td>避免同一个表中某数据列中的值重复</td>
<td>可以有多个</td>
<td>UNIQUE</td>
</tr>
<tr>
<td>常规索引</td>
<td>快速定位特定数据</td>
<td>可以有多个</td>
<td></td>
</tr>
<tr>
<td>全文索引</td>
<td>全文索引查找的是文本中的关键词，而不是比较索引中的值</td>
<td>可以有多个</td>
<td>FULLTEXT</td>
</tr>
</tbody>
</table>
<p>在lnnoDB存储引擎中，根据索引的存储形式，又可以分为以下两种:</p>
<table>
<thead>
<tr>
<th>分类</th>
<th>含义</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>聚集索引(Clustered Index)</td>
<td>将数据存储与索引放到了一块，索引结构的叶子节点保存了行数据</td>
<td>必须有,而且只有一个</td>
</tr>
<tr>
<td>二级索引(Secondary Index)</td>
<td>将数据与索引分开存储，索引结构的叶子节点关联的是对应的主键</td>
<td>可以存在多个</td>
</tr>
</tbody>
</table>
<p><code>聚集索引选取规则:</code></p>
<blockquote>
<p>如果存在主键，主键索引就是聚集索引。</p>
<p>如果不存在主键，将使用第一个唯一（UNIQUE）索引作为聚集索引。</p>
<p>如果表没有主键，或没有合适的唯一索引，则InnoDB会自动生成一个rowid作为隐藏的聚集索引。</p>
</blockquote>
<hr>
<p><code>聚集索引:	存储的是一行数据</code></p>
<p><code>二级索引:	存储的是对应行数据的id值</code></p>
<p><code>回表查询：先通过查询二级索引的id值，在回到聚合索引根据id值来查询行数据</code></p>
<p><img src="/imgs/intro/image-20230322185940072.png" alt="image-20230322185940072"></p>
<h2 id="索引语法" tabindex="-1"><a class="header-anchor" href="#索引语法" aria-hidden="true">#</a> 索引语法</h2>
<p>创建索引</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE [UNIQUE|FULLTEXT] INDEX index_name ON table_name ( index_col_nam....);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看索引</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW INDEX FROM table_name;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>删除索引</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP INDEX index_name ON table_name;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
