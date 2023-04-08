import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    FormControl, 
    FormLabel, 
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberIncrementStepper
} from '@chakra-ui/react'

import { IoAddCircle } from 'react-icons/io5'

export function AddItemModal({ tab } : { tab: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
      alert('no way it was that easy')
    }

    return (
      <>
        <Button onClick={onOpen} colorScheme={'blue'} variant={'link'} size={'sm'} leftIcon={<IoAddCircle size={'2em'}/>} iconSpacing={0.25}>
        </Button>
                                
        <Modal onClose={onClose} isOpen={isOpen} isCentered motionPreset='slideInBottom'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader bgColor={'#BFE4FF'}>
              Add new {tab.slice(0, (tab.length - 1)).toLowerCase()}
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <form id={'addItem'} onSubmit={(event) => {
                event.preventDefault();
                alert('hmm');
              }}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input id={''} variant={'flushed'} placeholder={'E.g. pear'}/>
                  <FormLabel>Qty</FormLabel>
                  <NumberInput variant={'flushed'} min={0}>
                    <NumberInputField type={'number'} placeholder={'0'}/>
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </form>
            </ModalBody>
            <ModalFooter gap={'3'}>
              <Button onClick={onClose}>Close</Button>
              <Button type={'submit'} colorScheme={'blue'} form="addItem">Submit this broder</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }