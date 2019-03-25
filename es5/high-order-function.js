// 1. 高阶函数withLogin，用来判断当前的用户状态
(function () {

  // 用随机数的方式来模拟一个获取用户信息的方法
  var getLogin = function () {
    var a = parseInt(Math.random() * 10).toFixed(0));
    if (a % 2 == 0) {
      return { login: false }
    }

    return {
      login: true,
      userinfo: {
        nickname: 'ashton',
        vip: 888,
        userid: '666'
      }
    }
  }

  var withLogin = function (basicFn) {
    var loginInfo = getLogin();

    // 将loginInfo以参数的形式传入基础函数中
    return basicFn.bind(null, loginInfo);
  }

  window.withLogin = withLogin;
})();

// 2. 渲染主页，个人页
(function () {
  var withLogin = window.withLogin;

  var renderIndex = function (loginInfo) {
    // 这里处理index页面的逻辑

    if (loginInfo.login) {
      // 处理已经登录之后的逻辑
    } else {
      // 这里处理未登录的逻辑
    }
  }

  // 对外暴露接口时，使用高阶函数包一层，来执行当前页面的登录状态的判断
  window.renderIndex = withLogin(renderIndex);
})();
(function () {
  var withLogin = window.withLogin;

  var renderPersonal = function (loginInfo) {

    if (loginInfo.login) {
      // 处理已经登录之后的逻辑
    } else {
      // 这里处理未登录的逻辑
    }
  }

  window.renderPersonal = withLogin(renderPersonal);
})();

// 3. 调用渲染
(function() {
  window.renderIndex();
  window.renderPersonal();
})


//refined code
(function() {
  var login = function() {
    var a = parseInt(Math.random() * 10);
    if(a % 2 == 0) {
      return {
        login: false
      }
    }

    return {
      login: true,
      userInfo: {
        name: 'ashton',
        vip: 888,
        userid: '666'
      }
    }
  }

  var withLogin = function(exec) {
    var loginInfo = login();

    return exec.bind(null, loginInfo);
  }

  var renderPage = function(pageName) {
    var page = function(loginInfo) {
      if(loginInfo.login) {
        console.log('render ' + pageName);
        console.log(loginInfo.userInfo.name + "-" + loginInfo.userInfo.vip);
      } else {
        console.log('pls login firstly');
      }
    }

    window[pageName] = withLogin(page);
  }

  window.renderPage = renderPage;
})();

(function() {
  var index = 'index';
  var personal = 'personal';

  window.renderPage(index);
  window.renderPage(personal);

  window[index]();
  window[personal]();
})()
