import Component from 'flarum/Component';
import ItemList from "flarum/utils/ItemList";
import Dropdown from "flarum/components/Dropdown";
import Button from 'flarum/components/Button';
import icon from 'flarum/helpers/icon';
import RequirementAdapterModal from "./RequirementAdapterModal";
import OverrideSettingModal from "./OverrideSettingModal";

export default class RequirementCard extends Component {
    init() {
        this.requested = this.props.requested;
        this.adapters = this.props.adapters;
    }

    view() {
        const controls = this.controls();

        return <li className={'ExtensionListItem '}>
            <div className="ExtensionListItem-content">
                <span className="ExtensionListItem-icon ExtensionIcon" style={this.requested.icon} onClick={() => this.settingsModal()}>
                  {this.requested.icon ? icon(this.requested.icon.name) : ''}
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
                    <input type="checkbox" checked={this.requested.uses !== null} disabled/>
                    {' '}{this.requested.extension ? this.requested.extension + ': ' : ''}{this.requested.title}
                    {this.requested.description ? <div>{this.requested.description }</div> : ''}
                </label>
            </div>
        </li>;
    }

    controls() {
        const items = new ItemList;

        items.add('driver', Button.component({
          icon: 'fas fa-box',
          children: app.translator.trans('fof-filesystem.admin.button.driver'),
          onclick: () => this.settingsModal()
        }));

        if (this.requested.uses) {
          items.add('override-settings', Button.component({
            icon: 'fas fa-gear',
            children: app.translator.trans('fof-filesystem.admin.button.override_settings'),
            onclick: () => this.overrideSettingsModal()
          }));
        }

        return items;
    }

    overrideSettingsModal() {
      const adapter = this.props.adapters[this.requested.uses];

      app.modal.show(OverrideSettingModal, {
        requested: this.requested,
        adapter: adapter
      });
    }

    settingsModal() {
        app.modal.show(RequirementAdapterModal, {
          requested: this.requested,
          adapters: this.props.adapters
        });
    }

    toggle(adapter) {
        // const current = this.adaptersEnabled();
        // const foundAt = current.indexOf(adapter);
        //
        // // found
        // if (foundAt >= 0) {
        //     current.splice(foundAt, 1);
        // } else {
        //     current.push(adapter);
        // }
        //
        // this.adaptersEnabled(current);
        // saveSettings({
        //     'fof-filesystem.adapters.enabled': current.filter(tmp => tmp.length > 0).join(',')
        // });
    }
}
