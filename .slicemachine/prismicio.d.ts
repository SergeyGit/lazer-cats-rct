// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * Label field in *Navigation → Links*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Optional - Label for the link
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.TitleField;
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for navigation item
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title for the page
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeroSlice | PartnersSlice | WeAreSlice | OurTeamSlice | TournamentsSlice | SocialFooterSlice | MatchesSlice | OngoingTournamentsSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Site Title field in *Settings*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title of the site
     * - **API ID Path**: settings.siteTitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    siteTitle: prismicT.TitleField;
    /**
     * Logo field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Newsletter Description field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text above the sign up form
     * - **API ID Path**: settings.newsletterDescription
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    newsletterDescription: prismicT.RichTextField;
    /**
     * Newsletter Disclaimer field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Small text below sign up form
     * - **API ID Path**: settings.newsletterDisclaimer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    newsletterDisclaimer: prismicT.RichTextField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
export type AllDocumentTypes = NavigationDocument | PageDocument | SettingsDocument;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
    /**
     * Text field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Introductory text for the page
     * - **API ID Path**: hero.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Image field in *Hero → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceWithButtonPrimary {
    /**
     * Text field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Introductory text for the page
     * - **API ID Path**: hero.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Button Text field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.buttonText
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    buttonText: prismicT.KeyTextField;
    /**
     * Button Link field in *Hero → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.buttonLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    buttonLink: prismicT.LinkField;
    /**
     * Image field in *Hero → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * With Button variation for Hero Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceWithButton = prismicT.SharedSliceVariation<"withButton", Simplify<HeroSliceWithButtonPrimary>, never>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceWithButton;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceWhitePrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * With Accent field in *Image → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: true
     * - **API ID Path**: image.primary.withAccent
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    withAccent: prismicT.BooleanField;
}
/**
 * White variation for Image Slice
 *
 * - **API ID**: `white`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceWhite = prismicT.SharedSliceVariation<"white", Simplify<ImageSliceWhitePrimary>, never>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceLightSlatePrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * With Accent field in *Image → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: true
     * - **API ID Path**: image.primary.withAccent
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    withAccent: prismicT.BooleanField;
}
/**
 * Light Slate variation for Image Slice
 *
 * - **API ID**: `lightSlate`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceLightSlate = prismicT.SharedSliceVariation<"lightSlate", Simplify<ImageSliceLightSlatePrimary>, never>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceWhite | ImageSliceLightSlate;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in Matches → Primary
 *
 */
