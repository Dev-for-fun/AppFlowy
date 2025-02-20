import React, { forwardRef, memo } from 'react';
import Placeholder from '$app/components/editor/components/blocks/_shared/Placeholder';
import { EditorElementProps, TextNode } from '$app/application/document/document.types';
import { useSlateStatic } from 'slate-react';
import { useStartIcon } from '$app/components/editor/components/blocks/text/StartIcon.hooks';

export const Text = memo(
  forwardRef<HTMLDivElement, EditorElementProps<TextNode>>(({ node, children, className, ...attributes }, ref) => {
    const editor = useSlateStatic();
    const { hasStartIcon, renderIcon } = useStartIcon(node);
    const isEmpty = editor.isEmpty(node);

    return (
      <span
        ref={ref}
        {...attributes}
        className={`text-element relative my-1 flex w-full px-1 ${isEmpty ? 'select-none' : ''} ${className ?? ''} ${
          hasStartIcon ? 'has-start-icon' : ''
        }`}
      >
        {renderIcon()}
        <Placeholder isEmpty={isEmpty} node={node} />

        <span className={'text-content min-w-[4px]'}>{children}</span>
      </span>
    );
  })
);

export default Text;
