//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  list:[
    {
    id:0,
    name:"🍎",
    value:"apple"
  },
  {
    id:1,
    name:"🍌",
    value:"banana"
  },
  {
    id:2,
    name:"🍇",
    value:"putao"
  }
],
checkedList:[]
   
  },
  handleItemChange(e){
    // console.log(e);
    const checkedList=e.detail.value;
    this.setData({  
      checkedList
    })

  }
})
