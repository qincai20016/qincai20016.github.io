// 引入单品模板
var itemTpl = require('../tpl/item.string');

// 定义一个视图
SPA.defineView('item', {
  // 将模板写在body里
  html: itemTpl,

//插入列表
  plugins: [
    'delegated',
    {
    	name:"avalon",
    	options:function(vm){
    		vm.itemList=[];
    	}
    }
  ],
	
	// 给视图定义公共的属性和方法
  init: {
    formatArray: function (arr) {
      var newArr = [];
      for(var i = 0; i < Math.ceil(arr.length/2); i++){
        newArr[i] = [];
        newArr[i][0] = arr[2*i];
        newArr[i][1] = arr[2*i+1];
      }
      return newArr;
    },

    // 定义视图公共的item-List-swiper对象
    //<div class="swiper-container" id="item-List-swiper">
    myHomeHotSwiper: null,

    // 定义视图公共的item swiper对象
    //myHomeSwiper: null
    
  },
	
  bindActions: {
    'tap.hot.slide': function (e) {
      // 获得视图公共的item hot swiper, 跳转到某个slider
      //分类-单品-自营  三个tab 间的 点击跳转 (没有这个的话，只能滑动跳转)
      this.myHomeHotSwiper.slideTo($(e.el).index());
    }
  },
  
   bindEvents: {
    show: function () {
      // 保存视图对象
      var that = this;
      
      //获得avalon 的vm
      var vm =that.getVM();
      
      
      //第一次渲染数据
      $.ajax({
      	url:"/FetishSeason/mock/item.json",
        success:function(res){
          vm.itemList = that.formatArray(res.data);
        }
      });

      // 定义item-List-swiper，注意这里的that.mySwiper
      //分类-单品-自营  三个tab 间的 (滑动跳转和样式高亮)
      that.myHomeHotSwiper = new Swiper('#item-List-swiper', {
        loop: false,
        onSlideChangeStart: function () {
          $('#item-nav li').eq(that.myHomeHotSwiper.activeIndex).addClass('active').siblings().removeClass('active');
        }
      });
	
	
	
    }
  }
});