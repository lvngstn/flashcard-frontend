import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import { KEY_DOWN_COMMAND, COMMAND_PRIORITY_EDITOR } from "lexical";
import { useEffect } from "react";

export default function StrikethroughPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerCommand(
            KEY_DOWN_COMMAND,
            (event) => {
                if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'x') {
                    event.preventDefault();
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
                    return true;
                }
                return false;
            },
            COMMAND_PRIORITY_EDITOR
        );
    }, [editor]);

    return null; // This component doesn't render anything
}