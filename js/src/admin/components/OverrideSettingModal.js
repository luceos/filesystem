import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';
import ItemList from "flarum/utils/ItemList";
import AdapterSettingsModal from "./AdapterSettingsModal";

export default class OverrideSettingModal extends AdapterSettingsModal
{
  init() {
    super.init();

    this.requested = this.props.requested;
  }

  isRequired(rules) {
    return false;
  }

  fieldName(key) {
    return this.requested.settingKey + '-' + this.adapter + '-' + key;
  }
}
