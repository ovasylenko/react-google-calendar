import { Modal, Button } from 'antd'
import { useState } from 'react'
// @ts-expect-error ts-migrate(6142) FIXME: Module './AddEvent' was resolved to '/Users/aika/r... Remove this comment to see the full error message
import AddEvent from './AddEvent'

function AddEventModal(props: any) {
  const [title, setTitle] = useState('')

  // const getDerivedStateFromProps = (nextProps) => {
  //   if (nextProps.eventTitle) {
  //     return setTitle(nextProps.eventTitle)
  //   } else {
  //     return setTitle('')
  //   }
  // }

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value)
  }

  const handleOk = () => {
    props.onOk(title)
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Modal
      visible={props.visible}
      onOk={handleOk}
      onCancel={props.onClose}
      footer={[
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button key='back' onClick={props.onCancel}>
          {props.editMode ? 'Delete' : 'Cancel'}
        </Button>,
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button key='submit' type='primary' onClick={handleOk}>
          {props.editMode ? 'Update Event' : 'Add Event'}
        </Button>,
      ]}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <AddEvent
        title={title}
        onTitleChange={handleTitleChange}
        start={props.eventStart}
        end={props.eventEnd}
        onTimeChange={props.onTimeChange}
      />
    </Modal>
  )
}
export default AddEventModal
