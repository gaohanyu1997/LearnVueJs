const app = new Vue({
  el:"#app",
  data:{
    books:[{
      id: 1,
      name:"算法导论",
      date:"2020-06-01",
      price:85.00,
      count:1
    },{
      id: 2,
      name:"UNIX编程艺术",
      date:"2020-05-18",
      price:59.00,
      count:1
    },{
      id: 3,
      name:"编程技巧",
      date:"2021-10-01",
      price:39.00,
      count:1
    },{
      id: 4,
      name:"计算机原理",
      date:"2019-08-15",
      price:99.00,
      count:1
    }]
  },
  methods:{
    /*getFinalPrice(price){
      return '￥'+ price.toFixed(2);
    }*/
    increment(index){
      return this.books[index].count++;
    },
    decrement(index){
      return this.books[index].count--;
    },
    removeHandle(index){
      return this.books.splice(index,1)
    }
  },
  filters: {
    //过滤器
    showPrice(price) {
      return '￥'+ price.toFixed(2);
    }
  },
  computed: {
    //计算属性
    totalPrice() {
      //1 普通的for循环
      /*let totalPrice = 0;
      for(let i= 0;i< this.books.length; i++){
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;*/

      //2 for(let i in this.books)
      /*let totalPrice = 0;
      for(let i in this.books){
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;
      }*/

      //3 for(let i of this.books)
      /*let totalPrice = 0;
      for(let item of this.books){
        totalPrice += item.price * item.count;
      }
      return totalPrice;
      }*/

      //4 reduce
      return this.books.reduce(function (preValue,book) {
        return preValue + book.price * book.count
      },0)
    }
})

//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
// 1 需求：取出所有小于100的数字
/*let newNums = []
for(let n of nums){
  if(n < 100){
    newNums.push(n)
  }
}
//2 需求：将所有小于100的数字进行转化：全部*2
let numNums2 = []
for(let n of newNums){
  numNums2.push(newNums * 2)
}
//3 需求：将所有newNums2数字想加,得到最终的结果
let totalNum = 0;
for(let n of numNums2){
  totalNum += n
}*/

//filter/map/reduce
//filter中的回调函数有一个要求：必须返回一个boolean值
//true：当返回true时,函数内部会自动将这次回调的n加入到新的数组中
//false：放返回false时,函数内部会过滤掉这次的n
//const nums = [10,20,120,500,240,68]
// 1 filter函数的使用
//10,20,68
/*let newNums = nums.filter(function (n) {
  return n < 100;
})
console.log(newNums)

//2 map函数的使用
let newNums2 = newNums.map(function (n) {
  return n * 2
})
console.log(newNums2)

//3 reduce函数使用
//reduce作用对数组中所有的内容进行汇总
//10,20,68
let total = newNums2.reduce(function (preValue,n) {
  //return 100
  return preValue + n
},0)*/
// 第一次：preValue 0 n 10
// 第二次：preValue 10 n 20
// 第三次：preValue 30 n 68
//98

/*const nums = [10,20,120,500,240,68]
let total =nums.filter(function () {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (preValue,n) {
  return preValue + n
},0)*/
const nums = [10,20,120,500,240,68]
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total)

