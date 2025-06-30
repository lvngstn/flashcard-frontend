import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';

import { useFlashcards } from '../../../../hooks/useFlashcards';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';

import {CodeNode, CodeHighlightNode} from '@lexical/code';
import {ListNode, ListItemNode} from '@lexical/list';

import BoldPlugin from './Plugins/BoldPlugin';
import UnderlinePlugin from './Plugins/UnderlinePlugin';
import ItalicPlugin from './Plugins/ItalicPlugin';
import StrikethroughPlugin from './Plugins/StrikethroughPlugin';
import CodeBlockPlugin from './Plugins/CodeBlockPlugin';
import AutoListPlugin from './Plugins/AutoListPlugin';

import { theme } from './theme';
import './editor.css';

const variantStyles = {
  edit: "w-full border-b-2 border-neutral-900 bg-neutral-700 text-neutral-200 focus:outline-none",
  study: "focus:outline-none",  
  view: "focus:outline-none",  
}

function onError(error) {
  console.error(error);
}

function FlashcardSync({ isQuestion, id, location }) {
  const { getFlashcardQuestion, getFlashcardAnswer, updateFlashcardQuestion, updateFlashcardAnswer } = useFlashcards();
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    let isMounted = true;

    (location !== "edit") ? editor.setEditable(false) : editor.setEditable(true);

    (isQuestion ? getFlashcardQuestion(id) : getFlashcardAnswer(id))
      .then(res => {
        if (!isMounted) return;
        editor.update(() => {
            const raw = isQuestion ? res?.question : res?.answer;
            editor.setEditorState(editor.parseEditorState(raw));
        });
  
        // LISTENER ONLY AFTER THE INITIAL STATE IS IN PLACE
        const unregister = editor.registerUpdateListener(() => {
          const json = JSON.stringify(editor.getEditorState().toJSON());
          isQuestion ? updateFlashcardQuestion(id, json)
                     : updateFlashcardAnswer(id, json);
        });
        // keep reference for cleanup
        cleanup = unregister;
      });
  
    let cleanup = () => {};
    return () => {
      isMounted = false;
      cleanup();
    };
  }, [editor, id, isQuestion]);

  return null;
}

function RichTextEditor({ isQuestion, id}) {
  const location = useLocation().pathname.split("/")[1];

  const initialConfig = {
    namespace: 'MyEditor',
    nodes: [
      CodeNode,
      CodeHighlightNode,
      ListNode,
      ListItemNode,
    ],
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            aria-placeholder={""}
            className={variantStyles[location]}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <UnderlinePlugin />
      <BoldPlugin />
      <ItalicPlugin />
      <StrikethroughPlugin />
      <CodeBlockPlugin />
      <AutoListPlugin />
      <FlashcardSync isQuestion={isQuestion} id={id} location={location}/>
    </LexicalComposer>
  );
}

export default RichTextEditor;