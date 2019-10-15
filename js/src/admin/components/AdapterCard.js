import Component from 'flarum/Component';
import ItemList from "flarum/utils/ItemList";
import Dropdown from "flarum/components/Dropdown";
import Button from 'flarum/components/Button';
import AdapterSettingsModal from './AdapterSettingsModal';
import RequiredPackageModal from './RequiredPackageModal';
import icon from 'flarum/helpers/icon';
import saveSettings from 'flarum/utils/saveSettings';

export default class AdapterCard extends Component {
    init() {
        this.adapter = this.props.adapter;
        this.settings = this.props.settings;
        this.icon = this.props.icon;
        this.available = !!this.props.settings.available;
        this.adaptersEnabled = m.prop((app.data.settings['flagrow-backup.adapters.enabled'] || '').split(','));
    }

    view() {
        const controls = this.controls();

        return <li className={'ExtensionListItem ' + (!this.available ? 'disabled' : '')}>
            <div className="ExtensionListItem-content">
                      <span className="ExtensionListItem-icon ExtensionIcon" onclick={() => this.available ? this.settingsModal() : null}>
                          {icon(this.icon)}
                      </span>
                {!controls.isEmpty() ? (
                    <Dropdown
                        className="ExtensionListItem-controls"
                        buttonClassName="Button Button--icon Button--flat"
                        menuClassName="Dropdown-menu--right"
                        icon="fas fa-ellipsis-h">
                        {controls.toArray()}
                    </Dropdown>
                ) : ''}
                <label className="ExtensionListItem-title">
                    <input type="checkbox" checked={this.isEnabled(this.adapter)} onclick={this.toggle.bind(this, this.adapter)}/> {' '}
                    {app.translator.trans('flagrow-backup.admin.adapters.' + this.adapter)}
                </label>
            </div>
        </li>;
    }

    isEnabled(adapter) {
        return this.adaptersEnabled().indexOf(adapter) >= 0;
    }

    controls() {
        const items = new ItemList;

        if (! this.available) {
            items.add('required-package', Button.component({
                icon: 'fas fa-cogs',
                children: app.translator.trans('flagrow-backup.admin.required_package_button'),
                onclick: () => app.modal.show(new RequiredPackageModal({
                    adapter: this.adapter
                }))
            }));

            return items;
        }

        items.add('settings', Button.component({
            icon: 'fas fa-cogs',
            children: app.translator.trans('flagrow-backup.admin.settings_button'),
            onclick: () => this.settingsModal()
        }));

        return items;
    }

    settingsModal() {
        app.modal.show(new AdapterSettingsModal({
            adapter: this.adapter,
            settings: this.settings
        }))
    }

    toggle(adapter) {
        const current = this.adaptersEnabled();
        const foundAt = current.indexOf(adapter);

        // found
        if (foundAt >= 0) {
            current.splice(foundAt, 1);
        } else {
            current.push(adapter);
        }

        this.adaptersEnabled(current);
        saveSettings({
            'flagrow-backup.adapters.enabled':
                current.filter(tmp => tmp.length > 0).join(',')
        });
    }
}
