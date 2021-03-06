import common from 'polythene/config/config';

const buttonPaddingH = 8; // padding, inner text space

export default {
    width: 274,
    minHeight: 100,
    border_radius: common.unit_block_border_radius,
    title_padding_h: buttonPaddingH,
    title_single_padding_v: 14,
    title_multi_padding_v: 20,
    side_padding: 24 - buttonPaddingH,
    font_size: 14,
    line_height: 20,

    // switch light and dark: dark on light and light on dark

    color_light_background: common.rgba(common.color_dark_background, .85),
    color_light_text:common.rgba(common.color_dark_foreground, common.blend_light_dark_primary),

    color_dark_background: common.rgba(common.color_light_background),
    color_dark_text:common.rgba(common.color_light_foreground, common.blend_light_text_primary)
};
