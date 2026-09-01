import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { ModalItem } from '@/data/modalData';
import modalGridPattern from '@/assets/images/background/gridPatternModal.png';
import { cn } from '@/lib/utils';

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  modal: ModalItem;
}

const ContactModal = ({ isOpen, onOpenChange, modal }: ContactModalProps) => {
  const Icon = modal.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className='sm:max-w-129.5'>
        <div className='flex flex-col'>
          <div className='relative flex justify-center items-center'>
            <div
              className={cn(
                'absolute inset-0 bg-radial-[70%_85%_at_50%_0%] from-0% to-100% to-transparent',
                modal.status === 'success'
                  ? 'from-[#149BB0CC]'
                  : 'from-[#EE1D52CC]'
              )}
            />

            <div>
              <img src={modalGridPattern} alt='modal grid pattern' />
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 flex justify-center items-center p-[6.34px] rounded-full border border-white/10'>
              <div className='flex justify-center items-center p-[6.34px] rounded-full border border-white/10'>
                <div className='flex justify-center items-center rounded-full border p-4 border-white/10'>
                  <div
                    className={cn(
                      'size-[82.81px] lg:size-[104.48px] shrink-0 rounded-full flex justify-center items-center',
                      modal.status === 'success'
                        ? 'bg-primary-400'
                        : 'bg-[#EE1D52]'
                    )}
                  >
                    <Icon className='size-13 lg:size-17 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-6 lg:gap-8 px-4 pt-4 pb-6 lg:pt-8 lg:px-8 lg:pb-10'>
            <div className='flex flex-col gap-0.75 lg:gap-2 text-center'>
              <p className='font-bold text-xl lg:text-display-xs text-neutral-25'>
                {modal.title}
              </p>
              <p className='font-md text-sm lg:text-md text-neutral-400'>
                {modal.description}
              </p>
            </div>
            <Button
              type='button'
              className='rounded-full w-full'
              onClick={() => onOpenChange(false)}
            >
              {modal.buttonText}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
