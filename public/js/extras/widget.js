(function () {
  var widget = window.widget = new Auth0Lock('zEYfpoFzUMEzilhkHilcWoNkrFfJ3hAI', 'auth0.auth0.com');
  function getBasicInfo () {
    return {
      path: window.location.pathname,
      url: window.location.toString(),
      title: document.title,
      referrer: document.referrer,
      category: 'Lock',
      label: 'exercise'
    }
  }
  var options = {
    callbackURL: 'https://manage.auth0.com/callback',
    dict: {
      signup: {
        footerText: 'By signing up, you agree to our <a href="/terms" target="_new">terms of service</a> and <a href="/privacy" target="_new">privacy policy</a>'
      }
    },
    icon: '//cdn.auth0.com/styleguide/latest/lib/logos/img/badge.png'
  };

  widget.on('signup ready', function() {
    if (!window.metricsLib) return;
    window.metricsLib.track('open:signup', getBasicInfo());
  });

  widget.on('signin ready', function() {
    if (!window.metricsLib) return;
    window.metricsLib.track('open:signin', getBasicInfo());
  });

  window.login = function () {
    if (window.metricsLib) {
      window.metricsLib.track('click:signin', getBasicInfo());
    }
    widget.hide(function() {
      widget.show(options);
    });
  };

  window.signup = function() {
    if (window.metricsLib) {
      window.metricsLib.track('click:signup', getBasicInfo());
    }
    widget.hide(function() {
      widget.showSignup(options);
    });
  }
})()
