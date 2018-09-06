let filtersObj = {
  //时间过滤，
  time: function(date) {
    let value = new Date(date);
    let year = value.getFullYear();
    let month = value.getMonth() + 1; //getMonth是从0开始，所以加+
    let day = value.getDate();
    return year + "-" + month + "-" + day;
  },
  timeSecond: function(date) {
    let value = new Date(date);
    let year = value.getFullYear();
    let month = value.getMonth() + 1; //getMonth是从0开始，所以加+
    let day = value.getDate();
    let hour = value.getHours();
    let Minutes = value.getMinutes();
    let seconds = value.getSeconds();
    let twoValue = function(value) {
      if (value < 10) {
        return "0" + value;
      } else {
        return value;
      }
    };
    return `${year}-${month}-${day} ${twoValue(hour)}:${twoValue(
      Minutes
    )}:${twoValue(seconds)}`;
  },
  amount: function(val) {
    if (val !== undefined) {
      return Number(val)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }
  } /* 债权列表出借金额 */,

  monthChnage: function(val) {
    if (val !== 7) {
      return val / 30;
    } else {
      return val;
    }
  } /* 月份转换 */,

  income: function(val) {
    if (val !== undefined) {
      return Number(val * 100).toFixed(2);
    }
  }
};

export default filtersObj;
