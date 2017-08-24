/**
 * Created by liuli on 2017.08 0004.
 */

var tree = [
    {
        text: "人事管理",
        link: "main_employee.html",
        nodes: [
            {
                text: "部门管理",
                link: "main_department.html",
                nodes: [
                    {
                        text: "技术部",
                        link: "main_employee2.html"
                    },
                    {
                        text: "市场部",
                        link: "main_employee3.html"
                    }
                ]
            },
            {
                text: "员工管理",
                link: "main_employee4.html"
            },
            {
                text: "角色管理",
                link: "main_employee5.html"
            },
            {
                text: "岗位管理",
                link: "main_employee6.html"
            },
            {
                text: "岗位说明书管理",
                link: "main_employee7.html"
            },
            {
                text: "指标库管理",
                link: "main_employee8.html"
            }
        ]
    },
    {
        text: "绩效考核",
        link: "main_employee9.html"
    },
    {
        text: "个人中心",
        link: "main_employee10.html"
    }
];


$('.tree').treeview({
    data: tree,
    showCheckbox: false,   //是否显示复选框
});
