import EmberApp from 'ember-strict-application-resolver';
import EmberRouter from '@ember/routing/router';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';
import { setTesting } from '@embroider/macros';

// Addon modules
import DragSortService from 'ember-drag-sort/services/drag-sort';
import DragSortListComponent from 'ember-drag-sort/components/drag-sort-list';
import DragSortItemComponent from 'ember-drag-sort/components/drag-sort-item';

// Test app modules (for acceptance tests)
import applicationTemplate from './test-app/templates/application';
import indexTemplate from './test-app/templates/index';
import IndexController from './test-app/controllers/index';
import '../demo-app/styles.css';

class Router extends EmberRouter {
  location = 'none';
  rootURL = '/';
}

class TestApp extends EmberApp {
  modules = {
    './router': Router,
    './services/drag-sort': DragSortService,
    './components/drag-sort-list': DragSortListComponent,
    './components/drag-sort-item': DragSortItemComponent,
    './templates/application': applicationTemplate,
    './templates/index': indexTemplate,
    './controllers/index': IndexController,
  };
}

Router.map(function () {});

export function start() {
  setTesting(true);
  setApplication(
    TestApp.create({
      autoboot: false,
      rootElement: '#ember-testing',
    }),
  );
  setup(QUnit.assert);
  setupEmberOnerrorValidation();

  qunitStart();
}
