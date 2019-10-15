import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

import FilesystemPage from './components/FilesystemPage';

export default function() {
  app.routes.filesystem_drivers = {path: '/filesystem-drivers', component: FilesystemPage.component()};

  app.extensionSettings['fof-filesystem-drivers'] = () => m.route(app.route('filesystem_drivers'));

  extend(AdminNav.prototype, 'items', items => {
    items.add('filesystem_drivers', AdminLinkButton.component({
      href: app.route('filesystem_drivers'),
      icon: 'fas fa-boxes',
      children: app.translator.trans('fof-filesystem-drivers.admin.nav.label'),
      description: app.translator.trans('fof-filesystem-drivers.admin.nav.description')
    }));
  });
}
