import { Code } from "./Code";
import  { CustomImage } from './CustomImage'
import { SectionHeader } from "./SectionHeader";
import { ContextText } from "./ContentText";
import { MarkdownLink } from "./MarkdownLink";

export const Markdown = {
    code: Code,
    img: CustomImage,
    h1: SectionHeader,
    h2: SectionHeader,
    h3: SectionHeader,
    p: ContextText,
    a: MarkdownLink
}