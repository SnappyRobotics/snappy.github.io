(function($) {

  $.fn.slider = function() {
    this.css({
      width: 600,
      height: 600
    })

    this.append(
      $("<div/>")
      .addClass("viewer")
    )
    this.viewer = this.find('.viewer')

    this.append(
      $("<div/>")
      .addClass("top_viewer")
    )
    this.top_viewer = this.find('.top_viewer')

    this.append(
      $("<div/>")
      .addClass("bottom_viewer")
    )
    this.bottom_viewer = this.find('.bottom_viewer')
    this.imgs = this.find(".imgs");
    this.ind = 0;

    this.scroll = function(delay) {
      this.ind++;

      if (this.ind == this.imgs.length) {
        this.ind = 0;
      }

      this.set(this.ind)

      var that = this
      setTimeout(function() {
        that.scroll(delay)
      }, delay)

      return this
    }

    this.set = function(ind) {
      this.viewer.empty()

      this.top_viewer.empty()
      this.bottom_viewer.empty()
      $(this.imgs[ind]).appendTo(this.viewer)

      if (ind < this.imgs.length - 1) {
        $(this.imgs[ind + 1]).appendTo(this.bottom_viewer)
      }

      if (ind != 0) {
        $(this.imgs[ind - 1]).appendTo(this.top_viewer)
      }

      this.ind = ind
      return this
    }
    this.set(0)
    return this;
  };

}(jQuery));
