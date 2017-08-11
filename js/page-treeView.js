/**
 * Created by liuli on 2017.08 0004.
 */

var tree = [
    {
        text: "人事管理",
        nodes: [
            {
                text: "部门管理",
                nodes: [
                    {
                        text: "技术部"
                    },
                    {
                        text: "市场部"
                    }
                ]
            },
            {
                text: "员工管理"
            },
            {
                text: "角色管理"
            },
            {
                text: "岗位管理"
            },
            {
                text: "岗位说明书管理"
            },
            {
                text: "指标库管理"
            }
        ]
    },
    {
        text: "绩效考核"
    },
    {
        text: "个人中心"
    }
];


$('.tree').treeview({
    data: tree,
    showCheckbox: true,   //是否显示复选框
});