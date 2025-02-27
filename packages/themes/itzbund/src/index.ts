import { KoliBri } from '@public-ui/schema';

// Informationstechnikzentrum Bund
export const ITZBund = KoliBri.createTheme('itzbund', {
	GLOBAL: `:host {
		--border-color: var(--color-anthrazit);
		--border-radius: 0.125rem;
		--color-anthrazit: #333;
		--color-jade: #f3f7fb;
		--color-weiss: #fff;
		--color-petrol: #007a89;
		--color-achat: #0b4d59;
		--color-teal: #056773;
		--color-fluorit: #66ddec;
		--color-rotton: rgba(188, 0, 0, 1);
		--color-rotton-20: rgba(188, 0, 0, 0.2);
		--color-gras: #138510;
		--color-warn: #f0541e;
		--color-blut: var(--color-rotton);
		--color-input-bg-default: #e8edf2;
		--gradient-petrol-achat: linear-gradient(
			67deg,
			var(--color-petrol),
			var(--color-achat)
		);
		--color-citrin: #d4c912;
		--color-umber: #494500;
		--color-gelb: #fff443;
		--color-lichtgelb: #eeff6c;
		--gradient-gelb-citrin: linear-gradient(
			67deg,
			var(--color-gelb),
			var(--color-citrin)
		);
		--font-family-sans: BundesSans Web;
		--font-family-serif: BundesSerif Web;
		--font-size: 16px;
		--spacing: 0.125em;
		--kolibri-spacing: calc(2 * var(--spacing));
	}
	:host {
		font-family: var(--font-family); /* font-size: var(--font-size); */
	}
	* {
		box-sizing: border-box;
	}
	*:not(i) {
		font-family: var(--font-family);
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--font-family);
		font-size: var(--font-size);
		margin: 0;
		padding: 0;
	}
	*[tabindex]:focus,
	a:focus,
	button:focus,
	input:focus,
	select:focus,
	summary:focus,
	textarea:focus {
		cursor: pointer;
		outline-color: var(--color-petrol);
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 3px;
		transition: outline-offset 0.2s linear;
	}
	kol-span-wc,
	kol-span-wc > span {
		gap: 0.25em;
	}
	kol-tooltip .area {
		background-color: #f2f2f2;
	}
	kol-tooltip #arrow {
		background-color: #626262;
	}
	kol-tooltip kol-span-wc {
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: 2px;
		border: 1px solid #626262;
	}`,
	'KOL-BUTTON': `button {
		background-color: transparent;
	}
	a,
	button {
		border-radius: 2rem !important;
		font-family: var(--font-family-sans);
		text-transform: uppercase;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		border-radius: 2rem;
		border-style: solid;
		min-width: 44px;
		min-height: 44px;
		border-width: var(--spacing);
		font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
		padding: 0 1rem;
	}
	.button a.icon-only > kol-span-wc,
	.button button.icon-only > kol-span-wc {
		padding: 0 0.5rem;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		gap: 0.25em;
		transition-delay: 0;
		transition-timing-function: ease-in-out;
		transition-duration: 0.5s;
		transition-property: background, color, border-color;
	}
	kol-link-wc.primary > a > kol-span-wc,
	kol-link-wc.primary > a:disabled:hover > kol-span-wc,
	button.primary > kol-span-wc,
	button.primary:disabled:hover > kol-span-wc {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: var(--color-weiss);
	}
	kol-link-wc.primary > a:hover > kol-span-wc,
	kol-link-wc.primary > a:focus > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.primary:focus > kol-span-wc {
		background-color: var(--color-achat);
		border-color: var(--color-achat);
	}
	kol-link-wc.secondary > a > kol-span-wc,
	kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
	button.secondary > kol-span-wc,
	button.secondary:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-petrol);
		color: var(--color-petrol);
	}
	kol-link-wc.secondary > a:hover > kol-span-wc,
	kol-link-wc.secondary > a:focus > kol-span-wc,
	button.secondary:hover > kol-span-wc,
	button.secondary:focus > kol-span-wc {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: var(--color-weiss);
	}
	kol-link-wc.normal > a > kol-span-wc,
	kol-link-wc.normal > a:disabled:hover > kol-span-wc,
	button.normal > kol-span-wc,
	button.normal:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-anthrazit);
		color: var(--color-anthrazit);
	}
	kol-link-wc.normal > a:hover > kol-span-wc,
	kol-link-wc.normal > a:focus > kol-span-wc,
	button.normal:hover > kol-span-wc,
	button.normal:focus > kol-span-wc {
		background-color: var(--color-anthrazit);
		border-color: var(--color-anthrazit);
		color: var(--color-weiss);
	}
	kol-link-wc.danger > a > kol-span-wc,
	kol-link-wc.danger > a:disabled:hover > kol-span-wc,
	button.danger > kol-span-wc,
	button.danger:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-blut);
		color: var(--color-blut);
	}
	kol-link-wc.danger > a:hover > kol-span-wc,
	kol-link-wc.danger > a:focus > kol-span-wc,
	button.danger:hover > kol-span-wc,
	button.danger:focus > kol-span-wc {
		background-color: var(--color-blut);
		border-color: var(--color-blut);
		color: var(--color-weiss);
	}
	kol-link-wc.ghost > a > kol-span-wc,
	kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
	button.ghost > kol-span-wc,
	button.ghost:disabled:hover > kol-span-wc {
		background-color: var(--color-ghost);
		border-color: transparent;
		color: var(--color-anthrazit);
	}
	kol-link-wc.ghost > a:hover > kol-span-wc,
	kol-link-wc.ghost > a:focus > kol-span-wc,
	button.ghost:hover > kol-span-wc,
	button.ghost:focus > kol-span-wc {
		background-color: var(--color-ghost);
		border-color: var(--color-ghost);
		color: var(--color-anthrazit);
	}`,
	'KOL-BUTTON-GROUP': `:host > kol-button-group-wc {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}`,
	'KOL-LINK-BUTTON': `a,
	button {
		border-radius: 2rem !important;
		font-family: var(--font-family-sans);
		text-transform: uppercase;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		border-radius: 2rem;
		border-style: solid;
		min-width: 44px;
		min-height: 44px;
		border-width: var(--spacing);
		font-size: inherit; /*line-height: 1.25em;*/ /*padding: calc(4 * var(--spacing));*/
		padding: 0 1rem;
	}
	.button a.icon-only > kol-span-wc,
	.button button.icon-only > kol-span-wc {
		padding: 0 0.5rem;
	}
	a > kol-span-wc,
	button > kol-span-wc {
		gap: 0.25em;
		transition-delay: 0;
		transition-timing-function: ease-in-out;
		transition-duration: 0.5s;
		transition-property: background, color, border-color;
	}
	kol-link-wc.primary > a > kol-span-wc,
	kol-link-wc.primary > a:disabled:hover > kol-span-wc,
	button.primary > kol-span-wc,
	button.primary:disabled:hover > kol-span-wc {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: var(--color-weiss);
	}
	kol-link-wc.primary > a:hover > kol-span-wc,
	kol-link-wc.primary > a:focus > kol-span-wc,
	button.primary:hover > kol-span-wc,
	button.primary:focus > kol-span-wc {
		background-color: var(--color-achat);
		border-color: var(--color-achat);
	}
	kol-link-wc.secondary > a > kol-span-wc,
	kol-link-wc.secondary > a:disabled:hover > kol-span-wc,
	button.secondary > kol-span-wc,
	button.secondary:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-petrol);
		color: var(--color-petrol);
	}
	kol-link-wc.secondary > a:hover > kol-span-wc,
	kol-link-wc.secondary > a:focus > kol-span-wc,
	button.secondary:hover > kol-span-wc,
	button.secondary:focus > kol-span-wc {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: var(--color-weiss);
	}
	kol-link-wc.normal > a > kol-span-wc,
	kol-link-wc.normal > a:disabled:hover > kol-span-wc,
	button.normal > kol-span-wc,
	button.normal:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-anthrazit);
		color: var(--color-anthrazit);
	}
	kol-link-wc.normal > a:hover > kol-span-wc,
	kol-link-wc.normal > a:focus > kol-span-wc,
	button.normal:hover > kol-span-wc,
	button.normal:focus > kol-span-wc {
		background-color: var(--color-anthrazit);
		border-color: var(--color-anthrazit);
		color: var(--color-weiss);
	}
	kol-link-wc.danger > a > kol-span-wc,
	kol-link-wc.danger > a:disabled:hover > kol-span-wc,
	button.danger > kol-span-wc,
	button.danger:disabled:hover > kol-span-wc {
		background-color: var(--color-weiss);
		border-color: var(--color-blut);
		color: var(--color-blut);
	}
	kol-link-wc.danger > a:hover > kol-span-wc,
	kol-link-wc.danger > a:focus > kol-span-wc,
	button.danger:hover > kol-span-wc,
	button.danger:focus > kol-span-wc {
		background-color: var(--color-blut);
		border-color: var(--color-blut);
		color: var(--color-weiss);
	}
	kol-link-wc.ghost > a > kol-span-wc,
	kol-link-wc.ghost > a:disabled:hover > kol-span-wc,
	button.ghost > kol-span-wc,
	button.ghost:disabled:hover > kol-span-wc {
		background-color: var(--color-ghost);
		border-color: transparent;
		color: var(--color-anthrazit);
	}
	kol-link-wc.ghost > a:hover > kol-span-wc,
	kol-link-wc.ghost > a:focus > kol-span-wc,
	button.ghost:hover > kol-span-wc,
	button.ghost:focus > kol-span-wc {
		background-color: var(--color-ghost);
		border-color: var(--color-ghost);
		color: var(--color-anthrazit);
	}`,
	'KOL-PAGINATION': `:host {
		display: grid;
		gap: 1rem;
	}
	:host > div {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5em;
	}
	button > kol-span-wc {
		cursor: not-allowed;
		background-color: var(--color-achat);
		border-color: var(--color-achat);
		border-radius: 2rem;
		border-style: solid;
		color: var(--color-weiss);
		min-width: 44px;
		min-height: 44px;
		border-width: var(--spacing);
		font-size: inherit;
		font-weight: bold;
		line-height: 1.25em;
		padding: calc(4 * var(--spacing));
		text-decoration: underline;
	}`,
	'KOL-BUTTON-LINK': `kol-link-wc a,
	kol-button-wc button {
		text-decoration-line: none;
	}
	a,
	button {
		background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
		background-repeat: no-repeat;
		background-position: left 0 bottom 0;
		background-size: 25% 0.25ex;
		border-radius: var(--spacing);
		color: var(--color-petrol);
		font-family: var(--font-family-sans);
		font-size: inherit;
		text-transform: uppercase;
		transition-delay: 0;
		transition-timing-function: ease-in-out;
		transition-duration: 0.5s;
		transition-property: background, color, border-color;
	}
	a:focus,
	a:hover,
	button:focus,
	button:hover {
		background-size: 100% 0.25ex;
		color: var(--color-achat);
	}
	a > kol-span-wc,
	button > kol-span-wc {
		gap: 0.25em;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	a.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
	}
	a.skip:focus {
		background-color: white;
		box-shadow: 0 0 0.5rem 0.5rem white;
		left: unset;
		position: unset;
	}`,
	'KOL-INPUT-TEXT': `input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,
	'KOL-INPUT-PASSWORD': `input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,
	'KOL-INPUT-NUMBER': `input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,
	'KOL-INPUT-EMAIL': `input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,
	'KOL-INPUT-FILE': `input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,
	'KOL-TEXTAREA': `textarea:hover,
	textarea:focus {
		border-color: var(--default-border-hover);
		outline-color: var(--primary) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--default-letter);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	textarea.error {
		background-color: var(--danger-light) !important;
		border-color: var(--danger);
	}
	textarea {
		width: 100%;
		color: var(--default-letter);
		border-width: 1px;
		border-style: solid;
		line-height: 24px;
		font-size: 16px;
		border-color: var(--kolibri-color-normal);
		border-radius: 0;
		background-color: #e8edf2 !important;
	}
	textarea::placeholder {
		color: var(--default-border);
	}
	textarea:read-only,
	textarea:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
		background-color: var(--background-light-grey);
	}
	.kol-required span::after {
		content: "*";
	}
	kol-alert {
		margin-top: var(--spacing);
		display: block;
	}`,
	'KOL-ALERT': `:host {
		--kolibri-border-width: 1px;
	}
	:host .default {
		border-color: var(--color-anthrazit);
	}
	.default .heading-icon {
		background-color: var(--color-anthrazit);
	}
	:host .error {
		border-color: var(--color-rotton);
	}
	.error .heading-icon {
		background-color: var(--color-rotton);
	}
	:host .info {
		border-color: var(--color-petrol);
	}
	.info .heading-icon {
		background-color: var(--color-petrol);
	}
	:host .success {
		border-color: var(--color-gras);
	}
	:host .success .heading-icon {
		background-color: var(--color-gras);
	}
	:host .warning {
		border-color: var(--color-warn);
	}
	.warning .heading-icon {
		background-color: var(--color-warn);
	}`,
	'KOL-HEADING': `h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: 1em;
		margin: 0;
		padding: 0;
	}
	h1 {
		font-family: var(--font-family-serif);
		font-size: 54px;
		font-weight: bold;
	}
	h2 {
		font-family: var(--font-family-serif);
		font-size: 32px;
		font-weight: bold;
	}
	h3 {
		font-family: var(--font-family-serif);
		font-size: 26px;
		font-weight: bold;
	}
	h4 {
		font-family: var(--font-family-serif);
		font-size: 20px;
		font-weight: normal;
	}
	h5 {
		font-family: var(--font-family-serif);
		font-size: 17px;
		font-weight: bold;
	}
	h6 {
		font-family: var(--font-family-sans);
		font-size: 17px;
		font-weight: normal;
	}`,
	'KOL-BADGE': `:host {
		display: inline-block;
	}
	:host > span {
		border-radius: 0.3125rem;
		display: inline-flex;
		line-height: 1.25rem;
	}
	:host > span kol-button-wc {
		border-left: 1px solid rgba(0, 0, 0, 0.25);
	}
	:host > span kol-span-wc {
		padding: 0.25rem 0.5rem;
	}
	:host > span > kol-span-wc {
		align-items: center;
		font-style: normal;
		gap: 0.5rem;
	}
	:host > span > kol-span-wc > span {
		display: flex;
		gap: 0.25rem;
	}
	:host button {
		border-radius: 0 var(--spacing) var(--spacing) 0;
	}`,
	'KOL-INDENTED-TEXT': `:host > div {
		background: var(--color-white);
		border-left: none;
		box-shadow: -4px 0px 0px var(--color-petrol);
		padding: 0.25em 0.5em;
		width: 100%;
	}`,
	'KOL-LINK': `kol-link-wc a,
	kol-button-wc button {
		text-decoration-line: none;
	}
	a,
	button {
		background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);
		background-repeat: no-repeat;
		background-position: left 0 bottom 0;
		background-size: 25% 0.25ex;
		border-radius: var(--spacing);
		color: var(--color-petrol);
		font-family: var(--font-family-sans);
		font-size: inherit;
		text-transform: uppercase;
		transition-delay: 0;
		transition-timing-function: ease-in-out;
		transition-duration: 0.5s;
		transition-property: background, color, border-color;
	}
	a:focus,
	a:hover,
	button:focus,
	button:hover {
		background-size: 100% 0.25ex;
		color: var(--color-achat);
	}
	a > kol-span-wc,
	button > kol-span-wc {
		gap: 0.25em;
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
	a.skip {
		left: -99999px;
		overflow: hidden;
		position: absolute;
		z-index: 9999999;
	}
	a.skip:focus {
		background-color: white;
		box-shadow: 0 0 0.5rem 0.5rem white;
		left: unset;
		position: unset;
	}`,
	'KOL-BREADCRUMB': `li > span {
		font-weight: bold;
		text-transform: uppercase;
	}`,
	'KOL-SPIN': `.spin {
		display: inline-block;
		height: 1rem;
		position: relative;
		width: 3rem;
	}
	.spin span {
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
		border: 0.1rem solid rgb(255, 255, 255);
		border-radius: 50%;
		height: 0.8rem;
		width: 0.8rem;
		top: 0.1rem;
		position: absolute;
	}
	.spin span:nth-child(1) {
		background-color: #fc0;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin1;
		left: 0.1rem;
	}
	.spin span:nth-child(2) {
		background-color: #f00;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 0.1rem;
	}
	.spin span:nth-child(3) {
		background-color: #000;
		z-index: 1;
		animation: 2s ease 0s infinite normal none running spin2;
		left: 1.1rem;
	}
	.spin span:nth-child(4) {
		background-color: #666;
		z-index: 0;
		animation: 2s ease 0s infinite normal none running spin3;
		left: 2.1rem;
	}
	@keyframes spin1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes spin2 {
		0% {
			transform: translate(0px, 0px);
		}
		100% {
			transform: translate(1rem, 0px);
		}
	}
	@keyframes spin3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}`,
	'KOL-PROGRESS': `:host progress,
	:host span {
		display: block;
		height: 0px;
		overflow: hidden;
		width: 0px;
	}
	svg line:first-child,
	svg circle:first-child {
		fill: transparent;
		stroke: var(--color-fluorit);
	}
	svg line:last-child,
	svg circle:last-child {
		stroke: var(--color-achat);
		fill: transparent;
	}
	progress {
		display: none;
	}`,
	'KOL-SELECT': `select:hover,
	select:focus {
		border-color: var(--default-border-hover);
		outline-color: var(--primary) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--default-letter);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	select.error {
		background-color: var(--danger-light) !important;
		border-color: var(--danger);
	}
	select {
		width: 100%;
		color: var(--default-letter);
		border-width: 1px;
		border-style: solid;
		line-height: 24px;
		font-size: 16px;
		border-color: var(--kolibri-color-normal);
		border-radius: 0;
		background-color: #e8edf2 !important;
	}
	select:disabled {
		cursor: not-allowed;
		border-color: var(--border-default);
		background-color: var(--background-light-grey);
	}
	option {
		height: 2em;
		padding: 0.5em;
	}
	kol-alert {
		margin-top: var(--spacing);
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}`,
	'KOL-INPUT-COLOR': `input:hover,
	input:focus {
		border-color: var(--border-color) !important;
		border-radius: none !important;
		outline-color: var(--color-achat) !important;
		outline-offset: 0;
		outline-style: solid;
		outline-width: 1px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
		font-weight: bold;
	}
	input {
		cursor: pointer;
		width: 100%;
		color: var(--color-anthrazit);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-petrol);
		border-radius: 0;
		background-color: #e8edf2 !important;
		overflow: hidden;
		line-height: 24px;
		font-size: 16px;
	}
	.error input {
		background-color: var(--color-rotton-20) !important;
		border-color: var(--color-rotton) !important;
	}
	input:disabled {
		background-color: var(--color-input-bg-default);
		border-color: var(--border-color);
		cursor: not-allowed;
	}
	kol-alert {
		margin-top: calc(2 * var(--spacing));
		display: block;
	}
	.kol-required span::after {
		content: "*";
	}
	input::placeholder {
		font-style: italic;
	}`,
	'KOL-ACCORDION': `:host > div {
		font-family: var(--font-family);
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		display: grid;
		border-color: var(--kolibri-border-color);
		border-width: 1px;
		border-style: solid;
		border-radius: 0.25rem;
	}
	:host > div > kol-heading-wc {
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	:host > div > kol-heading-wc button {
		cursor: pointer;
		width: 100%;
		margin: 0;
		display: flex;
		gap: 0.5em;
		border: 0;
		align-items: center;
		overflow: hidden;
		font-size: inherit;
		line-height: 1.75em;
		background-color: transparent;
		padding: 0.5rem;
	}
	:host > div[part*="open"] > kol-heading-wc button {
		padding-bottom: 0;
	}
	:host > div[part*="open"] > kol-heading-wc button kol-icon {
		width: 1em;
	}
	:host > div div[part="header"],
	:host > div[part*="open"] div[part="content"] {
		margin: 0;
	}
	:host > div div[part="header"] {
		padding-left: 2rem;
	}
	:host > div[part*="open"] div[part="content"] {
		margin: 0;
		padding: 0 1rem 1rem 2.25rem;
	}
	:host > div > kol-heading-wc button kol-icon::part(icon) {
		color: var(--color-midnight);
	}
	button {
		cursor: pointer;
		font-weight: inherit;
		font-size: inherit;
		line-height: inherit;
	}
	:host > div > kol-heading-wc button kol-icon::part(close)::before {
		font-family: "Font Awesome 6 Free";
		content: "\\f077";
	}
	:host > div > kol-heading-wc button kol-icon::part(open)::before {
		font-family: "Font Awesome 6 Free";
		content: "\\f078";
	}`,
	'KOL-TABLE': `:host > div {
		overflow-x: auto;
		overflow-y: hidden;
	}
	:host > div:first-child {
		border-style: solid;
		border-width: 1px;
		border-color: var(--border-color);
	}
	table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
	}
	table,
	tr,
	th,
	td {
		border: 0 solid var(--border-color);
	}
	tr {
		border-top-width: 1px;
	}
	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
	th,
	td {
		border-right-width: 1px;
		padding: 0.25em 0.5em;
	}
	th {
		background-color: #eee;
	}
	th > div {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 0.25em;
	}
	:host > div.pagination {
		padding: 0.5em;
	}
	:host > div.pagination,
	:host > div.pagination > div:last-child {
		display: grid;
		align-items: center;
		justify-items: center;
		gap: 0.5em;
	}
	@media (min-width: 1024px) {
		:host > div.pagination,
		:host > div.pagination > div:last-child {
			grid-auto-flow: column;
		}
		:host > div.pagination kol-pagination {
			display: flex;
			gap: 1rem;
		}
	}`,
	'KOL-NAV': `:host .hidden {
		display: none;
	}
	:host > div > nav ul {
		list-style: none;
		margin: 0px;
		padding: 0px;
		border-radius: var(--border-radius);
		background-color: var(--color-petrol);
	}
	:host > div > nav ul > li {
		border-radius: var(--border-radius);
		overflow: hidden;
		padding: 0.125em;
	}
	:host > div > nav ul > li[part*="vertical"] + li {
		border-radius: 0;
		border-top: 0.1em dotted white;
	}
	:host > div > nav ul > li[part*="vertical selected"] {
		border-right: 0.375em solid var(--color-citrin);
	}
	:host > div > nav ul > li[part*="horizontal"] + li {
		border-radius: 0;
		border-left: 0.1em dotted white;
	}
	:host > div > nav ul > li[part*="horizontal selected"] {
		border-bottom: 0.375em solid var(--color-citrin);
	}
	:host > div > nav ul > li > div {
		height: 100%;
	}
	:host > div > nav kol-link-wc {
		width: 100%; /*height: 100%;font-weight: 600;*/
		display: block;
	}
	:host > div > nav kol-link-wc a {
		border-radius: var(--border-radius);
		background-color: var(--color-petrol);
		border: 1px solid transparent;
		grid: flex;
		line-height: 2em;
		padding: 0.5em;
		color: white;
		height: 100%;
		-webkit-box-align: center;
		align-items: center;
		display: flex;
		cursor: pointer;
		text-decoration: inherit;
	}
	:host > div > nav kol-link-wc[exportparts*="selected"] a {
		background-color: var(--color-achat);
		font-weight: 700;
	}
	:host > div > nav kol-link-wc a kol-icon.mr-2 {
		margin-right: calc(2 * 2 * var(--spacing));
	}
	:host > div > nav kol-link-wc a kol-icon.ml-2 {
		margin-left: calc(2 * 2 * var(--spacing));
	}
	:host > div > nav kol-link-wc a:focus,
	:host > div > nav kol-link-wc a:hover {
		border: 1px solid white;
		background-color: var(--color-fluorit);
		color: var(--color-anthrazit);
	} /* compact button */
	:host > div > div:last-child {
		margin-top: 0.5em;
		width: 100%;
		text-align: center;
	}
	:host > div > nav kol-link-wc a.text-center {
		display: grid;
		align-items: center;
		justify-items: center;
	} /* horizontal */
	ul.flex {
		display: flex;
	}
	li > div > div.absolute {
		position: absolute;
	}
	kol-span-wc {
		justify-items: baseline;
	}`,
	'KOL-CARD': `:host > div {
		background-color: white;
		border-color: var(--border-color);
		border-style: solid;
		border-width: 1px;
		border-radius: calc(2 * var(--border-radius));
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	kol-heading {
		padding: 0.5rem;
		display: block;
		border-bottom-style: solid;
		border-bottom-color: var(--border-color);
		border-bottom-width: 1px;
	}
	:host > div > div {
		display: block;
		padding: 0.5rem;
	}
	:host > div > div:last-child {
		display: block;
		padding: 0.5rem;
		border-top-style: solid;
		border-top-color: var(--color-achat);
		border-top-width: 1px;
	}`,
	'KOL-INPUT-CHECKBOX': `/* ALL INPUT, SELECT, TEXTAREA */
	label {
		cursor: pointer;
	}
	input {
		color: var(--default-letter);
		border-color: var(--default-border);
		border-width: 2px;
		border-style: solid;
		line-height: 24px;
		font-size: 16px;
	}
	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}
	input:hover {
		border-color: var(--color-petrol);
	} /* NEU */
	kol-input {
		display: grid;
		align-items: center;
		justify-items: left;
		width: 100%;
	}
	kol-input.default {
		grid-template-columns: calc(6 * 2 * var(--spacing)) auto;
	}
	kol-input.switch {
		grid-template-columns: calc(13 * 2 * var(--spacing)) auto;
	}
	kol-input > div.input {
		display: inline-flex;
		order: 1;
	}
	kol-input > div.input input {
		margin: 0px;
	}
	kol-input > label {
		order: 2;
		padding-left: calc(2 * 2 * var(--spacing));
	}
	kol-input > kol-alert.error {
		order: 3;
		padding-top: 0.25em;
		grid-column: span 2 / auto;
	} /* CHECKBOX */
	input[type="checkbox"] {
		appearance: none;
		background-color: white;
		cursor: pointer;
		transition: 0.5s;
	}
	input[type="checkbox"].kol-disabled:before {
		cursor: not-allowed;
	}
	input[type="checkbox"]:before {
		content: "";
		cursor: pointer;
	}
	input[type="checkbox"]:checked {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
	}
	.default input[type="checkbox"] {
		/* border-radius: 0.25em; */
		height: calc(6 * 2 * var(--spacing));
		min-width: calc(6 * 2 * var(--spacing));
		width: calc(6 * 2 * var(--spacing));
	}
	.default input[type="checkbox"]:before {
		/* border-radius: 0.25em; */
		background-color: transparent;
		display: block;
		height: calc(6 * 2 * var(--spacing));
		position: relative;
		width: calc(6 * 2 * var(--spacing));
	}
	.default input[type="checkbox"]:checked:before {
		border-right-width: 3px;
		border-bottom-width: 3px;
		left: calc(1.5 * 2 * var(--spacing) - 2px);
		top: calc(2.85 * 2 * var(--spacing) - 2px);
		transform: rotate(40deg) translate(-50%, -50%);
		background-color: transparent;
		border-width: 0px 3px 3px 0px;
		border-color: white;
		border-radius: 1px;
		border-style: solid;
		height: calc(3 * 2 * var(--spacing));
		width: calc(1.5 * 2 * var(--spacing));
	}
	.default input[type="checkbox"]:indeterminate:before {
		background-color: var(--kolibri-color-normal);
		height: 0.375rem;
		top: 0.45rem;
		left: 0.15rem;
		width: calc(4 * 2 * var(--spacing));
	}
	.switch input[type="checkbox"] {
		/* border-radius: 0.25em; */
		min-width: 3.2em;
		width: 3.2em;
		height: 1.7em;
		display: inline-block;
		position: relative;
	}
	.switch input[type="checkbox"]:before {
		/* border-radius: 0.25em; */
		-webkit-transition: 0.5s;
		-moz-transition: 0.5s;
		-ms-transition: 0.5s;
		transition: 0.5;
		width: 1.2em;
		height: 1.2em;
		left: calc(0.25em - 2px);
		top: calc(0.25em - 2px);
		background-color: black;
		position: absolute;
	}
	.switch input[type="checkbox"]:checked:before {
		-webkit-transform: translateX(1.5em);
		-moz-transform: translateX(1.5em);
		-ms-transform: translateX(1.5em);
		transform: translateX(1.5em);
		background-color: white;
	}
	.switch input[type="checkbox"]:indeterminate:before {
		-webkit-transform: translateX(0.75em);
		-moz-transform: translateX(0.75em);
		-ms-transform: translateX(0.75em);
		transform: translateX(0.75em);
		background-color: var(--color-petrol);
	}
	.disabled {
		opacity: 0.33;
	}
	.default kol-icon,
	.switch kol-icon {
		display: none;
	}
	kol-input span.hint {
		grid-column: span 2;
		font-style: italic;
		color: gray;
		display: block;
		order: 3;
		padding: 0 var(--spacing);
	}`,
	'KOL-INPUT-RADIO': `/* INPUT */
	:host input:focus {
		outline-color: var(--color-achat) !important;
		outline-offset: 2px;
		outline-style: solid;
		outline-width: 3px;
	}
	label {
		color: var(--color-anthrazit);
		font-size: 14px;
		line-height: 20px;
		gap: 8px;
		width: 100%;
	}
	input {
		width: 100%;
		color: var(--color-anthrazit);
		border-color: var(--default-border);
		border-width: 2px;
		border-style: solid;
		border-radius: 5px; /* padding: 10px 14px; */
		line-height: 24px;
		font-size: 16px;
	}
	input:hover {
		border-color: var(--color-achat);
	}
	kol-alert {
		display: block;
		width: 100%;
	}
	.kol-required span::after {
		content: "*";
	} /* RADIO */
	fieldset {
		border: 0px;
		margin: 0px;
		padding: 0px;
		display: grid;
		gap: 0.25em;
	}
	fieldset legend {
		display: block;
		width: 100%;
		line-height: 1.5em;
	}
	fieldset div {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		gap: 0.5em;
		margin-top: 0.25em;
		margin-bottom: 0.25em;
		align-items: center;
		position: relative;
	}
	fieldset div label {
		cursor: pointer;
		display: flex;
		width: 100%;
	}
	fieldset div label span {
		margin-top: 0.125em;
	}
	fieldset div input[type="radio"] {
		appearance: none;
		transition: 0.5s;
		border-radius: 100%;
		height: calc(6 * 2 * var(--spacing));
		min-width: calc(6 * 2 * var(--spacing));
		width: calc(6 * 2 * var(--spacing));
	}
	fieldset div input[type="radio"]:checked:before {
		box-shadow: 0 0 0.1rem black;
		background-color: var(--color-petrol);
	}
	fieldset div input[type="radio"]:disabled {
		background-color: var(--color-input-bg-default);
		border-color: #999;
		cursor: not-allowed;
	}`,
	'KOL-TOAST': `:host > div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		z-index: 200;
	}
	:host > div > kol-alert {
		display: block;
		margin: auto;
		padding: 1rem;
		max-width: 750px;
	}
	:host > div > kol-button-wc {
		top: 0;
		position: relative;
		display: block;
		margin: auto;
		width: 1em;
	}`,
	'KOL-TABS': `:host > div {
		display: block;
		width: 100%;
	}
	:host kol-button-group-wc {
		display: flex;
		background-color: var(--color-petrol);
	}
	:host kol-button-group-wc > div {
		display: inline-flex;
	}
	:host kol-button-group-wc > div + div {
		margin-left: 0.25em;
	}
	:host > div > div {
		padding: 0.25em;
		border: 1px solid var(--border-color);
	}
	button {
		box-sizing: border-box;
		font-size: inherit;
		line-height: 1.25em;
		cursor: pointer;
		border-width: 2px;
		box-shadow: 0 0 0.25em gray;
		width: inherit;
		overflow: hidden;
		border-style: solid;
		padding: calc(4 * var(--spacing));
		display: grid;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
		text-align: center;
		transition-duration: 0.5s;
		transition-property: background-color, color, border-color;
	}
	kol-button-wc button.selected,
	kol-button-wc[aria-selected="true"] button {
		background-color: white;
		border-bottom-width: 0.25em !important;
		border-bottom-style: solid;
		border-bottom-color: var(--color-citrin) !important;
	}
	button > kol-span-wc span {
		display: flex;
		gap: 0.25em;
		align-items: center;
		justify-content: center;
	}
	button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
	button.primary,
	button.primary:disabled:hover {
		background-color: var(--kolibri-color-primary);
		border-color: var(--kolibri-color-primary);
		color: white;
	}
	button.primary:hover,
	button.primary:focus {
		color: var(--kolibri-color-primary);
	}
	button.secondary,
	button.secondary:disabled:hover {
		background-color: var(--kolibri-color-secondary);
		border-color: var(--kolibri-color-secondary);
		color: white;
	}
	button.secondary:hover,
	button.secondary:focus {
		color: var(--kolibri-color-secondary);
	}
	button.normal,
	button.normal:disabled:hover {
		background-color: var(--color-petrol);
		border-color: var(--color-petrol);
		color: white;
	}
	button.normal:hover,
	button.normal:focus {
		color: var(--color-petrol);
	}
	button.danger,
	button.danger:disabled:hover {
		background-color: var(--kolibri-color-danger);
		border-color: var(--kolibri-color-danger);
		color: white;
	}
	button.danger:hover,
	button.danger:focus {
		color: var(--kolibri-color-danger);
	}
	button.ghost,
	button.ghost:disabled:hover {
		background-color: white;
		border-color: var(--kolibri-color-ghost);
		color: var(--kolibri-color-ghost);
	}
	button.ghost:hover,
	button.ghost:focus {
		background-color: var(--kolibri-color-ghost);
		color: white;
	}
	button:hover,
	button:focus {
		background-color: white;
		box-shadow: 0 0 0.25em black;
	}
	button:active {
		outline: 0 !important;
		box-shadow: none !important;
	}
	.close-button {
		font-size: 25%;
		height: fit-content;
		width: 0;
	}
	.close-button button {
		width: 1rem;
		position: relative;
		height: 1rem;
		left: -4.25em;
		top: 0.25em;
	}
	:host > div {
		display: grid;
	}
	:host > div.tabs-align-left {
		grid-template-columns: auto 1fr;
	}
	:host > div.tabs-align-right {
		grid-template-columns: 1fr auto;
	}
	:host > .tabs-align-left kol-button-group-wc,
	:host > .tabs-align-top kol-button-group-wc {
		order: 0;
	}
	:host > .tabs-align-bottom kol-button-group-wc,
	:host > .tabs-align-right kol-button-group-wc {
		order: 1;
	}
	:host > div.tabs-align-left kol-button-group-wc > div,
	:host > div.tabs-align-left kol-button-group-wc > div > div,
	:host > div.tabs-align-right kol-button-group-wc > div,
	:host > div.tabs-align-right kol-button-group-wc > div > div {
		display: grid;
	}
	:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
	:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
		width: 100%;
	}
	:host > div.tabs-align-bottom kol-button-group-wc div,
	:host > div.tabs-align-top kol-button-group-wc div {
		display: flex;
		flex-wrap: wrap;
	}`,
});
