import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { useEffect } from "react";
import { registerCodeHighlighting, $createCodeNode } from "@lexical/code";
import { $wrapNodes } from "@lexical/selection"
import { KEY_DOWN_COMMAND, COMMAND_PRIORITY_EDITOR } from "lexical";

function CodeBlockPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        registerCodeHighlighting(editor);

        editor.registerCommand(
            KEY_DOWN_COMMAND,
            (event) => {
                if (event.ctrlKey && event.shiftKey && (event.key === '*' || event.key === '8')) {
                    event.preventDefault();
                    onAddCodeBlock();
                    return true;
                }
                return false;
            },
            COMMAND_PRIORITY_EDITOR
        )
    }, [editor]);

    const onAddCodeBlock = () => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $wrapNodes(selection, () => $createCodeNode('javascript'));
            }
        })
    } 

    return null;
}
export default CodeBlockPlugin;