import { useState, useCallback } from 'react';

/**
 * A custom hook for clipboard operations.
 *
 * @returns An array containing the clipboard text, a function to copy text to clipboard, and a function to read text from clipboard.
 *
 * @example
 * ```tsx
 * import React, { useState } from 'react';
 * import { useClipboard } from './hooks/clipboard/useClipboard';
 *
 * const ClipboardComponent: React.FC = () => {
 *   const [clipboardText, copyToClipboard, readFromClipboard] = useClipboard();
 *   const [input, setInput] = useState('');
 *
 *   return (
 *     <div>
 *       <input
 *         type="text"
 *         value={input}
 *         onChange={(e) => setInput(e.target.value)}
 *         placeholder="Type something..."
 *       />
 *       <button onClick={() => copyToClipboard(input)}>Copy</button>
 *       <button onClick={readFromClipboard}>Read Clipboard</button>
 *       <p>Clipboard Text: {clipboardText}</p>
 *     </div>
 *   );
 * };
 *
 * export default ClipboardComponent;
 * ```
 */

export const useClipboard = (): [
  string,
  (text: string) => void,
  () => void,
] => {
  const [clipboardText, setClipboardText] = useState('');

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setClipboardText(text);
    });
  }, []);

  const readFromClipboard = useCallback(() => {
    navigator.clipboard.readText().then((text) => {
      setClipboardText(text);
    });
  }, []);

  return [clipboardText, copyToClipboard, readFromClipboard];
};
