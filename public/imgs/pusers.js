module.exports={
  "list":{
    columnMetaData:[
      {"width":"100","label":"应用","prop":"app.name","isShowTip":true,"isTmpl":false},
      {"width":"100","label":"头像","name":"null","isShowTip":false,"isTmpl":true,"isBtns":false},
      {"width":"100","label":"昵称","prop":"nickName","isShowTip":true,"isTmpl":false},
      {"width":"100","label":"性别","prop":"sex","isShowTip":true,"isTmpl":false},
      {"width":"150","label":"地区","prop":"from","isShowTip":true,"isTmpl":false},
      {"width":"80","label":"状态","prop":"isEnabled","isShowTip":true,"isTmpl":false},
      {"width":"200","label":"唯一标识","prop":"unionId","isShowTip":true,"isTmpl":false},
      {"width":"null","label":"操作","name":"null","isShowTip":false,"isTmpl":true,"isBtns":true},
    ]
  },
  "form":[
    {
      "title":"昵称",
       ctls:[
         {"type":"input","label":"昵称","prop":"nickName","placeHolder":"昵称","style":""},
       ]
    },
  ],
  "search":[
    {
      "title":"应用",
       ctls:[
         {"type":"select","refModel":"app","label":"应用","prop":"app_id","labelField":"name","valueField":"id","style":""},
       ]
    },
    {
      "title":"昵称",
       ctls:[
         {"type":"input","label":"昵称","prop":"nickName","placeHolder":"请输入昵称","style":""},
       ]
    },

  ],
  "auth":{
    "add":[
      {"icon":"el-icon-plus","title":"新增","type":"default","key":"new","isOnGrid":true},
      {"icon":"el-icon-save","title":"保存","type":"default","key":"save","isOnForm":true},
    ],
    "edit":[
      {"icon":"el-icon-edit","title":"修改","type":"default","key":"edit","isInRow":true},

    ],
    "delete":[
      {"icon":"el-icon-remove","title":"删除","type":"default","key":"delete","isInRow":true},
      {"icon":"el-icon-edit","title":"停用","type":"default","key":"stopUser","isInRow":true,"boolProp":"isEnabled","falseText":"启用"},

    ],
    "common":[
      {"icon":"el-icon-cancel","title":"取消","type":"default","key":"cancel","isOnForm":true},
    ],
  }
}