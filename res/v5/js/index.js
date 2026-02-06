//////////////////////////////////////////////////////////////////
/**
 * @package DuyThinhV5 (tester)
 * @author Phung Duy Thinh <www.facebok.com/thinhem.ic>
 * @note soi cai gi vay em
 * @description Not every source code, when upgraded to a new version, needs to resemble the old version or be necessarily more aesthetically pleasing than previous versions, it simply marks the version of the new source code
 */
//////////////////////////////////////////////////////////////////
/**
 * Commence the initialization of the backend framework.
 */
$(function() {
    Wstoast.config({
        autoClose: true,
        showClose: true,
        html: true
    })
let WsLoaded = false; 
const messages = [
    { message: 'Đang tải tài nguyên...', delay: 0 },
    { message: 'Đang tải các plugins...', delay: 6000 },
    { message: 'Chờ xíu sắp tải xong...', delay: 15000 },
    { message: 'Cố gắng lên sắp xong rùi nè -.-', delay: 25000 }
];
messages.forEach(msg => {
    setTimeout(() => {
        if (!WsLoaded) {
            Wstoast.closeAll();
            WsToast('loading', msg.message);
        }
    }, msg.delay);
});
    function WsToast(type, message) {
        switch (type) {
            case 'error':
                Wstoast.error(message);
                break;
            case 'success':
                Wstoast.success(message);
                break;
            case 'info':
                Wstoast.info(message);
                break;
            case 'loading':
                Wstoast.loading(message);
                break;
            default:
                console.error('error toast');
        }
    }
    $('.promo-close').jBox('Tooltip',{closeOnClick: true,closeOnEsc: true});
    $(".promo-close").click(function() {
        $(".promo-content").slideUp("slow");
        $(".promo-content").removeClass("active");
        WsToast('info', 'Đã ẩn trong 1 tiếng!');
        document.cookie = "HideNotifyDuyThinhV5=true; expires=" + new Date(new Date().getTime() + (1 * 60 * 60 * 1000)).toUTCString() + "; path=/";
    });
    if (GetCookie("HideNotifyDuyThinhV5") === "true") {
        $(".promo-content").hide(); 
    } else {
        $(".promo-content").addClass("active").slideDown("slow");
    }
    /**
     * Frame FPS inspection area.
     */
    if (null == window.localStorage.getItem("fpson") || "1" == window.localStorage.getItem("fpson")) {
        var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            },
            Frame = 0,
            AllFrameCount = 0,
            LastTime = Date.now(),
            LastFameTime = Date.now(),
            loop = function() {
                var e = Date.now(),
                    a = e - LastFameTime,
                    o = Math.round(1e3 / a);
                if (LastFameTime = e, AllFrameCount++, Frame++, e > 1e3 + LastTime) {
                    var o = Math.round(1e3 * Frame / (e - LastTime));
                    var color;
                    var n = Message(o); 
                    if (o >= 120) {
                        color = '#00c78f'; // Máy Khoẻ
                    } else if (o <= 5) {
                        color = '#c70000'; // Lag Nổ Máy
                    } else if (o <= 10) {
                        color = 'red'; // Siêu Lag
                    } else if (o <= 15) {
                        color = 'red'; // Quá Lag
                    } else if (o <= 25) {
                        color = 'orange'; // Khó Chịu
                    } else if (o < 35) {
                        color = '#9338e6'; // Không Mượt Lắm
                    } else if (o <= 45) {
                        color = '#f51698'; // Tạm Ổn
                    } else if (o <= 55) {
                        color = '#068c18'; // Ổn Định
                    } else if (o >= 80 && o <= 120) {
                        color = '#c70000'; // Mượt Quá
                    } else {
                        color = '#009e45'; // Bình Thường
                    }
                    var fps_color = `<span style="color:${color}">${o}</span>`;
                    var n_color = `<span style="color:${color}">${n}</span>`;
                    $("#fps").html(`<font>FPS<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="position:relative;top:-1.2px;margin:0;padding:0" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                  </svg>${fps_color}</font>`);
                    Frame = 0;
                    LastTime = e;
                }
                rAF(loop)
            };
        loop()
    } else $("#fps").css("display", "none!important");
    
    function Message(FPS) {
        if (FPS >= 120) {
            return 'Máy Khoẻ😛';
        } else if (FPS <= 5) {
            return 'Lag Nổ Máy🤢';
        } else if (FPS <= 10) {
            return 'Siêu Lag😭';
        } else if (FPS <= 15) {
            return 'Quá Lag😖';
        } else if (FPS <= 25) {
            return 'Khó Chịu😨';
        } else if (FPS < 35) {
            return 'Không Mượt Lắm🙄';
        } else if (FPS <= 45) {
            return 'Tạm Ổn😧';
        } else if (FPS <= 55) {
            return 'Ổn Định😁';
        } else if (FPS >= 80 && FPS <= 120) {
            return 'Mượt Quá😘';
        } else {
            return 'Bình Thường😂';
        }
    }
    
    /**
     * Type Text.
     */
    var usernames = $('#userName').data('username');
    if (usernames) {
        new Typed('#userName', {
            strings: usernames,
            typeSpeed: 60,
            loop: true
        });
    } else {
        Wstoast.error('Username is undefined or null');
    }

    /**
     * Khởi Tạo Chế Độ Destroy
     */
    var inceptionLevel = 1,
        offsetLevel = 0;
    var lastRandomX = -1;
    var lastRandomY = -1;

    function OpenWindowError() {
        if (offsetLevel > 12222) { // Reset destroy nếu vượt quá giới hạn
            offsetLevel = 0;
        }
        var randomX, randomY;
        do {
            randomX = Math.floor(Math.random() * ($(document).width() - 360));
            randomY = Math.floor(Math.random() * ($(document).height() - 200));
        } while (randomX === lastRandomX && randomY === lastRandomY);

        lastRandomX = randomX;
        lastRandomY = randomY;
        new jBox("Modal", {
            width: 360,
            addClass: "inception-modal",
            overlayClass: "inception-overlay",
            zIndex: "auto",
            draggable: "title",
            closeOnClick: 'overlay',
            closeButton: "title",
            blockScroll: true,
            title: "Chế Độ Destroy " + inceptionLevel++,
            offset: {
                x: randomX,
                y: randomY
            },
            content: '<p>Error Code 0x00000' + Math.floor(Math.random() * 99999) + '</p>',
            onCreated: function() {
                this.tooltip = new jBox("Tooltip", {
                    theme: "TooltipBorder",
                    attach: "[data-inception-tooltip]",
                    getContent: "data-inception-tooltip",
                    zIndex: "auto",
                    delayOpen: 100
                });
            },
            onCloseComplete: function() {
                this.destroy();
                if (this.tooltip) {
                    this.tooltip.destroy();
                }
            },
            onOpen: function() {
                setTimeout(OpenWindowError, Math.floor(Math.random() * (200 - 10 + 1)) + 10);
            }
        }).open();
        offsetLevel++;
    }

    function WindowErrorSound() {
        const w = ["./res/v5/files/audio/window-error.mp3", ];
        let i = Math.floor(Math.random() * w.length);
        const a = new Audio(w[i]);

        function p() {
            a.play()
        }
        document.addEventListener("click", p()), a.addEventListener("ended", function() {
            i = (i + 1) % w.length, a.src = w[i], a.play()
        });
    }
    var c = ['./res/v5/img/crown/mong-vuot-rong.png', './res/v5/img/crown/vip-crown.png'];
    var r = Math.floor(Math.random() * c.length); 
    var d = c[r];
    $('.crown').attr('src', d);
    if (r > 0) {
        $('.crown').removeClass('crown').addClass('crown' + (r + 1)); 
    }
    // Count Love Days
    class TimeLove {
        constructor() {
            this.init();
        }
        init() {
            // Format 01/01/2000 đếm ngày yêu
            var common_time_rela = $('[data-ngayyeu]').attr('data-ngayyeu').split(/-|\/|:/);
            if (common_time_rela.length !== 3 || isNaN(common_time_rela[0]) || isNaN(common_time_rela[1]) || isNaN(common_time_rela[2])) {
                Wstoast.closeAll();
                WsToast('error', 'Định dạng thời gian sai!');
            }
            this.day = parseInt(common_time_rela[0], 10);
            this.month = parseInt(common_time_rela[1], 10) - 1;
            this.year = parseInt(common_time_rela[2], 10);
            this.update();
            setInterval(this.update.bind(this), 1000);
        }

        update() {
            var TimeRela = new Date() - new Date(this.year, this.month, this.day);
            var seconds = Math.floor((TimeRela / 1000) % 60);
            var minutes = Math.floor((TimeRela / 1000 / 60) % 60);
            var hours = Math.floor((TimeRela / (1000 * 60 * 60)) % 24);
            var days = Math.floor(TimeRela / (1000 * 60 * 60 * 24));
            seconds = seconds < 10 ? '0' + seconds : seconds;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            hours = hours < 10 ? '0' + hours : hours;
            days = days < 10 ? '0' + days : days;
            $('#day').text(days);
            $('#hours').text(hours);
            $('#minute').text(minutes);
            $('#seconds').text(seconds);
        }
    }
    //  $('#td-lovedays').hide();
    //- @Xử Lý Hiện Profile & Đếm Ngày Yêu Thông Qua Cookie -//
    if (GetCookie("LoveDaysVisible") == "true") {
        $('#td-lovedays').show();
        $('.td-content').hide();
    } else {
        $('#td-lovedays').hide();
        $('.td-content').show();
    }
    var icon = $('.mode-loveday').find('i');
    if (GetCookie("IconState") == "home") {
        icon.removeClass('ri-heart-2-line').addClass('ri-home-line');
    } else {
        icon.removeClass('ri-home-line').addClass('ri-heart-2-line');
    }
    //- @Xử Lý Chế Độ PROFILE & ĐẾM NGÀY YÊU -//
    $('.mode-loveday').click(function() {
        var icon = $(this).find('i');
        if (icon.hasClass('ri-heart-2-line')) {
            document.cookie = "IconState=home; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            Wstoast.closeAll();
            WsToast('info', 'Đã chuyển chế độ đếm ngày yêu');
            icon.removeClass('ri-heart-2-line').addClass('ri-home-line');
            document.cookie = "LoveDaysVisible=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        } else {
            document.cookie = "IconState=heart; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            Wstoast.closeAll();
            WsToast('info', 'Đã chuyển về chế độ profile');
            icon.removeClass('ri-home-line').addClass('ri-heart-2-line');
            document.cookie = "LoveDaysVisible=false; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        }
        $('.td-content').slideToggle();
        $('#td-lovedays').slideToggle();
    });
    //- @Mở & Ẩn Màn Hình Khoá -//
    $('.td-lock-screen').click(function() {
        $('.td-welcome').slideUp('slow');
        $('.td-lock-screen').animate({
            opacity: 0
        }, 'slow').css('pointer-events', 'none');
    });

    //- @Ấn Hoặc Vuốt Sẽ Ẩn Màn Hình Khoá -//
    $(document).on('swiperight', function() {
        $('.td-welcome').slideDown('slow');
        $('.td-lock-screen').animate({
            opacity: 1
        }, 'fast').css('pointer-events', 'auto');
    });

    $(document).on('swipeleft', function() {
        $('.td-welcome').slideUp('slow');
        $('.td-lock-screen').animate({
            opacity: 0
        }, 'slow').css('pointer-events', 'none');
    });

    $(document).on("visibilitychange", function() {
        if (!document.hidden) {
            setTimeout(function() {
                var scrollPos = $(window).scrollTop();
                var windowHeight = $(window).height();
                var documentHeight = $(document).height();
                var scrollPercentage = (scrollPos / (documentHeight - windowHeight)) * 100;

                if (scrollPos === 0) {
                    $('.td-welcome').slideDown('slow');
                    $('.td-lock-screen').animate({
                        opacity: 1
                    }, 'fast').css('pointer-events', 'auto');
                }

                if (scrollPercentage === 100) {
                    $('.td-welcome').slideUp('slow');
                    $('.td-lock-screen').animate({
                        opacity: 0
                    }, 'slow').css('pointer-events', 'none');
                }
            }, 200);
        }
    });
    //- @Activite Menu -//
    if (GetCookie("SettingPanelShown") !== "true") {
        $("#SettingPanel").addClass("open"); // Tự động mở bảng setting nếu trong 1 ngày họ vào trang web lần đầu tiên
        document.cookie = "SettingPanelShown=true; max-age=" + (60 * 60 * 24) + "; path=/";
    }
    //- @Nhấn Để Mở Menu Setting -//
    $(".toggle").click(function() {
        $("#SettingPanel").toggleClass("open");
    });
    //- ==@ Nhấn Bất Kì Ở Đâu Để Đóng Menu Setting @== -//
    $(document).mouseup(function(e) {
        var container = $("#SettingPanel");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass("open");
        }
    });
    //- @Change Background -//
    if (GetCookie("background-theme")) {
        $("body").css("background-image", "url(" + GetCookie("background-theme") + ")");
        $(".nk-opt-item.active").removeClass("active");
        $(".nk-opt-item[data-bg='" + GetCookie("background-theme") + "']").addClass("active");
    } else {
        var DefaultBg = $(".nk-opt-item[data-bg]:eq(0)").data("bg"); // Chọn Background Mặc Định (eq tức chọn ảnh nào là mặc định 0->4)
        $("body").css("background-image", "url(" + DefaultBg + ")");
        $(".nk-opt-item.active").removeClass("active");
        $(".nk-opt-item[data-bg='" + DefaultBg + "']").addClass("active");
        document.cookie = "background-theme=" + DefaultBg;
    }
    $(".nk-opt-set").on("click", ".nk-opt-item[data-bg]", function() {
        var $nkOptSet = $(this).closest(".nk-opt-set");
        $nkOptSet.find(".nk-opt-item[data-bg].active").removeClass("active");
        $(this).addClass("active");
        $("body").css("background-image", "url(" + $(this).data("bg") + ")");
        document.cookie = "background-theme=" + $(this).data("bg");
    });
    //- @Mode Destroy -//
    $(".nk-opt-set").on("click", ".nk-opt-item[data-mode]", function() {
        var mode = $(this).data("mode");
        if (mode === "DisableDestroy") {
            $(".nk-opt-item[data-mode='EnableDestroy']").removeClass("active");
            $(this).addClass("active");
            $("#main-container2").fadeOut(2000);
            $("#main-container").delay(2000).fadeIn(2000);
        } else if (mode === "EnableDestroy") {
            function A() {
                for (i = 0; i < DIL; i++)(DIS = DI[i].style).position = "absolute", DIS.left = Math.sin(R * x1 + i * x2 + x3) * x4 + x5 + "px", DIS.top = Math.cos(R * y1 + i * y2 + y3) * y4 + y5 + "px";
                R++
            }
            R = 0, x1 = .1, y1 = .05, x2 = .25, y2 = .24, x3 = 1.6, y3 = .24, x4 = 10, y4 = 10, x5 = 0, y5 = 0, DIL = (DI = document.getElementsByTagName("img")).length, setInterval(A, 5);
            OpenWindowError();
            WindowErrorSound()
            $("#SettingPanel").hide();
            $(".nk-opt-item[data-mode='DisableDestroy']").removeClass("active");
            $(this).addClass("active");
            $("#main-container").fadeOut(2000);
            $("#main-container2").delay(2000).fadeIn(2000);
        }
    });
    //- @Theme Menu -//
    $(".nk-opt-item[data-update]").click(function() {
        var UpdateMode = $(this).data("update");
        $(".nk-opt-item[data-update]").removeClass("active");
        $(this).addClass("active");
        if (UpdateMode === "dark-mode") {
            $(".nk-demo-panel").addClass("dark-mode");
            $(".nk-demo-panel").attr("style", "background:#101924!important;color:#b6c6e3");
            $(".loading-bg").addClass("dark-loader");
            document.cookie = "theme-mode=dark";
        } else if (UpdateMode === "light-mode") {
            $(".nk-demo-panel").removeClass("dark-mode");
            $(".nk-demo-panel").removeAttr("style");
            $(".loading-bg").removeClass("dark-loader");
            document.cookie = "theme-mode=light";
        }
    });
    //- ==@ Thay Đổi Giao Diện Profile @== -//
    $(".change-skin").click(function() {
        if ($('html').hasClass('dark')) {
            $('html').removeClass('dark');
            document.cookie = "theme-skin=light";
            $('.theme-icon').removeClass('ni-moon').addClass('ni-sun');
            $('.ws-loader-text').css('color', 'var(--bs-emphasis-color)!important'); 
        } else {
            $('html').addClass('dark');
            document.cookie = "theme-skin=dark";
            $('.theme-icon').removeClass('ni-sun').addClass('ni-moon');
            $('.ws-loader-text').css('color', 'rgba(var(--text-color-meta), 1)!important'); 
        }
    });
        if (GetCookie("theme-skin") === "dark") {
            $('html').addClass('dark');
            $('.theme-icon').removeClass('ni-sun').addClass('ni-moon');
            $('.ws-loader-text').css('color', 'rgba(var(--text-color-meta), 1)!important');
        } else {
            $('html').removeClass('dark');
            $('.theme-icon').removeClass('ni-moon').addClass('ni-sun');
            $('.ws-loader-text').css('color', 'var(--bs-emphasis-color)!important');
        }
    
    if (GetCookie("theme-skin") === "dark") {
        $('html').addClass('dark');
        $('.theme-icon').removeClass('ni-sun').addClass('ni-moon');
    } else {
        $('html').removeClass('dark');
        $('.theme-icon').removeClass('ni-moon').addClass('ni-sun');
    }
    //- @Cookie Theme Menu-//
    if (GetCookie("theme-mode") === "dark") {
        $(".nk-opt-item[data-update='dark-mode']").click();
    } else {
        $(".nk-opt-item[data-update='light-mode']").click();
    }
    $(".setting-site").click(function(event) {
        event.stopPropagation();
        $("#nav").toggleClass("hide");
        $("#share_card").addClass("td-popup_on");
    });

    $(".close-nav").click(function() {
        $("#nav").addClass("hide");
        $("#share_card").addClass("td-popup_on");
    });
    //- ==@ Sài ToolTip Của jBox @== -//
    new jBox('Tooltip', {
        attach: '.td_copy',
        trigger: 'mouseenter',
        content: $(this).attr('title'),
        position: {
            x: 'center',
            y: 'bottom'
        }
    });
    $(".td_copy").on("click touchend", function() {
        var textarea = $("<textarea>")
            .val($(this).text().trim())
            .css({
                position: "fixed",
                top: 0,
                left: 0,
                opacity: 0
            })
            .appendTo("body");
        textarea[0].focus();
        textarea[0].select();
        try {
            var successful = document.execCommand("copy");
            var message = successful ? "Đã sao chép liên kết" : "Không thể sao chép liên kết.";
            if (successful) {
                WsToast('success', message);
            } else {
                WsToast('error', message);
            }
        } catch (err) {
            WsToast('error', 'Không thể sao chép liên kết.');
        }

        textarea.remove();
    });

    //- @Chuyển Hướng Trong Data-Href-//
    class Redirection {
        constructor(href) {
            this.href = encodeURIComponent(href);
        }
        RedirectClick() {
            window.open(decodeURIComponent(this.href), '_blank'); // Sài window.open thay cho window.location.href, nếu muốn sài thì cứ thay.
        }
    }
    $('.link-item').click(function(e) {
        e.preventDefault();
        new Redirection($(this).attr('data-href')).RedirectClick();
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.td-popup').length && !$(event.target).is('.setting-site')) {
            $("#nav").addClass("hide");
            $("#share_card").removeClass("td-popup_on").addClass("td-popup_off");
        }
    });
    //- @Hàm Lấy Cookie-//
    function GetCookie(name) {
        var cookieArr = document.cookie.split(";");
        for (var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            if (name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }
    //- @Click To Full Screen -//
    $(".full-screen").on("click", function() {
        var elem = document.documentElement;
        if (fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled) {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                    /* Firefox */
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                    /* Chrome, Safari & Opera */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    /* IE/Edge */
                    elem.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    /* Chrome, Safari & Opera */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    /* IE/Edge */
                    document.msExitFullscreen();
                }
            }
        } else {
            WsToast('error', 'Trình duyệt không hỗ trợ chế độ này.');
        }
    });
    //- @Music Play-//
    GetCookie('WsPlayMusic') && new Audio(GetCookie('WsPlayMusic')).addEventListener('canplay', function() {this.play();});
    class MusicPlayer {
        constructor() {
            this.u = "";
            this.a = null;
            this.l = true;
            this.n = null;
            this.te = null;
            this.tt = "";
            this.initials = {};
            $(".music_menu_list li").each((index, element) => {
                const url = $(element).attr("url");
                const title = $(element).find(".title").text();
                this.initials[url] = title;
            });
            $(".music_menu_list li").click(this.MusicPlay.bind(this));
        }

        MusicPlay(event) {
            $(".music_menu_list li").removeClass("selected");
            $(event.currentTarget).addClass("selected");
            const u = $(event.currentTarget).attr("url");
            Wstoast.closeAll();
            if (u) {
                let t = $(event.currentTarget).find(".title");
                let o = t.text();
                t.text("Đang phát...");
                WsToast('success', 'Đang phát: ' + o);
                if (this.a && !this.a.paused) {
                    this.a.pause();
                }
                if (this.u === u && !this.a.paused) {
                    return;
                }
                const n = new Audio(u);
                n.addEventListener('ended', this.NextMusic.bind(this));
                this.n = n;
                n.play();
                if (this.te && this.tt) {
                    this.te.text(this.tt);
                }

                this.a = n;
                this.u = u;
                this.te = t;
                this.tt = o;

                document.cookie = `WsPlayMusic=${u}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            }
        }

        NextMusic() {
            let s = $(".music_menu_list li.selected");
            let n = s.next();

            if (n.length === 0 && !this.l) {
                return;
            }

            if (n.length === 0 && this.l) {
                n = $(".music_menu_list li:first-child");
            }

            s.removeClass("selected");
            n.addClass("selected");

            const nu = n.attr("url");
            const na = new Audio(nu);
            na.addEventListener('ended', this.NextMusic.bind(this));
            na.play();

            let t = n.find(".title");
            let o = t.text();

            let te = this.te;
            let tt = this.tt;

            t.text("Đang phát...");
            WsToast('success', 'Bài kế tiếp: ' + o);

            if (this.a && !this.a.paused) {
                this.a.pause();
            }

            if (this.u === nu && !this.a.paused) {
                return;
            }
            const currentUrl = this.u;
            const currentTitle = this.initials[currentUrl];
            s.find(".title").text(currentTitle);

            this.a = na;
            this.u = nu;
            this.n = null;
        }
    }

    //- ==@ OBF Class Use Hex String (Fake) @== -//
    class O {
        constructor() {
            this.o = Array.from({
                length: 20
            }, () => '\\x' + Math.floor(Math.random() * 16).toString(16) + Math.floor(Math.random() * 16).toString(16)).join('');
        }
    }
    (($) => {
        const o = new O();
        $('*').each(function() { // Sài * Tức Là Root (Chọn Tất Cả Thẻ HTML)
            $(this).addClass(o.o);
        });
    })(jQuery);
    setInterval(() => $('#real-time').text(new Date().toLocaleTimeString()), 1000);
    function ShowToast() {
        x.addClass('show');
        setTimeout(function(){ x.removeClass('show'); }, 5000);
    }      
    var x = $('#Toast');
    x.html('Resources Code V5.0.0');
    //- @Hiện/Ẩn Loader Screen Thông Minh-//
    const LoadingPercentage = $('#loading-percentage');
    let LoadingPercentageTimer;
        LoadingPercentageTimer = setInterval(function() {
            var progressBar = $('.pace-progress');
            if (!progressBar.length) return;
            var currentValue = progressBar.attr('data-progress-text');
    
            if (currentValue !== LoadingPercentage.text()) {
                LoadingPercentage.text(currentValue);
                var percentage = parseInt(currentValue);
                var translateValue = 'translate3d(' + percentage + '%, 0px, 0px)';
                progressBar.css('transform', translateValue);
    
                if (currentValue === '100%') {
                    $('.pace-active').animate({
                        top: '-100px'
                    }, 'slow', function() {
                        $(this).hide();
                    });
                    if ($('#loading-box').is(':visible')) {
                        ShowToast();
                        Wstoast.closeAll();
                        WsToast('info', 'Tài nguyên đã tải xong :)');
                        WsLoaded = true;
                        $('.td-loading-v2').fadeOut('slow');
                        $('#loading-box').fadeOut('slow');
                    } else {
                        $('.td-loading-v2').fadeOut('slow');
                    }
                    clearInterval(LoadingPercentageTimer);
                }
            }
        }, 100);
        
        //- @Sài pjax để ẩn khi trang đã tải xong-//
        const preloader = {
            endLoading: () => {
                Wstoast.closeAll();
                WsToast('info', 'Tài nguyên đã tải xong :)');
                $('.td-loading-v2').fadeOut('slow');
                $('#loading-box').fadeOut('slow');
                WsLoaded = true;
            },
            initLoading: () => {
                document.body.style.overflow = '';
                $('#loading-box').removeClass('loaded');
            }
        }
    
        $(window).on('load', () => {
            preloader.endLoading();
        });
    
        if (true) {
            $(document).on('pjax:send', () => {
                preloader.initLoading();
            });
            $(document).on('pjax:complete', () => {
                preloader.endLoading();
            });
        }
    //- @Tự động thêm cache thông minh (khi sửa code trình duyệt sẽ lưu code cũ nên đây là đoạn mã giúp code luôn là mới nhất) có thể gây lag nếu host quá íu-//
    // $('script[src], link[rel="stylesheet"]').each(function() {
    //     var src=$(this).attr('src') || $(this).attr('href');
    //     if (src && (src.endsWith('.js') || src.endsWith('.css'))) {
    //         $(this).attr('src',src+src.includes('?')?'&':'?'+'v='+Math.random().toString(36).substr(2, 5));
    //     }
    // });
    //- @Thời Gian Đồng Hồ Ở Màn Hình Khoá (Lock-Screen)-//
    class ClockTime {
        constructor(element) {
            this.element = $(element);
            this.TimeNows();
            setInterval(() => this.TimeNows(), 1000);
        }

        TimeNows() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            this.element.text(`${hours}:${minutes}`);
        }
    }
    //- @Random Description & Chuyển Description Tự Động-//
    class Description {
        constructor(descriptions) {
            this.descriptions = descriptions;
            this.element = $('.web_desc');
            this.Description();
        }

        Description() {
            const description = this.descriptions[Math.floor(Math.random() * this.descriptions.length)];
            this.element.fadeOut(500, () => {
                this.element.html(description).fadeIn(500);
            });
        }
    }
    const descriptions = [
        "Kim đâm vào thịt thì đau, thịt đâm vào thịt nhớ nhau cả đời.",
        "Trời sinh cái khiếu trăng hoa, lại cho cái “ấy” gấp 3 người thường!",
        "Khi yêu thương chưa đủ… thì đừng ngủ với anh.",
        "Có khi nào trên đường đời tấp nập…, ta vô tình đâm phầm phập vào nhau",
        "Ngày Iphone mở bán… tôi mong em đừng mở háng 🙁",
        "Muốn giải nhiệt thì đi biển vào mùa hạ. Muốn cảm giác lạ thì tối alo cho anh =))",
        "Nếu hôm nay em không biết mặc gì, thì có thể phối giống anh.",
        "Cố tình “thả tim” nàng chẳng đổ, vô tình “phẫn nộ” lại nên duyên.",
        "Nhà anh lấy chiếu làm giường. Tuy hơi mục nát, nhưng tường cách âm.",
        "Do anh 0Đ ý, nên em không đồng ý",
        "Anh đây không thích mập mờ, điều anh thích nhất là sờ... em.",
        "Anh muốn chúng mình như số 66, vì hạnh phúc khi cả hai six lại gần nhau.",
        "Anh là con nhà gia giáo. Chỉ cần anh huýt sáo là lên phường.",
        "Rượu ngon là để nhấp môi, Em ngon thì phải nhấp tôi.",
        "Ngọt ngào anh không thiếu, chủ yếu em phải ngon.",
        "Anh rất yêu thành phố này. Không phải vì nó có gì, mà vì nó có em.",
        "Đôi khi muốn giả làm gà, để xem em thịt hay là em nuôi.",
        "Cũng muốn mời em đi ăn bún. Mà chỉ sợ thành thú nhún của em.",
        "Anh sẽ là chàng trai hằng ngày em thầm thương, nên đầu gối ban đêm em sẽ thường thâm.",
        "Đừng nghĩ anh xấu mà chê. Yêu anh thì biết nó phê cỡ nào.",
        "Nghe nói em thích của lạ. Trời ạ! Có Kitty đây! ",
        "Tính anh không thích lòng vòng, một là nhà nghỉ, hai là phòng em.",
        "Em gọi anh là ảnh, vì ảnh cần Edit 😳",
        "Tình yêu như con dao hai lưỡi, lưỡi anh và lưỡi em đá nhau mlem mlem.",
        "Anh biết là mình hơi nhát, nhưng yêu em thì bảy phát một đêm 😛",
        "Em có phải là bánh chưng đâu, mà anh cứ muốn nhét thịt vào 😜",
        "Anh muốn em hôn khẽ vào môi, hay hôn mỗi vào khe?",
        "Mình vào nhà nghỉ dừng chân, để em thủ thỉ trao thân cho chàng.",
        "Anh là chiếc bánh sinh nhật ngon nhất, vì trên người anh có thứ mà em muốn thổi.",
        "Đừng tô thêm chút son môi, vì đằng nào anh cũng mút trôi son em.",
        "Tắt đèn của Ngô Tất Tố, em mà muốn tăng dân số thì gọi cho anh",
        "Muốn thơm thì ngửi mùi quế, còn muốn đổi thế thì vỗ mông em.",
        "Đúng người, đúng thời điểm chưa chắc đúng. Đúng tư thế, đúng tất cả.",
        "Ước gì anh hoá thành dưa. Để đêm em nhớ, em đưa anh vào.",
        "Thân em vừa trắng lại vừa tròn, liệu em có muốn gửi nhờ đứa con?",
        "Mùi hương trong bếp vạn thức ăn ngon, em cũng thơm ngon, anh ăn em nhớ?",
        "Em ơi tối về đến nhà, em thích cưỡi ngựa hay là doggy?",
        "Bỏ ngoài tai những lời tán tỉnh, em chỉ cần lên đỉnh cùng anh yêu.",
        "Em mệt hả? Kiếm nhà nào nghỉ nhé.",
        "Em có thể gọi anh là Google Translate, vì khi anh nhấp vào là dịch ra.",
        "Buổi sáng anh rất tồi, nhưng buổi tối anh rất tình.",
        "Hoa hồng nào chẳng có gai, yêu nhau thì phải có thai mới bền.",
    ];
    const description = new Description(descriptions);
    class TimeReminder {
        constructor(element) {
            this.element = element;
        }
        MessageRmd() {
            const time_now = new Date().getHours();
            let msg;
            if (time_now >= 3 && time_now <= 10) {
                msg = "Chúc cậu có một buổi sáng vui vẻ, và may mắn 😇";
            }  else if (time_now >= 11 && time_now <= 15) {
                msg = "Buổi trưa này, đừng quên ăn uống đầy đủ nhé 🤤"; 
            } else if (time_now >= 16 && time_now <= 18) {
                msg = "Chúc cậu có một buổi chiều thư giãn sau những giờ làm việc căng thẳng.";
            } else if (time_now >= 19 && time_now <= 21) {
                msg = "Chúc cậu có một buổi tối tràn đầy hạnh phúc!";
            } else {
                msg = "Onichan~ sao giờ này chưa ngủ nữa ୧(๑•̀⌄•́๑)૭";
            }
            return msg;
        }
    }
        const reminders = new TimeReminder($("#waiting-loader"));
        function TimeRefresh() {
            const greeting = reminders.MessageRmd();
            $("#waiting-loader").text(greeting);
        }
        setInterval(() => {TimeRefresh();}, 222);
    // class BioLoader {
    //     constructor(element) {
    //         this.element = element;
    //         this.bios = [
    //             "Bình tĩnh tạo nên sự quý sờ tộc",
    //             "Lời nói gió bay, hứa càng hay chia tay càng thấm",
    //             "Hoa nở là hữu tình, hoa rơi là vô ý",
    //             "Em ăn cơm chưa?",
    //             "Nắng đã có mũ, mưa đã có ô, còn em sẽ có ai?",
    //             "Một phút bốc đồng là một đời bốc shit",
    //             "Tiền là giấy – Thấy là lấy",
    //             "Bị cận nên lận đận tình duyên",
    //         ];
    //     }
    
    //     RandomBio() {this.element.text(this.bios[Math.floor(Math.random() * this.bios.length)]);}
    // }
    // const bioloader = new BioLoader($("#waiting-loader"));
    // bioloader.RandomBio();
    // setInterval(() => {bioloader.RandomBio();}, 2000);    
    setInterval(() => description.Description(), 7000); // Chuyển Desc Mới Sau 7s
    new MusicPlayer();
    new TimeLove();
    new ClockTime('.date');
    // $('.skill-per').each(function() {
    //     var $this=$(this);
    //     var per=$this.attr('per');
    //     $this.css("width", per + '%');
    //     $({
    //       animatedValue: 0
    //     }).animate({
    //       animatedValue: per
    //     }, {
    //       duration: 10000,
    //       step: function() {
    //         $this.attr('per', Math.floor(this.animatedValue) + '%');
    //       },
    //       complete: function() {
    //         $this.attr('per', Math.floor(this.animatedValue) + '%');
    //       }
    //     });
    //   });
    //- @Effect click-//
    //var xyz_=0,colors=["#ff6651","#42a5f5","#66bb6a","#ab47bc","#ffa726","#ec407a","#26c6da","#78909c","#ffca28","#5c6bc0","#8d6e63","#26a69a"];jQuery(document).ready((function(a){a("body").click((function(o){var t=new Array("Kitty 💕","Duy Thinh 🎉","Nhà giàu ❤️","Đẹp trai 💛","Danh vọng 💚","Tiền tài 🤑","Địa vị 💜","Xinh đẹp 🖤","Ga lăng 💖","Nữ thần 😍","Nam thần 💝","Tài tử 💞","Chủ tịch 💓","Khiêm tốn 💋"),c=a("<span/>").text(t[xyz_]),n=colors[Math.floor(Math.random()*colors.length)];xyz_=(xyz_+1)%t.length;var e=o.pageX,r=o.pageY,i=Math.floor(9990001*Math.random())+9999,f=r-20,h=e,l=n;c.css({"z-index":i,top:f,left:h,position:"absolute","font-weight":"bold",color:l}),a("body").append(c),c.animate({top:r-180,opacity:0},1500,(function(){c.remove()}))}))}));
    //- @Lá Rơi-//
    var stop, staticx, img = new Image;

    function Sakura(t, n, e, i, a) {
        this.x = t, this.y = n, this.s = e, this.r = i, this.fn = a
    }

    function getRandom(t) {
        var n, e;
        switch (t) {
            case "x":
                n = Math.random() * window.innerWidth;
                break;
            case "y":
                n = Math.random() * window.innerHeight;
                break;
            case "s":
                n = Math.random();
                break;
            case "r":
                n = 6 * Math.random();
                break;
            case "fnx":
                e = -.5 + 1 * Math.random(), n = function(t, n) {
                    return t + .5 * e - 1.7
                };
                break;
            case "fny":
                e = 1.5 + .7 * Math.random(), n = function(t, n) {
                    return n + e
                };
                break;
            case "fnr":
                e = .03 * Math.random(), n = function(t) {
                    return t + e
                }
        }
        return n
    }

    function startSakura() {
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
        var t, n, e, i, a, s, r, o, h = document.createElement("canvas");
        staticx = !0, h.height = window.innerHeight, h.width = window.innerWidth, h.setAttribute("style", "position: fixed;left: 0;top: 0;pointer-events: none;z-index: 8888;"), h.setAttribute("id", "canvas_sakura"), document.getElementsByTagName("body")[0].appendChild(h), o = h.getContext("2d");
        for (var d = new SakuraList, m = 0; m < 10; m++) n = getRandom("x"), e = getRandom("y"), a = getRandom("r"), i = getRandom("s"), s = getRandom("fnx"), r = getRandom("fny"), randomFnR = getRandom("fnr"), (t = new Sakura(n, e, i, a, {
            x: s,
            y: r,
            r: randomFnR
        })).draw(o), d.push(t);
        stop = requestAnimationFrame(function() {
            o.clearRect(0, 0, h.width, h.height), d.update(), d.draw(o), stop = requestAnimationFrame(arguments.callee)
        })
    }

    function stopp() {
        if (staticx) {
            var t = document.getElementById("canvas_sakura");
            t.parentNode.removeChild(t), window.cancelAnimationFrame(stop), staticx = !1
        } else startSakura()
    }
    sakura = "//i.ibb.co/68TNjq0/duythinh.png", leaf = "//i.ibb.co/68TNjq0/duythinh.png", maple = "//i.ibb.co/68TNjq0/duythinh.png", user = "", img.src = maple, Sakura.prototype.draw = function(t) {
        t.save(), this.s, t.translate(this.x, this.y), t.rotate(this.r), t.drawImage(img, 0, 0, 30 * this.s, 30 * this.s), t.restore()
    }, Sakura.prototype.update = function() {
        this.x = this.fn.x(this.x, this.y), this.y = this.fn.y(this.y, this.y), this.r = this.fn.r(this.r), (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) && (this.r = getRandom("fnr"), Math.random() > .4 ? (this.x = getRandom("x"), this.y = 0, this.s = getRandom("s"), this.r = getRandom("r")) : (this.x = window.innerWidth, this.y = getRandom("y"), this.s = getRandom("s"), this.r = getRandom("r")))
    }, (SakuraList = function() {
        this.list = []
    }).prototype.push = function(t) {
        this.list.push(t)
    }, SakuraList.prototype.update = function() {
        for (var t = 0, n = this.list.length; t < n; t++) this.list[t].update()
    }, SakuraList.prototype.draw = function(t) {
        for (var n = 0, e = this.list.length; n < e; n++) this.list[n].draw(t)
    }, SakuraList.prototype.get = function(t) {
        return this.list[t]
    }, SakuraList.prototype.size = function() {
        return this.list.length
    }, window.onresize = function() {
        document.getElementById("canvas_snow")
    }, img.onload = function() {
        startSakura()
    };
        // End DuyThinh
});
