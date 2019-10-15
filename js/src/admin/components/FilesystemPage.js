import Page from 'flarum/components/Page';
import AdapterCard from "./AdapterCard";

export default class FilesystemPage extends Page {
    init() {
        super.init();

        this.adapters = app.data.settings['fof-filesystem-drivers.adapters'] || {};

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

            this.adaptersList()
        ]);
    }

    adaptersList() {
        return m('div', {className: 'ExtensionsPage-list'}, m('div', {className: 'container'},
            m('ul', {className: 'Adapters ExtensionList'}, this.adapterCards())
        ));
    }

    adapterCards() {
        const items = [];

        for (const adapter in this.adapters) {
            const settings = this.adapters[adapter];
            const icon = this.icons[adapter] || 'fas fa-archive';

            items.push(AdapterCard.component({adapter, settings, icon}));
        }

        return items;
    }

    config() {
    }
}
