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
        this.icon = this.props.icon;
        this.available = !!this.adapter['installed'];
        this.enabled = !!this.adapter['enabled'];
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
                    <input type="checkbox" checked={this.enabled} disabled={this.adapter.inUse} onclick={this.toggle.bind(this, this.adapter['name'])}/> {' '}
                    {app.translator.trans('fof-filesystem.admin.adapters.' + this.adapter['name'])}
                </label>
            </div>
        </li>;
    }

    controls() {
        const items = new ItemList;

        if (! this.available) {
            items.add('required-package', Button.component({
                icon: 'fas fa-cogs',
                children: app.translator.trans('fof-fileysystem.admin.button.required_package'),
                onclick: () => app.modal.show(RequiredPackageModal,{
                    adapter: this.adapter
                })
            }));

            return items;
        }

        items.add('settings', Button.component({
            icon: 'fas fa-cogs',
            children: app.translator.trans('fof-filesystem.admin.button.settings'),
            onclick: () => this.settingsModal()
        }));

        return items;
    }

    settingsModal() {
        app.modal.show(AdapterSettingsModal, {
            adapter: this.adapter
        });
    }

    toggle(adapter) {
      const enabled = this.props.ontoggle();

      saveSettings({
          'fof-filesystem-adapters-enabled': enabled.filter(tmp => tmp.length > 0).join(',')
      });
    }
}
