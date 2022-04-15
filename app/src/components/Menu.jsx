import { useEffect, useState } from 'react';
import * as Menu from '@radix-ui/react-dropdown-menu';

export default ({ children, className, onOpen }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open && onOpen && onOpen();
  }, [open]);

  return (
    <Menu.Root className={className} open={open} onOpenChange={setOpen} modal={false}>
      <Menu.Trigger asChild>{children[0]()}</Menu.Trigger>
      {open && (
        <Menu.Content className='max-h-96 w-64 overflow-y-auto rounded-md border bg-white shadow' sideOffset={5}>
          {children[1]({ setOpen })}
        </Menu.Content>
      )}
    </Menu.Root>
  );
};
