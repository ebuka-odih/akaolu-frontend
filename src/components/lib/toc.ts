// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO: I'll fix this later.

import { toc } from "mdast-util-toc";
import { remark } from "remark";
import { visit } from "unist-util-visit";

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

/**
 * Flattens a node to extract its textual content.
 * @param node - The Unist node to flatten.
 * @returns A string containing the concatenated text content.
 */
function flattenNode(node): string {
  const p: string[] = [];
  visit(node, (node) => {
    if (!textTypes.includes(node.type)) return;
    p.push(node.value);
  });
  return p.join(``);
}

interface Item {
  title: string;
  url: string;
  items?: Item[];
}

interface Items {
  items?: Item[];
}

/**
 * Recursively extracts items (headings and links) from a node.
 * @param node - The current Unist node.
 * @param current - The current item being populated.
 * @returns A structured `Items` object containing the extracted data.
 */
function getItems(node, current): Items {
  if (!node) {
    return {};
  }

  if (node.type === "paragraph") {
    visit(node, (item) => {
      if (item.type === "link") {
        current.url = item.url;
        current.title = flattenNode(node);
      }

      if (item.type === "text") {
        current.title = flattenNode(node);
      }
    });

    return current;
  }

  if (node.type === "list") {
    current.items = node.children.map((i) => getItems(i, {}));
    return current;
  } else if (node.type === "listItem") {
    const heading = getItems(node.children[0], {});

    if (node.children.length > 1) {
      getItems(node.children[1], heading);
    }

    return heading;
  }

  return {};
}

/**
 * A remark plugin that extracts a Table of Contents (TOC) from a Markdown AST.
 * @returns A plugin function for remark.
 */
const getToc = () => (node, file) => {
  const table = toc(node);
  const items = getItems(table.map, {});

  file.data = items;
};

export type TableOfContents = Items;

/**
 * Generates a Table of Contents (TOC) from the given Markdown content.
 * @param content - The Markdown content to process.
 * @returns A promise resolving to a `TableOfContents` object.
 */
export async function getTableOfContents(
  content: string
): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content);

  return result.data as TableOfContents;
}
