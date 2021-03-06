// фиксированное меню
class Nav {
  constructor(selector) {
    this.$elem = document.querySelector(selector)
    // костыль
    this.indentTop = document.querySelector("header").clientHeight
    this.elemHeight = this.$elem.clientHeight
    this.$menuIco = document.querySelector("img.hamburger-menu")
    this.$menu = document.querySelector(".menu")
  }

  fixedOnTop() {
    this.$elem.style.position = "fixed"
    this.$elem.style.top = "0px"
    this.$elem.style.width = "100%"
    this.$elem.nextSibling.nextSibling.style.marginTop = this.elemHeight + "px"
  }

   basePos() {
    this.$elem.style.position = "static"
    this.$elem.nextSibling.nextSibling.style.marginTop = ""
  }

  // showMobileMenu() {
  //   this.$menuIco.addEventListener("click", () => {
  //     console.log("I pressed")
  //   })
  // }
}

const navMenu = new Nav("nav")

window.addEventListener("click", (ev) => {
  let isShow;
  if (ev.target === navMenu.$menuIco && !isShow) {
    navMenu.$menu.style.display = "flex"
    navMenu.$menu.style.right = "10px"
    isShow = true;
  } else if (ev.target !== navMenu.$menuIco) {
    navMenu.$menu.style.right = "-160px"
    navMenu.$menu.style.flex = "none"
    isShow = false;
  }
})

window.addEventListener("scroll", () => {
  if ( scrollY >= navMenu.indentTop) {
    navMenu.fixedOnTop()
  } else {
    navMenu.basePos()
    
  }
})



// появление элементов слева/справа
class Box {
  constructor(selector) {
    this.$elem = document.querySelector(selector)
    this.finishPos = false
  }

  leftOutsideAppearance() {
    this.finishPos = true;
    this.$elem.style.transition = "left 1.5s ease";
    this.$elem.style.position = "relative"
    this.$elem.style.left = "-51%"
    setTimeout(() => {
      this.$elem.style.left = "0"
    }, 300)
  }

  rightOutsideAppearance() {
    this.finishPos = true;
    this.$elem.style.transition = "right 1.5s ease";
    this.$elem.style.position = "relative"
    this.$elem.style.right = "-51%"
    setTimeout(() => {
      this.$elem.style.right = "0"
    }, 300)
  }
}

const aboutImg = new Box(".what-i-do img")
const aboutInfo = new Box(".what-i-do__info")

window.addEventListener("scroll", () => {
  console.log()
  if (document.querySelector("header").getBoundingClientRect().y <= 0 && !aboutImg.finishPos) {
    aboutImg.leftOutsideAppearance()
    aboutInfo.rightOutsideAppearance()
  }
})


