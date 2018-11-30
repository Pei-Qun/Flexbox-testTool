var vm = new Vue({
  el: "#app",
  data: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    alignContent: "stretch",
    order: 0,
    alignSelf: "auto",
    boxW: '80px',
    val: {
      fd: ["row","column","row-reverse","column-reverse"],
      jc: ["flex-start","center","flex-end","space-around","space-between","space-evenly"],
      ai: ["flex-start","center","flex-end","stretch","baseline"],
      fw: ["nowrap","wrap","wrap-reverse"],
      ac: ["flex-start","flex-end","center","space-between","space-around","stretch"],
      as: ["auto","flex-start","flex-end","center","stretch"]
    },
    btnNum: 5,
    selfItem: 3,
  },
  computed: {
    flexCss(){
      return {
        "flex-direction": this.flexDirection,
        "justify-content": this.justifyContent,
        "align-items": this.alignItems,
        "flex-wrap": this.flexWrap,
        "align-content": this.alignContent,
      }
    },
    flexCssVal(){
      let str=`{
    flex-direction: ${this.flexDirection};
    justify-content ${this.justifyContent};
    align-items: ${this.alignItems};
    flex-wrap: ${this.flexWrap};
    align-content: ${this.alignContent};
}`
      return str;
    },
    boxCssVal(){
      let str=`{
    order: ${this.order};
    align-self: ${this.alignSelf};
}`
      return str;
    },
    columnOrnot(){
      if(this.flexDirection=='column' || this.flexDirection=='column-reverse'){return true}
    },
    reverseOrnot1(e){
      if(this.flexDirection=='row-reverse'){return true}
    },
    reverseOrnot2(e){
      if(this.flexDirection=='column-reverse'){return true}
    },
  },
  methods: {
    boxClick(i){
      this.selfItem = i;
      $('.selfchange').addClass('active');
      let func = ()=>$('.selfchange').removeClass('active')
      setTimeout(func,300)
    },
    reset(e){
      if(e=='container'){
        this.flexDirection= "row";
        this.justifyContent= "flex-start";
        this.alignItems= "flex-start";
        this.flexWrap= "nowrap";
        this.alignContent= "stretch";
      }else if(e=='box'){
        this.order= 0;
        this.alignSelf= "auto";
      }
    },
  }
})