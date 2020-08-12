import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

import FilesystemPage from './components/FilesystemPage';

export default function() {
  app.routes.fof_filesystem = {path: '/fof-filesystem', component: FilesystemPage.component()};

  app.extensionSettings['fof-filesystem'] = () => m.route(app.route('fof_filesystem'));

  extend(AdminNav.prototype, 'items', items => {
    items.add('fof_filesystem', AdminLinkButton.component({
      href: app.route('fof_filesystem'),
      icon: 'fas fa-boxes',
      children: app.translator.trans('fof-filesystem.admin.nav.label'),
      description: app.translator.trans('fof-filesystem.admin.nav.description')
    }));
  });
}
