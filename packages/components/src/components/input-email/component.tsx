import { Component, Element, h, Host, JSX, Prop, State, Watch } from '@stencil/core';
import { ButtonProps } from '../../types/button-link';
import { Stringified } from '../../types/common';

import { InputTypeOnDefault, InputTypeOnOff } from '../../types/input/types';
import { propagateFocus } from '../../utils/reuse';
import { propagateSubmitEventToForm } from '../form/controller';
import { KoliBriHorizontalIcon } from '../../types/icon';
import { getRenderStates } from '../input/controller';
import { InputEmailController } from './controller';
import { ComponentApi, States } from './types';
import { validateMultiple } from '../../types/props';
import { nonce } from '../../utils/dev.utils';

/**
 * @slot default Die Beschriftung des Eingabefeldes.
 */
@Component({
	tag: 'kol-input-email',
	styleUrls: {
		default: './style.css',
	},
	shadow: true,
})
export class KolInputEmail implements ComponentApi {
	@Element() private readonly host?: HTMLKolInputEmailElement;
	private ref?: HTMLInputElement;

	private readonly catchRef = (ref?: HTMLInputElement) => {
		this.ref = ref;
		propagateFocus(this.host, this.ref);
	};

	private readonly onKeyUp = (event: KeyboardEvent) => {
		if (event.code === 'Enter') {
			propagateSubmitEventToForm({
				form: this.host,
				ref: this.ref,
			});
		} else {
			this.controller.onFacade.onChange(event);
		}
	};

	public render(): JSX.Element {
		const { ariaDescribedBy } = getRenderStates(this.state);
		const hasList = Array.isArray(this.state._list) && this.state._list.length > 0;
		return (
			<Host
				class={{
					'has-value': this.state._hasValue,
				}}
			>
				<kol-input
					class={{
						email: true,
					}}
					_alert={this.state._alert}
					_disabled={this.state._disabled}
					_error={this.state._error}
					_hideLabel={this.state._hideLabel}
					_hint={this.state._hint}
					_icon={this.state._icon}
					_id={this.state._id}
					_list={this.state._list}
					_readOnly={this.state._readOnly}
					_required={this.state._required}
					_smartButton={this.state._smartButton}
					_touched={this.state._touched}
					onClick={() => this.ref?.focus()}
				>
					<span slot="label">
						<slot />
					</span>
					<input
						ref={this.catchRef}
						title=""
						accessKey={this.state._accessKey}
						aria-describedby={ariaDescribedBy.length > 0 ? ariaDescribedBy.join(' ') : undefined}
						aria-labelledby={`${this.state._id}-label`}
						autoCapitalize="off"
						autoComplete={this.state._autoComplete}
						autoCorrect="off"
						disabled={this.state._disabled}
						multiple={this.state._multiple}
						id={this.state._id}
						list={hasList ? `${this.state._id}-list` : undefined}
						maxlength={this.state._maxLength}
						name={this.state._name}
						pattern={this.state._pattern}
						placeholder={this.state._placeholder}
						readOnly={this.state._readOnly}
						required={this.state._required}
						size={this.state._size}
						slot="input"
						spellcheck="false"
						// title={this.state._title}
						type="email"
						value={this.state._value as string}
						{...this.controller.onFacade}
						onKeyUp={this.onKeyUp}
					/>
				</kol-input>
			</Host>
		);
	}

	private readonly controller: InputEmailController;

	/**
	 * Gibt an, mit welcher Tastenkombination man das Input auslösen oder fokussieren kann.
	 */
	@Prop() public _accessKey?: string;

	/**
	 * Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt.
	 */
	@Prop({ mutable: true, reflect: true }) public _alert?: boolean = true;

	/**
	 * Gibt an, ob das Eingabefeld autovervollständigt werden kann.
	 */
	@Prop() public _autoComplete?: InputTypeOnOff;

	/**
	 * Setzt das Feld in einen inaktiven Zustand, in dem es keine Interaktion erlaubt.
	 */
	@Prop({ reflect: true }) public _disabled?: boolean;

	/**
	 * Gibt den Text für eine Fehlermeldung an.
	 */
	@Prop() public _error?: string;

	/**
	 * Versteckt das sichtbare Label des Elements.
	 */
	@Prop({ reflect: true }) public _hideLabel?: boolean;

	/**
	 * Gibt den Hinweistext an.
	 */
	@Prop() public _hint?: string = '';

	/**
	 * Ermöglicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes.
	 */
	@Prop() public _icon?: Stringified<KoliBriHorizontalIcon>;

	/**
	 * Gibt die technische ID des Eingabefeldes an.
	 */
	@Prop() public _id?: string;

	/**
	 * Gibt die Liste der Vorschlagswörter an.
	 */
	@Prop() public _list?: Stringified<string[]>;

	/**
	 * Gibt an, wie viele Zeichen man maximal eingeben kann.
	 */
	@Prop() public _maxLength?: number;

	/**
	 * Gibt an, ob mehrere Werte eingegeben werden können.
	 */
	@Prop({ reflect: true }) public _multiple?: boolean;

