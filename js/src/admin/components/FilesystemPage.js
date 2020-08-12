import Page from 'flarum/components/Page';
import AdapterCard from "./AdapterCard";
import RequirementCard from "./RequirementCard";

export default class FilesystemPage extends Page {
    init() {
        super.init();

        this.adapters = app.data.settings['fof-filesystem-adapters'] || {};
        this.requested = app.data.settings['fof-filesystem-requirements'] || {};
        this.adaptersEnabled = m.prop((app.data.settings['fof-filesystem-adapters-enabled'] || '').split(','));

        // Only needed in UX, so lets hack it in.
        this.icons = {
            'local': 'fas fa-hdd',
            'aliyun': null,
            'azure': 'fab fa-microsoft',
            'aws' : 'fab fa-aws',
            'dospaces': 'fab fa-digital-ocean',
            'dropbox': 'fab fa-dropbox',
            'ftp': null,
            'gridfs': null,
            'rackspace': null,
            'sftp': null,
            'webdav': null
        };
    }
    view() {
        return m('div', {className: 'FilesystemsPage'}, [
          m('div', {className: 'container'}, [
            m('h3', {}, app.translator.trans('fof-filesystem.admin.requested-list')),
            this.requestedList(),
            m('h3', {}, app.translator.trans('fof-filesystem.admin.adapters-list')),
            this.adaptersList()
          ])
        ]);
    }

    requestedList() {
      return m('div', {className: 'ExtensionsPage-list'}, m('div', {className: 'container'},
        m('ul', {className: 'Requirement ExtensionList'}, this.requiredCards())
      ));
    }

    requiredCards() {
      const items = [];

      for (let requested of this.requested) {
        items.push(RequirementCard.component({requested, adapters: this.adapters}))
      }

      return items;
    }

    adaptersList() {
        return m('div', {className: 'ExtensionsPage-list'}, m('div', {className: 'container'},
            m('ul', {className: 'Adapters ExtensionList'}, this.adapterCards())
        ));
    }

    adapterCards() {
        const items = [];

        for (let i in this.adapters) {
            const adapter = this.adapters[i];
            const icon = adapter['icon'] || this.icons[adapter['name']] || 'fas fa-archive';

            items.push(AdapterCard.component({
              adapter, icon,
              ontoggle: (enabled => this.adapterToggled(adapter.name))
            }));
        }

        return items;
    }

    adapterToggled(adapter) {
      let current = this.adaptersEnabled();
      const enabled = current.indexOf(adapter) !== -1;

      if (enabled) {
        current.splice(current.indexOf(adapter), 1);
      } else {
        current.push(adapter);
      }

      this.adaptersEnabled(current);

      return current;
    }

    config() {
    }
}
