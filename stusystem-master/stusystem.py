import os
import pymysql  #数据库中间件
import pandas as pd #第三方库
import matplotlib.pyplot as plt
#解决matplotlib不显示数据的问题
plt.rcParams['font.family'] = 'SimHei'  # 设置字体为中文字体
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题
#链接本地数据库
conn =pymysql.connect(
    user="root",
    password="dizao06",
    host="localhost",
    database="student",
    port=3306,
)
#创建数据库实例
cursor=conn.cursor()



isClose='' #判断是否关闭了excel

#菜单
def main():
    while True: #无限循环
        menu()  #调用菜单
        choice = int(input('请选择:'))  #收集用户的选择，针对用户的选择针对下列的数组进行对应
        if choice in [0, 1, 2, 3, 4, 5, 6, 7,8,9]:  #如果是数组中的某一个值，则运行对应的函数
            if choice == 0:         #0为退出循环，否则则会无限执行下去
                answer = input('您确定要退出系统吗?y/n')  #收集用户的输入
                if answer == 'y' or answer == 'Y':
                    export() #在程序关闭的情况下自动导出excel
                    if isClose == False:
                        break
                        conn.close()  #关闭数据库链接
                        print('谢谢您的使用')
                        break  # 退出系统
                else:
                    continue
            elif choice == 1:
                insert()  # 录入学生信息
            elif choice == 2:
                search()  # 查找学生信息
            elif choice == 3:
                delete()  # 删除学生信息
            elif choice == 4:
                modify()  # 修改学生信息
            elif choice == 5:
                sort()  # 学生成绩排名
            elif choice == 6:
                total()  # 统计学生总人数
            elif choice == 7:
                show()  # 显示全部学生信息
            elif choice == 8:
                export()
            elif choice == 9:
                matp()

#菜单展示
def menu():
    print('======================学生信息管理系统========================')
    print('----------------------功能菜单------------------------------')
    print('\t\t\t\t\t1.录入学生信息')
    print('\t\t\t\t\t2.查找学生信息')
    print('\t\t\t\t\t3.删除学生信息')
    print('\t\t\t\t\t4.修改学生信息')
    print('\t\t\t\t\t5.排序')
    print('\t\t\t\t\t6.统计学生总人数')
    print('\t\t\t\t\t7.显示所有学生信息')
    print('\t\t\t\t\t8.导出数据为EXCEL')
    print('\t\t\t\t\t9.绘制图标')
    print('\t\t\t\t\t0.退出')
    print('----------------------------------------------------------')







# 录入
def insert():
    while True:
        while True:
            #这里循环输入学生的基本信息，如果没有输入，则会提示信息，重新输入
            id = int(input('请输入ID(如1001):'))
            if not id:
                print("学号不能为空")
            elif cursor.execute("SELECT * FROM score3 where Sno=%s",(id,)):
                #判断数据库中身为主键的学号是否存在，存在则无法录取
                    print("学号已存在，请检查学号是否正确")
                    cursor.execute("SELECT * FROM score3 where Sno=%s", (id,))
                    test()
            break
        while True:
            name = input('请输入姓名:') #姓名也一样
            if not name:
                print("学生姓名不能为空，请重新输入")
            else:
                break
        while True:
            sex = input('性别:')  # 姓名也一样
            if not sex:
                print("学生性别不能为空，请重新输入")
            else:
                break
        while True:
            age = int(input('年龄:')) #姓名也一样
            if not age:
                print("学生年龄不能为空，请重新输入")
            else:
                break
        try:
            #这里尝试输入成绩，如果没有输入，则默认为0不会提示重新输入
            C = int(input('请输入c语言成绩:')or 0)
            python = int(input('请输入python成绩:')or 0)
            java = int(input('请输入java成绩:')or 0)
        except:
            print('输入无效,不是整数类型,请重新输入')
            continue
        # 将录入的学生信息保存到数据库中
        cursor.execute("insert into score3(Sno,Name,Age,Sex,PyScore,JvScore,CScore) values (%s,%s,%s,%s,%s,%s,%s)", (id,name,age,sex,python,java,C))

        # 将学生信息添加到列表中
        answer = input('是否继续添加?y/n\n')
        if answer == 'y' or answer == 'Y':
            continue
        else:
            conn.commit()
            print('学生信息录入完毕!!!!')
            break



#查询
def search():
        while True:
            #初始化
            id=''
            name=''
            mode = input('按 ID 查找请输入 1，按姓名查找请输入 2:')
            if mode == '1':
                id = int(input("请输入学生 ID:"))
            elif mode == '2':
                name = input('请输入学生姓名：')
            else:
                print('您的输入有误，请重新输入！!!')
                break
                #根据选择的方法执行不同的查询方式
            if id != '':
                cursor.execute("SELECT * FROM score3 WHERE Sno=%s", (id,))
            elif name != '':
                cursor.execute("SELECT * FROM score3 WHERE Name=%s",(name,))
            else:
                print('请输入有效的查询条件')
            rows = cursor.fetchall() #拿到查询的结果
            for row in rows:
                #展示查询结果
                print(f"学号：{row[0]}\t姓名：{row[1]}\t年龄：{row[2]}\t性别：{row[3]}\tPython成绩：{row[4]}\tJava成绩：{row[5]}\tC成绩：{row[6]}")
            answer = input('是否继续查询？y/n\n')
            if answer == 'y':
                continue
            else:
                break




#删除
def delete():
    while True:
        id = input('请输入要删除的学生的 ID:') #学号为主键，所以只能使用删除学号的方式删除主键
        if id != '':
            if cursor.execute("SELECT * FROM score3 where Sno=%s",(id,)):
                cursor.execute("delete from score3 where Sno=%s",(id,))
                conn.commit()
                print("删除成功")
            else:
                print("学生不存在，请重新删除")
            show()
        break





