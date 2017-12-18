var res = {
    StartSceneList:"StartScene/time.plist",
    Start_BackGround_png:"StartScene/start_background.jpg",
    Boot_BackGround_png:"Boot/boot_background.jpg",
    Finger:"Boot/finger.png",
    ChildHood:"Boot/childhood_text.png",
    OneScene:{
        bird:"OneScene/bird.png",
        question:"OneScene/question.png",
        answer_a:"OneScene/answer_a.png",
        answer_b:"OneScene/answer_b.png",
        answer_c:"OneScene/answer_c.png",
        sunflower:"OneScene/sunflower.png"
    },
    TwoScene:{
        question:"TwoScene/question.png",
        answer_a:"TwoScene/answer_a.png",
        answer_b:"TwoScene/answer_b.png",
        answer_c:"TwoScene/answer_c.png",
        elec_product:"TwoScene/elec_product.png"
    },
    ThreeScene:{
        bird:"ThreeScene/bird.png",
        question:"ThreeScene/question.png",
        answer_a:"ThreeScene/answer_a.png",
        answer_b:"ThreeScene/answer_b.png",
        answer_c:"ThreeScene/answer_c.png",
        hand:"ThreeScene/hand.png"
    },
    SchoolScene:{
        bird:"SchoolScene/bird.png",
        question:"SchoolScene/question.png",
        answer_a:"SchoolScene/answer_a.png",
        answer_b:"SchoolScene/answer_b.png",
        answer_c:"SchoolScene/answer_c.png"
    },
    CartoonScene:{
        bird:"CartoonScene/bird.png",
        question:"CartoonScene/question.png",
        answer_a:"CartoonScene/answer_a.png",
        answer_b:"CartoonScene/answer_b.png",
        answer_c:"CartoonScene/answer_c.png"
    },
    TimeMachine:{
        time_auto:"machine/time_auto.mp3"
    },
    background_music:"background_music.mp3",
    LibraryScene:{
        library_answer_png:"LibraryScene/library_answer.png",
        library_question_png:"LibraryScene/library_question.png",
        person_jpg:"LibraryScene/person.jpg",
        person_tirrable_jpg:"LibraryScene/person_tirrable.jpg",
        sun_jpg:"LibraryScene/sun.jpg",
        person_left_png:"LibraryScene/person_left.png",
        person_right_png:"LibraryScene/person_right.png",
        youchildheart_png:"LibraryScene/youchildheart.png",
        low_png:"LibraryScene/low.png",
        notice_png:"LibraryScene/notice.png",
        text_png:"LibraryScene/text.png",
        share_png:"LibraryScene/share.png",
        asus_png:"LibraryScene/asus.png",
        again_png:"LibraryScene/again.png",
        rate_png:"LibraryScene/rate.png",
        share_guid_png:"LibraryScene/share_guid.png"
    },
    HouseScene:{
        asus_png:"HouseScene/asus.png",
        window_jpg:"HouseScene/window.jpg",
        table_lnmp_png:"HouseScene/table_lnmp.png",
        person_sit_png:"HouseScene/person_sit.png",
        desktop_png:"HouseScene/desktop.png",
        computer_png:"HouseScene/computer.png",
        bird_png:"HouseScene/bird.png",
        know_png:"HouseScene/know.png",
        full_house_jpg:"HouseScene/full_house.jpg"
    },
    plist:"StartScene/time.plist"
};


var score = 0;

var g_resources = [];

for (var i in res){
    if((typeof res[i]) == "object"){
        var child_res = res[i];
        for (var x in child_res){
            g_resources.push(child_res[x]);
        }
    }else{
        g_resources.push(res[i]);
    }
}