'use strict';

define('viewer/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('api/api.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'api/api.js should pass ESLint\n\n');
  });

  QUnit.test('api/get-all.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'api/get-all.js should pass ESLint\n\n');
  });

  QUnit.test('api/get.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'api/get.js should pass ESLint\n\n3:8 - \'_\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/endpoint-result.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/endpoint-result.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('viewer/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('viewer/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'viewer/tests/helpers/start-app', 'viewer/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _viewerTestsHelpersStartApp, _viewerTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _viewerTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _viewerTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('viewer/tests/helpers/resolver', ['exports', 'viewer/resolver', 'viewer/config/environment'], function (exports, _viewerResolver, _viewerConfigEnvironment) {

  var resolver = _viewerResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _viewerConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _viewerConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('viewer/tests/helpers/start-app', ['exports', 'ember', 'viewer/app', 'viewer/config/environment'], function (exports, _ember, _viewerApp, _viewerConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _viewerConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _viewerApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('viewer/tests/integration/components/endpoint-result-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('endpoint-result', 'Integration | Component | endpoint result', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'eN96Jkyc',
      'block': '{"statements":[["append",["unknown",["endpoint-result"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'OfNJqj4H',
      'block': '{"statements":[["text","\\n"],["block",["endpoint-result"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('viewer/tests/test-helper', ['exports', 'viewer/tests/helpers/resolver', 'ember-qunit'], function (exports, _viewerTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_viewerTestsHelpersResolver['default']);
});
define('viewer/tests/tests.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/endpoint-result-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/endpoint-result-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });
});
define('viewer/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
require('viewer/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
