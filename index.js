(function () {
  var old_codemirror = CodeMirror;

  CodeMirror = function (...args) {
    var result = old_codemirror.apply(this, arguments);

    if (!args[1]) {
      return result;
    }

    if (args[1].id && args[1].analytics === true) {
      fetch('https://CodeMirror-Analytics-Backend.epiccodewizard.repl.co/api/events', {
        method: 'POST',
        body: {
          id,
          type: 'OPEN'
        }
      });

      fetch('https://CodeMirror-Analytics-Backend.epiccodewizard.repl.co/api/events', {
        method: 'POST',
        body: {
          id,
          type: 'MODE_CHANGE',
          mode: args[1].mode || null
        }
      });

      fetch('https://CodeMirror-Analytics-Backend.epiccodewizard.repl.co/api/events', {
        method: 'POST',
        body: {
          id,
          type: 'THEME_CHANGE',
          mode: args[1].theme || null
        }
      });
    }

    return result;
  };
})();

function CodemirrorAnalyticsHooks(id) {
  return {
    optionChange: (instance, option) => {
      if (option === 'mode' || option === 'theme') {
        fetch('https://CodeMirror-Analytics-Backend.epiccodewizard.repl.co/api/events', {
          method: 'POST',
          body: {
            id,
            type: option.toUpperCase() + '_CHANGE',
            [option]: instance.options[option]
          }
        });
      }
    }
  };
}
