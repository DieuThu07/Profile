<?php
/**
 * @package DuyThinhv5 (tester)
 * @author Phung Duy Thinh <www.facebok.com/thinhem.ic>
 */
interface DuyThinhConfigInterface {
    public function CommonMethod();
} 
class DuyThinhHeader implements DuyThinhConfigInterface {
    public $title = "Phung Duy Thinh | Profile Home";
    public $description = "Hi my name is DuyThinh / A freelance / web developer / Vexer";
    public $keywords = "phùng duy thịnh,duythinh,web duy thinh,phung duy thinh,duythinh home,profile duythinh";
    public $favicon = "./res/v5/img/boss.webp";
    public $namesite = "DUYTHINH | HOME";
    public $avatar = "./res/v5/img/Avatar.jpg?v=2006";
    public $userName = ["Hello Everybody 🤓", "My name is Kittys 😺", "I really like website design 🌭"];
    public $trigger = "👉 Tìm hiểu tôi 😶&zwj;🌫️";
    public $bio1 = "😺 Người yêu mèo, yêu cả em";
    public $bio2 = "🥺 Đụng là khóc, hay mê suy";
    public $bio3 = "🤫 Sợ giao tiếp, im lặng nào cô bé";
    public $bio4 = "Thích làm nũng người mĩnh yêu 🥳";
    public $bio5 = "Ăn, ngủ, làm và chơi game 🎮";
    public $bio6 = "Kẻ khờ dại trong tình yêu ✨";
    public $SocialNetworks = [
        "facebook" => "https://www.facebook.com/1100520076", // Thay link facebook
        "instagram" => "https://www.instagram.com/thinhem.ic", // Thay link instagram
        "tiktok" => "https://www.tiktok.com/@thinhem", // Thay link tiktok
        "zalo" => "https://zalo.me/84767655075", // Thay link zalo
        "telegram" => "https://t.me/PhungDuyThinh" // Thay link telegram
    ];
    public function CommonMethod(){date_default_timezone_set('Asia/Ho_Chi_Minh');}
}


class DuyThinhLoveDays implements DuyThinhConfigInterface {
    public $ConfigLove = [
        "avatar_male" => "./res/v5/img/duythinh.png", // Thay đường dẫn tới thư mục chứa ảnh của bạn hoặc up ảnh lấy link tại img.DuyThinh.com
        "name_male" => "Duy Thinh", // Thay tên của bạn
        //========================================================//
        "avatar_female" => "./res/v5/img/emiu.webp", // Thay đường dẫn tới thư mục chứa ảnh bạn gái hoặc up ảnh lấy link tại img.DuyThinh.com
        "name_female" => "Girl", // Thay tên đối phương
        //========================================================//
        "time_relashiption" => "01/04/2024" // Định dạng ngày tháng năm: DD-MM-YYYY or / or :
        //========================================================//
    ];
    public function CommonMethod() {}
}
class DuyThinhMusicList implements DuyThinhConfigInterface {
    public $songs = [
         [
            "url" => "https://files.catbox.moe/5jjcb1.mp3",
            "avatar" => "https://i.ibb.co/8P7Rrf6/blob.jpg",
            "title" => "Set Nhạc Dành Cho Mỹ Nhân",
            "author" => "Lucin3k"
         ],
         [
            "url" => "https://files.catbox.moe/aty5cf.mp3",
            "avatar" => "https://i.imgur.com/Omf4mjc.png",
            "title" => "Xinh Nhật Của Xinh Nhất",
            "author" => "24K.RIGHT Feat. HIEUTHUHAI, HIPZ"
         ],
         [
            "url" => "https://files.catbox.moe/s2wmb2.mp3",
            "avatar" => "https://i.imgur.com/GEOKT8b.png",
            "title" => "Chúng Ta Của Tương Lai",
            "author" => "Sơn Tùng M-TP"
        ],
        [
            "url" => "https://files.catbox.moe/xnssf0.mp3",
            "avatar" => "https://i.imgur.com/R41qJlU.png",
            "title" => "Đừng Làm Trái Tim Anh Đau",
            "author" => "Sơn Tùng M-TP"
        ],
        [
            "url" => "https://files.catbox.moe/8y16fr.mp3",
            "avatar" => "https://i.imgur.com/xSgexW8.png",
            "title" => "Not Around",
            "author" => "Nova"
        ],
        [
            "url" => "https://files.catbox.moe/ozok0f.mp3",
            "avatar" => "https://i.imgur.com/xSgexW8.png",
            "title" => "Heaven Sent",
            "author" => "Tevomxntana"
        ],
        [
            "url" => "https://files.catbox.moe/tvfcoi.mp3",
            "avatar" => "https://i.imgur.com/zfyEMV4.png",
            "title" => "Anh có tiền không?",
            "author" => "沈7"
        ],
        [
            "url" => "https://files.catbox.moe/6rh7xd.mp3",
            "avatar" => "https://i.imgur.com/F9f9b6K.png",
            "title" => "Trái Tim Cũng Biết Đau",
            "author" => "KIDDI"
        ],
        [
            "url" => "https://files.catbox.moe/zp15x8.mp3",
            "avatar" => "https://i.imgur.com/e28b0dD.png",
            "title" => "Thiên Lý Ơi Cover",
            "author" => "Jack ( 5 Triệu )"
        ],
        // Thêm nhạc tại đây
    ];
    public function CommonMethod() {}
}