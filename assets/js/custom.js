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

    $('.mobile-menu-btn-show').click(function () {
        $('#mobile-menu').css({ 'transform': 'translateX(0%)' });
        $('.mobile-overlay').css({ 'display': 'block' });
    });
    $('.mobile-menu-btn-hide').click(function () {
        $('#mobile-menu').css({ 'transform': 'translateX(100%)' });
        $('.mobile-overlay').css({ 'display': 'none' });
    });
    $('.mobile-overlay').click(function () {
        $('#mobile-menu').css({ 'transform': 'translateX(100%)' });
        $(this).css({ 'display': 'none' });
    });


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

    $(function () {
        $('input[id="date-picker"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            maxYear: parseInt(moment().format('YYYY'), 10)
        }, function (start, end, label) {
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


    $('.drawer-show').click(function () {
        $('.drawer-modal').addClass('drawer-modal-open').css({ 'transform': 'translateX(0%)' });
        $('.drawer-overlay').css({ 'display': 'block' });
    });
    $('.drawer-hide').click(function () {
        $('.drawer-modal').removeClass('drawer-modal-open').css({ 'transform': 'translateX(100%)' });
        $('.drawer-overlay').css({ 'display': 'none' });
    });
    $('.drawer-overlay').click(function () {
        $('.drawer-modal').removeClass('drawer-modal-open').css({ 'transform': 'translateX(100%)' });
        $(this).css({ 'display': 'none' });
    });

    $('.filter-show').click(function () {
        $('.filter-modal').addClass('filter-modal-open').css({ 'transform': 'translateX(0%)' });
        $('.filter-overlay').css({ 'display': 'block' });
    });
    $('.filter-hide').click(function () {
        $('.filter-modal').removeClass('filter-modal-open').css({ 'transform': 'translateX(100%)' });
        $('.filter-overlay').css({ 'display': 'none' });
    });
    $('.filter-overlay').click(function () {
        $('.filter-modal').removeClass('filter-modal-open').css({ 'transform': 'translateX(100%)' });
        $(this).css({ 'display': 'none' });
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



    //   var ctx = document.getElementById("myChart");
    //   var myChart = new Chart(ctx, {
    //       type: 'pie',
    //       data: {
    //           labels: ['Qualified' , 'Not Qualified' , 'Pending'],
    //           datasets: [{
    //               label: 'Amount',
    //               claims : ['#13' , '#23' , '#21'],
    //               data: [70 ,10 , 20],
    //               backgroundColor: [
    //                 'rgb(255, 99, 132)',
    //                 'rgb(54, 162, 235)',
    //                 'rgb(255, 205, 86)'
    //               ],
    //               borderColor: [
    //                 'rgb(255, 99, 132)',
    //                 'rgb(54, 162, 235)',
    //                 'rgb(255, 205, 86)'
    //               ],
    //               borderWidth: 1
    //           },
    //           ]
    //       },
    //       options: {
    //           responsive: true,
    //           maintainAspectRatio: false,
    //           legend: {
    //               display: true
    //           },
    //       }
    //   });

    


    // Get the canvas element and create a context
var ctx = document.getElementById('myChart').getContext('2d');

// Define the data for the chart
var data = {
  labels: ['Qualified', 'Unqualified', 'Pending'],
  datasets: [{
    data: [2000, 3000, 4000],
    backgroundColor: ['rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)']
  }]
};

// Define the options for the chart
var options = {
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        var label = data.labels[tooltipItem.index];
        var value = data.datasets[0].data[tooltipItem.index];
        var claims = '#' + [20, 30, 40][tooltipItem.index];
        return label + ': $' + value + ' (' + claims + ' claims)' + '\n';
      },
      labelColor: function(tooltipItem, chart) {
        return {
          backgroundColor: data.datasets[0].backgroundColor[tooltipItem.index]
        };
      }
    },
    backgroundColor: 'black',
    multiKeyBackground: 'black'
  }
};

// Create the chart object
var myChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
});


    
    var ctx = document.getElementById("bin-chart");
    var bin_chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['BIN', 'PCN', 'Group'],
            datasets: [{
                label: 'Amount',
                data: [70, 10, 20],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                borderWidth: 1
            },
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
