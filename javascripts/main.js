$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('.bs-docs-sidenav').affix({
    offset: {
      top: 50
    , bottom: function () {
        return (this.bottom = $('#comments').outerHeight(true) + $('#footer').outerHeight(true))
      }
    }
});