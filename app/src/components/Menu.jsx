import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { useEffect, useState } from 'react';

const Menu = ({ children, className, onOpen }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open && onOpen && onOpen();
  }, [open]);

  return (
    <Dropdown.Root className={className} open={open} onOpenChange={setOpen} modal={false}>
      <Dropdown.Trigger asChild>{children[0]()}</Dropdown.Trigger>
      {open && (
        <Dropdown.Content className='rounded-md border bg-white shadow' sideOffset={5}>
          {children[1]({ setOpen })}
        </Dropdown.Content>
      )}
    </Dropdown.Root>
  );
};

export default Menu;