	/**
	 * Gibt den technischen Namen des Eingabefeldes an.
	 */
	@Prop() public _name?: string;

	/**
	 * Gibt die EventCallback-Funktionen für das Input-Event an.
	 */
	@Prop() public _on?: InputTypeOnDefault;

	/**
	 * Gibt ein Prüfpattern für das Eingabefeld an.
	 */
	@Prop() public _pattern?: string;

	/**
	 * Gibt den Platzhalter des Eingabefeldes an, wenn es leer ist.
	 */
	@Prop() public _placeholder?: string;

	/**
	 * Setzt das Eingabefeld in den schreibgeschützten Modus.
	 */
	@Prop({ reflect: true }) public _readOnly?: boolean;

	/**
	 * Macht das Eingabeelement zu einem Pflichtfeld.
	 */
	@Prop({ reflect: true }) public _required?: boolean;

	/**
	 * Setzt die Breite des Eingabefeldes in Buchstabenbreiten.
	 */
	@Prop() public _size?: number;

	/**
	 * Ermöglicht eine Schaltfläche ins das Eingabefeld mit einer beliebigen Aktion zu einzufügen (ohne label).
	 */
	@Prop() public _smartButton?: ButtonProps;

	/**
	 * Gibt an, welchen Tab-Index dieses Input hat.
	 */
	@Prop() public _tabIndex?: number;

	/**
	 * Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/berührt wurde.
	 */
	@Prop({ mutable: true, reflect: true }) public _touched?: boolean = false;

	/**
	 * Gibt den Wert des Eingabefeldes an.
	 */
	@Prop() public _value?: string;

	@State() public state: States = {
		_autoComplete: 'off',
		_id: nonce(), // ⚠ required
		_hasValue: false,
		_list: [],
	};

	public constructor() {
		this.controller = new InputEmailController(this, 'email', this.host);
	}

	@Watch('_accessKey')
	public validateAccessKey(value?: string): void {
		this.controller.validateAccessKey(value);
	}

	@Watch('_alert')
	public validateAlert(value?: boolean): void {
		this.controller.validateAlert(value);
	}

	@Watch('_autoComplete')
	public validateAutoComplete(value?: InputTypeOnOff): void {
		this.controller.validateAutoComplete(value);
	}

	@Watch('_disabled')
	public validateDisabled(value?: boolean): void {
		this.controller.validateDisabled(value);
	}

	@Watch('_error')
	public validateError(value?: string): void {
		this.controller.validateError(value);
	}

	@Watch('_hideLabel')
	public validateHideLabel(value?: boolean): void {
		this.controller.validateHideLabel(value);
	}

	@Watch('_hint')
	public validateHint(value?: string): void {
		this.controller.validateHint(value);
	}

	@Watch('_icon')
	public validateIcon(value?: Stringified<KoliBriHorizontalIcon>): void {
		this.controller.validateIcon(value);
	}

	@Watch('_id')
	public validateId(value?: string): void {
		this.controller.validateId(value);
	}

	@Watch('_list')
	public validateList(value?: Stringified<string[]>): void {
		this.controller.validateList(value);
	}

	@Watch('_maxLength')
	public validateMaxLength(value?: number): void {
		this.controller.validateMaxLength(value);
	}

	@Watch('_multiple')
	public validateMultiple(value?: boolean): void {
		validateMultiple(this, value);
	}

	@Watch('_name')
	public validateName(value?: string): void {
		this.controller.validateName(value);
	}

	@Watch('_on')
	public validateOn(value?: InputTypeOnDefault): void {
		this.controller.validateOn(value);
	}

	@Watch('_pattern')
	public validatePattern(value?: string): void {
		this.controller.validatePattern(value);
	}

	@Watch('_placeholder')
	public validatePlaceholder(value?: string): void {
		this.controller.validatePlaceholder(value);
	}

	@Watch('_readOnly')
	public validateReadOnly(value?: boolean): void {
		this.controller.validateReadOnly(value);
	}

	@Watch('_required')
	public validateRequired(value?: boolean): void {
		this.controller.validateRequired(value);
	}

	@Watch('_size')
	public validateSize(value?: number): void {
		this.controller.validateSize(value);
	}

	@Watch('_smartButton')
	public validateSmartButton(value?: ButtonProps | string): void {
		this.controller.validateSmartButton(value);
	}

	@Watch('_tabIndex')
	public validateTabIndex(value?: number): void {
		this.controller.validateTabIndex(value);
	}

	@Watch('_touched')
	public validateTouched(value?: boolean): void {
		this.controller.validateTouched(value);
	}

	@Watch('_value')
	public validateValue(value?: string): void {
		this.controller.validateValue(value);
	}

	public componentWillLoad(): void {
		this._alert = this._alert === true;
		this._touched = this._touched === true;
		this.controller.componentWillLoad();

		this.state._hasValue = !!this.state._value;
		this.controller.addValueChangeListener((v) => (this.state._hasValue = !!v));
	}
}
