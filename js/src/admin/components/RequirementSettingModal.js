import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import ItemList from "flarum/utils/ItemList";
import Select from 'flarum/components/Select';

export default class RequirementSettingModal extends SettingsModal {
  init() {
    super.init();

    this.requested = this.props.requested;
    this.adapters = {};
    for (let adapter of this.props.adapters) {
      if (! adapter.installed) {
        continue;
      }
      if (this.requested.public === true && adapter.public === false) {
        continue;
      }
      this.adapters[adapter.name] = app.translator.trans('fof-filesystem.admin.adapters.' + adapter.name);
    }
  }
  title() {
    return app.translator.trans('fof-filesystem.admin.requested-driver-modal.title', {requested: this.requested.title});
  }


  form() {
    const fields = this.buildFields();

    return fields.toArray();
  }

  buildFields() {
    const items = new ItemList;

    items.add('adapter',
      m('div', { className: 'Form-group' }, [
        m('label', {}, app.translator.trans('fof-filesystem.admin.requested-driver-modal.adapter')),
        Select.component({
          options: this.adapters,
          value: this.requested.default,
          onchange: this.setting(this.requested.settingKey)
        }),
      ])
    );

    return items;
  }
}
