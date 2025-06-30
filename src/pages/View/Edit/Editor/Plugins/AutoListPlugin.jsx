import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import {
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
  KEY_DOWN_COMMAND,
  COMMAND_PRIORITY_EDITOR,
  KEY_TAB_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  INSERT_PARAGRAPH_COMMAND,
} from 'lexical';
import {
  $createListNode,
  $createListItemNode,
  $isListItemNode,
} from '@lexical/list';

export default function AutoListPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const unregisterKeyDown = editor.registerCommand(
      KEY_DOWN_COMMAND,
      (event) => {
        if (event.key === ' ') {
          return editor.update(() => {
            const selection = $getSelection();
            if (!$isRangeSelection(selection) || !selection.isCollapsed()) {
              return false;
            }

            const anchor = selection.anchor;
            const anchorNode = anchor.getNode();
            const parent = anchorNode.getParent();

            if (!parent || parent.getType() !== 'paragraph') {
              return false;
            }

            const textContent = parent.getTextContent();

            // Match bullet list: "- "
            if (/^-/.test(textContent)) {
              event.preventDefault();
              const listNode = $createListNode('bullet');
              const listItemNode = $createListItemNode();

              // Remove "- "
              anchorNode.setTextContent(textContent.slice(1, textContent.length));
              listItemNode.append(anchorNode);
              listNode.append(listItemNode);
              parent.replace(listNode);
              return true;
            }

            // Match ordered list: "1. "
            if (/^1\.$/.test(textContent)) {
              const listNode = $createListNode('number');
              const listItemNode = $createListItemNode();

              // Remove "1. "
              anchorNode.setTextContent('');
              listItemNode.append(anchorNode);
              listNode.append(listItemNode);
              parent.replace(listNode);
              return true;
            }

            return false;
          });
        }
        return false;
      },
      COMMAND_PRIORITY_EDITOR
    );

    const unregisterTab = editor.registerCommand(
      KEY_TAB_COMMAND,
      (event) => {
        return editor.update(() => {
          const selection = $getSelection();
          const anchor = selection.anchor;
          const anchorNode = anchor.getNode();
          
          if (anchorNode.getType() !== 'listitem') {
            return false;
          }
          event.preventDefault();


          if (!$isRangeSelection(selection) || !selection.isCollapsed()) {
            return false;
          }

          if (!$isListItemNode(anchorNode)) {
            return false;
          }
          anchorNode.setIndent(anchorNode.getIndent() + 1);

          return true;
        });
      },
      COMMAND_PRIORITY_EDITOR
    )

    const unregisterExitList = editor.registerCommand(
      INSERT_PARAGRAPH_COMMAND,
      () => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;
    
        const item = selection.anchor.getNode();
        if (!$isListItemNode(item)) return false;
        if (item.getTextContent().trim() !== '') return false;
    
        // empty list item ─ we consume the command
        if (item.getIndent() > 0) {
          item.setIndent(item.getIndent() - 1);
        } else if (item.getIndent() === 0) {
          const listNode = item.getParent();  // <ul> / <ol>

          const paragraph = $createParagraphNode();
          paragraph.append(...item.getChildren());   // keep any text/content
        
          listNode.insertAfter(paragraph);    // put it after the list
          item.remove();                      // drop the <li>
        
          if (listNode.getChildrenSize() === 0) {
            listNode.remove();                // clean up empty list wrapper
          }
        
          paragraph.select();  
        }
        return true;               // stop further handlers
      },
      COMMAND_PRIORITY_CRITICAL     // above the built-in list plugin
    );

    return () => {
      unregisterKeyDown();
      unregisterTab();
      unregisterExitList();
    };
  }, [editor]);

  return null;
}
