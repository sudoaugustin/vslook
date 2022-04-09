import { useEffect, useState } from 'react';
import * as Menu from '@radix-ui/react-dropdown-menu';

export default ({ trigger, children, classes = {}, onOpenEffect }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open && onOpenEffect && onOpenEffect();
  }, [open, onOpenEffect]);

  return (
    <Menu.Root className={classes.root} open={open} onOpenChange={setOpen} modal={false}>
      <Menu.Trigger className={classes.trigger}>{trigger}</Menu.Trigger>
      {open && (
        <Menu.Content
          className={`block overflow-hidden rounded-md border border-gray-200 bg-white shadow ${classes.content}`}
          sideOffset={5}
        >
          {children()}
        </Menu.Content>
      )}
    </Menu.Root>
  );
};
