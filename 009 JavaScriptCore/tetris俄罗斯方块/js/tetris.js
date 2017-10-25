/**
 * Created by XM-web on 2017/4/26.
 */
let game={
    RN:20,CN:10,//总行数，列数
    //pg属性保存游戏主界面div
    pg:document.getElementsByClassName("playground")[0],
    //保存格子大小和内边距偏移量
    CSIZE:26, OFFSET:15,
    shape:null,//保存主角图形
    interval:200,//下落的时间间隔
    timer:null,//保存定时器序号
    //保存所有停止下落的方块的二维数组墙
    wall:null,
    //启动游戏
    start(){
        //创建空数组保存在wall中
        this.wall=[];
        //在wall中生成10*20的二维数组
        for(var r=0;r<this.RN;r++){
            //向wall中压入一个10个空元素的子数组
            this.wall.push(new Array(10));
        }
        //创建主角图形
        this.shape=new T();//O//I
        this.paint();//重绘一切
        //启动周期性定时器
        this.timer=setInterval(
            //this.moveDown.bind(this)
            ()=>this.moveDown()
            ,
            this.interval
        );
        //为页面添加键盘按下事件
        document.onkeydown=function(e){
            switch(e.keyCode){
                case 37: //左
                    this.moveLeft();
                    break;
                case 39: //右
                    this.moveRight();
                    break;
                case 40: //下
                    this.moveDown();
                    break;
                case 32:
                    this.hardDrop();
                    break;
            }
        }.bind(this);//用start中正确的this代替事件处理函数中不想要的this
    },
    //一落到底
    hardDrop(){
        //只要可以下落,就反复调用movedown()
        while(this.canDown())
        this.moveDown()
    },
    //判断能否左移
    canLeft(){
        //遍历shape中cells中每个cell
        for(var cell of this.shape.cells){
            //如果cell的c等于0
            if(cell.c===0)
                return false;//返回false
            //否则，如果wall中cell左侧不是空
            else if(
                this.wall[cell.r][cell.c-1]
                !==undefined)
                return false;//返回false
        }//(遍历结束)
        return true;//返回true
    },
    //左移
    moveLeft(){
        //如果可以左移
        if(this.canLeft())
        //让shape左移一次
            this.shape.moveLeft();
    },
    //判断能否右移
    canRight(){
    //遍历shape中cells中每个cell
        for(var cell of this.shape.cells){
            //如果cell的c等于0
            if(cell.c===9)
                return false;//返回false
            //否则，如果wall中cell右侧不是空
            else if (this.wall[cell.r][cell.c+1]!==undefined)
                return false;//返回false
        }//for
        return true;
    },//canRight
    //右移
    moveRight(){
        if(this.canRight())
        //让shape右移一次
            this.shape.moveRight();
    },
    //判断主角能否下落
    canDown(){
        //遍历主角的cells中每个cell
        for(var cell of this.shape.cells){
            //只要当前cell的r==RN-1
            if(cell.r===this.RN-1)
                return false;//就返回false
            //否则,如果wall中，当前cell的下方有格
            else if(
                this.wall[cell.r+1][cell.c]
                !==undefined)
                return false;//也返回false
        }//(遍历结束)
        return true;//就返回true
    },
    //将停止下落的图形中的每个格放入wall中
    landIntoWall(){
        //遍历shape的cells中每个cell
        for(var cell of this.shape.cells)
            //将当前cell，放入wall中相同位置
            this.wall[cell.r][cell.c]=cell;
    },
    //下落
    moveDown(){
        if(this.canDown()){
            //让主角图形下落
            this.shape.moveDown();
        }else{
            //将当前shape的四个格，放入墙中
            this.landIntoWall();
            //删除所有满格行
            this.deleteRows();
            //生成新的shape
            this.shape=new T();
        }
        //重绘一切
        this.paint();
    },
    //检查并删除所有满格行
    deleteRows(){
        //自底向上遍历wall中每一行
        for(var r=this.RN-1,ln=0;r>=0;r--){
            //如果当前行是空行
            if (this.wall[r].join("")==="")
                break;//退出循环
            //否则,如果是满格行
            else if (this.isFullRow(r)){
                //删除当前行
                this.deleteRow(r);
                r++;//r留在原地
                //如果已经删除了4行,则不必再向上检查
                if (++ln===4) break;
            }
        }
        return ln;
    },
    //判断第r行是否满格
    isFullRow(r){
        //为wall中第r行拍照
        var str=String(this.wall[r]);
        //定义正则查找开头的,或,,或结尾的,
        var reg=/^,|,,|,$/g;
        //如果没找到,就返回true
        if(str.search(reg)===-1)
            return true;
        else//否则返回false
            return false;
        },
    //删除第r行
    deleteRow(r){
        //自r行开始向上遍历wall中每一行
        for(;r>0;r--){
            //将wall中r-1行赋值个r行
            this.wall[r]=this.wall[r-1];
            //将wall中r-1行暂时置为空行
            this.wall[r-1]=new Array(this.CN);
            //遍历wall中r行每个格
            for(var cell of this.wall[r]){
            //如果当前格不为空
            if(cell!==undefined)
                cell.r++;//将当前格的r+1
        }//遍历结束
        //如果r-2行为空行
    if (this.wall[r-2].join("")==="")
        break;//退出循环
        }
    },
    //重绘一切
    paint(){
        //删除pg中所有img
        this.pg.innerHTML=
            this.pg.innerHTML.replace(
                /<img .*>/g,""
            );
        //绘制主角图形
        this.paintShape();
        //绘制墙
        this.paintWall();
    },
    //重绘墙
    paintWall(){
        //创建frag
        var frag=document.createDocumentFragment();
        //自底向上遍历wall中每一行
        for(var r=this.RN-1;r>=0;r--) {
            //如果当前行不是空行
            if(this.wall[r].join("")!==""){
                //遍历当前行中每个格
                for(var cell of this.wall[r]){
                    //如果当前格不是空
                    if(cell!==undefined){
                        //创建img
                        var img=new Image();
                        //设置img的style的cssText
                        img.style.cssText=
                            `width:${this.CSIZE}px;
            top:${
                            this.CSIZE*cell.r+this.OFFSET
                                }px;
            left:${
                            this.CSIZE*cell.c+this.OFFSET
                                }px`;
                        //设置img的src
                        img.src=cell.src;
                        //将img加入frag
                        frag.appendChild(img);
                    }
                }
            }else break;//否则 退出循环
        }//(遍历结束)
        //将frag加入pg
        this.pg.appendChild(frag);
    },
    //绘制主角图形
    paintShape(){
        //创建文档片段
        var frag=document.createDocumentFragment();
        //遍历主角图形的cells数组中每个cell
        for(var cell of this.shape.cells){
            //创建一个img元素
            var img=new Image();
            //设置img的width,top,left,src
            img.style.cssText=
                `width:${this.CSIZE}px;
         top:${
                this.CSIZE*cell.r+this.OFFSET
                    }px;
         left:${
                this.CSIZE*cell.c+this.OFFSET
                    }px`;
            img.src=cell.src;
            frag.appendChild(img);
        }
        //将frag追加到pg中
        this.pg.appendChild(frag);
    }
};
game.start();

