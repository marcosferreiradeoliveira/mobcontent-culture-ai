import type { Locale, Translations } from "../types";
import { pt } from "./pt";
import { en } from "./en";
import { es } from "./es";

export const translations: Record<Locale, Translations> = { pt, en, es };
