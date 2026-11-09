import { homePage } from "./homePage";
import { faq, page, testimonial } from "./misc";
import { offer } from "./offer";
import { project } from "./project";
import { siteSettings } from "./siteSettings";

export const schemaTypes = [siteSettings, homePage, offer, project, testimonial, faq, page];

/** Documents uniques : un seul exemplaire, pas de création ni de suppression. */
export const singletonTypes = new Set(["siteSettings", "homePage"]);