interface MatchesSliceDefaultPrimary {
    /**
     * Title field in *Matches → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: matches.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Title second field in *Matches → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: matches.primary.title_second
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_second: prismicT.RichTextField;
    /**
     * Background field in *Matches → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.primary.background
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background: prismicT.ImageField<never>;
    /**
     * link upcoming field in *Matches → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.primary.link_upcoming
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link_upcoming: prismicT.LinkField;
    /**
     * link past field in *Matches → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.primary.link_past
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link_past: prismicT.LinkField;
    /**
     * text link_upcoming field in *Matches → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.primary.text_link_upcoming
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text_link_upcoming: prismicT.KeyTextField;
    /**
     * text link_past field in *Matches → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.primary.text_link_past
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text_link_past: prismicT.KeyTextField;
}
/**
 * Item in Matches → Items
 *
 */
export interface MatchesSliceDefaultItem {
    /**
     * Date field in *Matches → Items*
     *
     * - **Field Type**: Timestamp
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.items[].date
     * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
     *
     */
    date: prismicT.TimestampField;
    /**
     * Tournamet logo field in *Matches → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.items[].tournamet_logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    tournamet_logo: prismicT.ImageField<never>;
    /**
     * name tournament field in *Matches → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.items[].name_tournament
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name_tournament: prismicT.KeyTextField;
    /**
     * Team name field in *Matches → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.items[].team_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    team_name: prismicT.KeyTextField;
    /**
     * Team logo field in *Matches → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.items[].team_logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    team_logo: prismicT.ImageField<never>;
    /**
     * Team name 2 field in *Matches → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.items[].team_name_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    team_name_2: prismicT.KeyTextField;
    /**
     * Team logo 2 field in *Matches → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.items[].team_logo_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    team_logo_2: prismicT.ImageField<never>;
    /**
     * score field in *Matches → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: matches.items[].score
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    score: prismicT.KeyTextField;
}
/**
 * Default variation for Matches Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Matches`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MatchesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<MatchesSliceDefaultPrimary>, Simplify<MatchesSliceDefaultItem>>;
/**
 * Slice variation for *Matches*
 *
 */
type MatchesSliceVariation = MatchesSliceDefault;
/**
 * Matches Shared Slice
 *
 * - **API ID**: `matches`
 * - **Description**: `Matches`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MatchesSlice = prismicT.SharedSlice<"matches", MatchesSliceVariation>;
/**
 * Primary content in OngoingTournaments → Primary
 *
 */
interface OngoingTournamentsSliceDefaultPrimary {
    /**
     * Title field in *OngoingTournaments → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: ongoing_tournaments.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * link field in *OngoingTournaments → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: ongoing_tournaments.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * text link field in *OngoingTournaments → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ongoing_tournaments.primary.text_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text_link: prismicT.KeyTextField;
    /**
     * Background image field in *OngoingTournaments → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: ongoing_tournaments.primary.background_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background_image: prismicT.ImageField<never>;
}
/**
 * Item in OngoingTournaments → Items
 *
 */
export interface OngoingTournamentsSliceDefaultItem {
    /**
     * bage field in *OngoingTournaments → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ongoing_tournaments.items[].bage
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    bage: prismicT.KeyTextField;
    /**
     * image field in *OngoingTournaments → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: ongoing_tournaments.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * caption field in *OngoingTournaments → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ongoing_tournaments.items[].caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    caption: prismicT.KeyTextField;
    /**
     * from date field in *OngoingTournaments → Items*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: ongoing_tournaments.items[].from_date
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    from_date: prismicT.DateField;
    /**
     * to date field in *OngoingTournaments → Items*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: ongoing_tournaments.items[].to_date
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    to_date: prismicT.DateField;
    /**
     * prise field in *OngoingTournaments → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ongoing_tournaments.items[].prise
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    prise: prismicT.KeyTextField;
}
/**
 * Default variation for OngoingTournaments Slice
 *
 * - **API ID**: `default`
 * - **Description**: `OngoingTournaments`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OngoingTournamentsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<OngoingTournamentsSliceDefaultPrimary>, Simplify<OngoingTournamentsSliceDefaultItem>>;
/**
 * Slice variation for *OngoingTournaments*
 *
 */
type OngoingTournamentsSliceVariation = OngoingTournamentsSliceDefault;
/**
 * OngoingTournaments Shared Slice
 *
 * - **API ID**: `ongoing_tournaments`
 * - **Description**: `OngoingTournaments`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OngoingTournamentsSlice = prismicT.SharedSlice<"ongoing_tournaments", OngoingTournamentsSliceVariation>;
/**
 * Primary content in OurTeam → Primary
 *
 */
interface OurTeamSliceDefaultPrimary {
    /**
     * Title field in *OurTeam → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: our_team.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *OurTeam → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: our_team.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * backgound field in *OurTeam → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: our_team.primary.backgound
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    backgound: prismicT.ImageField<never>;
    /**
     * Background mob field in *OurTeam → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: our_team.primary.background_mob
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background_mob: prismicT.ImageField<never>;
}
/**
 * Item in OurTeam → Items
 *
 */
export interface OurTeamSliceDefaultItem {
    /**
     * nick field in *OurTeam → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: our_team.items[].nick
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    nick: prismicT.KeyTextField;
    /**
     * name field in *OurTeam → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: our_team.items[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * position field in *OurTeam → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: our_team.items[].position
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    position: prismicT.KeyTextField;
    /**
     * link field in *OurTeam → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: our_team.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * image field in *OurTeam → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: our_team.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * image hover field in *OurTeam → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: our_team.items[].image_hover
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_hover: prismicT.ImageField<never>;
}
/**
 * Default variation for OurTeam Slice
 *
 * - **API ID**: `default`
 * - **Description**: `OurTeam`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OurTeamSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<OurTeamSliceDefaultPrimary>, Simplify<OurTeamSliceDefaultItem>>;
/**
 * Slice variation for *OurTeam*
 *
 */
type OurTeamSliceVariation = OurTeamSliceDefault;
/**
 * OurTeam Shared Slice
 *
 * - **API ID**: `our_team`
 * - **Description**: `OurTeam`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OurTeamSlice = prismicT.SharedSlice<"our_team", OurTeamSliceVariation>;
/**
 * Item in Partners → Items
 *
 */
export interface PartnersSliceDefaultItem {
    /**
     * Image field in *Partners → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: partners.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Partners Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Partners`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PartnersSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<PartnersSliceDefaultItem>>;
/**
 * Slice variation for *Partners*
 *
 */
type PartnersSliceVariation = PartnersSliceDefault;
/**
 * Partners Shared Slice
 *
 * - **API ID**: `partners`
 * - **Description**: `Partners`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PartnersSlice = prismicT.SharedSlice<"partners", PartnersSliceVariation>;
/**
 * Primary content in SocialFooter → Primary
 *
 */
interface SocialFooterSliceDefaultPrimary {
    /**
     * Title field in *SocialFooter → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: social_footer.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *SocialFooter → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: social_footer.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * image field in *SocialFooter → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: social_footer.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for SocialFooter Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SocialFooter`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SocialFooterSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SocialFooterSliceDefaultPrimary>, never>;
/**
 * Slice variation for *SocialFooter*
 *
 */
type SocialFooterSliceVariation = SocialFooterSliceDefault;
/**
 * SocialFooter Shared Slice
 *
 * - **API ID**: `social_footer`
 * - **Description**: `SocialFooter`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SocialFooterSlice = prismicT.SharedSlice<"social_footer", SocialFooterSliceVariation>;
/**
 * Primary content in TextWithFeatures → Primary
 *
 */
interface TextWithFeaturesSliceDefaultPrimary {
    /**
     * Icon field in *TextWithFeatures → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_features.primary.icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
    /**
     * Text field in *TextWithFeatures → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Primary text with rich formatting
     * - **API ID Path**: text_with_features.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Item in TextWithFeatures → Items
 *
 */
export interface TextWithFeaturesSliceDefaultItem {
    /**
     * Feature Description field in *TextWithFeatures → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Description of a feature
     * - **API ID Path**: text_with_features.items[].featureDescription
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    featureDescription: prismicT.RichTextField;
}
/**
 * Default variation for TextWithFeatures Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextWithFeatures`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithFeaturesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextWithFeaturesSliceDefaultPrimary>, Simplify<TextWithFeaturesSliceDefaultItem>>;
/**
 * Slice variation for *TextWithFeatures*
 *
 */
type TextWithFeaturesSliceVariation = TextWithFeaturesSliceDefault;
/**
 * TextWithFeatures Shared Slice
 *
 * - **API ID**: `text_with_features`
 * - **Description**: `TextWithFeatures`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithFeaturesSlice = prismicT.SharedSlice<"text_with_features", TextWithFeaturesSliceVariation>;
/**
 * Primary content in TextWithImage → Primary
 *
 */
interface TextWithImageSliceDefaultPrimary {
    /**
     * Text field in *TextWithImage → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text displayed next to image
     * - **API ID Path**: text_with_image.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Image field in *TextWithImage → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextWithImageSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TextWithImage*
 *
 */
type TextWithImageSliceVariation = TextWithImageSliceDefault;
/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSlice = prismicT.SharedSlice<"text_with_image", TextWithImageSliceVariation>;
/**
 * Primary content in Tournaments → Primary
 *
 */
interface TournamentsSliceDefaultPrimary {
    /**
     * Title field in *Tournaments → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: tournaments.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Tournaments → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: tournaments.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * image field in *Tournaments → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: tournaments.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Tournaments Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Tournaments`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TournamentsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TournamentsSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Tournaments*
 *
 */
type TournamentsSliceVariation = TournamentsSliceDefault;
/**
 * Tournaments Shared Slice
 *
 * - **API ID**: `tournaments`
 * - **Description**: `Tournaments`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TournamentsSlice = prismicT.SharedSlice<"tournaments", TournamentsSliceVariation>;
/**
 * Primary content in WeAre → Primary
 *
 */
interface WeAreSliceDefaultPrimary {
    /**
     * Title field in *WeAre → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: we_are.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *WeAre → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: we_are.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Background image field in *WeAre → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: we_are.primary.background_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background_image: prismicT.ImageField<never>;
}
/**
 * Default variation for WeAre Slice
 *
 * - **API ID**: `default`
 * - **Description**: `WeAre`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WeAreSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<WeAreSliceDefaultPrimary>, never>;
/**
 * Slice variation for *WeAre*
 *
 */
type WeAreSliceVariation = WeAreSliceDefault;
/**
 * WeAre Shared Slice
 *
 * - **API ID**: `we_are`
 * - **Description**: `WeAre`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WeAreSlice = prismicT.SharedSlice<"we_are", WeAreSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, SettingsDocumentData, SettingsDocument, AllDocumentTypes, HeroSliceDefaultPrimary, HeroSliceDefault, HeroSliceWithButtonPrimary, HeroSliceWithButton, HeroSliceVariation, HeroSlice, ImageSliceWhitePrimary, ImageSliceWhite, ImageSliceLightSlatePrimary, ImageSliceLightSlate, ImageSliceVariation, ImageSlice, MatchesSliceDefaultPrimary, MatchesSliceDefaultItem, MatchesSliceDefault, MatchesSliceVariation, MatchesSlice, OngoingTournamentsSliceDefaultPrimary, OngoingTournamentsSliceDefaultItem, OngoingTournamentsSliceDefault, OngoingTournamentsSliceVariation, OngoingTournamentsSlice, OurTeamSliceDefaultPrimary, OurTeamSliceDefaultItem, OurTeamSliceDefault, OurTeamSliceVariation, OurTeamSlice, PartnersSliceDefaultItem, PartnersSliceDefault, PartnersSliceVariation, PartnersSlice, SocialFooterSliceDefaultPrimary, SocialFooterSliceDefault, SocialFooterSliceVariation, SocialFooterSlice, TextWithFeaturesSliceDefaultPrimary, TextWithFeaturesSliceDefaultItem, TextWithFeaturesSliceDefault, TextWithFeaturesSliceVariation, TextWithFeaturesSlice, TextWithImageSliceDefaultPrimary, TextWithImageSliceDefault, TextWithImageSliceVariation, TextWithImageSlice, TournamentsSliceDefaultPrimary, TournamentsSliceDefault, TournamentsSliceVariation, TournamentsSlice, WeAreSliceDefaultPrimary, WeAreSliceDefault, WeAreSliceVariation, WeAreSlice };
    }
}
