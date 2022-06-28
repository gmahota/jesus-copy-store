import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useState, useRef} from "react";
import {ExclamationIcon} from "@heroicons/react/outline";

const Modal: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600">
        Open modal
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}>
          <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-900/25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className="relative inline-block w-full max-w-md p-4 overflow-hidden text-left align-middle bg-white shadow-xl dark:bg-gray-700 dark:text-white transition-all transform rounded-2xl space-y-4">
                <div className="sm:flex sm:items-start">
                  <div className="flex items-center justify-center shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon
                      className="w-6 h-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium text-gray-900 dark:text-white">
                      Modal title
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius aliquam laudantium explicabo pariatur iste
                        dolorem animi vitae error totam. At sapiente aliquam
                        accusamus facere veritatis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center mt-5 space-x-2">
                  <button
                    type="button"
                    className="px-4 py-3 text-xs font-bold text-blue-500 uppercase bg-transparent border border-blue-500 rounded-lg dark:text-white dark:hover:bg-gray-800 dark:border-white hover:text-blue-700 dark:hover:text-white hover:border-blue-700 dark:hover:border-white"
                    onClick={() => setOpen(false)}>
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="px-4 py-3 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}>
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