#数据更新
def change(id,target,value):
    if target=="姓名" :
        cursor.execute("UPDATE score3 SET Name=%s WHERE Sno=%s;", (value,id,))
    if target=="年龄":
        value = int(value)
        cursor.execute("UPDATE score3 SET Age=%s WHERE Sno=%s;", (value, id,))
    if target=="性别":
        cursor.execute("UPDATE score3 SET Sex=%s WHERE Sno=%s;", (value, id,))
    if target=='Python成绩':
        value = int(value)
        cursor.execute("UPDATE score3 SET PyScore=%s WHERE Sno=%s;", (value, id,))
    if target=='Java成绩':
        value = int(value)
        cursor.execute("UPDATE score3 SET JvScore=%s WHERE Sno=%s;", (value, id,))
    if target=='C成绩':
        value = int(value)
        cursor.execute("UPDATE score3 SET CScore=%s WHERE Sno=%s;", (value, id,))
    test2()

# 修改学生信息
def modify():
    show()
    id=input("请输入你要修改学生的学号")
    if cursor.execute("SELECT * FROM score3 WHERE Sno=%s", (id,)):
        print("学生信息存在")
        cursor.execute("SELECT * FROM score3 WHERE Sno=%s", (id,))
        test()
        print("请输入你要修改学生的哪个类型，并且输入要修改的信息\n注意,学号作为主键无法修改，如果学号出现问题，请先删除学生信息，重新录入！！")
        target=input("请输入类型：")
        if target=="学号":
            print("学号作为主键不能修改！！！！")
            return
        value = input("请输入修改的值：")
        change(id,target,value) #调用更新方法
    else:
        print("学生信息不存在，请重新选择")

def test2():
    cursor.execute("SELECT * FROM score3")
    test()
def test():
    conn.commit()
    rows = cursor.fetchall()
    for row in rows:
        print(f"学号：{row[0]}\t姓名：{row[1]}\t年龄：{row[2]}\t性别：{row[3]}\tPython成绩：{row[4]}\tJava成绩：{row[5]}\tC成绩：{row[6]}\n")


#进行排序
def sort():
    select = input("请选择(0.学号排序  1.年龄排序 2.Python成绩排序 3.Java成绩排序 4.C成绩排序):")
    if select == '0':
        num=input("请输入1.升序2.降序")
        if num=='1':
            cursor.execute("SELECT * FROM score3 order by Sno")
        if num=='2':
            cursor.execute("SELECT * FROM score3 order by Sno desc ")
        test()
    elif select == '1':
        num = input("请输入1.升序2.降序")
        if num == '1':
            cursor.execute("SELECT * FROM score3 order by Age")
        if num == '2':
            cursor.execute("SELECT * FROM score3 order by  desc ")
        test()
    elif select == '2':
        num = input("请输入1.升序2.降序")
        if num == '1':
            cursor.execute("SELECT * FROM score3 order by PyScore")
        if num == '2':
            cursor.execute("SELECT * FROM score3 order by PyScore desc ")
        test()
    elif select == '3':
        num = input("请输入1.升序2.降序")
        if num == '1':
            cursor.execute("SELECT * FROM score3 order by JvScore")
        if num == '2':
            cursor.execute("SELECT * FROM score3 order by JvScore desc ")
        test()
    elif select == '4':
        num = input("请输入1.升序2.降序")
        if num == '1':
            cursor.execute("SELECT * FROM score3 order by CScore")
        if num == '2':
            cursor.execute("SELECT * FROM score3 order by CScore desc ")
        test()




#展示学生总人数
def total():
   cursor.execute("SELECT * FROM score3")
   rows = cursor.fetchall()
   print('学生总人数为',len(rows))

#导出为excel
def export():
    print('请确保输出的文件处于关闭状态！！')
    result= input("你确定你的文件处于关闭状态吗，请输入y or n \n")
    if result == 'y' or result == 'Y':
        try:
            cursor.execute("SELECT * FROM score3")
            mydf = pd.DataFrame(cursor.fetchall(), columns=[i[0] for i in cursor.description])
            mydf.to_excel("output.xlsx", index=False)
            print('存储完毕')
        except:
            print("输出文件没有关闭，请先关闭输出文件后再尝试")
            isClose = False
            return
    else:
        print("请先关闭文件")
        isClose=False

#展示数据，展示出来数据库里面全部的数据
def show():
    if cursor.execute("SELECT * FROM score3"):
        rows = cursor.fetchall()
        for row in rows:
            print(f"学号：{row[0]}\t姓名：{row[1]}\t年龄：{row[2]}\t性别：{row[3]}\tPython成绩：{row[4]}\tJava成绩：{row[5]}\tC成绩：{row[6]}\n")
    else:
        print("数据库中没有数据，请先添加")

#对excel数据进行绘图
def matp():
    print("请先保存为excel")
    export()  #调用存储excel方法
    #打开excel读取其中的数据
    file_name = 'output.xlsx'
    df = pd.read_excel(file_name)

    plt.figure(figsize=(5, 5))  # 设置图表大小
    plt.bar(df.index, df['CScore'], width=0.3, label='C')
    plt.bar(df.index + 0.3, df['PyScore'], width=0.3, label='Python')
    plt.bar(df.index + 0.6, df['JvScore'], width=0.3, label='Java')
    plt.title('学生成绩情况')  # 设置图表标题
    plt.xlabel('姓名')  # 设置X轴标签
    plt.ylabel('成绩')  # 设置Y轴标签
    x_labels = df['Name']
    plt.xticks(range(len(x_labels)), x_labels)
    plt.legend()  # 显示图例
    plt.show()





if __name__ == '__main__':
    main()  # 以主程序执行
