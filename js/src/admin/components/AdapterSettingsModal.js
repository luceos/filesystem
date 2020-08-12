import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';
import ItemList from "flarum/utils/ItemList";

export default class AdapterSettingsModal extends SettingsModal {
    init() {
        super.init();

        this.adapter = this.props.adapter.name;
        this.rules = this.props.adapter.rules;
    }

    title() {
        return app.translator.trans('fof-filesystem.admin.adapter-settings-modal.title', {adapter: this.adapter});
    }

    form() {
        const fields = this.buildFields();

        return fields.toArray();
    }

    buildFields() {
        const items = new ItemList;

        for(const key in this.rules) {
            let field = null;

            const rules = this.rules[key].split('|');

            for (let rule of rules) {
                if (! field && rule + 'Field' in this) {
                    field = this[rule + 'Field'](key, rules);
                }
            }

            if (field) {
                items.add(key,
                    m('div', { className: 'Form-group ' + (this.isRequired(rules) ? 'required' : '') }, [
                        app.translator.translations[this.fieldTranslatorKey(key, 'label')] ?
                            m('label', {}, app.translator.trans(this.fieldTranslatorKey(key, 'label'))) : '',
                        field,
                        m('span', app.translator.trans(this.fieldTranslatorKey(key, 'description')))
                    ]));
            }
        }

        return items;
    }

    stringField(key, rules) {
        return m('input', {
            id: this.fieldName(key),
            className: 'FormControl',
            bidi: this.setting(this.fieldName(key)),
            required: this.isRequired(rules)
        });
    }

    intField(key, rules) {
        return m('input', {
            id: this.fieldName(key),
            type: "number",
            className: 'FormControl',
            bidi: this.setting(this.fieldName(key))
        });
    }

    boolField(key, rules) {
        return Switch.component({
            state: this.setting(this.fieldName(key))(),
            onchange: this.setting(this.fieldName(key)),
            children: app.translator.trans(this.fieldTranslatorKey(key, 'toggle'))
        });
    }

    isRequired(rules) {
        return rules.indexOf('required') >= 0;
    }

    fieldTranslatorKey(key, type) {
        return 'fof-filesystem.admin.settings.' + this.adapter + '.' + key + '.' + type;
    }

    fieldName(key) {
        return 'fof-filesystem.admin.settings.' + this.adapter + '.' + key;
    }
}
