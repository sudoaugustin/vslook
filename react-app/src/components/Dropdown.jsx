import { useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default ({ trigger, children, classes = {}, onOpenEffect }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open && onOpenEffect && onOpenEffect();
  }, [open]);

  return (
    <DropdownMenu.Root className={classes.root} open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenu.Trigger className={`!outline-none ${classes.trigger}`}>{trigger}</DropdownMenu.Trigger>
      {open && (
        <DropdownMenu.Content
          className={`block overflow-hidden rounded-md border border-gray-200 bg-white shadow ${classes.content}`}
          sideOffset={5}
        >
          {children()}
        </DropdownMenu.Content>
      )}
    </DropdownMenu.Root>
  );
};
