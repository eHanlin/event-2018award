//滾動視差
AOS.init({
  duration: 1000,
});

$(function() {
  //緩慢滑動
  $(document).on('click', '#contect', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
  });

  //animation
  $(".plane_girl").velocity({
    opacity: [1,0],
    top: 20
  },1000);


  $(".title107").addClass("animated fadeInRight")

  //fly
  $(".btn_signup").click(function(event) {
    event.preventDefault();
    var form = $(this).parent("a").attr("href");
    var $frame = $("iframe.plane-animation");
    $frame.show();
    $frame.contents().find(".plane").one("animationend", function() {
        $.get("/Users/me", function(resp) {
            if (resp.success) {
              form += encodeURIComponent(resp.result.email);
              window.location.href = form;
            } else {
              form += "session.email";
              window.location.href = "/Users/login.html?redirect=" + encodeURIComponent(form);
            }
        });
    });

    $frame.contents().find(".plane,.right,.left,.bottom").addClass("fly");
  })
});

// 獎項內容
var vm = new Vue({
	el: "#awards",
  data: {
  	outer_data: {},

		// 獎項名稱
    apply: "《申請資格》",
    bonus: "《獎金/獎品》",
    numbers: "《名額數量》",

    // 獎金獎品
    money: [
      "1. $3,000圓新台幣",
      "2. 精美獎牌乙只"
    ],
    number: "3名",
  },
  created: function () {
    this.fetch();
  },
  methods: {
    fetch: function () {
      var self = this;
      self.junior_data = {
        master: {
          award_name: "菁英獎",
          detail: "頂尖學霸就是我，獎學金非我莫屬",
          applicant: [
            "1. 106學年下學期期末考總平均80分(含)以上者",
            "2. 有正式開通翰林雲端學院e名師、e評量及模擬考之國中學生",
            "3. 請提供申請人期末考成績單副本"
          ],
          url: "https://docs.google.com/forms/d/e/1FAIpQLSeW86cUNE1s2rdnaWxb1LIbPU_doiY8lRo3176qbsMnQH6csQ/viewform?usp=pp_url&entry.534371074="
        },
        jn_unlimit: {
          award_name: "無可限量獎",
          detail: "期末我進步了好多分，躍升高分不是夢",
          applicant: [
            "1. 106學年下學期期末考與前一次定期/期中考試中任2科以上成績相比有進步者",
            "2. 有正式開通翰林雲端學院e名師、e評量及模擬考之國中學生",
            "3. 請提供申請人期末考成績單及前一次定期/期中考試成績單副本"
          ],
          url: "https://docs.google.com/forms/d/e/1FAIpQLSdkdAFx6wIQscBmkU6hPbSNi9_0KO5Ja43nipO5uVhTupuhjg/viewform?usp=pp_url&entry.534371074="
        },
        manowar: {
          award_name: "會考戰神獎",
          detail: "會考戰神就是我，成績無人可匹敵",
          applicant: [
            "1. 於106年會考取得「4A1B」以上成績者",
            "2. 有正式開通翰林雲端學院e名師、e評量及模擬考之國中學生",
            "3. 請提供申請人會考成績單副本"
          ],
          url: "https://docs.google.com/forms/d/e/1FAIpQLSeSQK1IRv-M77MJaavtk_6GkfAH6mLbuPUtcBvvWtFWrlewIQ/viewform?usp=pp_url&entry.534371074="
        },
        test_unlimit: {
          award_name: "會考無可限量獎",
          detail: "挑戰超越前次目標，成績爬升高分",
          applicant: [
            "1. 於106會考取得的成績與前一次紙筆模擬會考成績相比有進步之學生",
            "2. 有正式開通翰林雲端學院e名師、e評量及模擬考之國中學生",
            "3. 請提供申請人正式會考成績及模擬會任一次會考考試成績單副本"
          ],
          url: "https://docs.google.com/forms/d/e/1FAIpQLSfwFgjONWL2zIvHrMvp_igctUY90kUjQqvZhJ1JZGItkz3JVQ/viewform?usp=pp_url&entry.534371074="
        },
        join: {
          award_name: "參加獎",
          detail: "積極進取來參與 翰林獎狀頒給你！",
          applicant: [
            "1. 凡於活動期間內經報名系統報名成功並確認符合報名資格者",
            "2. 得獎名額依照報名時間先後順序計算",
          ],
          money: "精美獎狀乙只",
          number: "100名",
					cant: true
        },
      };
      self.high_data = {
        gold_mind: {
          award_name: "金腦獎",
          detail: "學習金頭腦，讀書考試難不倒",
          applicant: [
            "1. 106學年下學期期末考總平均80分(含)以上者",
            "2. 有正式開通翰林雲端學院e名師、e評量及模擬考之高中學生",
            "3. 請提供申請人期末考成績單副本"
          ],
          url: "https://docs.google.com/forms/d/e/1FAIpQLScPA09lf3SjYPSy4WcuJGNLYddoyopvLEEoYouRQZ2RyGZuxg/viewform?usp=pp_url&entry.534371074="
        },
        hi_unlimit: {
          award_name: "高中無可限量獎",
          detail: "成績持續進步，我就是潛力股",
          applicant: [
            "1. 106學年下學期期末考與前一次定期/期中考試中任2科以上成績相比有進步者",
            "2. 有正式開通翰林雲端學院e名師、e評量及模擬考之高中學生",
            "3. 請提供申請人期末考成績單及前一次定期/期中考試成績單副本"
          ],
          url: "https://docs.google.com/forms/d/e/1FAIpQLScuEBhcNObCAIADj_aQKJl-DTv9t6Vrz-JDC-fNmiCu3ujBhg/viewform?usp=pp_url&entry.534371074="
        },
        join: {
          award_name: "參加獎",
          detail: "積極進取來參與 翰林獎狀頒給你！",
          applicant: [
            "1. 凡於活動期間內經報名系統報名成功並確認符合報名資格者",
            "2. 得獎名額依照報名時間先後順序計算",
          ],
          money: "精美獎狀乙只",
          number: "100名",
					cant: true
        },
      };
    }
  }
});