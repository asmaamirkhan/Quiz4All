module.exports = {
    success_func: function (msg, data) {
      let res = {
        status: true,
        time: (new Date()).getTime(),
        data: data,
        message: msg
      };
      return res;
    },
    
    error_func: function (msg, code, data) {
      let res = {
        status: false,
        time: (new Date()).getTime(),
        data: data,
        message: msg,
        code: code
      };
      return res;
    }
  };