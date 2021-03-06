/*
    This file contains translations between the integer values used in
    the Zulip API to describe values in dropdowns, radio buttons, and
    similar widgets and the user-facing strings that should be used to
    describe them, as well as data details like sort orders that may
    be useful for some widgets.

    We plan to eventually transition much of this file to have a more
    standard format and then to be populated using data sent from the
    Zulip server in `page_params`, so that the data is available for
    other parts of the ecosystem to use (including the mobile apps and
    API documentation) without a ton of copying.
*/

exports.demote_inactive_streams_values = {
    automatic: {
        code: 1,
        description: i18n.t("Automatic"),
    },
    always: {
        code: 2,
        description: i18n.t("Always"),
    },
    never: {
        code: 3,
        description: i18n.t("Never"),
    },
};

exports.twenty_four_hour_time_values = {
    twenty_four_hour_clock: {
        value: true,
        description: i18n.t("24-hour clock (17:00)"),
    },
    twelve_hour_clock: {
        value: false,
        description: i18n.t("12-hour clock (5:00 PM)"),
    },
};

exports.get_all_display_settings = () => ({
    settings: {
        user_display_settings: [
            "dense_mode",
            "night_mode",
            "high_contrast_mode",
            "left_side_userlist",
            "starred_message_counts",
            "fluid_layout_width",
        ],
    },
    render_only: {
        high_contrast_mode: page_params.development_environment,
        dense_mode: page_params.development_environment,
    },
});

