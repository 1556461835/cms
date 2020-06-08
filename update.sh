###
 # @Author: your name
 # @Date: 2020-06-08 14:31:00
 # @LastEditTime: 2020-06-08 15:14:14
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: \iem-web-projectd:\个人工具网站\www_admin_master\updata.sh
### 
# git pull origin master
# git add .
# git commit -m '更新'
# git push origin master
msg=$1
if [ -n "$msg" ]; then
   git add -A
   git commit -m"${msg}"
   git pull
   git status
   echo "完成add、commit、pull，别忘了push"
else
    echo "请添加注释再来一遍"
fi