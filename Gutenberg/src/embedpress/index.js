/**
 * BLOCK: embedpress-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import edit from './edit';
import { embedPressIcon } from '../common/icons';
import { init as openseaInit } from './InspectorControl/opensea';
import { init as youtubeInit } from './InspectorControl/youtube';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
if (embedpressObj && embedpressObj.active_blocks && embedpressObj.active_blocks.embedpress) {

	/**
	 * Register: aa Gutenberg Block.
	 *
	 * Registers a new block provided a unique name and an object defining its
	 * behavior. Once registered, the block is made editor as an option to any
	 * editor interface where blocks are implemented.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/
	 * @param  {string}   name     Block name.
	 * @param  {Object}   settings Block settings.
	 * @return {?WPBlock}          The block, if it has been successfully
	 *                             registered; otherwise `undefined`.
	 */
	registerBlockType('embedpress/embedpress', {
		// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		title: __('EmbedPress'), // Block title.
		icon: embedPressIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
		category: 'embedpress', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
		keywords: [
			'embedpress',
			'embed',
			'google',
			'youtube',
			'docs',
		],
		supports: {
			align: ["right", "left", "center"],
			default: 'center',
			lightBlockWrapper: true
		},
		attributes: {
			url: {
				type: 'string',
				default: ''
			},
			embedHTML: {
				type: 'string',
				default: ''
			},
			height: {
				type: 'string',
				default: '450'
			},
			width: {
				type: 'string',
				default: '600'
			},
			editingURL: {
				type: 'boolean',
				default: 0
			},
			fetching: {
				type: 'boolean',
				default: false
			},
			cannotEmbed: {
				type: 'boolean',
				default: false
			},
			interactive: {
				type: 'boolean',
				default: false
			},
			align: {
				type: 'string',
				default: 'center'
			},

			//YouTube Attributes
			ispagination: {
				type: 'boolean',
				default: true
			},
			pagesize: {
				type: 'number',
				default: 6
			},
			columns: {
				type: 'string',
				default: '3'
			},
			gapbetweenvideos: {
				type: 'number',
				default: 30
			},

			//NFT Attributes
			limit: {
				type: 'number',
				default: 9
			},
			orderby: {
				type: 'string',
				default: 'desc'
			},
			gapbetweenitem: {
				type: 'number',
				default: 30
			},

			layout: {
				type: 'string',
				default: 'ep-grid'
			},

			preset: {
				type: 'string',
				default: 'ep-preset-1'
			},

			nftperrow: {
				type: 'number',
				default: 3
			},
			collectionname: {
				type: 'boolean',
				default: true
			},
			nftimage: {
				type: 'boolean',
				default: true
			},
			nfttitle: {
				type: 'boolean',
				default: true
			},
			nftcreator: {
				type: 'boolean',
				default: true
			},
			prefix_nftcreator: {
				type: 'string',
				default: 'Created By'
			},
			nftprice: {
				type: 'boolean',
				default: true
			},
			prefix_nftprice: {
				type: 'string',
				default: 'Price'
			},
			nftlastsale: {
				type: 'boolean',
				default: true
			},
			prefix_nftlastsale: {
				type: 'string',
				default: 'Last Sale'
			},
			nftbutton: {
				type: 'boolean',
				default: true
			},
			nftrank: {
				type: 'boolean',
				default: true
			},
			nftdetails: {
				type: 'boolean',
				default: true
			},
			label_nftbutton: {
				type: 'string',
				default: 'See Details'
			},
			alignment: {
				type: 'string',
				default: 'ep-item-center'
			},

			// Color and Typograpyh
			itemBGColor: {
				type: 'string',
			},
			collectionNameColor: {
				type: 'string',
			},

			collectionNameFZ: {
				type: 'number',
			},

			titleColor: {
				type: 'string',
			},

			titleFontsize: {
				type: 'number',
			},
			creatorColor: {
				type: 'string',
			},

			creatorFontsize: {
				type: 'number',
			},

			creatorLinkColor: {
				type: 'string',
			},

			creatorLinkFontsize: {
				type: 'number',
			},

			priceLabelColor: {
				type: 'string',
			},

			priceLabelFontsize: {
				type: 'number',
			},
			priceColor: {
				type: 'string',
			},

			priceFontsize: {
				type: 'number',
			},
			priceUSDColor: {
				type: 'string',
			},

			priceUSDFontsize: {
				type: 'number',
			},

			lastSaleLabelColor: {
				type: 'string',
			},

			lastSaleLabelFontsize: {
				type: 'number',
			},
			lastSaleColor: {
				type: 'string',
			},

			lastSaleFontsize: {
				type: 'number',
			},
			lastSaleUSDColor: {
				type: 'string',
			},

			lastSaleUSDFontsize: {
				type: 'number',
			},
			buttonTextColor: {
				type: 'string',
			},

			buttonBackgroundColor: {
				type: 'string',
			},

			buttonTextFontsize: {
				type: 'number',
			},
			rankBtnColor: {
				type: 'string',
			},

			rankBtnBorderColor: {
				type: 'string',
			},
			rankBtnFZ: {
				type: 'number',
			},
			detialTitleColor: {
				type: 'string',
			},
			detialTitleFZ: {
				type: 'number',
			},
			detailTextColor: {
				type: 'string',
			},
			detailTextLinkColor: {
				type: 'string',
			},
			detailTextFZ: {
				type: 'number',
			},

		},
		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 *
		 * The "edit" property must be a valid function.
		 *
		 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
		 */
		edit,

		/**
		 * The save function defines the way in which the different attributes should be combined
		 * into the final markup, which is then serialized by Gutenberg into post_content.
		 *
		 * The "save" property must be specified and must be a valid function.
		 *
		 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
		 */
		save: () => null,
	});

	openseaInit();
	youtubeInit();
}
