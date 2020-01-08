
这是一个时间戳的工具库，返回一个对象，简单易用。 --作者：洪坤越

     npm i time-stamp-tool 
     import unix from ' time-stamp-tool'
              unix.normalTime(时间戳)            //返回 年-月-日 时：分：秒
              unix.dd_hh_mm(时间戳)              //返回 倒计时   xx天 xx 时xx分 xx秒
              unix.get_days(时间戳)              //返回   xx(天数，不带后缀 (天) )
              unix.get_days2(时间戳)             //返回   xx天
              unix.get_unix_only(时间戳)         //返回   xx年
              unix.get_year_month_day(时间戳)    //返回-年-月-日
              unix.getnowTime(时间戳)            //返回   Y +'-'+M+'-'+D
              unix.FreshTime(时间戳)             // 返回倒计时时间戳
              unix.FreshTime2(时间戳)            // 返回倒计时时间戳
              unix.getCountDayNumber(time)      // 返回倒计时天数
     