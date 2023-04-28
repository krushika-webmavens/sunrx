if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

var themeToggleDarkIcon = document.getElementById(
    "theme-toggle-dark-icon"
);
var themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon"
);

// Change the icons inside the button based on previous settings
if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    themeToggleLightIcon.classList.remove("hidden");
} else {
    themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }
    }
});

$(document).ready(function ($) {

    $('.nav-link').hover(function () {
        $(this).addClass('nav-link-active')
        $('.sub-menu').addClass('sub-menu-open');
    }, function () {
        $('.sub-menu').removeClass('sub-menu-open');
        $(this).removeClass('nav-link-active')
    });

    $('.sub-menu li').hover(function () {
        $(this).addClass('sub-menu-li-active')
        $('.inner-sub-menu').addClass('inner-sub-menu-open');
    }, function () {
        $('.inner-sub-menu').removeClass('inner-sub-menu-open');
        $(this).removeClass('sub-menu-li-active')
    });

    $('.mobile-nav-link a').click(function () {
        $(this).siblings('.mobile-sub-menu').addClass('mobile-sub-menu-open').slideToggle();
    })

    $('.mobile-sub-menu li a').click(function () {
        $(this).siblings('.mobile-inner-sub-menu').slideToggle();
    })

    $('.mobile-menu-btn').click(function () {
        $('#mobile-menu').slideToggle();
    })


    $('.profile-btn').click(function (e) {
        e.preventDefault();
        $('.profile-list').toggle();
    })
    $(document).on("click", function (event) {
        var $trigger = $(".profile-btn");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".profile-list").hide();
        }
    });


    $(function () {

        var start = moment().subtract(29, 'days');
        var end = moment();

        function cb(start, end) {
            $('#reportrange span').html(start.format('D MMMM YYYY') + ' - ' + end.format('D MMMM YYYY'));
        }

        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
        }, cb);

        cb(start, end);

    });

    $(function() {
        $('input[id="date-picker"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          maxYear: parseInt(moment().format('YYYY'),10)
        }, function(start, end, label) {
          var years = moment().diff(start, 'years');
        });
      });



    $('.dropdown-btn').click(function () {
        $('.dropdown-list').hide();
        $(this).siblings('.dropdown-list').toggle();
    });

    $('.dropdown-list li').on('click', function (e) {
        e.preventDefault();
        $(".dropdown-list li").removeClass("select");
        $(this).closest('li').addClass('select');
        dropdown_val = jQuery(this).html();
        console.log(dropdown_val);
        $(this).parent('.dropdown-list').siblings('.dropdown-btn').children('button').children('.dropdown-content').html(dropdown_val)
        $('.dropdown-list').toggle();
    });
    $(document).on("click", function (event) {
        var $trigger = $(".dropdown-btn");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".dropdown-list").hide();
        }
    });



    $('.modal-toogle').on('click', function (e) {
        e.preventDefault();
        $('.modal-overlay').toggleClass('overlay-visible');
        $('.modal').toggleClass('is-visible');;
      });


      $('.drawer-show').click(function () {
        $('.drawer-modal').addClass('drawer-modal-open').css({ 'transform': 'translateX(0%)' });
        $('.drawer-overlay').css({ 'display': 'block' });
      });
      $('.drawer-hide').click(function () {
        $('.drawer-modal').removeClass('drawer-modal-open').css({ 'transform': 'translateX(100%)' });
        $('.drawer-overlay').css({ 'display': 'none' });
      });

      $('.filter-show').click(function () {
        $('.filter-modal').addClass('filter-modal-open').css({ 'transform': 'translateX(0%)' });
        $('.filter-overlay').css({ 'display': 'block' });
      });
      $('.filter-hide').click(function () {
        $('.filter-modal').removeClass('filter-modal-open').css({ 'transform': 'translateX(100%)' });
        $('.filter-overlay').css({ 'display': 'none' });
      });




      $('.filter-dropdown-btn').click(function () {
        $('.filter-dropdown-list').hide();
        $(this).siblings('.filter-dropdown-list').toggle();
      });
    
      $('.filter-dropdown-list li').on('click', function (e) {
        e.preventDefault();
        $(".filter-dropdown-list li").removeClass("select");
        $(this).closest('li').addClass('select');
        first_val = jQuery(this).html();
        console.log(first_val);
        $(this).parent('.filter-dropdown-list').siblings('.filter-dropdown-btn').children('button').children('.dropdown-content').html(first_val)
        $('.filter-dropdown-list').toggle();
      });
      $(document).on("click", function (event) {
        var $trigger = $(".filter-dropdown-btn");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
          $(".filter-dropdown-list").hide();
        }
      });


      //chart



      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Sanofi', 'Novartis', 'Eli Lily', 'AbbVie', 'Wintrop', 'Janssen', 'Merck','Wintrop', 'Janssen', 'Merck'],
              datasets: [{
                  label: 'AUBURN PHARMACY',
                  data: [10, 70, 30, 80, 40, 10, 30,40, 10, 30],
                  backgroundColor: [
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                  ],
                  borderColor: [
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                      'rgba(42 , 76 ,189 , 1)',
                  ],
                  borderWidth: 1
              },
              {
                label: 'AUBURN PHARMACY',
                data: [100, 60, 70, 85, 50, 90, 40,30, 10, 20],
                backgroundColor: [
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                ],
                borderColor: [
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'AUBURN PHARMACY',
                data: [20, 10, 50, 80, 60, 80, 40,20, 10, 90],
                backgroundColor: [
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                ],
                borderColor: [
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                ],
                borderWidth: 1
            },
              {
                label: 'AUBURN PHARMACY',
                data: [10, 70, 30, 80, 40, 10, 30,40, 10, 30],
                backgroundColor: [
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                ],
                borderColor: [
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                    'rgba(42 , 76 ,189 , 1)',
                ],
                borderWidth: 1
            },
              {
                  label: 'BRIOVARX',
                  data: [20, 50, 30, 20, 30, 10, 90, 40, 10, 30],
                  backgroundColor: [
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                  ],
                  borderColor: [
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                      'rgba(23,102,186,1)',
                  ],
                  borderWidth: 1
              },
              {
                  label: 'OPTUM PHARMACY 701',
                  data: [30, 20, 30, 75, 20, 20, 35, 40, 10, 30],
                  backgroundColor: [
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                  ],
                  borderColor: [
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                      'rgba(25,170,221,1)',
                  ],
                  borderWidth: 1
              },
              {
                  label: 'OPTUM PHARMACY 705',
                  data: [50, 90, 50, 55, 20, 35, 10, 40, 10, 30],
                  backgroundColor: [
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                  ],
                  borderColor: [
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                      'rgba(26,201,230,1)',
                  ],
                  borderWidth: 1
              }
              ]
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                  display: true
              },
          }
      });
})
