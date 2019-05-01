import $ from "jquery";

class StoryTransition {
  constructor() {
    this.aboutTriggers = $("[href|='#about']");
    this.introTriggers = $("[href|='#home']");
    this.clickAboutTriggers();
    this.clickIntroTriggers();
    //this.showIntro();
  }

  //------------make these one function tomorrow---------//
  clickAboutTriggers() {
    const that = this;
    this.aboutTriggers.each(function() {
      $(this).on("click", function() {
        //1. Hide existing stuff from screen
        //for now...
        that.slideAndHide($(".intro"), "up", () => {
          //2. Bring the text from bottom to top
          that.revealHidden($("#about"));
        });
        //3. If image is hidden, show it.
      });
    });
  }
  clickIntroTriggers() {
    const that = this;
    this.introTriggers.each(function() {
      $(this).on("click", function() {
        //1. Hide existing stuff from screen
        //for now...
        that.slideAndHide($("#about"), "down", () => {
          //2. Bring the text from top to bottom
          that.revealHidden($(".intro"));
        });
        //3. If image is hidden, show it.
      });
    });
  }
  slideAndHide(el, direction, callback) {
    //slide and do not display
    let margin = direction === "up" ? "-500px" : "500px";
    el.animate({ marginTop: margin, opacity: 0 }, 1000, () => {
      this.doNotDisplay(el);
      callback();
    });
  }
  hideDown(el, revealNext) {
    //slide
  }
  doNotDisplay(el) {
    el.addClass("not-displayed");
  }
  display(el) {
    el.removeClass("not-displayed");
  }
  revealHidden(el) {
    //1. Be displayed
    this.display(el);
    //2. Slide Up
    el.animate({ marginTop: "0", opacity: 1 }, 1000);
  }
  //that.showStory();
  //   $("#about").animate({ marginTop: "0" }, 1000);

  //   showStory() {
  //     $("#about").removeClass("not-displayed");
  //   }
  //   showIntro() {
  //     const that = this;
  //     this.introTriggers.each(function() {
  //       $(this).on("click", function() {
  //         //1. hide story
  //         $("#about").animate(
  //           { marginTop: "500px", opacity: 0 },
  //           1500,
  //           function() {
  //             $(this).addClass("not-displayed");
  //             //2.show the intro again
  //             $(".intro").removeClass("not-displayed");
  //             //3. return to its previous position
  //             $(".intro").animate({ marginTop: "0", opacity: 1 }, 1500);
  //           }
  //         );
  //       });
  //     });
  //   }
}

export default StoryTransition;
